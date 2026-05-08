// interpret.js
// This is the "reasoning layer" — the whole point of DevPulse.
// It turns raw metric rows into human-readable stories + actionable next steps.
// Written manually, not generated — you must be able to explain every line.

/**
 * @param {object} m       - current month metrics row
 * @param {object|null} prev - previous month metrics row (for trend)
 * @param {Array} prs      - PR rows for this dev/month
 * @param {Array} bugs     - bug rows for this dev/month
 * @returns {{ badge, badgeColor, badgeBg, summary, signals, nextSteps }}
 */
export function getInterpretation(m, prev, prs, bugs) {
  const trend = getTrend(m, prev);
  const prSignals = analyzePRs(prs);

  if (m.pattern === "Healthy flow") {
    return {
      badge: "Healthy flow",
      badgeColor: "#166534",
      badgeBg: "#dcfce7",
      summary: `Good month. You shipped ${m.mergedPRs} PRs and ${m.deployments} deployments
        with no escaped bugs. Lead time (${m.avgLeadTime} days) and cycle time (${m.avgCycleTime} days)
        are both in a reasonable range. ${trend.cycleDir === "down"
          ? `Cycle time improved by ${trend.cycleDelta} days vs last month — that's a positive sign.`
          : trend.cycleDir === "up"
          ? `Cycle time went up slightly vs last month — worth keeping an eye on.`
          : "Pace is consistent with last month."}`,
      signals: buildSignals(m, prSignals, bugs),
      nextSteps: [
        "Maintain PR size discipline — your current rhythm is working. Keep PRs under 500 lines where possible.",
        "Use this stable sprint to tackle one piece of tech debt or write tests for an area that's been skipped.",
        ...(prSignals.avgReviewWait > 20
          ? ["Review wait is a bit high — try pinging reviewers after 8 hours instead of waiting."]
          : []),
      ],
    };
  }

  if (m.pattern === "Quality watch") {
    const bugDetail = bugs.map((b) => `${b.bugId} (${b.severity}, ${b.rootCause})`).join(", ");
    return {
      badge: "Quality watch",
      badgeColor: "#92400e",
      badgeBg: "#fef3c7",
      summary: `You shipped consistently — ${m.mergedPRs} PRs, ${m.deployments} deploys.
        But ${m.escapedBugs} bug${m.escapedBugs > 1 ? "s" : ""} escaped to production this month
        (${bugDetail}). This is a quality signal, not a performance judgment.
        The root cause${bugs.length > 1 ? "s" : ""} point${bugs.length === 1 ? "s" : ""} to
        ${[...new Set(bugs.map((b) => b.rootCause))].join(" and ")}.`,
      signals: buildSignals(m, prSignals, bugs),
      nextSteps: [
        bugs.some((b) => b.rootCause === "test gap")
          ? "Add edge case tests before marking the next ticket Done — at least one test that covers the failure mode from this month's bug."
          : "Review the deployment config checklist before the next release — one step was missed this cycle.",
        prSignals.maxLines > 600
          ? `Your largest PR this month was ${prSignals.maxLines} lines. That makes thorough review difficult. Try splitting large features into 2 sub-PRs.`
          : "Keep an eye on PR scope — large diffs are harder to review carefully.",
        "Share the bug root cause briefly with your team so others don't hit the same issue.",
      ],
    };
  }

  if (m.pattern === "Needs review") {
    return {
      badge: "Needs review",
      badgeColor: "#991b1b",
      badgeBg: "#fee2e2",
      summary: `Your cycle time of ${m.avgCycleTime} days is above the healthy threshold this month.
        Work is starting but taking longer than expected to reach Done.
        Lead time (${m.avgLeadTime} days) is also elevated.
        This often means tickets are larger than expected, there's context switching mid-sprint,
        or PRs are waiting too long for review.`,
      signals: buildSignals(m, prSignals, bugs),
      nextSteps: [
        "Talk to your manager about whether any tickets this month grew in scope mid-sprint — that's the most common cause of high cycle time.",
        "Try splitting the next large story into 2 sub-tasks before picking it up, so progress is visible earlier.",
        prSignals.avgReviewWait > 18
          ? `Review wait is averaging ${prSignals.avgReviewWait.toFixed(0)} hours. Consider asking your team to set a review SLA (e.g., 8-hour first response).`
          : "If PRs are getting stuck, try smaller diffs — reviewers respond faster to shorter code.",
      ],
    };
  }

  return {
    badge: "No data",
    badgeColor: "#374151",
    badgeBg: "#f3f4f6",
    summary: "No interpretation available for this selection.",
    signals: [],
    nextSteps: [],
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTrend(m, prev) {
  if (!prev) return { cycleDir: "none", cycleDelta: 0 };
  const delta = +(m.avgCycleTime - prev.avgCycleTime).toFixed(2);
  return {
    cycleDir: delta < -0.2 ? "down" : delta > 0.2 ? "up" : "flat",
    cycleDelta: Math.abs(delta),
  };
}

function analyzePRs(prs) {
  if (!prs.length) return { avgReviewWait: 0, maxLines: 0, avgLines: 0 };
  const avgReviewWait = prs.reduce((s, p) => s + p.reviewWaitHours, 0) / prs.length;
  const maxLines = Math.max(...prs.map((p) => p.linesChanged));
  const avgLines = prs.reduce((s, p) => s + p.linesChanged, 0) / prs.length;
  return { avgReviewWait, maxLines, avgLines: Math.round(avgLines) };
}

function buildSignals(m, prSignals, bugs) {
  const signals = [];

  // Lead time signal
  if (m.avgLeadTime <= 3)       signals.push({ label: "Lead time", value: `${m.avgLeadTime}d`, status: "good",    note: "Fast path to prod" });
  else if (m.avgLeadTime <= 5)  signals.push({ label: "Lead time", value: `${m.avgLeadTime}d`, status: "warn",    note: "Slightly elevated" });
  else                           signals.push({ label: "Lead time", value: `${m.avgLeadTime}d`, status: "bad",     note: "Slow path to prod" });

  // Cycle time signal
  if (m.avgCycleTime <= 4)      signals.push({ label: "Cycle time", value: `${m.avgCycleTime}d`, status: "good",  note: "Work moves fast" });
  else if (m.avgCycleTime <= 6) signals.push({ label: "Cycle time", value: `${m.avgCycleTime}d`, status: "warn",  note: "A bit slow" });
  else                           signals.push({ label: "Cycle time", value: `${m.avgCycleTime}d`, status: "bad",   note: "Needs attention" });

  // Review wait
  if (prSignals.avgReviewWait > 0) {
    if (prSignals.avgReviewWait <= 12)       signals.push({ label: "Avg review wait", value: `${prSignals.avgReviewWait.toFixed(0)}h`, status: "good", note: "Quick feedback" });
    else if (prSignals.avgReviewWait <= 20)  signals.push({ label: "Avg review wait", value: `${prSignals.avgReviewWait.toFixed(0)}h`, status: "warn", note: "Getting slow" });
    else                                      signals.push({ label: "Avg review wait", value: `${prSignals.avgReviewWait.toFixed(0)}h`, status: "bad",  note: "Review bottleneck" });
  }

  // PR size
  if (prSignals.avgLines > 0) {
    if (prSignals.avgLines <= 350)      signals.push({ label: "Avg PR size", value: `${prSignals.avgLines} lines`, status: "good", note: "Reviewable" });
    else if (prSignals.avgLines <= 550) signals.push({ label: "Avg PR size", value: `${prSignals.avgLines} lines`, status: "warn", note: "Getting large" });
    else                                 signals.push({ label: "Avg PR size", value: `${prSignals.avgLines} lines`, status: "bad",  note: "Hard to review" });
  }

  // Bug quality
  if (m.bugRate === 0)        signals.push({ label: "Bug rate", value: "0%",  status: "good", note: "Clean release" });
  else if (m.bugRate <= 0.3)  signals.push({ label: "Bug rate", value: `${(m.bugRate * 100).toFixed(0)}%`, status: "warn", note: "Some escapes" });
  else                         signals.push({ label: "Bug rate", value: `${(m.bugRate * 100).toFixed(0)}%`, status: "bad",  note: "Quality issue" });

  return signals;
}
// MetricsGrid.jsx
import { getPrevMetrics } from "../data/mockData";

const METRIC_CONFIG = [
  {
    key:     "avgLeadTime",
    label:   "Lead Time",
    unit:    "days",
    tooltip: "Avg time from PR opened → successful prod deploy (source: Fact_CI_Deployments.lead_time_days)",
    format:  (v) => v.toFixed(1),
    thresholds: { good: 3, warn: 5 },   // ≤good = green, ≤warn = amber, else red
  },
  {
    key:     "avgCycleTime",
    label:   "Cycle Time",
    unit:    "days",
    tooltip: "Avg time from issue In Progress → Done (source: Fact_Jira_Issues.cycle_time_days)",
    format:  (v) => v.toFixed(1),
    thresholds: { good: 4, warn: 6 },
  },
  {
    key:     "mergedPRs",
    label:   "PR Throughput",
    unit:    "PRs",
    tooltip: "Count of merged PRs this month (source: Fact_Pull_Requests)",
    format:  (v) => v,
    thresholds: null,                   // no threshold — neutral display
  },
  {
    key:     "deployments",
    label:   "Deploy Freq",
    unit:    "deploys",
    tooltip: "Successful prod deployments this month (source: Fact_CI_Deployments)",
    format:  (v) => v,
    thresholds: null,
  },
  {
    key:     "bugRate",
    label:   "Bug Rate",
    unit:    "%",
    tooltip: "Escaped prod bugs / issues done × 100 (source: Fact_Bug_Reports + Fact_Jira_Issues)",
    format:  (v) => `${(v * 100).toFixed(0)}`,
    thresholds: { good: 0, warn: 0.3 }, // 0 = green, ≤0.3 = amber, else red
  },
];

function getStatus(thresholds, val) {
  if (!thresholds) return "neutral";
  if (val <= thresholds.good) return "good";
  if (val <= thresholds.warn) return "warn";
  return "bad";
}

const STATUS_STYLES = {
  good:    { dot: "#22c55e", value: "#15803d" },
  warn:    { dot: "#f59e0b", value: "#92400e" },
  bad:     { dot: "#ef4444", value: "#991b1b" },
  neutral: { dot: "#818cf8", value: "#3730a3" },
};

function TrendArrow({ curr, prev, metricKey }) {
  if (!prev) return null;
  const delta = curr[metricKey] - prev[metricKey];
  // For bug rate and times, lower is better
  const lowerIsBetter = ["avgLeadTime", "avgCycleTime", "bugRate"].includes(metricKey);
  if (Math.abs(delta) < 0.01) return <span className="trend neutral">→</span>;
  const improved = lowerIsBetter ? delta < 0 : delta > 0;
  return (
    <span className={`trend ${improved ? "good" : "bad"}`}>
      {delta > 0 ? "↑" : "↓"}
    </span>
  );
}

export default function MetricsGrid({ m, devId }) {
  const prev = getPrevMetrics(devId, m.month);

  return (
    <div className="metrics-section">
      <div className="section-label">5 Metrics — {m.month}</div>
      <div className="metrics-grid">
        {METRIC_CONFIG.map(({ key, label, unit, tooltip, format, thresholds }) => {
          const val    = m[key];
          const status = getStatus(thresholds, val);
          const styles = STATUS_STYLES[status];

          return (
            <div className="metric-card" key={key} title={tooltip}>
              <div className="metric-dot" style={{ background: styles.dot }} />
              <div className="metric-value" style={{ color: styles.value }}>
                {format(val)}
                <span className="metric-unit">{unit}</span>
              </div>
              <div className="metric-label">{label}</div>
              <TrendArrow curr={m} prev={prev} metricKey={key} />
            </div>
          );
        })}
      </div>
      <p className="metric-hint">Hover any card for data source · Arrows compare to previous month</p>
    </div>
  );
}

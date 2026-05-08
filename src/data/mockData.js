// ─── Dim_Developers ───────────────────────────────────────────────────────────
export const developers = [
  { id: "DEV-001", name: "Ava Chen",     team: "Payments API",  level: "SDE2", service: "backend",  manager: "Rina Kapoor",  managerId: "MGR-01" },
  { id: "DEV-002", name: "Noah Patel",   team: "Payments API",  level: "SDE1", service: "backend",  manager: "Rina Kapoor",  managerId: "MGR-01" },
  { id: "DEV-006", name: "Ishan Mehta",  team: "Payments API",  level: "SDE3", service: "backend",  manager: "Rina Kapoor",  managerId: "MGR-01" },
  { id: "DEV-003", name: "Mia Lopez",    team: "Checkout Web",  level: "SDE1", service: "frontend", manager: "Samir Gupta",  managerId: "MGR-02" },
  { id: "DEV-004", name: "Lucas Reed",   team: "Checkout Web",  level: "SDE2", service: "frontend", manager: "Samir Gupta",  managerId: "MGR-02" },
  { id: "DEV-008", name: "Zara Khan",    team: "Checkout Web",  level: "SDE1", service: "frontend", manager: "Samir Gupta",  managerId: "MGR-02" },
  { id: "DEV-005", name: "Emma Roy",     team: "Mobile Growth", level: "SDE1", service: "mobile",   manager: "Priya Nair",   managerId: "MGR-03" },
  { id: "DEV-007", name: "Owen Brooks",  team: "Mobile Growth", level: "SDE2", service: "mobile",   manager: "Priya Nair",   managerId: "MGR-03" },
];

// ─── Metric_Examples (pre-computed from workbook) ─────────────────────────────
export const metrics = [
  { devId: "DEV-001", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.95, avgLeadTime: 2.40,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-001", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.90, avgLeadTime: 3.35,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-002", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 5.90, avgLeadTime: 4.30,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-002", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleTime: 5.40, avgLeadTime: 3.75,  bugRate: 0.5, pattern: "Quality watch" },
  { devId: "DEV-006", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.75, avgLeadTime: 2.35,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-006", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleTime: 3.70, avgLeadTime: 2.35,  bugRate: 0.5, pattern: "Quality watch" },
  { devId: "DEV-003", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleTime: 4.05, avgLeadTime: 3.85,  bugRate: 0.5, pattern: "Quality watch" },
  { devId: "DEV-003", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.05, avgLeadTime: 3.55,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-004", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.85, avgLeadTime: 2.10,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-004", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.55, avgLeadTime: 2.90,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-008", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 3.80, avgLeadTime: 3.15,  bugRate: 0.0, pattern: "Healthy flow" },
  { devId: "DEV-008", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleTime: 3.85, avgLeadTime: 3.40,  bugRate: 0.5, pattern: "Quality watch" },
  { devId: "DEV-005", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleTime: 5.95, avgLeadTime: 4.95,  bugRate: 0.5, pattern: "Quality watch" },
  { devId: "DEV-005", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 6.50, avgLeadTime: 4.70,  bugRate: 0.0, pattern: "Needs review" },
  { devId: "DEV-007", month: "2026-03", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 1, avgCycleTime: 4.55, avgLeadTime: 4.30,  bugRate: 0.5, pattern: "Quality watch" },
  { devId: "DEV-007", month: "2026-04", issuesDone: 2, mergedPRs: 2, deployments: 2, escapedBugs: 0, avgCycleTime: 4.80, avgLeadTime: 3.65,  bugRate: 0.0, pattern: "Healthy flow" },
];

// ─── Fact_Pull_Requests (key fields only) ─────────────────────────────────────
export const pullRequests = [
  { prId: "PR-001", devId: "DEV-001", month: "2026-03", reviewWaitHours: 10.5, linesChanged: 209, reviewRounds: 3 },
  { prId: "PR-002", devId: "DEV-001", month: "2026-03", reviewWaitHours: 14.6, linesChanged: 468, reviewRounds: 2 },
  { prId: "PR-003", devId: "DEV-001", month: "2026-04", reviewWaitHours: 11.0, linesChanged: 247, reviewRounds: 2 },
  { prId: "PR-004", devId: "DEV-001", month: "2026-04", reviewWaitHours:  9.6, linesChanged: 509, reviewRounds: 2 },
  { prId: "PR-005", devId: "DEV-002", month: "2026-03", reviewWaitHours: 26.7, linesChanged: 287, reviewRounds: 2 },
  { prId: "PR-006", devId: "DEV-002", month: "2026-03", reviewWaitHours: 21.7, linesChanged: 337, reviewRounds: 2 },
  { prId: "PR-007", devId: "DEV-002", month: "2026-04", reviewWaitHours: 27.1, linesChanged: 344, reviewRounds: 1 },
  { prId: "PR-008", devId: "DEV-002", month: "2026-04", reviewWaitHours: 20.9, linesChanged: 776, reviewRounds: 2 },
  { prId: "PR-009", devId: "DEV-006", month: "2026-03", reviewWaitHours:  5.7, linesChanged: 425, reviewRounds: 3 },
  { prId: "PR-010", devId: "DEV-006", month: "2026-03", reviewWaitHours: 13.5, linesChanged: 179, reviewRounds: 1 },
  { prId: "PR-011", devId: "DEV-006", month: "2026-04", reviewWaitHours:  4.0, linesChanged: 660, reviewRounds: 3 },
  { prId: "PR-012", devId: "DEV-006", month: "2026-04", reviewWaitHours:  8.0, linesChanged: 687, reviewRounds: 1 },
  { prId: "PR-013", devId: "DEV-003", month: "2026-03", reviewWaitHours: 18.5, linesChanged: 536, reviewRounds: 1 },
  { prId: "PR-014", devId: "DEV-003", month: "2026-03", reviewWaitHours: 16.0, linesChanged: 579, reviewRounds: 1 },
  { prId: "PR-015", devId: "DEV-003", month: "2026-04", reviewWaitHours: 16.8, linesChanged: 290, reviewRounds: 2 },
  { prId: "PR-016", devId: "DEV-003", month: "2026-04", reviewWaitHours:  5.1, linesChanged: 618, reviewRounds: 1 },
  { prId: "PR-017", devId: "DEV-004", month: "2026-03", reviewWaitHours: 10.6, linesChanged: 310, reviewRounds: 1 },
  { prId: "PR-018", devId: "DEV-004", month: "2026-03", reviewWaitHours:  7.8, linesChanged: 441, reviewRounds: 1 },
  { prId: "PR-019", devId: "DEV-004", month: "2026-04", reviewWaitHours: 14.4, linesChanged: 638, reviewRounds: 2 },
  { prId: "PR-020", devId: "DEV-004", month: "2026-04", reviewWaitHours: 13.4, linesChanged: 257, reviewRounds: 2 },
  { prId: "PR-021", devId: "DEV-008", month: "2026-03", reviewWaitHours: 20.7, linesChanged: 172, reviewRounds: 1 },
  { prId: "PR-022", devId: "DEV-008", month: "2026-03", reviewWaitHours: 19.6, linesChanged: 678, reviewRounds: 1 },
  { prId: "PR-023", devId: "DEV-008", month: "2026-04", reviewWaitHours: 20.5, linesChanged: 225, reviewRounds: 2 },
  { prId: "PR-024", devId: "DEV-008", month: "2026-04", reviewWaitHours: 17.7, linesChanged: 374, reviewRounds: 2 },
  { prId: "PR-025", devId: "DEV-005", month: "2026-03", reviewWaitHours: 22.7, linesChanged: 191, reviewRounds: 2 },
  { prId: "PR-026", devId: "DEV-005", month: "2026-03", reviewWaitHours: 19.3, linesChanged: 566, reviewRounds: 3 },
  { prId: "PR-027", devId: "DEV-005", month: "2026-04", reviewWaitHours: 22.3, linesChanged: 458, reviewRounds: 3 },
  { prId: "PR-028", devId: "DEV-005", month: "2026-04", reviewWaitHours:  7.7, linesChanged: 750, reviewRounds: 3 },
  { prId: "PR-029", devId: "DEV-007", month: "2026-03", reviewWaitHours: 17.1, linesChanged: 604, reviewRounds: 1 },
  { prId: "PR-030", devId: "DEV-007", month: "2026-03", reviewWaitHours: 16.0, linesChanged: 194, reviewRounds: 2 },
  { prId: "PR-031", devId: "DEV-007", month: "2026-04", reviewWaitHours: 14.3, linesChanged: 300, reviewRounds: 3 },
  { prId: "PR-032", devId: "DEV-007", month: "2026-04", reviewWaitHours: 16.6, linesChanged: 580, reviewRounds: 2 },
];

// ─── Fact_Bug_Reports ─────────────────────────────────────────────────────────
export const bugReports = [
  { bugId: "BUG-001", devId: "DEV-002", month: "2026-04", severity: "medium", rootCause: "test gap",      linkedIssue: "JIRA-007" },
  { bugId: "BUG-002", devId: "DEV-006", month: "2026-04", severity: "low",    rootCause: "release config", linkedIssue: "JIRA-012" },
  { bugId: "BUG-003", devId: "DEV-008", month: "2026-04", severity: "high",   rootCause: "edge case",      linkedIssue: "JIRA-024" },
  { bugId: "BUG-004", devId: "DEV-003", month: "2026-03", severity: "medium", rootCause: "edge case",      linkedIssue: "JIRA-013" },
  { bugId: "BUG-005", devId: "DEV-005", month: "2026-03", severity: "medium", rootCause: "test gap",       linkedIssue: "JIRA-025" },
  { bugId: "BUG-006", devId: "DEV-007", month: "2026-03", severity: "high",   rootCause: "edge case",      linkedIssue: "JIRA-029" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const MONTHS = [
  { value: "2026-03", label: "March 2026" },
  { value: "2026-04", label: "April 2026" },
];

export function getDeveloper(devId) {
  return developers.find((d) => d.id === devId);
}

export function getMetrics(devId, month) {
  return metrics.find((m) => m.devId === devId && m.month === month) ?? null;
}

export function getPRsForDevMonth(devId, month) {
  return pullRequests.filter((p) => p.devId === devId && p.month === month);
}

export function getBugsForDevMonth(devId, month) {
  return bugReports.filter((b) => b.devId === devId && b.month === month);
}

// Compare this month vs previous month for a developer
export function getPrevMetrics(devId, month) {
  const allMonths = [...new Set(metrics.map((m) => m.month))].sort();
  const idx = allMonths.indexOf(month);
  if (idx <= 0) return null;
  return getMetrics(devId, allMonths[idx - 1]);
}
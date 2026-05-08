// PRInsightsPanel.jsx
// Shows the PR-level detail for the selected month — one row per PR.
// This demonstrates that you actually read from Fact_Pull_Requests, not just the summary sheet.

export default function PRInsightsPanel({ prs, bugs }) {
  if (!prs.length) return null;

  return (
    <div className="pr-panel">
      <div className="section-label">PR Detail — this month</div>

      <div className="pr-table-wrap">
        <table className="pr-table">
          <thead>
            <tr>
              <th>PR ID</th>
              <th>Review wait</th>
              <th>Lines changed</th>
              <th>Review rounds</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {prs.map((pr) => {
              const hasBug = bugs.some((b) => b.linkedIssue === pr.prId.replace("PR-", "JIRA-"));
              return (
                <tr key={pr.prId} className={hasBug ? "row-bug" : ""}>
                  <td className="pr-id">{pr.prId}</td>
                  <td>
                    <span className={`pr-val ${pr.reviewWaitHours > 20 ? "warn" : "ok"}`}>
                      {pr.reviewWaitHours}h
                    </span>
                  </td>
                  <td>
                    <span className={`pr-val ${pr.linesChanged > 600 ? "warn" : "ok"}`}>
                      {pr.linesChanged}
                    </span>
                  </td>
                  <td>{pr.reviewRounds}</td>
                  <td>{hasBug ? <span className="bug-tag">Bug linked</span> : <span className="ok-tag">Clean</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {bugs.length > 0 && (
        <div className="bug-summary">
          <span className="bug-icon">🐛</span>
          {bugs.map((b) => (
            <span key={b.bugId} className="bug-chip">
              {b.bugId} · {b.severity} · {b.rootCause}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

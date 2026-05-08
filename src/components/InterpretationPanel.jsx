// InterpretationPanel.jsx

const STATUS_DOT = {
  good: "#22c55e",
  warn: "#f59e0b",
  bad:  "#ef4444",
};

function SignalRow({ signal }) {
  return (
    <div className="signal-row">
      <span className="signal-dot" style={{ background: STATUS_DOT[signal.status] }} />
      <span className="signal-label">{signal.label}</span>
      <span className="signal-value">{signal.value}</span>
      <span className="signal-note">{signal.note}</span>
    </div>
  );
}

export default function InterpretationPanel({ insight }) {
  return (
    <div className="interp-panel">
      {/* Badge */}
      <div
        className="interp-badge"
        style={{ background: insight.badgeBg, color: insight.badgeColor }}
      >
        {insight.badge}
      </div>

      {/* Summary */}
      <div className="interp-section">
        <div className="interp-heading">What's happening</div>
        <p className="interp-body">{insight.summary}</p>
      </div>

      {/* Signals breakdown */}
      {insight.signals.length > 0 && (
        <div className="interp-section">
          <div className="interp-heading">Signal breakdown</div>
          <div className="signals-list">
            {insight.signals.map((s, i) => (
              <SignalRow key={i} signal={s} />
            ))}
          </div>
        </div>
      )}

      {/* Next steps */}
      {insight.nextSteps.length > 0 && (
        <div className="interp-section">
          <div className="interp-heading">Suggested next steps</div>
          <ol className="next-steps-list">
            {insight.nextSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

// DeveloperSelector.jsx
import { developers, MONTHS } from "../data/mockData";

export default function DeveloperSelector({ selectedDevId, selectedMonth, onDevChange, onMonthChange }) {
  return (
    <div className="selector-bar">
      <div className="selector-group">
        <label htmlFor="dev-select">Developer</label>
        <select
          id="dev-select"
          value={selectedDevId}
          onChange={(e) => onDevChange(e.target.value)}
        >
          {developers.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name} — {d.team}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-group">
        <label htmlFor="month-select">Month</label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => onMonthChange(e.target.value)}
        >
          {MONTHS.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

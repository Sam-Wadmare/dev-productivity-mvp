// App.jsx
import { useState } from "react";
import {
  getDeveloper,
  getMetrics,
  getPRsForDevMonth,
  getBugsForDevMonth,
} from "./data/mockData";
import { getInterpretation } from "./utils/interpret";
import { getPrevMetrics } from "./data/mockData";

import DeveloperSelector  from "./components/DeveloperSelector";
import ProfileCard        from "./components/ProfileCard";
import MetricsGrid        from "./components/MetricsGrid";
import InterpretationPanel from "./components/InterpretationPanel";
import PRInsightsPanel    from "./components/PRInsightsPanel";

import "./App.css";

export default function App() {
  // Default to Noah Patel / April 2026 — "Quality watch" — most interesting demo state
  const [selectedDevId, setSelectedDevId] = useState("DEV-002");
  const [selectedMonth, setSelectedMonth]  = useState("2026-04");

  const dev     = getDeveloper(selectedDevId);
  const m       = getMetrics(selectedDevId, selectedMonth);
  const prev    = getPrevMetrics(selectedDevId, selectedMonth);
  const prs     = getPRsForDevMonth(selectedDevId, selectedMonth);
  const bugs    = getBugsForDevMonth(selectedDevId, selectedMonth);
  const insight = m ? getInterpretation(m, prev, prs, bugs) : null;

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">DevPulse</span>
          </div>
          <p className="header-tagline">
            From raw metrics to real understanding
          </p>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="app-main">
        {/* Selector */}
        <DeveloperSelector
          selectedDevId={selectedDevId}
          selectedMonth={selectedMonth}
          onDevChange={setSelectedDevId}
          onMonthChange={setSelectedMonth}
        />

        {/* Content */}
        {dev && m && insight ? (
          <div className="content-stack">
            <ProfileCard dev={dev} />
            <MetricsGrid m={m} devId={selectedDevId} />
            <InterpretationPanel insight={insight} />
            <PRInsightsPanel prs={prs} bugs={bugs} />
          </div>
        ) : (
          <div className="empty-state">
            <p>No data found for this developer and month.</p>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="app-footer">
        <p>
          Data sourced from Fact_Jira_Issues · Fact_Pull_Requests · Fact_CI_Deployments · Fact_Bug_Reports
        </p>
        <p>Built with React + Vite · Intern Assignment MVP</p>
      </footer>
    </div>
  );
}


# DevPulse — Developer Productivity MVP

> From raw metrics to real understanding.

**Live Demo:** https://devproductivity.netlify.app

---

## What is this?

DevPulse is a developer productivity tool built as part of an intern assignment.

The problem it solves: developers already have metrics — lead time, cycle time, bug rate, deployment frequency, PR throughput. But numbers alone don't explain what's happening or what to do next.

DevPulse takes those raw metrics and gives you:
- A plain English explanation of what the numbers mean
- A health badge — Healthy flow, Quality watch, or Needs review
- 2 specific next steps based on your actual PR and bug data

---

## Live Demo

https://devproductivity.netlify.app

Select any developer and month from the dropdown to see their profile, metrics, interpretation, and next steps.

Recommended starting point: **Noah Patel — April 2026** (Quality watch state)

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | React + Vite | Fast setup, component-based, assignment requirement |
| Styling | Plain CSS | No extra dependencies, full control |
| Data | Static JS (mockData.js) | Dataset is small, keeps demo reliable, no cold starts |
| Deployment | Netlify | Free, instant deploy from GitHub |

No backend. No database. The workbook data lives in `src/data/mockData.js` as a JavaScript object — honest and fast for an MVP this size.

---

## Project Structure

```
devpulse/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                          # Root component, holds all state
    ├── App.css                          # All styles
    ├── main.jsx                         # Entry point
    ├── data/
    │   └── mockData.js                  # All 5 workbook tables as JS objects
    ├── utils/
    │   └── interpret.js                 # Core logic: pattern → story + next steps
    └── components/
        ├── DeveloperSelector.jsx        # Developer + month dropdowns
        ├── ProfileCard.jsx              # Name, level, team, manager
        ├── MetricsGrid.jsx              # 5 metric cards with color indicators
        ├── InterpretationPanel.jsx      # Badge + summary + signals + next steps
        └── PRInsightsPanel.jsx          # Raw PR table + bug detail
```

---

## The 5 Metrics

| Metric | Definition | Source Table |
|---|---|---|
| Lead Time | Avg days from PR opened to prod deploy | Fact_CI_Deployments |
| Cycle Time | Avg days from In Progress to Done | Fact_Jira_Issues |
| PR Throughput | Count of merged PRs in the month | Fact_Pull_Requests |
| Deployment Frequency | Count of successful prod deploys | Fact_CI_Deployments |
| Bug Rate | Escaped bugs / issues completed | Fact_Bug_Reports + Fact_Jira_Issues |

Thresholds used for color coding:

| Metric | Green | Amber | Red |
|---|---|---|---|
| Lead Time | ≤ 3 days | ≤ 5 days | > 5 days |
| Cycle Time | ≤ 4 days | ≤ 6 days | > 6 days |
| Bug Rate | 0% | ≤ 30% | > 30% |

---

## The Interpretation Layer

The most important file is `src/utils/interpret.js`.

It reads the `pattern_hint` field from Metric_Examples (Healthy flow / Quality watch / Needs review), combines it with PR-level signals and bug root causes, and returns:

- A human-readable summary of what likely happened this month
- A signal breakdown (lead time, cycle time, review wait, PR size, bug rate)
- 2–3 specific actionable next steps

This is written manually — not generated. The logic is simple if-else but it is the layer that makes the product useful beyond a plain dashboard.

---

## Data Source

All data comes from the assignment workbook (intern_assignment_support_pack_dev_only_v3.xlsx).

Tables used:
- Dim_Developers — 8 developers across 3 teams
- Metric_Examples — pre-computed metrics per developer per month
- Fact_Pull_Requests — PR-level detail including review wait and lines changed
- Fact_Bug_Reports — escaped production bugs with severity and root cause
- Fact_Jira_Issues — issue cycle time data
- Fact_CI_Deployments — deployment lead time data

---

## How to Run Locally

```bash
# Clone the repo
git clone <your-repo-url>
cd devpulse

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

App runs at http://localhost:5173

---

## Demo Walkthrough

1. Open https://devproductivity.netlify.app
2. Select Noah Patel + April 2026 — Quality watch state, 1 escaped bug
3. Read the interpretation panel — plain English summary + next steps
4. Check the PR detail table at the bottom — trace the bug back to the PR
5. Switch to Emma Roy + April 2026 — Needs review state, high cycle time
6. Switch to Ava Chen + March 2026 — Healthy flow, clean green state

---

## What I'd Build Next

**Release 2**
- Manager summary page — team health at a glance
- Month-over-month trend chart
- Slack alert when bug rate crosses threshold

**Release 3**
- Real GitHub OAuth integration
- Real Jira data via API
- Export monthly report as PDF for 1-1 meetings

---

## AI Usage

Used Claude to:
- Understand the assignment and summarize the workbook tables
- Generate component boilerplate and CSS scaffolding
- Debug layout issues

Wrote manually:
- interpret.js — the entire interpretation and next steps logic
- Metric thresholds and color coding decisions
- Data mapping from workbook tables to JS objects
- Component structure and state management in App.jsx

All AI-generated code was reviewed, understood, and modified before use.

---

## Assignment Info

- Role: Intern Assignment — Developer Productivity MVP
- Stack: React + Vite + Plain CSS
- Deployment: Netlify
- Miro Board: User Storymap — IC journey from metrics to action

---

Built by Sam Wadmare | Third Year CS Student

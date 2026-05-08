// ProfileCard.jsx

const SERVICE_COLORS = {
  backend:  { bg: "#dbeafe", text: "#1e40af" },
  frontend: { bg: "#fce7f3", text: "#9d174d" },
  mobile:   { bg: "#d1fae5", text: "#065f46" },
};

const LEVEL_COLORS = {
  SDE1: { bg: "#f0fdf4", text: "#15803d" },
  SDE2: { bg: "#eff6ff", text: "#1d4ed8" },
  SDE3: { bg: "#faf5ff", text: "#7e22ce" },
};

export default function ProfileCard({ dev }) {
  const initials = dev.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const svcColor  = SERVICE_COLORS[dev.service] ?? { bg: "#f3f4f6", text: "#374151" };
  const lvlColor  = LEVEL_COLORS[dev.level]     ?? { bg: "#f3f4f6", text: "#374151" };

  return (
    <div className="profile-card">
      <div className="avatar">{initials}</div>

      <div className="profile-info">
        <div className="profile-name-row">
          <h2 className="profile-name">{dev.name}</h2>
          <span className="badge" style={{ background: lvlColor.bg, color: lvlColor.text }}>
            {dev.level}
          </span>
          <span className="badge" style={{ background: svcColor.bg, color: svcColor.text }}>
            {dev.service}
          </span>
        </div>
        <p className="profile-sub">{dev.team}</p>
        <p className="profile-manager">Reports to {dev.manager}</p>
      </div>
    </div>
  );
}

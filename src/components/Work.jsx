import { COLORS, GLASS_ON_LIGHT, blobStyle } from "../theme.js";
import { PROJECTS } from "../data.js";

export default function Work() {
  return (
    <div style={{ position: "relative", background: COLORS.paper, padding: "70px 20px", overflow: "hidden" }}>
      <div style={blobStyle("5%", "-5%", 340, COLORS.blue, 0.14)} />
      <div style={blobStyle("60%", "90%", 320, COLORS.cyan, 0.14)} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 56px)", color: COLORS.ink, marginBottom: 10 }}>The Work</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#5A3A24", marginBottom: 50 }}>Selected projects, in no particular order.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href={p.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)",
                gap: 30,
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
              className="work-row"
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1, height: 220, borderRadius: 22, background: p.grad, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(2px)", background: "rgba(255,255,255,0.04)" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0, ...GLASS_ON_LIGHT, padding: "24px 26px" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: "0.12em", color: COLORS.blue, marginBottom: 8, textTransform: "uppercase" }}>{p.tag}</p>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 28, color: COLORS.ink, margin: "0 0 10px" }}>{p.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, lineHeight: 1.6, color: "#4A2E1A", margin: "0 0 14px" }}>{p.blurb}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tools.map((t) => (
                    <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, border: `1px solid ${COLORS.indigo}`, color: COLORS.indigo, padding: "3px 8px", borderRadius: 20, background: "rgba(255,255,255,0.4)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

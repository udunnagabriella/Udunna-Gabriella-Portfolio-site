import { COLORS, GLASS_ON_LIGHT, blobStyle } from "../theme.js";

export default function Contact() {
  return (
    <div style={{ position: "relative", background: COLORS.paper, padding: "70px 20px", minHeight: "60vh", overflow: "hidden" }}>
      <div style={blobStyle("20%", "20%", 360, COLORS.blue, 0.16)} />
      <div style={blobStyle("50%", "70%", 300, COLORS.cyan, 0.16)} />
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ ...GLASS_ON_LIGHT, padding: "48px 34px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.12em", color: COLORS.blue, marginBottom: 12, textTransform: "uppercase" }}>Letters to the editor</p>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 6vw, 52px)", color: COLORS.ink, marginBottom: 20 }}>Let's work together</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#5A3A24", lineHeight: 1.6, marginBottom: 34 }}>
            Open to freelance social media management, copywriting projects, and anything that needs a strong voice.
          </p>
          <a
            href="mailto:youremail@example.com"
            style={{
              display: "inline-block",
              background: COLORS.blue,
              color: COLORS.ink,
              padding: "16px 36px",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              letterSpacing: "0.06em",
              textDecoration: "none",
              textTransform: "uppercase",
              borderRadius: 12,
              boxShadow: "0 8px 24px rgba(255,122,41,0.35)",
            }}
          >
            youremail@example.com
          </a>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { COLORS, GLASS_STRONG, GLASS_ON_LIGHT, blobStyle } from "../theme.js";
import { TICKER } from "../data.js";

export default function Home({ setPage }) {
  const [tickIdx, setTickIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTickIdx((i) => (i + 1) % TICKER.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <section
        style={{
          position: "relative",
          background: `radial-gradient(circle at 80% 20%, rgba(255,183,77,0.18), transparent 45%), ${COLORS.indigo}`,
          color: COLORS.paper,
          padding: "90px 20px 70px",
          borderBottom: `1px solid rgba(255,183,77,0.35)`,
          overflow: "hidden",
        }}
      >
        {/* floating gradient blobs behind the glass — this is what sells the glassmorphism */}
        <div style={blobStyle("-15%", "5%", 380, COLORS.blue, 0.35)} />
        <div style={blobStyle("40%", "85%", 340, COLORS.cyan, 0.3)} />
        <div style={blobStyle("70%", "20%", 300, "#FF9E4A", 0.25)} />

        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 50, alignItems: "center", flexWrap: "wrap", position: "relative" }}>
          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.15em", color: COLORS.blue, marginBottom: 18 }}>
              VOL. 01 — NIGERIA
            </p>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(42px, 8vw, 92px)", lineHeight: 0.95, margin: 0, letterSpacing: "-0.02em" }}>
              STORIES
              <br />
              THAT STICK.
            </h1>
            <div style={{ marginTop: 28, height: 26, display: "flex", alignItems: "center", overflow: "visible" }}>
              <p
                key={tickIdx}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  color: COLORS.cyan,
                  letterSpacing: "0.05em",
                  animation: "fadeIn 0.4s ease",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {TICKER[tickIdx]}
              </p>
            </div>
            <p style={{ maxWidth: 480, marginTop: 30, fontSize: 17, lineHeight: 1.6, color: "#FDE6D2" }}>
              I grow brands on social media and write the words that make people
              stop scrolling. Strategy, content calendars, community management,
              and copy that actually sounds like someone wrote it.
            </p>
            <button
              onClick={() => setPage("work")}
              style={{
                marginTop: 34,
                background: COLORS.blue,
                color: COLORS.ink,
                border: "none",
                padding: "14px 28px",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                letterSpacing: "0.08em",
                cursor: "pointer",
                textTransform: "uppercase",
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(255,122,41,0.4)",
              }}
            >
              See my work →
            </button>
          </div>

          <div style={{ flex: "0 1 300px", minWidth: 220, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                ...GLASS_STRONG,
                width: "100%",
                maxWidth: 300,
                aspectRatio: "4 / 5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/photo.jpeg"
                alt="Portrait"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(160deg, rgba(255,122,41,0.12), transparent 40%)`,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: "relative", background: COLORS.paper, padding: "60px 20px", overflow: "hidden" }}>
        <div style={blobStyle("10%", "80%", 300, COLORS.blue, 0.12)} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.12em", color: COLORS.indigo, marginBottom: 20, textTransform: "uppercase" }}>
            In this issue
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { h: "Social strategy", d: "Content pillars, posting calendars, and growth plans built around a real audience." },
              { h: "Copywriting", d: "Captions, emails, and landing page copy that sounds human and gets clicked." },
              { h: "Community", d: "Comments, DMs, and engagement — turning followers into an actual audience." },
            ].map((c) => (
              <div key={c.h} style={{ ...GLASS_ON_LIGHT, padding: "20px 22px", borderTop: `3px solid ${COLORS.blue}` }}>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 20, color: COLORS.ink, margin: "0 0 8px" }}>{c.h}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#5A3A24", lineHeight: 1.5, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { COLORS, GLASS_STRONG, blobStyle } from "../theme.js";

const QA = [
  {
    q: "What's your background?",
    a: "I'm a graduate of the Federal University of Technology, Owerri (FUTO), where I studied Agricultural and Bio-Systems Engineering and graduated with a Second Class Upper.",
  },
  {
    q: "So how'd you end up in social media?",
    a: "Engineering taught me how to break problems down and solve them systematically — turns out that's exactly what building a content strategy and growing a brand's voice needs too.",
  },
  {
    q: "What do you actually do?",
    a: "I manage social media accounts end-to-end — strategy, content calendars, community engagement — and I write copy that sounds like a person, not a press release.",
  },
  {
    q: "Off duty?",
    a: "Cooking (a lot), working out, and reading manga. Usually in that order, sometimes all in the same evening.",
  },
];

export default function About() {
  return (
    <div style={{ position: "relative", background: COLORS.indigo, color: COLORS.paper, padding: "70px 20px", minHeight: "60vh", overflow: "hidden" }}>
      <div style={blobStyle("-10%", "70%", 420, COLORS.blue, 0.28)} />
      <div style={blobStyle("60%", "-10%", 380, COLORS.cyan, 0.22)} />
      <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 56px)", marginBottom: 40 }}>About</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {QA.map((item) => (
            <div
              key={item.q}
              style={{
                ...GLASS_STRONG,
                padding: "24px 28px",
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: COLORS.cyan, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Q — {item.q}</p>
              <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, color: "#FFF6EE" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

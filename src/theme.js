export const COLORS = {
  ink: "#1A0E06",        // near-black espresso brown (base bg)
  indigo: "#4A2107",     // deep burnt-orange/brown (section bg, was "indigo")
  blue: "#FF7A29",       // primary orange accent (was "blue")
  cyan: "#FFB74D",       // warm amber accent (was "cyan")
  paper: "#FFF6EE",      // warm off-white (light section bg)
  charcoal: "#24130A",   // footer bg
};

// Base glass — used for smaller elements (nav pills, tags)
export const GLASS = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(18px) saturate(180%)",
  WebkitBackdropFilter: "blur(18px) saturate(180%)",
  border: "1px solid rgba(255,183,77,0.35)",
  borderRadius: 20,
  boxShadow: "0 8px 32px rgba(255,122,41,0.18), inset 0 1px 0 rgba(255,255,255,0.15)",
};

// Strong glass — the "very glassmorphic" hero/card treatment
export const GLASS_STRONG = {
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(28px) saturate(200%)",
  WebkitBackdropFilter: "blur(28px) saturate(200%)",
  border: "1px solid rgba(255,255,255,0.28)",
  borderRadius: 26,
  boxShadow: "0 12px 45px rgba(255,122,41,0.28), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 60px rgba(255,183,77,0.06)",
};

// Glass on light backgrounds (paper sections) — needs darker tint to stay visible
export const GLASS_ON_LIGHT = {
  background: "rgba(255,255,255,0.45)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255,122,41,0.25)",
  borderRadius: 22,
  boxShadow: "0 8px 32px rgba(255,122,41,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
};

// Reusable floating gradient blobs for backgrounds — key to the glass effect
export const blobStyle = (top, left, size, color, opacity = 0.35) => ({
  position: "absolute",
  top,
  left,
  width: size,
  height: size,
  borderRadius: "50%",
  background: color,
  filter: "blur(70px)",
  opacity,
  pointerEvents: "none",
});

import { COLORS } from "../theme.js";

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.charcoal,
        color: "#C9A688",
        padding: "24px 20px",
        textAlign: "center",
        fontSize: 12,
        letterSpacing: "0.05em",
        borderTop: "1px solid rgba(255,183,77,0.2)",
      }}
    >
      © {new Date().getFullYear()} UDUNNA GABREILLA— SOCIAL MEDIA & COPYWRITING
    </footer>
  );
}

import { COLORS } from "./theme.js";

export const TICKER = [
  "SOCIAL MEDIA MANAGER",
  "COPYWRITER",
  "CONTENT STRATEGIST",
  "AGRIC & BIO-RESOURCES ENGINEER",
  "READS MANGA ON THE SIDE",
  "STILL COOKING SOMETHING UP",
];

export const PROJECTS = [
  {
    tag: "SOCIAL STRATEGY",
    driveLink: "PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE", // e.g. https://drive.google.com/file/d/XXXXXXXX/view
    title: "Brand Growth Sprint",
    blurb:
      "Full content calendar and posting cadence for a growing brand — audience research, content pillars, and a voice guide that actually sounds human.",
    tools: ["Canva", "Meta Business Suite", "Notion"],
    grad: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.indigo})`,
  },
  {
    tag: "COPYWRITING",
    driveLink: "PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE", // e.g. https://drive.google.com/file/d/XXXXXXXX/view
    title: "Launch Campaign Copy",
    blurb:
      "End-to-end copy for a product launch — captions, email sequence, and landing page lines built to move people from scroll to click.",
    tools: ["Google Docs", "Notion", "Grammarly"],
    grad: `linear-gradient(135deg, #FFD180, ${COLORS.cyan})`,
  },
  {
    tag: "COMMUNITY MANAGEMENT",
    driveLink: "PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE", // e.g. https://drive.google.com/file/d/XXXXXXXX/view
    title: "Engagement Overhaul",
    blurb:
      "Rebuilt a brand's comment and DM response strategy, turning a quiet page into an active community with a consistent tone of voice.",
    tools: ["Instagram", "Twitter/X", "Sprout Social"],
    grad: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.indigo})`,
  },
  {
    tag: "CONTENT CREATION",
    driveLink: "PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE", // e.g. https://drive.google.com/file/d/XXXXXXXX/view
    title: "Short-Form Content Batch",
    blurb:
      "Scripted and scheduled a month of short-form content — reels, carousels, and captions designed for reach and retention.",
    tools: ["CapCut", "Canva", "Meta Business Suite"],
    grad: `linear-gradient(135deg, ${COLORS.ink}, ${COLORS.blue})`,
  },
  {
    tag: "BRAND VOICE",
    driveLink: "PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE", // e.g. https://drive.google.com/file/d/XXXXXXXX/view
    title: "Tone of Voice Guide",
    blurb:
      "A documented brand voice — words to use, words to avoid, and sample captions — so copy stays consistent across every platform.",
    tools: ["Notion", "Google Docs"],
    grad: `linear-gradient(135deg, #C9601A, ${COLORS.indigo})`,
  },
  {
    tag: "CAMPAIGN DESIGN",
    driveLink: "PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE", // e.g. https://drive.google.com/file/d/XXXXXXXX/view
    title: "Seasonal Promo Push",
    blurb:
      "Copy and content plan for a seasonal promotion — countdown posts, offer copy, and a wrap-up recap that kept engagement climbing all week.",
    tools: ["Canva", "Instagram", "Notion"],
    grad: `linear-gradient(135deg, ${COLORS.blue}, #FFD180)`,
  },
];

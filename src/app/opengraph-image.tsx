import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080B10",
          backgroundImage:
            "radial-gradient(60% 50% at 20% 0%, rgba(79,184,255,0.25) 0%, rgba(79,184,255,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(156,140,255,0.22) 0%, rgba(156,140,255,0) 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#37D6A6",
            }}
          />
          <span style={{ color: "#9AA7B8", fontSize: 26, fontFamily: "monospace" }}>
            devops / cloud engineer
          </span>
        </div>
        <div style={{ display: "flex", color: "#E7ECF3", fontSize: 68, fontWeight: 700 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", color: "#4FB8FF", fontSize: 32, marginTop: 18, fontFamily: "monospace" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}

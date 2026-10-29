import { ImageResponse } from "next/og";

export const alt = "Kernia — AI operations for IT support teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101418",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#00B37E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#101418",
            }}
          >
            K
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#FFFFFF", letterSpacing: -1 }}>
            Kernia
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1 }}>
            AI operations for IT support teams
          </div>
          <div style={{ fontSize: 34, color: "#9AA4AE" }}>
            Tickets, workflows and inventory — automated and auditable.
          </div>
        </div>
        <div style={{ display: "flex", height: 8, width: 240, backgroundColor: "#00B37E", borderRadius: 8 }} />
      </div>
    ),
    { ...size }
  );
}

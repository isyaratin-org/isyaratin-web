import { ImageResponse } from "next/og";

export const alt = "ISYARATIN - Asisten Komunikasi Bahasa Isyarat AI";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #156669 0%, #0F4C4F 50%, #0A3638 100%)",
          padding: "64px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "white",
        }}
      >
        {/* Top Header Badge & Tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              fontSize: "18px",
              fontWeight: 700,
              color: "#9CE7E3",
              letterSpacing: "0.05em",
            }}
          >
            INKLUSIVITAS & AKSESIBILITAS AI
          </div>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              background: "rgba(156, 231, 227, 0.2)",
              border: "1px solid #9CE7E3",
              fontSize: "16px",
              fontWeight: 700,
              color: "white",
            }}
          >
            ANDROID APK
          </div>
        </div>

        {/* Brand & Main Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              letterSpacing: "0.05em",
              color: "#9CE7E3",
              lineHeight: 1,
            }}
          >
            ISYARATIN
          </div>
          <div
            style={{
              fontSize: "38px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.25,
            }}
          >
            Asisten Komunikasi Dua Arah Bahasa Isyarat Berbasis AI dengan Avatar 3D
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(230, 243, 243, 0.9)",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Menjembatani teman Tuli dan masyarakat lewat penerjemahan gerakan isyarat ke suara/teks serta suara ke gerakan avatar 3D secara instan.
          </div>
        </div>

        {/* Feature Pills Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", color: "#C2EFEA" }}>
              • Kamera Isyarat Real-Time
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", color: "#C2EFEA" }}>
              • Voice Note ke Avatar 3D
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", color: "#C2EFEA" }}>
              • Riwayat Percakapan
            </div>
          </div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#9CE7E3" }}>
            isyaratin.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { businessInfo } from "@/lib/business-info";

export const alt = "Reynoso Construction — Home Improvements";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safe = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const t = await getTranslations({ locale: safe, namespace: "hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #0284c7 60%, #38bdf8 100%)",
          fontFamily: "system-ui, sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 999,
              background: "#ffffff",
              color: "#0369a1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 24,
              lineHeight: 1,
              border: "4px solid #075985",
            }}
          >
            <span>HI</span>
            <span
              style={{
                marginTop: 4,
                marginBottom: 4,
                width: 50,
                height: 2,
                background: "#0369a1",
              }}
            />
            <span>RC</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>
              Reynoso Construction
            </span>
            <span style={{ fontSize: 22, opacity: 0.9 }}>
              Home Improvements LLC · Staten Island, NY
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.1 }}>
            {t("title")}
          </span>
          <span style={{ fontSize: 26, opacity: 0.92, lineHeight: 1.3 }}>
            {businessInfo.phone.display} · WhatsApp ·{" "}
            {safe === "es" ? "Estimados gratis" : "Free estimates"}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

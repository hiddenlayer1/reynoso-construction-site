import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/business-info";

export function ServiceArea() {
  const t = useTranslations("area");

  return (
    <section id="area" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("sectionTitle")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {t("sectionSubtitle")}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-brand/30 bg-brand-light/60 px-4 py-3">
              <MapPin
                className="h-5 w-5 text-brand-dark"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-brand-dark">
                {t("primary")}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {t("alsoServing")}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {businessInfo.serviceArea
                  .filter((borough) => borough !== "Staten Island")
                  .map((borough) => (
                    <li
                      key={borough}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground"
                    >
                      {borough}
                    </li>
                  ))}
              </ul>
            </div>

            <p className="mt-8 text-sm italic text-muted">{t("footnote")}</p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
            <iframe
              title="Reynoso Construction service area — Staten Island and NYC"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.2597%2C40.4773%2C-74.0522%2C40.6501&layer=mapnik&marker=40.5795%2C-74.1501"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
            />
            <p className="bg-surface px-3 py-2 text-center text-xs text-muted">
              <a
                href="https://www.openstreetmap.org/?mlat=40.5795&mlon=-74.1501#map=12/40.5795/-74.1501"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand"
              >
                View larger map
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

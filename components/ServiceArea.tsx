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

          <div className="relative">
            <NycBoroughsMap />
          </div>
        </div>
      </div>
    </section>
  );
}

function NycBoroughsMap() {
  return (
    <svg
      role="img"
      aria-label="Map of New York City boroughs with Staten Island highlighted"
      viewBox="0 0 400 320"
      className="w-full max-w-md mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="320" rx="16" fill="var(--surface)" />
      {/* Manhattan */}
      <path
        d="M180 70 L195 60 L210 70 L215 130 L200 165 L185 165 L180 130 Z"
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <text
        x="197"
        y="115"
        textAnchor="middle"
        fontSize="9"
        fill="#475569"
        fontWeight="600"
      >
        Manhattan
      </text>
      {/* Bronx */}
      <path
        d="M195 60 L255 35 L290 55 L280 90 L240 95 L210 70 Z"
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <text
        x="245"
        y="65"
        textAnchor="middle"
        fontSize="9"
        fill="#475569"
        fontWeight="600"
      >
        The Bronx
      </text>
      {/* Queens */}
      <path
        d="M215 130 L240 95 L335 90 L370 145 L320 195 L240 185 L215 165 Z"
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <text
        x="295"
        y="145"
        textAnchor="middle"
        fontSize="10"
        fill="#475569"
        fontWeight="600"
      >
        Queens
      </text>
      {/* Brooklyn */}
      <path
        d="M200 165 L240 185 L320 195 L300 250 L220 260 L180 225 Z"
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />
      <text
        x="250"
        y="225"
        textAnchor="middle"
        fontSize="10"
        fill="#475569"
        fontWeight="600"
      >
        Brooklyn
      </text>
      {/* Staten Island — highlighted */}
      <path
        d="M70 215 L155 200 L185 235 L165 285 L95 295 L55 265 Z"
        fill="var(--brand)"
        stroke="var(--brand-dark)"
        strokeWidth="2"
      />
      <text
        x="118"
        y="248"
        textAnchor="middle"
        fontSize="11"
        fill="#ffffff"
        fontWeight="700"
      >
        Staten Island
      </text>
      <circle cx="118" cy="262" r="4" fill="#ffffff" />
      <circle
        cx="118"
        cy="262"
        r="9"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}

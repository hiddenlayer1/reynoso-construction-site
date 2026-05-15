import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/business-info";
import { FacebookIcon } from "./BrandIcons";
import { ReynosoLogo } from "./ReynosoLogo";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="[&_*]:!text-white">
              <ReynosoLogo />
            </div>
            <p className="mt-4 text-sm text-slate-400">{t("tagline")}</p>
            <p className="mt-3 text-xs text-slate-500">{t("nyLicense")}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t("address")}
            </h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-slate-300">
              <span className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-none text-brand"
                  aria-hidden="true"
                />
                <span>
                  {businessInfo.address.street}
                  <br />
                  {businessInfo.address.city}, {businessInfo.address.region}{" "}
                  {businessInfo.address.postal}
                </span>
              </span>
            </address>
            <p className="mt-3 text-xs italic text-slate-500">
              {t("builtNote")}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={`tel:${businessInfo.phone.e164}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              {businessInfo.phone.display}
            </a>
            <a
              href={`mailto:${businessInfo.email}`}
              className="flex items-center gap-2 break-all text-slate-300 hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              {businessInfo.email}
            </a>
            <a
              href={businessInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <FacebookIcon className="h-4 w-4 text-brand" aria-hidden />
              {businessInfo.facebookHandle}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {year} {businessInfo.legalName}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

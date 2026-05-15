import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/business-info";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ReynosoLogo } from "./ReynosoLogo";

export function TopBar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center"
          aria-label="Reynoso Construction — home"
        >
          <ReynosoLogo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-foreground md:flex"
        >
          <a className="hover:text-brand" href="#services">
            {t("services")}
          </a>
          <a className="hover:text-brand" href="#about">
            {t("about")}
          </a>
          <a className="hover:text-brand" href="#area">
            {t("area")}
          </a>
          <a className="hover:text-brand" href="#contact">
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href={`tel:${businessInfo.phone.e164}`}
            className="hidden items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{t("callNow")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

import {
  Armchair,
  DoorOpen,
  Droplets,
  Flame,
  Hammer,
  Home,
  Layers,
  MessageCircle,
  PaintBucket,
  Paintbrush,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { businessInfo, type ServiceKey } from "@/lib/business-info";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const SERVICE_ICONS: Record<ServiceKey, LucideIcon> = {
  plumbing: Droplets,
  electrical: Zap,
  painting: Paintbrush,
  roofRepair: Home,
  floorRepair: Wrench,
  flooringInstall: Layers,
  kitchenBath: PaintBucket,
  carpetInstall: Armchair,
  wallpaperInstall: Paintbrush,
  doorInstall: DoorOpen,
  deckInstall: Hammer,
  hotWaterTank: Flame,
};

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("sectionSubtitle")}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessInfo.serviceKeys.map((key) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <li
                key={key}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark transition group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {t(`items.${key}.name`)}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(`items.${key}.description`)}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface px-6 py-8 text-center sm:flex-row sm:gap-6">
          <p className="text-base font-medium text-foreground">
            {t("ctaQuestion")}
          </p>
          <a
            href={buildWhatsAppUrl(t("ctaPrefill"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t("ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
}

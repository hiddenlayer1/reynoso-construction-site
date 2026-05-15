import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/business-info";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const t = useTranslations("hero");
  const whatsappHref = buildWhatsAppUrl(t("whatsappPrefill"));

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-blueprint pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand-light/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {t("badge")}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:brightness-95 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t("ctaWhatsApp")}
            </a>
            <a
              href={`tel:${businessInfo.phone.e164}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand bg-white px-6 py-3.5 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-light sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t("ctaCall")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

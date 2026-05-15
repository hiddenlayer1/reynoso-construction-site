import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { businessInfo } from "@/lib/business-info";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const t = useTranslations("hero");
  const whatsappHref = buildWhatsAppUrl(t("whatsappPrefill"));

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-blueprint pt-12 pb-16 sm:pt-20 sm:pb-24"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-brand-light/70 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark shadow-sm backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {t("badge")}
            </span>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              {t("title")}
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {t("subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/30 transition hover:brightness-95 hover:shadow-whatsapp/50"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {t("ctaWhatsApp")}
              </a>
              <a
                href={`tel:${businessInfo.phone.e164}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-white px-6 py-3.5 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-light"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {t("ctaCall")}
              </a>
            </div>

            {/* Trust strip */}
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6 text-left">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  {t("trust.experience.label")}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-foreground">
                  {t("trust.experience.value")}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  {t("trust.services.label")}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-foreground">
                  {t("trust.services.value")}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  {t("trust.area.label")}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-foreground">
                  {t("trust.area.value")}
                </dd>
              </div>
            </dl>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl bg-slate-200 shadow-2xl ring-1 ring-black/5">
              <Image
                src="/projects/bathroom-after-1.jpg"
                alt={t("imageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md">
                  {t("imageBadge")}
                </span>
                <p className="mt-3 text-sm font-medium leading-snug">
                  {t("imageCaption")}
                </p>
              </div>
            </div>
            <a
              href="#work"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:gap-2 hover:text-brand"
            >
              {t("seeMore")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

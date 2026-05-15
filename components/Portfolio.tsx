import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { BeforeAfter } from "./BeforeAfter";

export function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section id="work" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-dark">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("sectionSubtitle")}
          </p>
          <p className="mt-2 text-sm italic text-muted">{t("dragHint")}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <BeforeAfter
            beforeSrc="/projects/bathroom-before-2.jpg"
            afterSrc="/projects/bathroom-after-2.jpg"
            beforeAlt={t("project1.beforeAlt")}
            afterAlt={t("project1.afterAlt")}
            beforeLabel={t("beforeLabel")}
            afterLabel={t("afterLabel")}
            caption={t("project1.caption")}
            aspectRatio={3 / 4}
          />
          <BeforeAfter
            beforeSrc="/projects/bathroom-before-1.jpg"
            afterSrc="/projects/bathroom-after-1.jpg"
            beforeAlt={t("project2.beforeAlt")}
            afterAlt={t("project2.afterAlt")}
            beforeLabel={t("beforeLabel")}
            afterLabel={t("afterLabel")}
            caption={t("project2.caption")}
            aspectRatio={3 / 4}
          />
        </div>

        <p className="mt-10 text-center text-sm text-muted">{t("footnote")}</p>
      </div>
    </section>
  );
}

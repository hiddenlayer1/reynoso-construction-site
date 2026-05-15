import { Award, FileCheck, Languages, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: "licensed", icon: Award },
  { key: "local", icon: MapPin },
  { key: "free", icon: FileCheck },
  { key: "bilingual", icon: Languages },
];

export function WhyChooseUs() {
  const t = useTranslations("why");

  return (
    <section id="about" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t("sectionTitle")}
        </h2>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <dt className="mt-4 text-base font-semibold text-foreground">
                {t(`items.${key}.title`)}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {t(`items.${key}.description`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isPending, startTransition] = useTransition();

  const nextLocale: Locale = locale === "en" ? "es" : "en";

  function handleToggle() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-label={
        nextLocale === "es" ? "Cambiar a Español" : "Switch to English"
      }
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand disabled:opacity-60"
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span>{t("languageToggle")}</span>
    </button>
  );
}

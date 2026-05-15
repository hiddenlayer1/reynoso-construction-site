import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloating() {
  const t = useTranslations("whatsappFloat");

  return (
    <a
      href={buildWhatsAppUrl(t("prefill"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lg ring-4 ring-whatsapp/20 transition hover:brightness-95 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">{t("label")}</span>
    </a>
  );
}

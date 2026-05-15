"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { businessInfo, type ServiceKey } from "@/lib/business-info";
import { buildContactMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { FacebookIcon } from "./BrandIcons";

export function ContactForm() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services.items");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = buildContactMessage({
      greeting: t("form.greeting"),
      name,
      phone,
      service,
      details,
      labels: {
        name: t("form.name"),
        phone: t("form.phone"),
        service: t("form.service"),
        details: t("form.details"),
      },
    });
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-surface py-20 sm:py-24">
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

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border sm:p-8"
          >
            <Field label={t("form.name")} htmlFor="cf-name">
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("form.namePlaceholder")}
                className={inputCls}
              />
            </Field>

            <Field label={t("form.phone")} htmlFor="cf-phone">
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("form.phonePlaceholder")}
                className={inputCls}
              />
            </Field>

            <Field label={t("form.service")} htmlFor="cf-service">
              <select
                id="cf-service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={inputCls}
              >
                <option value="">{t("form.servicePlaceholder")}</option>
                {businessInfo.serviceKeys.map((key: ServiceKey) => (
                  <option key={key} value={tServices(`${key}.name`)}>
                    {tServices(`${key}.name`)}
                  </option>
                ))}
                <option value={t("form.serviceOther")}>
                  {t("form.serviceOther")}
                </option>
              </select>
            </Field>

            <Field label={t("form.details")} htmlFor="cf-details">
              <textarea
                id="cf-details"
                name="details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t("form.detailsPlaceholder")}
                className={`${inputCls} resize-y`}
              />
            </Field>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t("form.submit")}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              {t("or")}
            </p>
            <ContactLink
              href={`tel:${businessInfo.phone.e164}`}
              icon={Phone}
              label={t("labels.phone")}
              value={businessInfo.phone.display}
            />
            <ContactLink
              href={`mailto:${businessInfo.email}`}
              icon={Mail}
              label={t("labels.email")}
              value={businessInfo.email}
            />
            <ContactLink
              href={businessInfo.facebookUrl}
              icon={FacebookIcon}
              label={t("labels.facebook")}
              value={businessInfo.facebookHandle}
              external
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-base text-foreground shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 placeholder:text-slate-400";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-border transition hover:ring-brand"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </span>
    </a>
  );
}

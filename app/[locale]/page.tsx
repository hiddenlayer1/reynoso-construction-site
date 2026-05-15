import { setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { TopBar } from "@/components/TopBar";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}

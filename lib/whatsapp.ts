import { businessInfo } from "./business-info";

export function buildWhatsAppUrl(prefilledText?: string): string {
  const base = `https://wa.me/${businessInfo.phone.digits}`;
  if (!prefilledText) return base;
  return `${base}?text=${encodeURIComponent(prefilledText)}`;
}

export function buildContactMessage(args: {
  greeting: string;
  name: string;
  phone: string;
  service: string;
  details: string;
  labels: {
    name: string;
    phone: string;
    service: string;
    details: string;
  };
}): string {
  const lines: string[] = [args.greeting];
  if (args.name) lines.push(`${args.labels.name}: ${args.name}`);
  if (args.phone) lines.push(`${args.labels.phone}: ${args.phone}`);
  if (args.service) lines.push(`${args.labels.service}: ${args.service}`);
  if (args.details) lines.push(`${args.labels.details}: ${args.details}`);
  return lines.join("\n");
}

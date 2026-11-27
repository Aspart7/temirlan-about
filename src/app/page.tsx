import { PortfolioClient } from "@/components/PortfolioClient";
import type { Locale } from "@/data/profile";

function resolveLocale(raw?: string | string[]): Locale {
  const val = Array.isArray(raw) ? raw[0] : raw;
  if (val === "en" || val === "kk" || val === "zh" || val === "ru") {
    return val;
  }
  return "ru";
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] }>;
}) {
  const resolved = await searchParams;
  const initialLocale = resolveLocale(resolved.lang);
  return <PortfolioClient initialLocale={initialLocale} />;
}

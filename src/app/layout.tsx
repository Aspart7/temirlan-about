import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Temirlan Rakhym — AI Product & Security Engineer",
  description:
    "Interactive multilingual portfolio of Temirlan Rakhym: live FunnelLens conversion auditor case study, verified security/AI projects, and goals for SkyWhisper & MonoLotus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans antialiased selection:bg-[#2f45ff]/15 selection:text-[#111214]">
        {children}
      </body>
    </html>
  );
}

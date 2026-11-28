"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Command,
  Copy,
  Crosshair,
  Github,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { LOCALES, PROFILE_CONTENT, type Locale } from "@/data/profile";
import { CommandPalette } from "@/components/CommandPalette";
import { FunnelLensMiniDemo } from "@/components/FunnelLensMiniDemo";

interface PortfolioClientProps {
  initialLocale: Locale;
}

export function PortfolioClient({ initialLocale }: PortfolioClientProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const content = PROFILE_CONTENT[locale];

  const handleSelectLocale = useCallback((next: Locale) => {
    setLocale(next);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  }, []);

  const copyEmail = useCallback(() => {
    void navigator.clipboard?.writeText("tamerlanrakhim135@gmail.com");
    showToast(content.hero.copiedEmail);
  }, [content.hero.copiedEmail, showToast]);

  const copyTelegram = useCallback(() => {
    void navigator.clipboard?.writeText("@yobxes");
    showToast(content.hero.copiedTelegram);
  }, [content.hero.copiedTelegram, showToast]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#111214]">
      {/* Sticky Editorial Header */}
      <header className="sticky top-0 z-40 border-b border-[#e3e1da] bg-[#f6f5f1]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 font-mono text-sm font-semibold tracking-tight text-[#111214]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#111214] text-xs font-bold text-white">
              TR
            </span>
            <span className="hidden xs:inline sm:inline">temirlan.dev</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#4f545e] md:flex">
            <a href="#funnellens-case" className="transition hover:text-[#111214]">
              FunnelLens
            </a>
            <a href="#projects" className="transition hover:text-[#111214]">
              {content.nav.projects}
            </a>
            <a href="#education" className="transition hover:text-[#111214]">
              {content.nav.education}
            </a>
            <a href="#learning" className="transition hover:text-[#111214]">
              {content.nav.learning}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-xl border border-[#dcdad2] bg-white p-0.5"
              role="group"
              aria-label="Language switcher"
            >
              {LOCALES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelectLocale(item.code)}
                  aria-pressed={locale === item.code}
                  className={`min-h-[36px] min-w-[36px] rounded-lg px-2 py-1 font-mono text-xs font-semibold transition ${
                    locale === item.code
                      ? "bg-[#111214] text-white"
                      : "text-[#575b64] hover:text-[#111214]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-[#dcdad2] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#111214] shadow-sm transition hover:border-[#b7b4aa]"
            >
              <Command className="h-3.5 w-3.5 text-[#575b64]" />
              <span className="hidden sm:inline">{content.nav.cmdHint}</span>
              <kbd className="hidden rounded bg-[#f1efe9] px-1.5 py-0.5 font-mono text-[10px] text-[#575b64] sm:inline">
                Ctrl+K
              </kbd>
            </button>
          </div>
        </div>

        {/* Compact Mobile Anchor Strip (no overflow) */}
        <nav
          aria-label="Mobile sections"
          className="flex items-center gap-2 overflow-x-auto border-t border-[#e8e6df] px-4 py-2 text-xs font-semibold text-[#4f545e] md:hidden"
        >
          <a href="#funnellens-case" className="shrink-0 rounded-lg bg-white px-3 py-1.5 text-[#2f45ff] shadow-sm">
            FunnelLens
          </a>
          <a href="#projects" className="shrink-0 rounded-lg px-3 py-1.5 hover:bg-white">
            {content.nav.projects}
          </a>
          <a href="#education" className="shrink-0 rounded-lg px-3 py-1.5 hover:bg-white">
            {content.nav.education}
          </a>
          <a href="#learning" className="shrink-0 rounded-lg px-3 py-1.5 hover:bg-white">
            {content.nav.learning}
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl space-y-12 px-4 py-7 sm:space-y-16 sm:px-6 sm:py-12">
        {/* Asymmetric Hero (Designed so Main Project teaser is immediately visible on laptop/desktop) */}
        <section className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-between rounded-3xl border border-[#e3e1da] bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#dcdad2] bg-[#f8f7f4] px-3 py-1 font-mono text-[11px] font-semibold text-[#4f545e]">
                    <Sparkles className="h-3.5 w-3.5 text-[#2f45ff]" />
                    <span>{content.hero.badge}</span>
                  </div>
                  <h1 className="font-display text-3xl font-bold tracking-tight text-[#111214] sm:text-5xl">
                    {content.hero.name}
                  </h1>
                </div>

                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#dcdad2] bg-[#f1efe9] shadow-sm sm:h-24 sm:w-24">
                  <Image
                    src="/avatar.jpg"
                    alt="Temirlan Rakhym"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <p className="font-display text-lg font-semibold leading-snug text-[#111214] sm:text-2xl">
                {content.hero.roleStatement}
              </p>

              <p className="text-sm leading-relaxed text-[#4f545e] sm:text-base">
                {content.hero.subheadline}
              </p>
            </div>

            <div className="mt-6 space-y-4 border-t border-[#eceae4] pt-5">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#funnellens-case"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#2f45ff] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#2336db] sm:text-sm"
                >
                  <span>{content.hero.ctaProjects}</span>
                  <ArrowDown className="h-4 w-4" />
                </a>

                <a
                  href="https://t.me/yobxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#dcdad2] bg-[#f8f7f4] px-3.5 py-2.5 text-xs font-semibold text-[#111214] transition hover:bg-[#efede7] sm:text-sm"
                >
                  <Send className="h-4 w-4 text-[#2f45ff]" />
                  <span>{content.hero.ctaTelegram}</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#dcdad2] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#111214] transition hover:bg-[#f8f7f4] sm:text-sm"
                >
                  <Mail className="h-4 w-4 text-[#575b64]" />
                  <span>{content.hero.ctaCopyEmail}</span>
                  <Copy className="h-3.5 w-3.5 text-[#7c818c]" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#575b64]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{content.hero.location}</span>
                </span>
                <a
                  href="https://github.com/Aspart7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono font-semibold text-[#111214] hover:text-[#2f45ff]"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>{content.hero.ctaGithub}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Teaser Card: Fragment of FunnelLens Visible Immediately on Laptop */}
          <a
            href="#funnellens-case"
            className="group flex flex-col justify-between rounded-3xl border border-[#e3e1da] bg-[#111214] p-5 text-white shadow-sm transition hover:border-[#2f45ff] sm:p-6 lg:col-span-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#93a4ff]">
                  <Crosshair className="h-3.5 w-3.5" />
                  <span>{content.hero.previewLabel}</span>
                </span>
                <span className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-white">
                  {content.hero.previewScore}
                </span>
              </div>

              <h2 className="font-display text-lg font-bold tracking-tight text-white">
                {content.hero.previewTitle}
              </h2>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-white">
                <Image
                  src="/demos/ledgerlane.svg"
                  alt="FunnelLens interactive pin preview"
                  width={640}
                  height={400}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  priority
                />
                {/* Highlight pin #3 on Hero Teaser */}
                <span
                  style={{ left: "39.5%", top: "45.5%" }}
                  className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2f45ff] font-mono text-xs font-bold text-white ring-4 ring-white shadow-lg"
                >
                  3
                </span>
              </div>

              <p className="text-xs text-zinc-300">{content.hero.previewSampleNote}</p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-[#93a4ff]">
              <span>{content.hero.previewAction}</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </div>
          </a>
        </section>

        {/* Centerpiece Flagship Interactive Case Study */}
        <FunnelLensMiniDemo flagship={content.flagship} />

        {/* Secondary Projects with Task / Contribution / Outcome */}
        <section id="projects" className="space-y-6">
          <div>
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-[#111214] sm:text-3xl">
              <Layers className="h-6 w-6 text-[#2f45ff]" />
              <span>{content.otherProjects.title}</span>
            </h2>
            <p className="mt-1 text-sm text-[#575b64]">
              {content.otherProjects.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {content.otherProjects.items.map((proj) => (
              <article
                key={proj.id}
                className="flex flex-col justify-between rounded-2xl border border-[#e3e1da] bg-white p-6 shadow-sm transition hover:border-[#b7b4aa]"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg bg-[#f6f5f1] px-2.5 py-1 font-mono text-xs font-semibold text-[#111214]">
                      {proj.tag}
                    </span>
                    <span className="font-mono text-xs text-[#575b64]">
                      {proj.period}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#111214]">
                    {proj.title}
                  </h3>

                  <dl className="space-y-2.5 text-xs leading-relaxed sm:text-sm">
                    <div>
                      <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#575b64]">
                        {content.otherProjects.taskLabel}
                      </dt>
                      <dd className="text-[#3a3e46]">{proj.task}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#575b64]">
                        {content.otherProjects.contributionLabel}
                      </dt>
                      <dd className="text-[#111214]">{proj.contribution}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2f45ff]">
                        {content.otherProjects.resultLabel}
                      </dt>
                      <dd className="font-medium text-[#111214]">{proj.result}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#eceae4] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#e3e1da] bg-[#f8f7f4] px-2 py-0.5 font-mono text-[11px] text-[#3a3e46]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[36px] items-center gap-1 font-mono text-xs font-semibold text-[#2f45ff] hover:underline"
                    >
                      <span>{content.otherProjects.openRepo}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About & Languages */}
        <section id="about" className="grid gap-6 md:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-[#e3e1da] bg-white p-6 md:col-span-2">
            <h2 className="font-display text-xl font-bold tracking-tight text-[#111214]">
              {content.about.title}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-[#3a3e46] sm:text-base">
              {content.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="pt-1">
              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#575b64]">
                {content.about.beyondCodeTitle}
              </p>
              <ul className="flex flex-wrap gap-2">
                {content.about.beyondCode.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[#e3e1da] bg-[#f8f7f4] px-3 py-1.5 text-xs font-medium text-[#111214]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e3e1da] bg-white p-6">
            <h3 className="mb-4 font-display text-lg font-bold text-[#111214]">
              {content.about.languagesTitle}
            </h3>
            <ul className="space-y-3">
              {content.about.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between border-b border-[#eceae4] pb-2.5 last:border-b-0 last:pb-0"
                >
                  <span className="text-sm font-semibold text-[#111214]">
                    {lang.name}
                  </span>
                  <span className="rounded-md bg-[#f6f5f1] px-2.5 py-0.5 font-mono text-xs text-[#4f545e]">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education & Verified Certificates */}
        <section id="education" className="space-y-6">
          <div>
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-[#111214]">
              <GraduationCap className="h-6 w-6 text-[#2f45ff]" />
              <span>{content.educationSection.title}</span>
            </h2>
            <p className="mt-1 text-sm text-[#575b64]">
              {content.educationSection.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {content.educationSection.items.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col justify-between rounded-2xl border border-[#e3e1da] bg-white p-5"
              >
                <div className="space-y-2">
                  <span className="inline-block rounded-md bg-[#f6f5f1] px-2.5 py-0.5 font-mono text-xs text-[#4f545e]">
                    {edu.period}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#111214]">
                    {edu.school}
                  </h3>
                  <p className="text-sm font-semibold text-[#2f45ff]">
                    {edu.degree}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#575b64]">
                  {edu.note}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#e3e1da] bg-white p-6">
            <h3 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-[#111214]">
              <Award className="h-4 w-4 text-[#2f45ff]" />
              <span>{content.educationSection.certsTitle}</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.educationSection.certs.map((cert) => (
                <a
                  key={cert.url}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-[#e3e1da] bg-[#f8f7f4] p-3.5 transition hover:border-[#2f45ff] hover:bg-white"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#111214] group-hover:text-[#2f45ff]">
                      {cert.title}
                    </p>
                    <p className="text-xs text-[#575b64]">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs font-semibold text-[#2f45ff]">
                    {content.educationSection.verifyLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Goals & Contact */}
        <section
          id="learning"
          className="rounded-3xl border border-[#e3e1da] bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#111214]">
              {content.learningSection.title}
            </h2>
            <p className="text-sm text-[#575b64]">
              {content.learningSection.subtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col justify-between space-y-5 rounded-2xl border border-[#2f45ff]/20 bg-[#f7f8ff] p-5">
              <div className="space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2f45ff]">
                  {content.learningSection.whyTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[#2d3138]">
                  {content.learningSection.whyText}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#575b64]">
                  {content.learningSection.interestsTitle}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {content.learningSection.interests.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[#2f45ff]/20 bg-white px-2.5 py-1 text-xs font-medium text-[#111214]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#575b64]">
                {content.learningSection.goalsTitle}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.learningSection.goals.map((goal, idx) => (
                  <div
                    key={goal.title}
                    className={`rounded-xl border border-[#e3e1da] bg-[#f8f7f4] p-4 ${
                      idx === content.learningSection.goals.length - 1
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <p className="text-sm font-bold text-[#111214]">
                      {goal.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#4f545e]">
                      {goal.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Contact Strip */}
          <div
            id="contact"
            className="mt-6 flex flex-col justify-between gap-4 rounded-2xl bg-[#111214] p-5 text-white sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-display text-base font-bold">
                {content.learningSection.contactBannerTitle}
              </p>
              <p className="mt-0.5 text-xs text-zinc-300">
                {content.learningSection.contactBannerSub}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://t.me/yobxes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#2f45ff] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2336db]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{content.hero.ctaTelegram}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>tamerlanrakhim135@gmail.com</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e3e1da] bg-white py-6 text-center font-mono text-xs text-[#575b64]">
        {content.footer}
      </footer>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        content={content}
        locale={locale}
        onSelectLocale={handleSelectLocale}
        onCopyEmail={copyEmail}
        onCopyTelegram={copyTelegram}
      />

      {toast && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 rounded-xl bg-[#111214] px-4 py-2.5 text-xs font-medium text-white shadow-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}

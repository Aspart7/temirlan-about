"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Check,
  Command,
  Copy,
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
    window.setTimeout(() => setToast(null), 2200);
  }, []);

  const copyEmail = useCallback(() => {
    void navigator.clipboard.writeText("tamerlanrakhim135@gmail.com");
    showToast(content.hero.copiedEmail);
  }, [content.hero.copiedEmail, showToast]);

  const copyTelegram = useCallback(() => {
    void navigator.clipboard.writeText("@yobxes");
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
    <div className="min-h-screen bg-[#fafafa] text-zinc-950">
      {/* Top sticky bar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-zinc-900"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-xs font-bold text-white">
              TR
            </span>
            <span>temirlan.dev</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
            <a href="#about" className="transition hover:text-zinc-950">
              {content.nav.about}
            </a>
            <a href="#projects" className="transition hover:text-zinc-950">
              {content.nav.projects}
            </a>
            <a href="#education" className="transition hover:text-zinc-950">
              {content.nav.education}
            </a>
            <a href="#learning" className="transition hover:text-zinc-950">
              {content.nav.learning}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-0.5"
              role="group"
              aria-label="Language switcher"
            >
              {LOCALES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelectLocale(item.code)}
                  className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                    locale === item.code
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              <Command className="h-3.5 w-3.5 text-zinc-500" />
              <span className="hidden sm:inline">{content.nav.cmdHint}</span>
              <kbd className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] text-zinc-500">
                Ctrl+K
              </kbd>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl space-y-16 px-5 py-10 sm:py-14">
        {/* Hero */}
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{content.hero.badge}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  {content.hero.name}
                </h1>
                <p className="text-lg font-medium leading-snug text-zinc-800 sm:text-xl">
                  {content.hero.headline}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {content.hero.subheadline}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>{content.hero.location}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://github.com/Aspart7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  <Github className="h-4 w-4" />
                  <span>{content.hero.ctaGithub}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                </a>

                <a
                  href="https://t.me/yobxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-medium text-indigo-800 transition hover:bg-indigo-100"
                >
                  <Send className="h-4 w-4" />
                  <span>{content.hero.ctaTelegram}</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <Mail className="h-4 w-4 text-zinc-500" />
                  <span>{content.hero.ctaCopyEmail}</span>
                  <Copy className="h-3.5 w-3.5 text-zinc-400" />
                </button>
              </div>
            </div>

            <div className="shrink-0 self-start md:self-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-md sm:h-40 sm:w-40">
                <Image
                  src="/avatar.jpg"
                  alt="Temirlan Rakhym"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About & Languages */}
        <section id="about" className="grid gap-6 md:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-2">
            <h2 className="text-xl font-bold tracking-tight text-zinc-950">
              {content.about.title}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
              {content.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {content.about.beyondCodeTitle}
              </h3>
              <ul className="space-y-1.5 text-sm text-zinc-700">
                {content.about.beyondCode.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="mb-4 text-base font-bold text-zinc-950">
              {content.about.languagesTitle}
            </h3>
            <ul className="space-y-3">
              {content.about.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between border-b border-zinc-100 pb-2.5 last:border-b-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-zinc-900">
                    {lang.name}
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-950">
                <Layers className="h-5 w-5 text-indigo-600" />
                <span>{content.projectsSection.title}</span>
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                {content.projectsSection.subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {content.projectsSection.items.map((project) => (
              <article
                key={project.id}
                className={`flex flex-col justify-between rounded-2xl border p-6 transition ${
                  project.featured
                    ? "border-indigo-300 bg-gradient-to-br from-indigo-50/60 via-white to-white shadow-sm md:col-span-2"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-xs font-medium text-zinc-700">
                        {project.tag}
                      </span>
                      {project.featured && (
                        <span className="rounded-md bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white">
                          {content.projectsSection.featuredBadge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-zinc-500">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    {project.summary}
                  </p>

                  <ul className="space-y-1.5 text-sm text-zinc-600">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 hover:text-indigo-900"
                    >
                      <span>{content.projectsSection.viewRepo}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Certificates */}
        <section id="education" className="space-y-6">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-950">
              <GraduationCap className="h-5 w-5 text-indigo-600" />
              <span>{content.educationSection.title}</span>
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              {content.educationSection.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {content.educationSection.items.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <div className="space-y-2">
                  <span className="inline-block rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">
                    {edu.period}
                  </span>
                  <h3 className="text-base font-bold text-zinc-950">
                    {edu.school}
                  </h3>
                  <p className="text-sm font-medium text-indigo-700">
                    {edu.degree}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                  {edu.note}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-zinc-950">
              <Award className="h-4 w-4 text-indigo-600" />
              <span>{content.educationSection.certsTitle}</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.educationSection.certs.map((cert) => (
                <a
                  key={cert.url}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-zinc-200 p-3.5 transition hover:border-indigo-300 hover:bg-indigo-50/40"
                >
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 group-hover:text-indigo-800">
                      {cert.title}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-indigo-600">
                    {content.educationSection.verifyLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Goals & What I Want to Learn */}
        <section
          id="learning"
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950">
              {content.learningSection.title}
            </h2>
            <p className="text-sm text-zinc-600">
              {content.learningSection.subtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="space-y-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-900">
                {content.learningSection.whyTitle}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-700">
                {content.learningSection.whyText}
              </p>

              <div className="pt-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {content.learningSection.interestsTitle}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {content.learningSection.interests.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-indigo-200 bg-white px-2.5 py-1 text-xs font-medium text-indigo-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                {content.learningSection.goalsTitle}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.learningSection.goals.map((goal, idx) => (
                  <div
                    key={goal.title}
                    className={`rounded-xl border border-zinc-200 p-4 ${
                      idx === content.learningSection.goals.length - 1
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <p className="text-sm font-bold text-zinc-900">
                      {goal.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {goal.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-500">
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
        <div className="fixed bottom-5 right-5 z-50 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}

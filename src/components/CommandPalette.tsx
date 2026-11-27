"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, ArrowRight, Globe, Copy, ExternalLink, X } from "lucide-react";
import { LOCALES, type Locale, type LocaleContent } from "@/data/profile";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  content: LocaleContent;
  locale: Locale;
  onSelectLocale: (next: Locale) => void;
  onCopyEmail: () => void;
  onCopyTelegram: () => void;
}

interface CommandAction {
  id: string;
  group: string;
  label: string;
  kind: "section" | "locale" | "action";
  run: () => void;
}

export function CommandPalette({
  open,
  onClose,
  content,
  locale,
  onSelectLocale,
  onCopyEmail,
  onCopyTelegram,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const actions = useMemo<CommandAction[]>(() => {
    const jump = (hash: string) => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      onClose();
    };

    const sectionItems: CommandAction[] = [
      {
        id: "sec-about",
        group: content.palette.sectionsGroup,
        label: `${content.palette.jumpPrefix} ${content.nav.about}`,
        kind: "section",
        run: () => jump("about"),
      },
      {
        id: "sec-projects",
        group: content.palette.sectionsGroup,
        label: `${content.palette.jumpPrefix} ${content.nav.projects}`,
        kind: "section",
        run: () => jump("projects"),
      },
      {
        id: "sec-education",
        group: content.palette.sectionsGroup,
        label: `${content.palette.jumpPrefix} ${content.nav.education}`,
        kind: "section",
        run: () => jump("education"),
      },
      {
        id: "sec-learning",
        group: content.palette.sectionsGroup,
        label: `${content.palette.jumpPrefix} ${content.nav.learning}`,
        kind: "section",
        run: () => jump("learning"),
      },
    ];

    const localeItems: CommandAction[] = LOCALES.map((item) => ({
      id: `lang-${item.code}`,
      group: content.palette.languagesGroup,
      label: `${content.palette.switchPrefix} ${item.native} (${item.label})${item.code === locale ? " ✓" : ""}`,
      kind: "locale",
      run: () => {
        onSelectLocale(item.code);
        onClose();
      },
    }));

    const quickActions: CommandAction[] = [
      {
        id: "act-email",
        group: content.palette.actionsGroup,
        label: content.palette.copyEmail,
        kind: "action",
        run: () => {
          onCopyEmail();
          onClose();
        },
      },
      {
        id: "act-tg",
        group: content.palette.actionsGroup,
        label: content.palette.copyTelegram,
        kind: "action",
        run: () => {
          onCopyTelegram();
          onClose();
        },
      },
      {
        id: "act-gh",
        group: content.palette.actionsGroup,
        label: content.palette.openGithub,
        kind: "action",
        run: () => {
          window.open("https://github.com/Aspart7", "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ];

    return [...sectionItems, ...localeItems, ...quickActions];
  }, [content, locale, onClose, onCopyEmail, onCopyTelegram, onSelectLocale]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.group.toLowerCase().includes(q)
    );
  }, [actions, query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-zinc-950/40 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={content.palette.placeholder}
            className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
            aria-label="Close command palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-zinc-500">
              {content.palette.empty}
            </p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.run}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-zinc-800 transition hover:bg-indigo-50 hover:text-indigo-900"
              >
                <span className="flex items-center gap-2.5">
                  {item.kind === "locale" ? (
                    <Globe className="h-4 w-4 text-indigo-500" />
                  ) : item.id === "act-gh" ? (
                    <ExternalLink className="h-4 w-4 text-zinc-400" />
                  ) : item.kind === "action" ? (
                    <Copy className="h-4 w-4 text-zinc-400" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-zinc-400" />
                  )}
                  <span>{item.label}</span>
                </span>
                <span className="text-[11px] font-medium text-zinc-400">
                  {item.group}
                </span>
              </button>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50 px-4 py-2 text-[11px] text-zinc-500">
          <span>Temirlan Rakhym</span>
          <span className="font-mono">{content.palette.closeHint}</span>
        </div>
      </div>
    </div>
  );
}

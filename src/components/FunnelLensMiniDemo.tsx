"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, CheckCircle2, Code2, Crosshair, ExternalLink, Layers } from "lucide-react";
import {
  LIVE_FUNNELLENS_URL,
  LIVE_LEDGERLANE_REPORT_URL,
  type LocaleContent,
} from "@/data/profile";

interface FunnelLensMiniDemoProps {
  flagship: LocaleContent["flagship"];
}

export function FunnelLensMiniDemo({ flagship }: FunnelLensMiniDemoProps) {
  const [activeTab, setActiveTab] = useState<"demo" | "arch">("demo");
  // Default to pin #3 ("Continue" button clarity issue) for an instant concrete takeaway
  const [selectedNumber, setSelectedNumber] = useState<number>(3);
  const [expandedDecision, setExpandedDecision] = useState<string>(
    flagship.decisions[0]?.id ?? "dom-pins"
  );
  const pinRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const activePin =
    flagship.pins.find((p) => p.number === selectedNumber) ?? flagship.pins[0];

  const selectPin = (pinNumber: number, focusPin = false) => {
    setSelectedNumber(pinNumber);
    if (focusPin) {
      pinRefs.current[pinNumber]?.focus();
    }
  };

  const handlePinKeyDown = (e: KeyboardEvent<HTMLButtonElement>, moveFocus: boolean) => {
    if (flagship.pins.length === 0) return;
    const currentIdx = flagship.pins.findIndex((p) => p.number === selectedNumber);
    const baseIdx = currentIdx >= 0 ? currentIdx : 0;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = flagship.pins[(baseIdx + 1) % flagship.pins.length];
      if (next) selectPin(next.number, moveFocus);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev =
        flagship.pins[(baseIdx - 1 + flagship.pins.length) % flagship.pins.length];
      if (prev) selectPin(prev.number, moveFocus);
    }
  };

  return (
    <section
      id="funnellens-case"
      className="rounded-3xl border border-[#e3e1da] bg-white p-5 shadow-sm sm:p-8 lg:p-10"
    >
      {/* Top Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#eceae4] pb-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl space-y-2.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2f45ff]/25 bg-[#2f45ff]/5 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#2f45ff]">
            <Crosshair className="h-3.5 w-3.5" />
            <span>{flagship.eyebrow}</span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#111214] sm:text-3xl">
            {flagship.title}
          </h2>
          <p className="text-sm leading-relaxed text-[#4f545e] sm:text-base">
            {flagship.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={LIVE_LEDGERLANE_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#2f45ff] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#2336db]"
          >
            <span>{flagship.openFullReport}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={LIVE_FUNNELLENS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#dcdad2] bg-[#f8f7f4] px-4 py-2.5 text-xs font-semibold text-[#111214] transition hover:bg-[#efede7]"
          >
            <span>{flagship.openLiveApp}</span>
            <ExternalLink className="h-3.5 w-3.5 text-[#575b64]" />
          </a>
          <a
            href="https://github.com/Aspart7/funnellens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#dcdad2] bg-white px-4 py-2.5 text-xs font-semibold text-[#111214] transition hover:bg-[#f8f7f4]"
          >
            <Code2 className="h-3.5 w-3.5 text-[#575b64]" />
            <span>{flagship.viewGithub}</span>
          </a>
        </div>
      </div>

      {/* Mode Switch Tabs */}
      <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div
          className="inline-flex rounded-xl border border-[#e3e1da] bg-[#f6f5f1] p-1"
          role="tablist"
          aria-label="FunnelLens case study view"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "demo"}
            onClick={() => setActiveTab("demo")}
            className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
              activeTab === "demo"
                ? "bg-white text-[#111214] shadow-sm"
                : "text-[#575b64] hover:text-[#111214]"
            }`}
          >
            <Crosshair className="h-3.5 w-3.5 text-[#2f45ff]" />
            <span>{flagship.tabDemo}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "arch"}
            onClick={() => setActiveTab("arch")}
            className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
              activeTab === "arch"
                ? "bg-white text-[#111214] shadow-sm"
                : "text-[#575b64] hover:text-[#111214]"
            }`}
          >
            <Layers className="h-3.5 w-3.5 text-[#2f45ff]" />
            <span>{flagship.tabArchitecture}</span>
          </button>
        </div>

        <p className="text-xs font-medium text-[#575b64]">
          {flagship.demoNote}
        </p>
      </div>

      {/* Tab Content */}
      {activeTab === "demo" ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Interactive Screenshot Canvas */}
          <div className="space-y-3 lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#dcdad2] bg-[#f6f5f1]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/demos/ledgerlane.svg"
                  alt="LedgerLane sample landing page capture with FunnelLens audit pins"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover"
                />

                {/* Active Element Highlight Box */}
                {activePin && (
                  <div
                    style={{
                      left: `${activePin.xPct}%`,
                      top: `${activePin.yPct}%`,
                      width: `${activePin.wPct}%`,
                      height: `${activePin.hPct}%`,
                    }}
                    className="pointer-events-none absolute rounded-lg border-2 border-dashed border-[#2f45ff] bg-[#2f45ff]/10 transition-all duration-200"
                  />
                )}

                {/* Clickable / Keyboard-accessible Pins */}
                {flagship.pins.map((pin) => {
                  const isActive = activePin?.number === pin.number;
                  // Position Pin #1 on the right half of the competing CTAs box so #1 and #2 stay well separated even on 390px viewports
                  const pinLeft =
                    pin.number === 1
                      ? Math.min(94, pin.xPct + pin.wPct * 0.62)
                      : Math.min(94, Math.max(4, pin.xPct + Math.min(pin.wPct * 0.25, 6)));
                  const pinTop =
                    pin.number === 1
                      ? Math.min(92, pin.yPct + 3)
                      : Math.min(92, Math.max(6, pin.yPct));

                  return (
                    <button
                      key={pin.number}
                      ref={(el) => {
                        pinRefs.current[pin.number] = el;
                      }}
                      type="button"
                      onClick={() => selectPin(pin.number)}
                      onKeyDown={(e) => handlePinKeyDown(e, true)}
                      aria-pressed={isActive}
                      aria-label={`Pin ${pin.number}: ${pin.title}`}
                      style={{ left: `${pinLeft}%`, top: `${pinTop}%` }}
                      className={`absolute z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-mono text-[11px] font-bold shadow-md transition-transform duration-150 sm:h-8 sm:w-8 sm:text-xs ${
                        isActive
                          ? "pin-active-ring scale-110 bg-[#2f45ff] text-white ring-4 ring-white"
                          : "bg-[#111214] text-white ring-2 ring-white/90 hover:scale-110 hover:bg-[#2f45ff]"
                      }`}
                    >
                      {pin.number}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Keyboard friendly Pin Selector Pills */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Select issue pin">
                {flagship.pins.map((pin) => {
                  const isActive = activePin?.number === pin.number;
                  return (
                    <button
                      key={`pill-${pin.number}`}
                      type="button"
                      onClick={() => selectPin(pin.number)}
                      onKeyDown={(e) => handlePinKeyDown(e, false)}
                      aria-pressed={isActive}
                      className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                        isActive
                          ? "border-[#2f45ff] bg-[#2f45ff] text-white shadow-sm"
                          : "border-[#dcdad2] bg-[#f8f7f4] text-[#111214] hover:border-[#b7b4aa]"
                      }`}
                    >
                      <span className="font-mono">#{pin.number}</span>
                      <span className="font-mono text-[11px] opacity-85">{pin.ruleId}</span>
                    </button>
                  );
                })}
              </div>
              <span className="font-mono text-[11px] text-[#575b64]">
                {flagship.pinsInstruction}
              </span>
            </div>
          </div>

          {/* Right Issue Inspector Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#dcdad2] bg-[#f8f7f4] p-5 sm:p-6 lg:col-span-5">
            {activePin && (
              <div key={activePin.number} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2f45ff] font-mono text-xs font-bold text-white">
                      {activePin.number}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#111214]">
                      {activePin.ruleId}
                    </span>
                  </div>
                  <span className="rounded-lg border border-amber-300 bg-amber-100 px-2.5 py-1 font-mono text-xs font-bold text-amber-900">
                    -{activePin.penalty} {flagship.penaltyLabel}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold leading-snug text-[#111214]">
                  {activePin.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="rounded-xl border border-[#e3e1da] bg-white p-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#575b64]">
                      {flagship.originalLabel}
                    </p>
                    <p className="mt-1 font-mono text-xs font-semibold text-[#111214]">
                      {activePin.originalText}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e3e1da] bg-white p-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#575b64]">
                      {flagship.reasonLabel}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#3a3e46] sm:text-sm">
                      {activePin.reason}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#2f45ff]/25 bg-[#2f45ff]/5 p-3.5">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2f45ff]">
                      {flagship.replacementLabel}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-[#111214] sm:text-sm">
                      {activePin.replacement}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 flex items-center justify-between border-t border-[#e3e1da] pt-4 text-xs">
              <span className="font-mono text-[#575b64]">LedgerLane · 68/100</span>
              <a
                href={LIVE_LEDGERLANE_REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#2f45ff] hover:underline"
              >
                <span>{flagship.openFullReport}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div id="decisions" className="mt-6 space-y-4">
          <h3 className="font-display text-lg font-bold text-[#111214]">
            {flagship.decisionsTitle}
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {flagship.decisions.map((decision) => {
              const isOpen = expandedDecision === decision.id;
              return (
                <button
                  key={decision.id}
                  type="button"
                  onClick={() => setExpandedDecision(decision.id)}
                  aria-expanded={isOpen}
                  className={`flex flex-col justify-between rounded-2xl border p-5 text-left transition ${
                    isOpen
                      ? "border-[#2f45ff] bg-[#f8f9ff] shadow-sm"
                      : "border-[#e3e1da] bg-[#f8f7f4] hover:border-[#b7b4aa]"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-medium text-[#2f45ff]">
                        {decision.fileHint}
                      </span>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2f45ff]" />
                    </div>
                    <h4 className="font-display text-base font-bold text-[#111214]">
                      {decision.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#3a3e46]">
                      {decision.summary}
                    </p>
                  </div>
                  <p className="mt-3 border-t border-[#e3e1da] pt-3 text-xs leading-relaxed text-[#575b64]">
                    {decision.detail}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHead, Shell } from "./shell";

const steps = [
  {
    title: "Create your first workflow",
    body:
      "Create workflows, connect integrations and automate your IT operations from day one.",
    visual: (
      <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
        <span className="border border-line bg-white px-2 py-1">trigger</span>
        <span aria-hidden>→</span>
        <span className="border border-line bg-white px-2 py-1">classify</span>
        <span aria-hidden>→</span>
        <span className="border border-signal/40 bg-signal-soft px-2 py-1 text-signal-deep">
          resolve
        </span>
      </div>
    ),
  },
  {
    title: "Start from a template",
    body:
      "Test your automation workflows with pre-built templates and little to no code.",
    visual: (
      <div className="border border-line bg-white">
        <div className="flex items-center justify-between border-b border-line px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
          <span>template</span>
          <span className="text-signal-deep">ready</span>
        </div>
        <div className="flex items-center justify-between gap-3 px-3 py-2.5">
          <span className="text-[12.5px] text-ink">Password reset request</span>
          <span className="font-mono text-[9.5px] text-ink-mute">3 steps</span>
        </div>
      </div>
    ),
  },
  {
    title: "Watch usage as it scales",
    body:
      "Monitor your cloud token usage with real-time analytics and insights.",
    visual: (
      <div className="flex items-end justify-between gap-4 border border-line bg-white px-3 py-2.5">
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
            tokens / day
          </p>
          <p className="mt-0.5 font-mono text-base font-semibold tabular-nums text-ink">
            184,320
          </p>
        </div>
        <svg viewBox="0 0 120 32" className="h-8 w-28" aria-hidden>
          <polyline
            points="0,28 15,24 30,26 45,18 60,20 75,12 90,14 105,6 120,8"
            fill="none"
            stroke="#00b37e"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    ),
  },
];

export function Startup() {
  return (
    <section className="border-b border-line bg-white py-20 md:py-28">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHead
              index="06"
              eyebrow="Built for growth"
              title="Take your startup further, faster"
              body="Start with one workflow and a two-person team. The same primitives scale to a distributed service desk without a re-platform."
            />
            <Link
              href="#"
              className="mt-7 inline-flex items-center gap-2 border border-ink px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Browse templates
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ol className="lg:col-span-8">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-4 border-t border-line py-7 sm:grid-cols-[64px_1fr] sm:gap-8"
              >
                <span className="font-mono text-[11px] tracking-[0.12em] text-ink-mute">
                  {String(index + 1).padStart(2, "0")} /
                </span>
                <div>
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[13.5px] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                  <div className="mt-4 max-w-md">{step.visual}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    </section>
  );
}

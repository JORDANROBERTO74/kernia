"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Shell } from "./shell";

export function CTA() {
  return (
    <section id="pricing" className="border-b border-line bg-white py-16 md:py-20">
      <Shell>
        <div className="grid border border-ink lg:grid-cols-12">
          <div className="border-b border-line p-7 md:p-10 lg:col-span-6 lg:border-b-0 lg:border-r">
            <p className="eyebrow">[09] Get started</p>
            <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-ink-soft">
              Connect your helpdesk, route tickets with AI and keep every
              automation auditable. Start free or plan a rollout with us.
            </p>
            <form
              className="mt-7 flex max-w-sm flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="cta-email">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                placeholder="you@company.com"
                className="h-10 flex-1 border border-line bg-white px-3 font-mono text-[12px] text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-2 bg-ink px-4 text-[12px] font-semibold text-white transition-colors hover:bg-signal-deep"
              >
                Start now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="grid divide-y divide-line lg:col-span-6">
            {[
              ["Predictable pricing", "Per-agent plans with no per-ticket surcharges.", "Pricing details"],
              ["Start your integration", "Get up and running with the developer docs.", "API reference"],
              ["Talk to sales", "Scope a rollout for a distributed service desk.", "Contact sales"],
            ].map(([title, detail, action]) => (
              <Link
                key={title}
                href="#"
                className="group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-paper md:px-8"
              >
                <span>
                  <span className="block text-[13.5px] font-semibold text-ink">
                    {title}
                  </span>
                  <span className="mt-1 block text-[12px] text-ink-soft">
                    {detail}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-signal-deep">
                  {action}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}

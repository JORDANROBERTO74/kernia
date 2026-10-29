"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Shell } from "./shell";

const queue = [
  { id: "INC-4821", subject: "VPN drops after password rotation", team: "Networking", status: "Automated", age: "42s" },
  { id: "INC-4820", subject: "Laptop enrolment stuck on policy sync", team: "Endpoints", status: "In progress", age: "6m" },
  { id: "REQ-1187", subject: "Provision access for new hire", team: "Identity", status: "Resolved", age: "11m" },
  { id: "INC-4818", subject: "ERP export times out at month end", team: "Applications", status: "Triaged", age: "18m" },
];

const statusTone: Record<string, string> = {
  Automated: "border-signal/40 bg-signal-soft text-signal-deep",
  Resolved: "border-line bg-paper text-ink-soft",
  "In progress": "border-ink/20 bg-white text-ink",
  Triaged: "border-alert/30 bg-alert/5 text-alert",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white pt-[68px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] grid-paper fade-mask opacity-80"
      />

      <Shell className="relative pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>IT operations platform — v2.4</Eyebrow>

            <h1 className="mt-6 max-w-[15ch] text-[clamp(2.6rem,5.4vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-ink">
              Intelligent automation for IT operations
            </h1>

            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
              Kernia routes, resolves and audits support work end to end. Connect
              your helpdesk and monitoring stack, then let every repeated task run
              with a traceable owner.
            </p>

            <form
              className="mt-8 flex max-w-[440px] flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="hero-email">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="you@company.com"
                className="h-11 flex-1 border border-line bg-white px-3.5 font-mono text-[13px] text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[3px] bg-ink px-5 text-[13px] font-semibold text-white transition-colors hover:bg-signal-deep"
              >
                Start now
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute">
              <div className="flex gap-2">
                <dt>Uptime</dt>
                <dd className="text-ink">99.999%</dd>
              </div>
              <div className="flex gap-2">
                <dt>SOC</dt>
                <dd className="text-ink">2 Type II</dd>
              </div>
              <div className="flex gap-2">
                <dt>SSO</dt>
                <dd className="text-ink">SCIM ready</dd>
              </div>
            </dl>
          </div>

          <aside className="lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
            <p className="eyebrow border-b border-line pb-3">
              Operations snapshot
            </p>
            <dl className="divide-y divide-line">
              {[
                ["Tickets processed today", "1,247", "+32.8%"],
                ["Automated without an agent", "892", "71.5%"],
                ["Median first response", "2.4h", "from 8.2h"],
                ["Active automations", "47", "12 paused"],
              ].map(([label, value, delta]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">
                    {label}
                  </dt>
                  <dd className="flex items-baseline gap-3">
                    <span className="font-mono text-lg font-semibold tabular-nums text-ink">
                      {value}
                    </span>
                    <span className="font-mono text-[10px] text-signal-deep">
                      {delta}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
              Updated 14:02 UTC
            </p>
          </aside>
        </div>

        <div className="mt-14 border border-line bg-white shadow-panel md:mt-20">
          <div className="flex items-center justify-between border-b border-line bg-paper px-4 py-2.5">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              <span aria-hidden className="h-1.5 w-1.5 animate-blink bg-signal" />
              Support queue · live
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute sm:block">
              4 open · SLA 4h
            </span>
          </div>

          <div className="hidden grid-cols-[100px_1fr_120px_120px_60px] gap-4 border-b border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute md:grid">
            <span>ID</span>
            <span>Subject</span>
            <span>Team</span>
            <span>Status</span>
            <span className="text-right">Age</span>
          </div>

          <ul className="divide-y divide-line">
            {queue.map((item) => (
              <li
                key={item.id}
                className="grid gap-1 px-4 py-3.5 transition-colors hover:bg-paper md:grid-cols-[100px_1fr_120px_120px_60px] md:items-center md:gap-4"
              >
                <span className="font-mono text-[11px] text-ink-mute">{item.id}</span>
                <span className="text-[13.5px] text-ink">{item.subject}</span>
                <span className="font-mono text-[11px] text-ink-soft">{item.team}</span>
                <span>
                  <span
                    className={`inline-flex items-center border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${statusTone[item.status]}`}
                  >
                    {item.status}
                  </span>
                </span>
                <span className="font-mono text-[11px] tabular-nums text-ink-mute md:text-right">
                  {item.age}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  );
}

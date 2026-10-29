"use client";

import React from "react";
import { SectionHead, Shell } from "./shell";

const stats = [
  ["500M+", "API requests per day, peaking at 13,000 requests a second."],
  ["99.999%", "Historical uptime across Kernia services."],
  ["10M+", "Tickets processed monthly for Kernia customers."],
  ["200+", "Integrations and data sources via Airbyte and MCP."],
];

const regions = [
  ["AMS", "52.37N 4.89E"],
  ["LHR", "51.50N 0.12W"],
  ["SIN", "1.35N 103.81E"],
];

export function GlobalScale() {
  return (
    <section className="border-b border-line bg-white py-20 md:py-28">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHead
              index="03"
              eyebrow="Global scale"
              title="The backbone for IT operations automation."
              body="Kernia processes millions of tickets and automation events a year for teams of every size, from a single site to distributed operations across regions."
            />
          </div>

          <div className="relative min-h-[220px] border border-line dot-field lg:col-span-7">
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
                <span>edge / regions</span>
                <span className="text-signal-deep">operational</span>
              </div>
              <ul className="flex flex-wrap gap-x-10 gap-y-3">
                {regions.map(([code, coords]) => (
                  <li key={code} className="font-mono text-[11px] text-ink">
                    <span className="mr-2 inline-block h-1.5 w-1.5 align-middle bg-signal" />
                    {code}
                    <span className="ml-2 text-[9.5px] text-ink-mute">{coords}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, description], index) => (
            <div
              key={value}
              className={`border-b border-line py-7 sm:pr-8 lg:border-b-0 ${index > 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dt className="font-mono text-[clamp(1.75rem,2.6vw,2.5rem)] font-semibold tracking-[-0.03em] text-ink">
                {value}
              </dt>
              <dd className="mt-3 max-w-[26ch] text-[13px] leading-relaxed text-ink-soft">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}

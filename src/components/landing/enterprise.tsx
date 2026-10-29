"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, Shell } from "./shell";

const cases = [
  {
    company: "Northwind",
    headline: "Automates first-line support across 14 distribution sites.",
    stats: [
      ["480K+", "tickets processed monthly"],
      ["62%", "automation rate on routine work"],
    ],
  },
  {
    company: "Solaris Health",
    headline: "Cut manual ticket handling by 58% in one quarter.",
    stats: [
      ["40+", "systems integrated via Airbyte"],
      ["58%", "less manual handling"],
    ],
  },
  {
    company: "Alder Financial",
    headline: "Runs round-the-clock support with a leaner on-call rota.",
    stats: [
      ["12", "regions with automated ops"],
      ["1.8M+", "tickets processed annually"],
    ],
  },
  {
    company: "Vantage Retail",
    headline: "Resolved support tickets 43% faster with Kernia.",
    stats: [
      ["43%", "faster resolution"],
      ["37%", "lower average response time"],
    ],
  },
];

const paths = [
  ["Professional services team", "Rollout, migration and enablement."],
  ["Certified partners", "Implementation through vetted agencies."],
  ["Kernia App Marketplace", "Prebuilt apps for your stack."],
];

export function Enterprise() {
  return (
    <section id="solutions" className="border-b border-line bg-white py-20 md:py-28">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHead
              index="05"
              eyebrow="Enterprise reinvention"
              title="Bring agility to your enterprise"
              body="Deploy Kernia with the controls your organisation already runs on: SSO, SCIM, audit logs and regional data residency."
            />

            <ul className="mt-8 border-t border-line">
              {paths.map(([title, detail]) => (
                <li key={title} className="border-b border-line">
                  <Link
                    href="#"
                    className="group flex items-start justify-between gap-4 py-3.5"
                  >
                    <span>
                      <span className="block text-[13px] font-semibold text-ink">
                        {title}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-ink-soft">
                        {detail}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ink-mute">
              Deploy path: SSO → audit log → integrations → policy
            </p>
          </div>

          <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
            {cases.map((item, index) => (
              <article key={item.company} className="bg-white p-6 md:p-7">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
                  <span>{item.company}</span>
                  <span>Case {String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 max-w-[24ch] text-[17px] font-bold leading-snug tracking-[-0.01em] text-ink">
                  {item.headline}
                </h3>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-4">
                  {item.stats.map(([value, label]) => (
                    <div key={label}>
                      <dt className="font-mono text-[15px] font-semibold text-ink">
                        {value}
                      </dt>
                      <dd className="mt-1 text-[11px] leading-snug text-ink-soft">
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-signal-deep transition-colors hover:text-ink"
                >
                  Read story
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}

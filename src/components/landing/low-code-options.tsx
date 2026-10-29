"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, Shell } from "./shell";

const options = [
  {
    title: "Use a pre-integrated platform",
    description:
      "Browse the directory for out-of-the-box connections to your helpdesk, monitoring stack and identity provider.",
    tags: ["Zendesk", "Datadog", "Okta", "ServiceNow"],
  },
  {
    title: "Work with a partner",
    description:
      "Work with a Kernia consulting partner that can integrate and deploy the platform for you, with a fixed scope.",
    tags: ["Implementation", "Migration", "Enablement"],
  },
  {
    title: "Custom branding",
    description:
      "Customise how your brand appears across the Kernia products your customers use, down to the portal domain.",
    tags: ["Domain", "Palette", "Email"],
  },
];

export function LowCodeOptions() {
  return (
    <section className="border-b border-line bg-paper py-20 md:py-28">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHead
              index="08"
              eyebrow="Integrations"
              title="Extend Kernia without writing code"
              body="Connect the systems you already run, or hand the wiring to a partner. Every integration shares the same audit trail, so nothing leaves the platform untracked."
            />
          </div>

          <ol className="lg:col-span-8">
            {options.map((option, index) => (
              <li key={option.title} className="border-t border-line">
                <div className="grid gap-4 py-6 md:grid-cols-[48px_1fr_220px] md:gap-6">
                  <span className="font-mono text-[11px] text-ink-mute">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold text-ink">
                      {option.title}
                    </h3>
                    <p className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-ink-soft">
                      {option.description}
                    </p>
                    <Link
                      href="#"
                      className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-signal-deep transition-colors hover:text-ink"
                    >
                      Learn more
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <ul className="flex flex-wrap content-start gap-1.5 md:justify-end">
                    {option.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line bg-white px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    </section>
  );
}

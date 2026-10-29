"use client";

import React from "react";
import { Shell } from "./shell";

const clients = [
  "AcmeCorp",
  "BoltShift",
  "Forest",
  "WaveTech",
  "Nexus",
  "CloudSync",
  "SpaceTech",
  "Premium",
];

export function Companies() {
  return (
    <section className="border-b border-line bg-paper/60">
      <Shell>
        <div className="grid md:grid-cols-[190px_1fr] md:items-stretch">
          <p className="eyebrow py-5 md:flex md:items-center md:py-0">
            Trusted by IT teams at
          </p>
          <div className="grid grid-cols-2 gap-px border-line bg-line sm:grid-cols-4 lg:grid-cols-8 md:border-l">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-white px-3 py-4 text-center text-[13px] font-semibold tracking-tight text-ink-soft transition-colors hover:text-ink"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}

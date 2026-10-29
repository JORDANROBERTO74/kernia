"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, Shell } from "./shell";

const useCases = [
  {
    title: "Support teams",
    description:
      "Automate routing, classification and resolution, then keep response times and CSAT on the same dashboard.",
  },
  {
    title: "IT operations",
    description:
      "Streamline server, database and infrastructure work. Routine maintenance runs on a schedule with a recorded result.",
  },
  {
    title: "DevOps",
    description:
      "Connect CI/CD pipelines, deployments and infrastructure changes so incidents start with the last known change.",
  },
  {
    title: "Data teams",
    description:
      "Automate pipelines, ETL and synchronisation across Airbyte and MCP sources without losing lineage.",
  },
  {
    title: "Security teams",
    description:
      "Turn incident response, threat detection and compliance checks into repeatable, auditable playbooks.",
  },
  {
    title: "Enterprise",
    description:
      "Dedicated support, custom integrations, advanced analytics and SOC 2 controls for regulated environments.",
  },
];

export function Security() {
  return (
    <section className="border-b border-line bg-paper py-20 md:py-28">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHead
              index="04"
              eyebrow="Use cases"
              title="Use cases for IT operations"
              body="From support teams to IT departments, successful organisations automate operations and scale without adding headcount."
            />
          </div>

          <ol className="lg:col-span-8">
            <li className="hidden grid-cols-[48px_1fr_160px_32px] gap-6 border-b border-line pb-2 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-mute md:grid">
              <span>No.</span>
              <span>Team</span>
              <span>Focus</span>
              <span />
            </li>
            {useCases.map((item, index) => (
              <li key={item.title} className="border-b border-line">
                <Link
                  href="#platform"
                  className="group grid gap-2 py-5 md:grid-cols-[48px_1fr_160px_32px] md:items-baseline md:gap-6"
                >
                  <span className="font-mono text-[11px] text-ink-mute">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block max-w-[58ch] text-[13px] leading-relaxed text-ink-soft">
                      {item.description}
                    </span>
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute md:block">
                    Playbook
                  </span>
                  <ArrowUpRight className="hidden h-4 w-4 text-ink-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    </section>
  );
}

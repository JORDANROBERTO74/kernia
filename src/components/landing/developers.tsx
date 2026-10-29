"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Shell } from "./shell";

const links = [
  {
    title: "Use Kernia with your stack",
    detail: "Client and server libraries from React and Node.js to Python and Go.",
  },
  {
    title: "Build AI agents",
    detail: "Agents that read tickets, run workflows and hand work back to a human.",
  },
  {
    title: "Explore prebuilt integrations",
    detail: "Airbyte, MCP servers and direct API connections to existing tools.",
  },
  {
    title: "Build on Kernia Apps",
    detail: "Package custom automations for your team or the community.",
  },
];

const services = [
  ["REST API", "operational"],
  ["Webhooks", "operational"],
  ["MCP gateway", "operational"],
];

export function Developers() {
  return (
    <section
      id="developers"
      className="border-b border-line bg-ink py-20 text-white md:py-28"
    >
      <Shell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
              <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
              <span>[07]</span>
              Designed for developers
            </p>
            <h2 className="mt-5 max-w-[16ch] text-[clamp(1.85rem,3.4vw,2.8rem)] font-bold leading-[1.04] tracking-[-0.035em]">
              Powerful APIs for automation and integration.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[14.5px] leading-relaxed text-white/60">
              We agonise over the right abstractions so your team does not stitch
              together disparate systems or spend months building workflows from
              scratch.
            </p>

            <dl className="mt-8 border-t border-white/15">
              {services.map(([name, state]) => (
                <div
                  key={name}
                  className="flex items-center justify-between border-b border-white/10 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em]"
                >
                  <dt className="text-white/60">{name}</dt>
                  <dd className="flex items-center gap-2 text-white/80">
                    <span aria-hidden className="h-1 w-1 bg-signal" />
                    {state}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="#"
              className="mt-7 inline-flex items-center gap-2 border border-white/25 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-white transition-colors hover:border-signal hover:text-signal"
            >
              Read the docs
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-white/15 bg-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <div className="flex gap-1 font-mono text-[10px] uppercase tracking-[0.1em]">
                  <span className="bg-white/10 px-2 py-1 text-white">
                    workflows.ts
                  </span>
                  <span className="px-2 py-1 text-white/40">tickets.ts</span>
                  <span className="px-2 py-1 text-white/40">assets.ts</span>
                </div>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/35">
                  node 20
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[11.5px] leading-[1.9] text-white/70 sm:text-[12.5px]">
                <code>
                  <span className="text-white/35">{"// create and inspect a workflow"}</span>
                  {"\n"}
                  <span className="text-white/50">import</span> {"{ Kernia } "}
                  <span className="text-white/50">from</span>{" "}
                  <span className="text-signal">&apos;kernia&apos;</span>;
                  {"\n\n"}
                  <span className="text-white/50">const</span> kernia ={" "}
                  <span className="text-white/50">new</span> Kernia(
                  <span className="text-signal">&apos;sk_live_...&apos;</span>);
                  {"\n\n"}
                  <span className="text-white/50">const</span> workflow ={" "}
                  <span className="text-white/50">await</span> kernia.workflows.
                  <span className="text-white">create</span>({"{"}
                  {"\n  "}name:{" "}
                  <span className="text-signal">&apos;Auto ticket routing&apos;</span>,
                  {"\n  "}trigger: {"{"} event:{" "}
                  <span className="text-signal">&apos;ticket.created&apos;</span> {"}"},
                  {"\n  "}steps: [
                  {"\n    "}
                  {"{ action: "}
                  <span className="text-signal">&apos;classify&apos;</span>
                  {", model: "}
                  <span className="text-signal">&apos;gpt-4o&apos;</span>
                  {" }"},
                  {"\n    "}
                  {"{ action: "}
                  <span className="text-signal">&apos;route&apos;</span>
                  {", team: "}
                  <span className="text-signal">&apos;network&apos;</span>
                  {" },"}
                  {"\n  "}],
                  {"\n"}{"}"});
                  {"\n\n"}
                  <span className="text-white/35">{"// p95 1.2s · 0 failed runs"}</span>
                </code>
              </pre>
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/35">
                <span>POST /v1/workflows</span>
                <span className="text-signal">200 ok</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => (
            <li
              key={link.title}
              className={`border-b border-white/10 py-6 sm:pr-6 ${index > 0 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <Link href="#" className="group block">
                <h3 className="text-[14px] font-semibold text-white">
                  {link.title}
                </h3>
                <p className="mt-2 max-w-[30ch] text-[12.5px] leading-relaxed text-white/50">
                  {link.detail}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-signal">
                  Docs
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}

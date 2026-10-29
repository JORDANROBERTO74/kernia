"use client";

import React from "react";
import Link from "next/link";
import { Shell } from "./shell";

const columns = [
  {
    title: "Platform",
    links: [
      "Automation Gallery",
      "Dashboard Analytics",
      "Ticket Queue",
      "Inventory Management",
      "Workflow Builder",
    ],
  },
  {
    title: "Developers",
    links: [
      "Documentation",
      "API Reference",
      "API Status",
      "API Changelog",
      "Create a Workflow",
    ],
  },
  {
    title: "Company",
    links: ["Customers", "Contact Sales", "Security", "Privacy & Terms"],
  },
];

export function Footer() {
  return (
    <footer id="resources" className="bg-ink text-white">
      <Shell>
        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-0.5 font-mono text-lg font-bold tracking-[-0.04em]">
              kernia
              <span aria-hidden className="block h-[6px] w-[6px] bg-signal" />
            </div>
            <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-white/50">
              AI operations for IT support teams. Tickets, workflows, analytics
              and inventory on one auditable platform.
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
              <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
              All systems operational
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className="md:col-span-2">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[12.5px] text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
              Status
            </h2>
            <dl className="mt-4 space-y-2.5 font-mono text-[10.5px] text-white/60">
              <div className="flex justify-between gap-2">
                <dt>API</dt>
                <dd className="text-signal">99.99%</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Webhooks</dt>
                <dd className="text-signal">99.98%</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>MCP</dt>
                <dd className="text-signal">99.97%</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kernia Labs</p>
          <p>SOC 2 Type II · GDPR · EU data residency</p>
        </div>
      </Shell>
    </footer>
  );
}

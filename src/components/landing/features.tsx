"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, Shell } from "./shell";

function FlowDiagram() {
  const nodes = [
    { x: 18, y: 98, w: 108, label: "trigger", meta: "ticket.created" },
    { x: 170, y: 98, w: 108, label: "classify", meta: "model: gpt-4o" },
    { x: 330, y: 34, w: 128, label: "route", meta: "team: networking" },
    { x: 330, y: 162, w: 128, label: "escalate", meta: "on-call: rota-a" },
  ];

  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line bg-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
        <span>workflow / auto-triage</span>
        <span className="text-signal-deep">active</span>
      </div>
      <svg
        viewBox="0 0 480 250"
        role="img"
        aria-label="Workflow diagram: ticket.created triggers classification, then routes or escalates"
        className="h-auto w-full"
      >
        <g fill="none" stroke="#c9d3d0" strokeWidth="1">
          <path d="M126 118h44" />
          <path d="M278 105v-30h52" />
          <path d="M278 131v31h52" />
        </g>
        <circle cx="166" cy="118" r="2.5" fill="#00b37e" />
        <circle cx="300" cy="75" r="2.5" fill="#00b37e" />
        {nodes.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height="40"
              fill="#ffffff"
              stroke="#101317"
              strokeOpacity="0.35"
            />
            <text
              x={node.x + 10}
              y={node.y + 17}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="#101317"
            >
              {node.label}
            </text>
            <text
              x={node.x + 10}
              y={node.y + 30}
              fontFamily="var(--font-mono)"
              fontSize="8.5"
              fill="#77837f"
            >
              {node.meta}
            </text>
          </g>
        ))}
        <text
          x="18"
          y="212"
          fontFamily="var(--font-mono)"
          fontSize="8.5"
          fill="#77837f"
        >
          p95 1.2s · 0 failed runs in 24h
        </text>
        <line x1="18" y1="196" x2="462" y2="196" stroke="#dde4e2" />
      </svg>
    </div>
  );
}

function MetricsPanel() {
  const bars = [38, 62, 47, 74, 58, 88, 71, 92, 64, 84, 76, 96];
  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
          dashboard / weekly
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-signal-deep">
          +18.4%
        </span>
      </div>
      <div className="grid gap-0 sm:grid-cols-[1fr_180px]">
        <div className="border-b border-line p-4 sm:border-b-0 sm:border-r">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
            Tickets automated
          </p>
          <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink">
            8,942
          </p>
          <div className="mt-5 flex h-24 items-end gap-1.5">
            {bars.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 ${index === bars.length - 1 ? "bg-signal" : "bg-ink/15"}`}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">
            <span>w1</span>
            <span>w12</span>
          </div>
        </div>
        <dl className="divide-y divide-line">
          {[
            ["First response", "2.4h", "-71%"],
            ["Reopen rate", "3.1%", "-0.8"],
            ["CSAT", "4.7/5", "+0.3"],
            ["Backlog", "124", "-38"],
          ].map(([label, value, delta]) => (
            <div key={label} className="px-4 py-3">
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
                {label}
              </dt>
              <dd className="mt-0.5 flex items-baseline justify-between gap-2">
                <span className="font-mono text-[15px] font-semibold text-ink">
                  {value}
                </span>
                <span className="font-mono text-[9.5px] text-signal-deep">
                  {delta}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

const ticketRows = [
  ["INC-2201", "Email delivery failing for finance", "AI classified", "P1"],
  ["INC-2204", "Shared drive permissions drift", "Auto-routed", "P2"],
  ["REQ-0912", "New starter hardware bundle", "Approved", "P3"],
  ["INC-2208", "Printer queue stalled, floor 4", "Auto-resolved", "P3"],
];

function QueueTable() {
  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
        <span>ticket queue</span>
        <span className="text-signal">synced</span>
      </div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Example ticket queue with classification, routing and priority
        </caption>
        <thead>
          <tr className="border-b border-line font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
            <th scope="col" className="px-4 py-2 font-medium">ID</th>
            <th scope="col" className="px-4 py-2 font-medium">Subject</th>
            <th scope="col" className="hidden px-4 py-2 font-medium sm:table-cell">Action</th>
            <th scope="col" className="px-4 py-2 text-right font-medium">Priority</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {ticketRows.map(([id, subject, action, priority]) => (
            <tr key={id} className="transition-colors hover:bg-paper">
              <td className="px-4 py-3 font-mono text-[10.5px] text-ink-mute">{id}</td>
              <td className="px-4 py-3 text-[12.5px] text-ink">{subject}</td>
              <td className="hidden px-4 py-3 font-mono text-[10.5px] text-signal-deep sm:table-cell">
                {action}
              </td>
              <td className="px-4 py-3 text-right font-mono text-[10.5px] text-ink-soft">
                {priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const assets = [
  ["Laptop · MacBook Pro 14", "128", "91%"],
  ["Monitor · Dell U2723", "64", "78%"],
  ["Licence · Figma org", "210", "96%"],
  ["Dock · CalDigit TS4", "18", "42%"],
];

function InventoryTable() {
  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
          inventory / stock
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-alert">
          2 low
        </span>
      </div>
      <ul className="divide-y divide-line">
        {assets.map(([name, qty, fill]) => (
          <li key={name} className="grid gap-2 px-4 py-3 sm:grid-cols-[1fr_60px_110px] sm:items-center">
            <span className="text-[12.5px] text-ink">{name}</span>
            <span className="font-mono text-[11px] tabular-nums text-ink-soft sm:text-right">
              {qty}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 flex-1 bg-line">
                <span
                  className={`block h-1 ${Number.parseInt(fill, 10) < 50 ? "bg-alert" : "bg-signal"}`}
                  style={{ width: fill }}
                />
              </span>
              <span className="w-9 text-right font-mono text-[9.5px] text-ink-mute">
                {fill}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const blocks = [
  {
    index: "01",
    title: "Pre-built workflows for IT operations",
    body:
      "Turn runbooks into versioned workflows. Every step keeps an owner, an input and an audit entry, so automation stays reviewable.",
    items: [
      ["Workflow Builder", "custom automations"],
      ["MCP Servers", "connect external systems"],
      ["My Automations", "manage every workflow"],
    ],
    visual: <FlowDiagram />,
  },
  {
    index: "02",
    title: "Visualize and analyze your data",
    body:
      "Query tickets, assets and automation runs without exporting anything. Charts are shared objects, not screenshots.",
    items: [
      ["Graphic Walker", "exploratory analysis"],
      ["Custom Charts", "Chart.js and Recharts"],
      ["Data Sources", "Airbyte and MCP"],
    ],
    visual: <MetricsPanel />,
  },
  {
    index: "03",
    title: "Intelligent ticket management and routing",
    body:
      "Classification, routing and prioritisation follow the same policy, whether a ticket arrives by email, portal or API.",
    items: [
      ["AI Classification", "automatic categorisation"],
      ["Smart Routing", "assignment by skill and load"],
      ["Ticket Analytics", "performance insights"],
    ],
    visual: <QueueTable />,
  },
  {
    index: "04",
    title: "Complete asset and inventory tracking",
    body:
      "Stock, purchase orders and assemblies stay in one ledger. Low-stock thresholds trigger a workflow instead of an email thread.",
    items: [
      ["Stock Items", "track individual assets"],
      ["Purchase Orders", "procurement workflows"],
      ["Build Orders", "assembly and manufacturing"],
    ],
    visual: <InventoryTable />,
  },
];

export function Features() {
  return (
    <section id="platform" className="border-b border-line bg-paper py-20 md:py-28">
      <Shell>
        <SectionHead
          index="02"
          eyebrow="Platform"
          title="A fully integrated suite of automation tools."
          body="Four surfaces, one audit trail. Kernia keeps automations, analytics, tickets and inventory on the same data model."
        />

        <div className="mt-14 space-y-14 md:mt-20 md:space-y-20">
          {blocks.map((block) => (
            <article
              key={block.index}
              className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] tracking-[0.12em] text-ink-mute">
                  {block.index}
                </span>
                <h3 className="mt-3 max-w-[22ch] text-[clamp(1.35rem,2.1vw,1.75rem)] font-bold leading-tight tracking-[-0.02em] text-ink">
                  {block.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-[14.5px] leading-relaxed text-ink-soft">
                  {block.body}
                </p>
                <ul className="mt-7 border-y border-line">
                  {block.items.map(([name, detail]) => (
                    <li key={name}>
                      <Link
                        href="#platform"
                        className="group flex items-center justify-between gap-4 border-b border-line py-3 last:border-b-0"
                      >
                        <span className="text-[13px] font-semibold text-ink">
                          {name}
                        </span>
                        <span className="flex items-center gap-2 font-mono text-[10.5px] text-ink-mute">
                          {detail}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7 lg:pl-4">{block.visual}</div>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  );
}

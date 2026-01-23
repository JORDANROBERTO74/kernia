"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Terminal, Bot, Box, Code } from "lucide-react";

export function Developers() {
  return (
    <section id="developers" className="bg-[#0a2540] py-36 diagonal-container -mt-5 relative z-20 text-white overflow-hidden">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-[#00d4ff] font-bold text-sm uppercase tracking-wide mb-3">
            Designed for Developers
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            Powerful APIs for automation and integration.
          </h3>
          <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            We agonize over the right abstractions so your teams don&apos;t need to stitch together disparate systems or spend months building automation workflows from scratch.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-1 bg-[#635bff] rounded-full"></div>
            <p className="text-sm font-medium text-slate-300">
              Client libraries available in every major language
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:py-2 text-sm font-bold rounded-full text-[#0a2540] bg-[#00d4ff] hover:bg-[#00d4ff]/90 transition-all"
            >
              Read the docs{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
          </div>
        </div>
        <div className="relative bg-[#1a2542] rounded-lg shadow-2xl border border-white/10 overflow-hidden font-mono text-xs sm:text-sm leading-relaxed mt-8 lg:mt-0">
          <div className="flex items-center px-4 py-3 bg-[#0a2540] border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs text-slate-400 font-sans">server.js</div>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto text-slate-300">
            <pre className="text-xs sm:text-sm">
              <code>
                <span className="token-keyword">const</span> keyonehub ={" "}
                <span className="token-function">require</span>(
                <span className="token-string">&apos;keyonehub&apos;</span>)(
                <span className="token-string">&apos;sk_test_...&apos;</span>);
                <br />
                <span className="token-keyword">const</span> workflow ={" "}
                <span className="token-keyword">await</span> keyonehub.workflows.
                <span className="token-function">create</span>(&#123;
                <br />
                {"  "}
                <span className="token-string">name</span>:{" "}
                <span className="token-string">&apos;Auto Ticket Routing&apos;</span>,
                <br />
                {"  "}
                <span className="token-string">trigger</span>: &#123;
                <br />
                {"    "}
                <span className="token-string">type</span>:{" "}
                <span className="token-string">&apos;event&apos;</span>,
                <br />
                {"    "}
                <span className="token-string">event</span>:{" "}
                <span className="token-string">&apos;ticket.created&apos;</span>,
                <br />
                {"  "}&#125;,
                <br />
                {"  "}
                <span className="token-string">steps</span>: [
                <br />
                {"    "}&#123;
                <br />
                {"      "}
                <span className="token-string">action</span>:{" "}
                <span className="token-string">&apos;classify&apos;</span>,
                <br />
                {"      "}
                <span className="token-string">model</span>:{" "}
                <span className="token-string">&apos;gpt-4&apos;</span>,
                <br />
                {"    "}&#125;,
                <br />
                {"    "}&#123;
                <br />
                {"      "}
                <span className="token-string">action</span>:{" "}
                <span className="token-string">&apos;route&apos;</span>,
                <br />
                {"      "}
                <span className="token-string">team</span>:{" "}
                <span className="token-string">&apos;support&apos;</span>,
                <br />
                {"    "}&#125;,
                <br />
                {"  "}],
                <br />
                &#125;);
              </code>
            </pre>
          </div>
          <div className="bg-[#0a2540] p-3 text-xs text-slate-400 border-t border-white/10 flex justify-between">
            <span>Terminal</span>
            <span className="text-green-400">● Online</span>
          </div>
        </div>
      </div>

      {/* Feature cards row */}
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Use KeyOneHub with your stack */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0 sm:border-r sm:border-dotted lg:border-r lg:border-dotted">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Terminal className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Use KeyOneHub with your stack</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              We offer client and server libraries in everything from React and Node.js to Python and Go.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              See libraries <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Card 2: Build AI agents */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0 sm:border-r sm:border-dotted lg:border-r lg:border-dotted">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Bot className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Build AI agents</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              Create AI agents that can analyze tickets, automate workflows, and handle support tasks using the KeyOneHub API.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              View docs <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Card 3: Explore prebuilt integrations */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0 sm:border-r sm:border-dotted lg:border-r lg:border-dotted">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Box className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Explore prebuilt integrations</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              Connect KeyOneHub via Airbyte, MCP servers, and direct API integrations to your existing tools and systems.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              Browse Integrations <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          {/* Card 4: Build on KeyOneHub Apps */}
          <div className="flex flex-col p-6 lg:p-8 border-b border-white/20 sm:border-b-0">
            <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center mb-4 relative overflow-hidden">
              <Code className="w-6 h-6 text-white relative z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#635bff]/40 rounded-tl-full" />
            </div>
            <div className="flex gap-2">
              <div className="h-7 w-px bg-white/60" />
              <h4 className="text-lg font-bold text-white mb-2">Build on KeyOneHub Apps</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
              Build custom automations and workflows for your team, or share them with the KeyOneHub community.
            </p>
            <Link href="#" className="inline-flex items-center text-[#00d4ff] font-semibold text-sm hover:text-[#00d4ff]/80 transition-colors">
              Learn about Workflows <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

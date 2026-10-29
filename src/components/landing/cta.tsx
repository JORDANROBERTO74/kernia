"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Code, BookOpen } from "lucide-react";

export function CTA() {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] mb-4 sm:mb-6">Ready to get started?</h2>
            <p className="text-[#495057] mb-6 sm:mb-8 text-base sm:text-lg max-w-sm">
              Connect your helpdesk, route tickets with AI, and keep every automation auditable. Start free, or talk to us about a rollout plan for your support organisation.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full text-white bg-[#00b37e] hover:bg-[#101418] transition-colors shadow-lg shadow-teal-500/30 group"
              >
                Start now{" "}
                <ArrowRight className="text-sm ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full text-[#00b37e] bg-[#00b37e]/10 hover:bg-[#00b37e]/20 transition-colors"
              >
                Contact sales{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-[#101418] font-bold mb-2">
                <Code className="text-[#00b37e]" />
                <span>Predictable pricing</span>
              </div>
              <p className="text-sm text-[#495057]">
                Per-agent plans with no hidden fees or per-ticket surcharges.
              </p>
              <Link
                href="#"
                className="text-[#00b37e] font-semibold text-sm mt-3 inline-block hover:text-[#101418]"
              >
                Pricing details →
              </Link>
            </div>
            <div className="p-6 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-2 text-[#101418] font-bold mb-2">
                <BookOpen className="text-[#00b37e]" />
                <span>Start your integration</span>
              </div>
              <p className="text-sm text-[#495057]">
                Get up and running with our easy-to-use developer docs.
              </p>
              <Link
                href="#"
                className="text-[#00b37e] font-semibold text-sm mt-3 inline-block hover:text-[#101418]"
              >
                API Reference →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

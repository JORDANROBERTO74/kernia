"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { CheckCircle2, FileText, Building2, ChevronRight } from "lucide-react";

export function Startup() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 diagonal-container -mt-10 relative z-25">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[#00b37e] font-bold text-sm uppercase tracking-wide mb-3">
            Built for growth
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101418] mb-4 sm:mb-6">
            Take your startup further, faster
          </h3>
          <p className="text-base sm:text-lg text-[#495057] mb-6 sm:mb-8 leading-relaxed max-w-3xl">
            Startups build on Kernia to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low-to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 md:pb-36">
          {/* Card 1: Workflows */}
          <div className="bg-white rounded-xl p-1 shadow-lg group md:translate-y-[100px]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative">
              <div className="bg-white rounded-tl-lg p-3 sm:p-4 w-full max-w-[466px]">
                <div className="grid grid-cols-2 gap-3">
                  {/* Left Column - Navigation */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#101418] mb-2 sm:mb-3">Workflows</h4>
                    <nav className="space-y-1.5 sm:space-y-2">
                      <Link href="#" className="block text-xs sm:text-sm text-[#00b37e] font-medium pl-2 border-l-2 border-[#00b37e]">
                        Overview
                      </Link>
                      <Link href="#" className="block text-xs sm:text-sm text-[#495057] hover:text-[#00b37e] transition-colors pl-2">
                        Company
                      </Link>
                      <Link href="#" className="block text-xs sm:text-sm text-[#495057] hover:text-[#00b37e] transition-colors pl-2">
                        Templates
                      </Link>
                      <Link href="#" className="block text-xs sm:text-sm text-[#495057] hover:text-[#00b37e] transition-colors pl-2">
                        Partners
                      </Link>
                    </nav>
                  </div>

                  {/* Right Column - Progress Checklist */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#101418] mb-2 sm:mb-3">TechStart, Inc.</h4>
                    <div className="space-y-2 sm:space-y-2.5">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="text-green-500 text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#101418]">Connect support system</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="text-green-500 text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#101418]">Set up ticket routing</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="text-green-500 text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#101418]">Create first automation</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <FileText className="text-[#495057] text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#101418]">Configure dashboards</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Building2 className="text-[#495057] text-base sm:text-lg" />
                        <span className="text-xs sm:text-sm text-[#101418]">Integrate data sources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Workflows Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-orange-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#495057] bg-slate-100 px-2 py-0.5 rounded-full">Workflows</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#101418] mb-2">Set up your automation</h5>
              <p className="text-sm text-[#495057] leading-relaxed mb-4">
                Create workflows, connect integrations, and automate your IT operations from day one.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#00b37e] hover:text-[#00a372] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Workflows{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>

          {/* Card 2: Automation Gallery */}
          <div className="bg-white rounded-xl p-1 shadow-lg group">
            {/* Interactive Panel with Ticket and Workflow - Now on top */}
            <div className="bg-[#f5f7f8] rounded-xl flex gap-10 justify-between items-start relative h-[288px]">
              {/* Left Column - Ticket Interface */}
              <div className="bg-white rounded-lg p-3 relative w-full">
                {/* Close Icon */}
                <div className="absolute top-2 right-2">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 12.7c3.5899 0 6.5-2.84299 6.5-6.35C13 2.84299 10.0899 0 6.5 0 2.91015 0 0 2.84299 0 6.35c0 3.50701 2.91015 6.35 6.5 6.35Zm2.75764-8.14604c.25385-.24798.25385-.65004 0-.89803-.25384-.24798-.66539-.24798-.91923 0L6.49993 5.45198 4.66145 3.65593c-.25384-.24798-.6654-.24798-.91924 0-.25384.24799-.25384.65005 0 .89803l1.83848 1.79605-1.83848 1.79605c-.25384.24798-.25384.65004 0 .89803.25384.24798.6654.24798.91924 0l1.83848-1.79605 1.83848 1.79605c.25384.24798.66539.24798.91923 0 .25385-.24799.25385-.65005 0-.89803L7.41917 6.35001l1.83847-1.79605Z" fill="#CAD2D9"></path>
                  </svg>
                </div>

                {/* Ticket Status Icon */}
                <div className="absolute bottom-8 md:bottom-4 right-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#00b37e"></circle>
                    <path d="M10 12h12M10 16h12M10 20h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Ticket Messages */}
                <div className="space-y-2 mb-8 pt-8">
                  <div className="bg-blue-50 rounded-lg p-2 text-xs text-[#101418]">
                    🎫 Ticket #1247 created
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2 text-xs text-[#101418] ml-auto w-fit">
                    Password reset request
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 text-xs text-[#101418]">
                    ✅ Auto-resolved in 2 min
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 text-xs">
                    <span className="text-[#00b37e]">workflow.kernia.com/auto-1247</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Workflow Status */}
              <div className="bg-white rounded-tl-lg p-4 text-center self-end w-full">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#101418]">71%</div>
                  <div className="text-xs text-[#495057] mt-1">automation rate</div>
                </div>
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-[80px] h-[80px]" viewBox="0 0 24 24" fill="none" stroke="#00b37e" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="text-xs text-[#495057]">Active workflow</div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Automation Gallery Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#495057] bg-slate-100 px-2 py-0.5 rounded-full">Automation Gallery</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#101418] mb-2">Start automating</h5>
              <p className="text-sm text-[#495057] leading-relaxed mb-4">
                Test your automation workflows with pre-built templates and little to no code.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#00b37e] hover:text-[#00a372] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Explore Automations{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Dashboard Setup */}
          <div className="bg-white rounded-xl p-1 shadow-lg group md:translate-y-[100px]">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative">
              <div className="bg-white rounded-tl-lg p-3 sm:p-4 w-full max-w-[380px]">
                {/* Dashboard Config Form */}
                <div className="text-xs text-[#495057] mb-2">Dashboard Name</div>
                <input
                  type="text"
                  value="Support Metrics"
                  readOnly
                  className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#00b37e] focus:border-transparent outline-none bg-white mb-4"
                />
                <div className="text-xs text-[#495057] mb-2">Data Source</div>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value="Zendesk API"
                    readOnly
                    className="flex-1 border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#00b37e] focus:border-transparent outline-none bg-white"
                  />
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">Z</span>
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-green-600">A</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Time Range"
                    value="Last 30 days"
                    readOnly
                    className="border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#00b37e] focus:border-transparent outline-none bg-white"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Refresh"
                      value="Real-time"
                      readOnly
                      className="w-full border border-slate-200 rounded px-3 py-2 text-sm pr-8 focus:ring-2 focus:ring-[#00b37e] focus:border-transparent outline-none bg-white"
                    />
                    <svg className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-[#495057] mb-2">Metrics</div>
                <input
                  type="text"
                  placeholder="Tickets, Response Time, Automation Rate"
                  value="Tickets, Response Time, Automation Rate"
                  readOnly
                  className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#00b37e] focus:border-transparent outline-none bg-white"
                />
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Dashboard Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#495057] bg-slate-100 px-2 py-0.5 rounded-full">Dashboards</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#101418] mb-2">Monitor your operations</h5>
              <p className="text-sm text-[#495057] leading-relaxed mb-4">
                Launch a business with prebuilt dashboards that&apos;s optimized for insights and analytics.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#00b37e] hover:text-[#00a372] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Workflows{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>

          {/* Card 4: Cloud token */}
          <div className="bg-white rounded-xl p-1 shadow-lg group">
            {/* Embedded White Panel with Two Columns - Now on top */}
            <div className="bg-gray-100 rounded-xl flex justify-end pt-16 relative">
              <div className="bg-white rounded-tl-lg p-3 sm:p-4 w-full max-w-[380px]">
                {/* Cloud Token Analytics */}
                <h4 className="text-xs sm:text-sm font-bold text-[#101418] mb-4">Cloud token</h4>

                {/* Period Metrics */}
                <div className="flex gap-3 sm:gap-4 mb-4">
                  <div className="w-full">
                    <div className="text-xs text-[#495057]">Previous period</div>
                    <div className="text-base sm:text-lg font-bold text-[#101418]">80,250,068</div>
                  </div>
                  <div className="hidden sm:block"><Separator orientation="vertical" /></div>
                  <div className="w-full">
                    <div className="text-xs text-[#495057]">Current period</div>
                    <div className="text-base sm:text-lg font-bold text-[#101418]">68,491,224</div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="mb-2">
                  <div className="h-24 bg-white rounded border border-slate-200 flex items-end justify-around p-2 pb-0">
                    {[65, 70, 75, 68, 72, 80, 85].map((height, i) => (
                      <div
                        key={i}
                        className="bg-green-500 rounded-t"
                        style={{ width: '5%', height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-around text-[11px] text-[#495057] mt-1 px-2">
                    <span>Apr 24</span>
                    <span>Apr 25</span>
                    <span>Apr 26</span>
                    <span>Apr 27</span>
                    <span>Apr 28</span>
                    <span>Apr 29</span>
                    <span>Apr 30</span>
                  </div>
                </div>
              </div>
              {/* Gradient Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none rounded-b-xl"></div>
            </div>

            {/* Main Content Area - Now at bottom */}
            <div className="py-10 px-8 h-[180px] transition-all duration-300 group-hover:-mt-4 group-hover:mb-4">
              {/* Cloud Token Branding */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-500 transform rotate-45"></div>
                <span className="text-xs font-medium text-[#495057] bg-slate-100 px-2 py-0.5 rounded-full">Cloud token</span>
              </div>

              {/* Title and Description */}
              <h5 className="text-lg font-bold text-[#101418] mb-2">Track usage and metrics</h5>
              <p className="text-sm text-[#495057] leading-relaxed mb-4">
                Monitor your cloud token usage with real-time analytics and insights.
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#00b37e] hover:text-[#00a372] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn about Dashboards{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>

            </div>
          </div>
        </div>

        {/* CTA Section */}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { ArrowRight, Ticket, CheckCircle2, Clock, User } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[800px] lg:min-h-[950px] overflow-hidden bg-white">
      <div className="hero-bg-wrapper">
        <div className="refined-mesh"></div>
      </div>
      <div className="relative z-10 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-6 sm:pt-10">
            <div className="max-w-lg pt-6 sm:pt-12">
              <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-black tracking-tighter text-[#101418] leading-[0.95] mb-6 sm:mb-8 hero-h1">
                Intelligent automation platform for IT operations
              </h1>
              <p className="text-lg sm:text-xl text-[#495057] mb-8 sm:mb-10 leading-relaxed font-medium max-w-[460px]">
                Automate support tickets, analyze workflows, and optimize operations with AI-powered automation. Join teams that use Kernia to reduce costs, improve response times, and scale their IT operations efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start pb-6 sm:pb-10">
                <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 sm:py-2.5 text-base border border-slate-200 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#00b37e] focus:border-transparent bg-white text-[#101418] placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-7 py-3 sm:py-2.5 text-base font-bold rounded-full sm:rounded-l-none sm:rounded-r-full text-white bg-[#101418] hover:bg-[#101418]/90 transition-all group shadow-lg shadow-black/20"
                  >
                    Start now{" "}
                    <ArrowRight className="text-sm ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
            <div className="relative hidden lg:block h-[600px] w-full mt-[-60px]">
              {/* Support Dashboard Card */}
              <div className="absolute right-0 top-10 w-[520px] bg-white rounded-2xl shadow-card z-10 overflow-hidden transform scale-90 translate-x-60">
                {/* Top Bar with Gradient */}
                <div className="h-12 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
                      <path fill="#FFF" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z"></path>
                    </svg>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Support Center
                    </span>
                    <svg width="10" height="4" viewBox="0 0 10 4" className="text-white">
                      <polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0"></polyline>
                    </svg>
                  </div>
                  <div className="bg-white/20 rounded px-2 py-1 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 10 10">
                      <circle cx="4" cy="4" r="3.5" fill="none" stroke="#FFF" strokeWidth="0.5"></circle>
                      <path fill="#FFF" d="M6.15 6.15c.2-.2.5-.2.7 0l2.12 2.12a.5.5 0 1 1-.7.7L6.15 6.85a.5.5 0 0 1 0-.7z"></path>
                    </svg>
                    <span className="text-xs text-white">Search</span>
                  </div>
                </div>

                <div className="p-5 bg-white">
                  {/* Today Section with two columns */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-[#101418] mb-4">Today</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column - Tickets Processed */}
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-xs font-semibold text-slate-500">Tickets processed</span>
                          <svg width="7" height="4" fill="none" className="text-[#101418]">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.532.54a.379.379 0 0 1 .536.536L3.684 3.46a.378.378 0 0 1-.535 0L.765 1.076A.379.379 0 0 1 1.3.54l2.116 2.116L5.532.54Z" fill="#101418"></path>
                          </svg>
                        </div>
                        <div className="text-2xl font-bold text-[#101418] mb-1">1,247</div>
                        <div className="text-xs text-slate-400 mb-4">2:00 PM</div>

                        {/* Main Graph */}
                        <div className="h-20 w-full relative mb-2">
                          <svg className="w-full h-full" viewBox="0 0 468 70" fill="none">
                            <path opacity=".3" d="M0 68.125h467.488v.623H0v-.623Z" fill="#C4CCD8"></path>
                            <path d="M-1.934 68.15h78.16l19.54-8.899h78.16l19.54-21.75 19.54-4.35h19.54l19.54-4.152h21.559" stroke="#00b37e" strokeWidth="1.271" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>12:00 AM</span>
                          <span className="font-semibold">Now, 2:00 PM</span>
                          <span>11:59 PM</span>
                        </div>
                      </div>

                      {/* Right Column - Automated & Avg Response Time */}
                      <div>
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-semibold text-slate-500">Automated</span>
                              <svg width="7" height="4" fill="none" className="text-[#101418]">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.532.54a.379.379 0 0 1 .536.536L3.684 3.46a.378.378 0 0 1-.535 0L.765 1.076A.379.379 0 0 1 1.3.54l2.116 2.116L5.532.54Z" fill="#101418"></path>
                              </svg>
                            </div>
                            <span className="text-xs text-slate-500">View</span>
                          </div>
                          <div className="text-2xl font-bold text-[#101418] mb-1">892</div>
                          <div className="text-xs text-slate-400">71.5% automation rate</div>
                        </div>
                        <div className="border-t border-slate-100 pt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-slate-500">Avg response time</span>
                            <span className="text-xs text-slate-500">View</span>
                          </div>
                          <div className="text-2xl font-bold text-[#101418] mb-1">2.4h</div>
                          <div className="text-xs text-slate-400">Down from 8.2h</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Three Columns */}
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                    {/* Tickets resolved */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-[#101418]">Tickets resolved</span>
                        <span className="text-xs font-semibold text-green-600">+32.8%</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-[#101418]">1,089</span>
                        <span className="text-sm text-slate-400">820</span>
                      </div>
                      <div className="h-16 w-full relative mb-2">
                        <svg className="w-full h-full" viewBox="0 0 220 112" fill="none">
                          <path opacity=".3" d="M218.625 108.961H.81v.351h217.815v-.351Z" fill="#C4CCD8"></path>
                          <path d="m21.151 108.785 32.95-29.8 32.948-14.9 32.948 29.8 32.95-44.7h32.948l32.949-29.8" stroke="#00b37e" strokeWidth="1.691" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Apr 20</span>
                        <span>Today</span>
                      </div>
                      <div className="text-xs text-slate-400">Updated today 7:50 AM</div>
                    </div>

                    {/* Active automations */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-[#101418]">Active automations</span>
                        <span className="text-xs font-semibold text-green-600">+32.1%</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-[#101418]">47</span>
                        <span className="text-sm text-slate-400">28</span>
                      </div>
                      <div className="h-16 w-full relative mb-2">
                        <svg className="w-full h-full" viewBox="0 0 220 112" fill="none">
                          <path opacity=".3" d="M218.625 108.961H.81v.351h217.815v-.351Z" fill="#C4CCD8"></path>
                          <path d="m21.15 108.785 32.95-14.8 32.949-24.9 32.948 12.8 32.95-32.7 32.948-4 32.949-25.8" stroke="#00b37e" strokeWidth="1.691" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Apr 20</span>
                        <span>Today</span>
                      </div>
                      <div className="text-xs text-slate-400">Updated today 7:50 AM</div>
                    </div>

                    {/* Ticket status */}
                    <div>
                      <span className="text-sm font-bold text-[#101418]">Ticket status</span>
                      <div className="h-2 w-full bg-slate-100 rounded-full mt-3 mb-4 flex overflow-hidden">
                        <div className="bg-green-500" style={{ width: '68%' }}></div>
                        <div className="bg-blue-500" style={{ width: '24%' }}></div>
                        <div className="bg-orange-500" style={{ width: '8%' }}></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs text-slate-500">Resolved</span>
                          </div>
                          <span className="text-xs font-semibold text-[#101418]">1,089</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-xs text-slate-500">In progress</span>
                          </div>
                          <span className="text-xs font-semibold text-[#101418]">124</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-xs text-slate-500">Pending</span>
                          </div>
                          <span className="text-xs font-semibold text-[#101418]">34</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400 mt-3">Updated today 7:50 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Ticket Card Component */}
              <div className="absolute right-20 top-20 w-[300px] bg-white rounded-[20px] shadow-floating z-20 overflow-hidden transform transition-transform hover:-translate-y-1 duration-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                        <Ticket className="text-white text-sm" />
                      </div>
                      <div>
                        <h3 className="text-[#101418] font-bold text-sm">Ticket #1247</h3>
                        <p className="text-slate-500 text-[10px]">Support Request</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 rounded-full">
                      <span className="text-[10px] font-semibold text-green-700">Auto-resolved</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="text-slate-400 text-xs" />
                        <span className="text-xs font-semibold text-slate-500">Customer</span>
                      </div>
                      <p className="text-sm text-[#101418] font-medium">Sarah Johnson</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Subject</p>
                      <p className="text-sm text-[#101418]">Password reset request</p>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="text-slate-400 text-xs" />
                        <span className="text-[10px] text-slate-500">Response time</span>
                      </div>
                      <span className="text-xs font-bold text-green-600">2 min</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="text-green-500 text-xs" />
                      <span className="text-xs font-semibold text-[#101418]">Automated Response</span>
                    </div>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      Ticket automatically resolved by workflow. Password reset email sent to customer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

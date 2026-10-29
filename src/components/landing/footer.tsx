"use client";

import React from "react";
import Link from "next/link";
import { MapPin, MessageCircle, Share2, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="resources" className="bg-[#f5f7f8] pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00b37e] to-[#4cd7f6] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
              </div>
              <div className="font-bold text-xl tracking-tighter text-[#101418]">
                Kernia
              </div>
            </div>
            <p className="text-sm text-[#495057] mb-6 leading-relaxed">
              Intelligent automation platform for IT operations. Organizations of all sizes use Kernia to automate workflows, manage tickets, and optimize their IT operations.
            </p>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-2 text-sm text-[#495057] font-medium hover:text-[#101418] transition-colors group">
                <MapPin className="text-base group-hover:text-[#00b37e] transition-colors" /> 
                <span>United States</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[#495057] font-medium hover:text-[#101418] transition-colors group">
                <MessageCircle className="text-base group-hover:text-[#00b37e] transition-colors" /> 
                <span>English (US)</span>
              </button>
            </div>
          </div>
          <div className="border-l border-slate-200 pl-0 md:pl-6">
            <h4 className="text-sm font-bold text-[#101418] mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Automation Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Dashboard Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Ticket Queue
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Workflow Builder
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-l border-slate-200 pl-0 md:pl-6">
            <h4 className="text-sm font-bold text-[#101418] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-l border-slate-200 pl-0 md:pl-6">
            <h4 className="text-sm font-bold text-[#101418] mb-4">Developers</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  API Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  API Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Create a Workflow
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-l border-slate-200 pl-0 md:pl-6">
            <h4 className="text-sm font-bold text-[#101418] mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-[#495057] font-medium">© {currentYear} Kernia, Inc.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></div>
            <Link href="#" className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors">
              Privacy
            </Link>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></div>
            <Link href="#" className="text-sm text-[#495057] hover:text-[#101418] font-medium transition-colors">
              Terms
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              href="#"
              aria-label="Twitter"
              className="text-[#495057] hover:text-[#101418] hover:bg-white transition-all p-2.5 bg-white/50 rounded-full shadow-sm hover:shadow-md"
            >
              <Twitter className="text-lg" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-[#495057] hover:text-[#101418] hover:bg-white transition-all p-2.5 bg-white/50 rounded-full shadow-sm hover:shadow-md"
            >
              <Linkedin className="text-lg" />
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              className="text-[#495057] hover:text-[#101418] hover:bg-white transition-all p-2.5 bg-white/50 rounded-full shadow-sm hover:shadow-md"
            >
              <Github className="text-lg" />
            </Link>
            <Link
              href="#"
              aria-label="Share"
              className="text-[#495057] hover:text-[#101418] hover:bg-white transition-all p-2.5 bg-white/50 rounded-full shadow-sm hover:shadow-md"
            >
              <Share2 className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

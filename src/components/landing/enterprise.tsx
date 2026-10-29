"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ClientLogo } from "../commons/clientLogo";
import { Zap, BarChart3, Ticket, Package, ChevronRight } from "lucide-react";

type BrandData = {
  name: string;
  metrics: {
    value: string;
    description: string[];
  }[];
  products: {
    name: string;
    icon: string;
    color: string;
  }[];
  headline: string;
};

const BRAND_DATA: BrandData[] = [
  {
    name: "Northwind",
    metrics: [
      {
        value: "480K+",
        description: ["Support tickets processed", "monthly across teams"],
      },
      {
        value: "72%",
        description: ["Automation rate for", "routine IT operations"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "automation",
        color: "text-cyan-500",
      },
      {
        name: "Dashboards",
        icon: "dashboards",
        color: "text-emerald-500",
      },
    ],
    headline: "Northwind automates first-line support across 14 distribution sites",
  },
  {
    name: "Solaris",
    metrics: [
      {
        value: "210+",
        description: ["Systems integrated via", "Airbyte and MCP servers"],
      },
      {
        value: "58%",
        description: ["Reduction in manual", "ticket handling time"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "automation",
        color: "text-cyan-500",
      },
      {
        name: "Integrations",
        icon: "integrations",
        color: "text-emerald-500",
      },
    ],
    headline: "Solaris Health cut manual ticket handling by 58% in one quarter",
  },
  {
    name: "Alder",
    metrics: [
      {
        value: "12",
        description: ["Regions with automated", "support operations"],
      },
      {
        value: "1.8M+",
        description: ["Tickets processed annually", "with AI classification"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "automation",
        color: "text-cyan-500",
      },
      {
        name: "Ticket Queue",
        icon: "queue",
        color: "text-emerald-500",
      },
    ],
    headline: "Alder Financial runs round-the-clock support with a leaner on-call rota",
  },
  {
    name: "Vantage",
    metrics: [
      {
        value: "+61%",
        description: ["Improvement in ticket", "resolution efficiency"],
      },
      {
        value: "-43%",
        description: ["Reduction in average", "response time"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "automation",
        color: "text-cyan-500",
      },
      {
        name: "Kernia Analytics",
        icon: "analytics",
        color: "text-emerald-500",
      },
    ],
    headline: "Vantage Retail resolved support tickets 43% faster with Kernia",
  },
];

const BRAND_OVERLAYS: Record<string, { gradient: string; shadow: string; borderColor: string }> = {
  Northwind: {
    gradient: "from-slate-900/30 via-slate-800/40 to-slate-900/60",
    shadow: "rgba(15,23,42,0.4)",
    borderColor: "border-slate-600",
  },
  Solaris: {
    gradient: "from-emerald-900/30 via-emerald-800/40 to-emerald-900/60",
    shadow: "rgba(6,78,59,0.4)",
    borderColor: "border-emerald-600",
  },
  Alder: {
    gradient: "from-cyan-900/30 via-cyan-800/40 to-cyan-900/60",
    shadow: "rgba(14,116,144,0.4)",
    borderColor: "border-cyan-600",
  },
  Vantage: {
    gradient: "from-teal-900/30 via-teal-800/40 to-teal-900/60",
    shadow: "rgba(19,78,74,0.4)",
    borderColor: "border-teal-600",
  },
};

export function Enterprise() {
  const [selectedBrand, setSelectedBrand] = useState<BrandData>(BRAND_DATA[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const selectedBrandRef = useRef(selectedBrand);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  selectedBrandRef.current = selectedBrand;

  const rotateToNext = useCallback(() => {
    const current = selectedBrandRef.current;
    const idx = BRAND_DATA.findIndex((b) => b.name === current.name);
    const nextIdx = (idx + 1) % BRAND_DATA.length;
    return BRAND_DATA[nextIdx];
  }, []);

  const applyBrand = useCallback((brand: BrandData) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedBrand(brand);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, []);

  const handleBrandSelect = useCallback(
    (brand: BrandData, isUserInitiated = false) => {
      if (brand.name === selectedBrandRef.current.name) return;

      if (isUserInitiated && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      applyBrand(brand);

      if (isUserInitiated) {
        setTimeout(() => {
          const id = setInterval(() => {
            const next = rotateToNext();
            applyBrand(next);
          }, 5000);
          intervalRef.current = id;
        }, 350);
      }
    },
    [applyBrand, rotateToNext]
  );

  useEffect(() => {
    const id = setInterval(() => {
      const next = rotateToNext();
      applyBrand(next);
    }, 5000);
    intervalRef.current = id;
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [rotateToNext, applyBrand]);

  return (
    <section id="solutions" className="bg-white py-24 diagonal-container -mt-10 relative z-25">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        {/* Header Section - Top */}
        <div className="mb-16">
          <h2 className="text-[#00b37e] font-bold text-sm uppercase tracking-wide mb-3">
            Enterprise reinvention
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#101418] mb-6">
            Bring agility to your enterprise
          </h3>
          <p className="text-lg text-[#495057] mb-8 leading-relaxed max-w-3xl">
            Quickly build great automation workflows with a{" "}
            <Link href="#" className="text-[#00b37e] hover:underline">
              professional services team
            </Link>
            ,{" "}
            <Link href="#" className="text-[#00b37e] hover:underline">
              certified partners
            </Link>
            , and{" "}
            <Link href="#" className="text-[#00b37e] hover:underline">
              ServiceNow
            </Link>
            ,{" "}
            <Link href="#" className="text-[#00b37e] hover:underline">
              Jira
            </Link>
            , and{" "}
            <Link href="#" className="text-[#00b37e] hover:underline">
              Kernia App Marketplace
            </Link>
            .
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00b37e] text-white font-semibold rounded-lg hover:bg-[#00a372] transition-colors"
          >
            Explore Kernia for enterprises{" "}
            <ChevronRight className="text-sm ml-2" />
          </Link>
        </div>

        {/* Metrics and Image - Side by Side */}
        <div className="grid lg:grid-cols-[auto_minmax(600px,750px)] gap-16 items-stretch min-h-[250px] md:min-h-[400px]">
          {/* Left Column - Statistics */}
          <div className="flex flex-col">
            <div className="flex flex-col justify-between flex-1 min-h-[250px] md:min-h-[400px]">
              {/* Dynamic Metrics */}
              <div
                key={selectedBrand.name}
                className={`flex flex-col justify-between flex-1 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
              >
                {selectedBrand.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`border-l-2 ${BRAND_OVERLAYS[selectedBrand.name]?.borderColor || "border-[#101418]"} pl-4`}
                  >
                    <p className="text-2xl font-bold text-[#101418] mb-1">{metric.value}</p>
                    {metric.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-base text-[#495057]">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Products Used */}
                <div
                  className={`border-l-2 ${BRAND_OVERLAYS[selectedBrand.name]?.borderColor || "border-[#101418]"} pl-4`}
                >
                  <p className="text-lg text-[#495057] mb-3 font-bold">Products used</p>
                  <div className="space-y-2">
                    {selectedBrand.products.map((product, index) => {
                      let IconComponent;
                      if (product.name === "Automation") IconComponent = Zap;
                      else if (product.name === "Dashboards") IconComponent = BarChart3;
                      else if (product.name === "Ticket Queue") IconComponent = Ticket;
                      else if (product.name === "Integrations") IconComponent = Package;
                      else IconComponent = Zap;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <IconComponent className="text-xl text-[#101418]" />
                          <span className="text-base text-[#101418]">{product.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Brand Card */}
          <div className="relative h-full min-h-[250px] md:min-h-[400px] w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[250px] md:h-[400px]">
              <div className="w-full h-full relative">
                {/* Brand Image */}
                <div
                  key={`image-${selectedBrand.name}`}
                  className={`absolute inset-0 transition-all duration-300 ${isTransitioning
                    ? "opacity-0 scale-105"
                    : "opacity-100 scale-100"
                    }`}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#101418] p-6">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00b37e] text-2xl font-extrabold text-[#101418]">
                      {selectedBrand.name.charAt(0)}
                    </span>
                    <span className="text-3xl font-extrabold tracking-tight text-white/80">
                      {selectedBrand.name}
                    </span>
                  </div>
                </div>

                {/* Gradient Overlay - Dynamic based on brand */}
                {BRAND_OVERLAYS[selectedBrand.name] && (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${BRAND_OVERLAYS[selectedBrand.name].gradient}`}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        boxShadow: `inset 0 0 100px ${BRAND_OVERLAYS[selectedBrand.name].shadow}`,
                      }}
                    ></div>
                  </>
                )}





                {/* Overlay Text - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 z-10">
                  <h4
                    key={`headline-${selectedBrand.name}`}
                    className={`text-white text-lg font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    {selectedBrand.headline}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {BRAND_DATA.map((brand, index) => {
              const isSelected = selectedBrand.name === brand.name;
              return (
                <button
                  key={index}
                  onClick={() => handleBrandSelect(brand, true)}
                  className={`h-16 flex items-center justify-center transition-all duration-200 cursor-pointer ${isSelected
                    ? "opacity-100 scale-110 rounded-lg px-4 py-2"
                    : "opacity-40 hover:opacity-100 hover:scale-105"
                    }`}
                  aria-label={`Select ${brand.name} case study`}
                >
                  <ClientLogo name={brand.name} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

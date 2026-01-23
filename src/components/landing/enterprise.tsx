"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { BMWLogo } from "../commons/bmw";
import { AmazonLogo } from "../commons/amazon";
import { MaerskLogo } from "../commons/maersk";
import { TwilioLogo } from "../commons/twilio";
import { Zap, BarChart3, Ticket, Package, ChevronRight } from "lucide-react";

type BrandData = {
  name: string;
  image: string;
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
  logoComponent: React.ComponentType<{ className?: string }>;
};

const BRAND_DATA: BrandData[] = [
  {
    name: "Microsoft",
    image: "/images/bmw.webp",
    metrics: [
      {
        value: "500K+",
        description: ["Support tickets processed", "monthly across teams"],
      },
      {
        value: "75%",
        description: ["Automation rate for", "routine IT operations"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "payments",
        color: "text-cyan-500",
      },
      {
        name: "Dashboards",
        icon: "account_balance",
        color: "text-purple-500",
      },
    ],
    headline: "Learn why Microsoft chose KeyOneHub to automate IT operations and support",
    logoComponent: BMWLogo,
  },
  {
    name: "IBM",
    image: "/images/amazon.webp",
    metrics: [
      {
        value: "200+",
        description: ["Systems integrated via", "Airbyte and MCP servers"],
      },
      {
        value: "60%",
        description: ["Reduction in manual", "ticket handling time"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "payments",
        color: "text-cyan-500",
      },
      {
        name: "Integrations",
        icon: "account_balance",
        color: "text-purple-500",
      },
    ],
    headline: "See how IBM streamlined IT operations with KeyOneHub automation",
    logoComponent: AmazonLogo,
  },
  {
    name: "Oracle",
    image: "/images/maersk.webp",
    metrics: [
      {
        value: "150+",
        description: ["Countries with automated", "support operations"],
      },
      {
        value: "2.5M+",
        description: ["Tickets processed annually", "with AI classification"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "payments",
        color: "text-cyan-500",
      },
      {
        name: "Ticket Queue",
        icon: "account_balance",
        color: "text-purple-500",
      },
    ],
    headline: "See how Oracle scaled global IT support with KeyOneHub workflows",
    logoComponent: MaerskLogo,
  },
  {
    name: "Twilio",
    image: "/images/twilio.webp",
    metrics: [
      {
        value: "+65%",
        description: ["Improvement in ticket", "resolution efficiency"],
      },
      {
        value: "-45%",
        description: ["Reduction in average", "response time"],
      },
    ],
    products: [
      {
        name: "Automation",
        icon: "payments",
        color: "text-cyan-500",
      },
      {
        name: "KeyOneHub Analytics",
        icon: "analytics",
        color: "text-pink-500",
      },
    ],
    headline: "See how Twilio improved support efficiency by 65% with KeyOneHub",
    logoComponent: TwilioLogo,
  },
];

const BRAND_OVERLAYS: Record<string, { gradient: string; shadow: string; borderColor: string }> = {
  Microsoft: {
    gradient: "from-blue-900/30 via-blue-800/40 to-blue-900/60",
    shadow: "rgba(30,58,138,0.4)",
    borderColor: "border-blue-600",
  },
  IBM: {
    gradient: "from-yellow-900/30 via-yellow-800/40 to-yellow-900/60",
    shadow: "rgba(180,83,9,0.4)",
    borderColor: "border-yellow-600",
  },
  Oracle: {
    gradient: "from-cyan-900/30 via-cyan-800/40 to-cyan-900/60",
    shadow: "rgba(14,116,144,0.4)",
    borderColor: "border-cyan-600",
  },
  Twilio: {
    gradient: "from-red-900/30 via-red-800/40 to-red-900/60",
    shadow: "rgba(153,27,27,0.4)",
    borderColor: "border-red-600",
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
          <h2 className="text-[#635bff] font-bold text-sm uppercase tracking-wide mb-3">
            Enterprise reinvention
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a2540] mb-6">
            Bring agility to your enterprise
          </h3>
          <p className="text-lg text-[#425466] mb-8 leading-relaxed max-w-3xl">
            Quickly build great automation workflows with a{" "}
            <Link href="#" className="text-[#635bff] hover:underline">
              professional services team
            </Link>
            ,{" "}
            <Link href="#" className="text-[#635bff] hover:underline">
              certified partners
            </Link>
            , and{" "}
            <Link href="#" className="text-[#635bff] hover:underline">
              ServiceNow
            </Link>
            ,{" "}
            <Link href="#" className="text-[#635bff] hover:underline">
              Jira
            </Link>
            , and{" "}
            <Link href="#" className="text-[#635bff] hover:underline">
              KeyOneHub App Marketplace
            </Link>
            .
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#635bff] text-white font-semibold rounded-lg hover:bg-[#5851ea] transition-colors"
          >
            Explore KeyOneHub for enterprises{" "}
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
                    className={`border-l-2 ${BRAND_OVERLAYS[selectedBrand.name]?.borderColor || "border-[#0a2540]"} pl-4`}
                  >
                    <p className="text-2xl font-bold text-[#0a2540] mb-1">{metric.value}</p>
                    {metric.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-base text-[#425466]">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Products Used */}
                <div
                  className={`border-l-2 ${BRAND_OVERLAYS[selectedBrand.name]?.borderColor || "border-[#0a2540]"} pl-4`}
                >
                  <p className="text-lg text-[#425466] mb-3 font-bold">Products used</p>
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
                          <IconComponent className="text-xl text-[#0a2540]" />
                          <span className="text-base text-[#0a2540]">{product.name}</span>
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
                  <Image
                    src={selectedBrand.image}
                    alt={`${selectedBrand.name} case study`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
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
              const LogoComponent = brand.logoComponent;
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
                  <LogoComponent />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

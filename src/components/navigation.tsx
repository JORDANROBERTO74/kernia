"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Developers", href: "#developers" },
  { name: "Resources", href: "#resources" },
  { name: "Pricing", href: "#pricing" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offsetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        isScrolled
          ? "border-b border-line bg-white/95 backdrop-blur"
          : "border-b border-transparent bg-white/0"
      )}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-baseline gap-0.5 font-mono text-[19px] font-bold tracking-[-0.04em] text-ink"
          aria-label="Kernia home"
        >
          kernia
          <span aria-hidden className="block h-[7px] w-[7px] bg-signal" />
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#"
            className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-[3px] bg-ink px-4 text-[13px] font-semibold text-white transition-colors hover:bg-signal-deep"
          >
            Contact sales
          </a>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[320px] rounded-none border-l border-line bg-white p-0 sm:w-[380px]"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-[68px] items-center border-b border-line px-6 font-mono text-lg font-bold tracking-tight">
                kernia
                <span aria-hidden className="ml-0.5 block h-[6px] w-[6px] bg-signal" />
              </div>
              <nav className="flex flex-col divide-y divide-line">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-between px-6 py-4 text-left text-[15px] font-medium text-ink"
                  >
                    {item.name}
                    <span className="font-mono text-[10px] text-ink-mute">
                      0{index + 1}
                    </span>
                  </button>
                ))}
              </nav>
              <div className="mt-auto border-t border-line p-6">
                <a
                  href="#"
                  className="inline-flex h-10 w-full items-center justify-center rounded-[3px] bg-ink text-sm font-semibold text-white"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

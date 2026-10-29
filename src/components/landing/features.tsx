"use client";

import React from "react";
import Link from "next/link";

import { Zap, BarChart3, Ticket, Package, ChevronRight, Workflow } from "lucide-react";

function ModularDiagram() {
  // Map module names by position (rowIndex, colIndex)
  const moduleNames: { [key: string]: string } = {
    '0-2': 'ai',        // Row 0, Col 2 - visible
    '1-0': 'analytics',
    '1-3': 'workflows',
    '1-4': 'integrations',
    '2-1': 'mcp',
    '2-2': 'automation',
    '2-3': 'airbyte',
    '2-5': 'api',
    '3-0': 'tickets',
    '3-3': 'routing',
    '4-3': 'queue',
    '4-4': 'inventory',
    '5-1': 'users',
    '5-4': 'dashboards',
    '5-5': 'reports',
  };

  // Icon components for each name
  const getIcon = (name: string | undefined) => {
    if (!name) return null;

    const iconSize = "w-5 h-5";
    const iconColor = "text-slate-600";

    switch (name) {
      case 'ai':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6m0 6v-6m-6 0h12" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case 'analytics':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      case 'workflows':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
        );
      case 'integrations':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
            <circle cx="5" cy="5" r="1.5" />
            <circle cx="19" cy="5" r="1.5" />
            <circle cx="5" cy="19" r="1.5" />
            <circle cx="19" cy="19" r="1.5" />
          </svg>
        );
      case 'mcp':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6v6H9z" />
            <path d="M3 9h6M15 9h6M9 3v6M9 15v6" />
          </svg>
        );
      case 'automation':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        );
      case 'airbyte':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case 'api':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
          </svg>
        );
      case 'tickets':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
            <line x1="9" y1="9" x2="15" y2="9" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        );
      case 'routing':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2v4M12 18v4M22 12h-4M6 12H2" />
          </svg>
        );
      case 'queue':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 8h18M3 12h18M3 16h12" />
            <circle cx="18" cy="16" r="2" />
          </svg>
        );
      case 'inventory':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="12" rx="2" />
            <path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" />
            <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            <circle cx="12" cy="14" r="1" />
          </svg>
        );
      case 'users':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'dashboards':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        );
      case 'reports':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
            <line x1="9" y1="9" x2="12" y2="9" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[350px] lg:h-[450px] flex items-center justify-center overflow-visible">
      <div className="relative w-full h-full" style={{ maxWidth: "500px" }}>
        {/* Background modules (grey outlines) - 6x6 grid */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          {/* Generate 6 rows x 6 columns grid */}
          {Array.from({ length: 6 }).map((_, rowIndex) =>
            Array.from({ length: 6 }).map((_, colIndex) => {
              // Fixed 5px gap between modules
              // Calculate positions with uniform 5px gap
              const moduleSize = 65;
              const gapPx = 5;
              const containerWidth = 500;
              const containerHeight = 450; // lg height

              // Total space: 6 modules (390px) + 5 gaps (25px) = 415px
              const totalSpace = moduleSize * 6 + gapPx * 5;

              // Center the grid
              const startX = (containerWidth - totalSpace) / 2;
              const startY = (containerHeight - totalSpace) / 2;

              // Calculate position for each module
              const left = `${((startX + colIndex * (moduleSize + gapPx)) / containerWidth) * 100}%`;
              const top = `${((startY + rowIndex * (moduleSize + gapPx)) / containerHeight) * 100}%`;
              // Hide specific modules by row and column
              const hiddenModules: Record<number, number[]> = {
                0: [0, 1, 3, 4, 5], // Row 0: columns 0, 1, 3, 4, 5
                1: [1, 2, 5],        // Row 1: columns 1, 2, 5
                2: [0, 4],           // Row 2: columns 0, 4
                3: [1, 2, 4, 5],     // Row 3: columns 1, 2, 4, 5
                4: [0, 1, 2, 5],     // Row 4: columns 0, 1, 2, 5 (removed terminal at 4-2)
                5: [0, 2, 3],        // Row 5: columns 0, 2, 3
              };
              const isHidden = hiddenModules[rowIndex]?.includes(colIndex) || false;
              const moduleName = moduleNames[`${rowIndex}-${colIndex}`];

              // Specific positions for vertical lines: below AI (row 1, col 2) and below Automation (row 3, col 2)
              const showVerticalLine = (rowIndex === 1 && colIndex === 2) || (rowIndex === 3 && colIndex === 2);

              // Modules that should always be in hover state: ai, automation, routing
              const alwaysHoverModules = ['ai', 'automation', 'routing'];
              const isAlwaysHover = moduleName && alwaysHoverModules.includes(moduleName);

              return (
                <>
                  {showVerticalLine ? (
                    <>
                      {/* Vertical line in primary color at specific position */}
                      {/* AI line (row 1, col 2) - full height */}
                      {rowIndex === 1 && colIndex === 2 ? (
                        <div
                          key={`line-vertical-${rowIndex}-${colIndex}`}
                          className="absolute w-0.5 bg-[#00b37e]"
                          style={{
                            top: `${((startY + rowIndex * (moduleSize + gapPx)) / containerHeight) * 100}%`,
                            left: `${((startX + colIndex * (moduleSize + gapPx) + moduleSize / 2) / containerWidth) * 100}%`,
                            height: `${moduleSize}px`,
                            transform: 'translateX(-50%)'
                          }}
                        />
                      ) : null}
                      {/* Automation line (row 3, col 2) - half height with horizontal line */}
                      {rowIndex === 3 && colIndex === 2 ? (
                        <>
                          <div
                            key={`line-vertical-${rowIndex}-${colIndex}`}
                            className="absolute w-0.5 bg-[#00b37e]"
                            style={{
                              top: `${((startY + rowIndex * (moduleSize + gapPx)) / containerHeight) * 100}%`,
                              left: `${((startX + colIndex * (moduleSize + gapPx) + moduleSize / 2) / containerWidth) * 100}%`,
                              height: `${moduleSize / 2}px`,
                              transform: 'translateX(-50%)'
                            }}
                          />
                          {/* Horizontal line in the center of vertical line */}
                          <div
                            key={`line-horizontal-${rowIndex}-${colIndex}`}
                            className="absolute h-0.5 bg-[#00b37e]"
                            style={{
                              top: `${((startY + rowIndex * (moduleSize + gapPx) + moduleSize / 2) / containerHeight) * 100}%`,
                              left: `calc(${((startX + colIndex * (moduleSize + gapPx) + moduleSize / 1.35) / containerWidth) * 100}%)`,
                              width: `${moduleSize / 2}px`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          />
                        </>
                      ) : null}
                    </>
                  ) : null}
                  {!isHidden ? (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`group absolute w-[65px] h-[65px] border border-slate-300 rounded-lg flex flex-col items-center justify-center bg-white/50 transition-all duration-150 ease-out hover:scale-[1.075] hover:min-h-[65px] hover:py-1 origin-center ${isAlwaysHover ? 'scale-[1.075] min-h-[65px] py-1' : ''}`}
                      style={{ top, left }}
                    >
                      {moduleName ? (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                          <div className={`${isAlwaysHover ? 'text-[#00b37e]' : 'text-slate-600'} group-hover:text-[#00b37e] transition-colors duration-300 ease-out flex items-center justify-center`}>
                            {getIcon(moduleName)}
                          </div>
                          <span className={`text-[10px] font-semibold text-[#101418] mt-1.5 capitalize whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out h-0 group-hover:h-[14px] overflow-hidden ${isAlwaysHover ? 'opacity-100 h-[14px]' : ''}`}>
                            {moduleName}
                          </span>
                        </div>
                      ) : (
                        // Default icon for modules without names
                        <div className={`w-3 h-3 bg-slate-400 rounded-full group-hover:bg-[#00b37e] transition-colors duration-150 ${isAlwaysHover ? 'bg-[#00b37e]' : ''}`}></div>
                      )}
                    </div>
                  ) : null}
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Automation Gallery",
      description: "Pre-built workflows for IT operations.",
      color: "#00b37e",
      link: "#",
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Interactive data visualization and insights.",
      color: "#4cd7f6",
      link: "#",
    },
    {
      icon: Ticket,
      title: "Ticket Queue",
      description: "Intelligent ticket management and routing.",
      color: "#101418",
      link: "#",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Complete asset and inventory tracking.",
      color: "#10b981",
      link: "#",
    },
  ];

  return (
    <section id="platform" className="bg-[#f5f7f8] py-24 diagonal-container -mt-10 relative z-10">
      <div className="diagonal-content-reverse max-w-[1080px] mx-auto px-6 md:px-4 lg:px-0">
        <div className="mb-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-[#00b37e] font-bold text-sm uppercase tracking-wide mb-3">
              Modular solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#101418] mb-6">
              A fully integrated suite of automation tools.
            </h3>
            <p className="text-lg text-[#495057] max-w-2xl leading-relaxed">
              We bring together everything that&apos;s required to automate IT operations, analyze support tickets, and optimize workflows. Kernia&apos;s products power automation for support teams, IT departments, operations teams, and enterprises managing complex technical infrastructure.
            </p>
          </div>
          <div className="hidden lg:block flex-1 w-full lg:w-auto lg:min-w-[400px]">
            <ModularDiagram />
          </div>
        </div>
        {/* Automation Gallery Feature - Kernia-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Zap className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#101418]">Automation Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] mb-6">
              Pre-built workflows for IT operations
            </h2>
            <p className="text-lg text-[#495057] mb-8 leading-relaxed">
              Choose from hundreds of ready-to-use automation templates. Deploy workflows for ticket routing, server management, database operations, and more with just a few clicks.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#00b37e] text-white font-semibold rounded-lg hover:bg-[#00a372] transition-colors mb-8"
            >
              Explore Automations{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#101418] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Workflow Builder for creating custom automations
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  MCP Servers for connecting external systems
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  My Automations for managing your workflows
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Automation cards */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px] mx-auto lg:mx-0">
              {/* Automation Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="text-blue-600 text-lg" />
                </div>
                <h3 className="font-bold text-sm text-[#101418] mb-1">Server Reload</h3>
                <p className="text-xs text-slate-600 mb-3">Automatically restart servers on failure</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-semibold">Popular</span>
                  <span className="text-[10px] text-slate-500">IT Operations</span>
                </div>
              </div>

              {/* Automation Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Workflow className="text-emerald-600 text-lg" />
                </div>
                <h3 className="font-bold text-sm text-[#101418] mb-1">Ticket Routing</h3>
                <p className="text-xs text-slate-600 mb-3">Route tickets to the right team automatically</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-semibold">New</span>
                  <span className="text-[10px] text-slate-500">Support</span>
                </div>
              </div>

              {/* Automation Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Package className="text-green-600 text-lg" />
                </div>
                <h3 className="font-bold text-sm text-[#101418] mb-1">DB Backup</h3>
                <p className="text-xs text-slate-600 mb-3">Schedule automated database backups</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500">Database</span>
                </div>
              </div>

              {/* Automation Card 4 */}
              <div className="bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="text-orange-600 text-lg" />
                </div>
                <h3 className="font-bold text-sm text-[#101418] mb-1">SSL Renewal</h3>
                <p className="text-xs text-slate-600 mb-3">Auto-renew SSL certificates before expiry</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500">Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Analytics Feature - Kernia-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <BarChart3 className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#101418]">Dashboard Analytics</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] mb-6">
              Visualize and analyze your data
            </h2>
            <p className="text-lg text-[#495057] mb-8 leading-relaxed">
              Create interactive dashboards with Graphic Walker, explore data visually, and generate insights without writing SQL. Connect multiple data sources and build custom visualizations.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#00b37e] text-white font-semibold rounded-lg hover:bg-[#00a372] transition-colors mb-8"
            >
              Explore Dashboards{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#101418] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Graphic Walker for exploratory data analysis
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Custom Charts with Chart.js and Recharts integration
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Data Sources for connecting Airbyte and MCP servers
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard mockup */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 w-full max-w-[400px] mx-auto lg:mx-0">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <h3 className="font-bold text-lg text-[#101418]">Support Metrics</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">Today</button>
                  <button className="px-3 py-1 text-xs bg-[#00b37e] text-white rounded-lg">This Week</button>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Tickets Processed</p>
                  <p className="text-2xl font-bold text-[#101418]">1,247</p>
                  <p className="text-xs text-green-600 mt-1">+12.5%</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Avg Response</p>
                  <p className="text-2xl font-bold text-[#101418]">2.4h</p>
                  <p className="text-xs text-green-600 mt-1">-45%</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Automation Rate</p>
                  <p className="text-2xl font-bold text-[#101418]">71.5%</p>
                  <p className="text-xs text-green-600 mt-1">+8.2%</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Active Workflows</p>
                  <p className="text-2xl font-bold text-[#101418]">47</p>
                  <p className="text-xs text-slate-500 mt-1">No change</p>
                </div>
              </div>

              {/* Chart area */}
              <div className="bg-slate-50 rounded-lg p-4 h-32 flex items-center justify-center border border-slate-200">
                <div className="w-full h-full relative">
                  <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M 0 80 Q 50 60 100 40 T 200 20" stroke="#00b37e" strokeWidth="2" fill="none" />
                    <path d="M 0 90 Q 50 70 100 50 T 200 30" stroke="#4cd7f6" strokeWidth="2" fill="none" opacity="0.6" />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-500 px-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Queue Feature - Kernia-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <Ticket className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#101418]">Ticket Queue</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] mb-6">
              Intelligent ticket management and routing
            </h2>
            <p className="text-lg text-[#495057] mb-8 leading-relaxed">
              Automatically classify, prioritize, and route support tickets to the right team. Use AI to analyze ticket content and assign based on expertise, workload, and urgency.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#00b37e] text-white font-semibold rounded-lg hover:bg-[#00a372] transition-colors mb-8"
            >
              Explore Ticket Queue{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#101418] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  AI Classification for automatic ticket categorization
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Smart Routing for intelligent ticket assignment
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Ticket Analytics for performance insights
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Ticket queue mockup */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-bold text-lg text-[#101418]">Support Queue</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-[#00b37e] text-white text-xs font-semibold rounded-full">24</span>
                </div>
              </div>

              {/* Tickets list */}
              <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
                {/* High Priority */}
                <div>
                  <p className="text-xs font-semibold text-red-600 mb-2 uppercase">High Priority</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#101418]">#1247 Password Reset</p>
                        <p className="text-xs text-slate-600 mt-1">Sarah Johnson • 5 min ago</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">Urgent</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Progress */}
                <div>
                  <p className="text-xs font-semibold text-blue-600 mb-2 uppercase">In Progress</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#101418]">#1246 Server Error</p>
                        <p className="text-xs text-slate-600 mt-1">John Smith • 12 min ago</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Assigned</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#101418]">#1245 Database Issue</p>
                        <p className="text-xs text-slate-600 mt-1">Maria Garcia • 1h ago</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Auto-resolved</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pending */}
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-2 uppercase">Pending</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#101418]">#1244 Feature Request</p>
                        <p className="text-xs text-slate-600 mt-1">David Lee • 2h ago</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">Needs Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Management Feature - Kernia-style hero layout */}
        <div className="mb-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex-[0.4]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Package className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#101418]">Inventory Management</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] mb-6">
              Complete asset and inventory tracking
            </h2>
            <p className="text-lg text-[#495057] mb-8 leading-relaxed">
              Track IT assets, manage stock levels, handle purchase orders, and monitor inventory across multiple locations. Full lifecycle management from procurement to retirement.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#00b37e] text-white font-semibold rounded-lg hover:bg-[#00a372] transition-colors mb-8"
            >
              Explore Inventory{" "}
              <ChevronRight className="text-sm ml-2" />
            </Link>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#101418] mb-3">See also</p>
              <div className="space-y-2">
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Stock Items for tracking individual assets
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Purchase Orders for procurement workflows
                </Link>
                <Link href="#" className="block text-[#00b37e] hover:text-[#00a372] transition-colors text-sm">
                  Build Orders for assembly and manufacturing
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Inventory mockup */}
          <div className="flex-[0.6] w-full flex justify-end">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 w-full max-w-[400px] mx-auto lg:mx-0">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <h3 className="font-bold text-lg text-[#101418]">IT Assets</h3>
                <button className="px-3 py-1 text-xs bg-[#00b37e] text-white rounded-lg font-semibold">+ Add Item</button>
              </div>

              {/* Inventory items */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="text-blue-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-[#101418]">Dell OptiPlex 7090</p>
                    <p className="text-xs text-slate-600">Desktop Computer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-semibold">In Stock</span>
                      <span className="text-xs text-slate-500">Qty: 24</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Package className="text-emerald-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-[#101418]">HP EliteBook 840</p>
                    <p className="text-xs text-slate-600">Laptop Computer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-semibold">Low Stock</span>
                      <span className="text-xs text-slate-500">Qty: 3</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Package className="text-green-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-[#101418]">Cisco Catalyst 9300</p>
                    <p className="text-xs text-slate-600">Network Switch</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-semibold">In Stock</span>
                      <span className="text-xs text-slate-500">Qty: 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.filter((f) => f.title !== "Automation Gallery" && f.title !== "Dashboard Analytics" && f.title !== "Ticket Queue" && f.title !== "Inventory Management").map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#00b37e] transition-colors rounded-t-lg"
                style={{ backgroundColor: feature.color }}
              ></div>
              <div className="mb-4" style={{ color: feature.color }}>
                <feature.icon className="text-3xl" />
              </div>
              <h4 className="text-lg font-bold text-[#101418] mb-2">{feature.title}</h4>
              <p className="text-sm text-[#495057] leading-relaxed mb-4">
                {feature.description}
              </p>
              <Link
                href={feature.link}
                className="text-[#00b37e] font-semibold text-sm flex items-center group-hover:text-[#101418] transition-colors"
              >
                Start with {feature.title}{" "}
                <ChevronRight className="text-sm ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

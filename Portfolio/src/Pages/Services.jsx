import React from "react";
import { HiCode, HiDeviceMobile, HiServer, HiLightningBolt, HiColorSwatch, HiCog } from "react-icons/hi";
import useScrollAnimation from "../hooks/useScrollAnimation";

const SERVICES_DATA = [
  {
    icon: HiCode,
    s_name: "Frontend Development",
    s_desc:
      "Building responsive and interactive UIs using HTML, CSS, JavaScript, and React with modern design patterns.",
    gradient: "from-[#a855f7] to-[#6366f1]",
  },
  {
    icon: HiDeviceMobile,
    s_name: "Responsive Web Design",
    s_desc:
      "Creating mobile-friendly, fully responsive websites that look great on all screen sizes and devices.",
    gradient: "from-[#6366f1] to-[#3b82f6]",
  },
  {
    icon: HiServer,
    s_name: "MERN Stack Development",
    s_desc:
      "Developing full-stack web applications using MongoDB, Express, React, and Node.js with clean architecture.",
    gradient: "from-[#ec4899] to-[#a855f7]",
  },
  {
    icon: HiLightningBolt,
    s_name: "API Integration",
    s_desc:
      "Integrating REST APIs and handling dynamic data with asynchronous JavaScript and modern fetch patterns.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    icon: HiColorSwatch,
    s_name: "UI Implementation",
    s_desc:
      "Converting Figma and design files into pixel-perfect, functional web interfaces with attention to detail.",
    gradient: "from-[#10b981] to-[#3b82f6]",
  },
  {
    icon: HiCog,
    s_name: "Performance Optimization",
    s_desc:
      "Improving application speed, implementing code splitting, and optimizing React component rendering.",
    gradient: "from-[#a855f7] to-[#ec4899]",
  },
];

export default function Services() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section
      id="services"
      className="relative py-[100px] px-5 max-w-[1200px] mx-auto"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Section heading */}
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p
          className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#a855f7] mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          What I Do
        </p>
        <h2
          className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="mt-4 text-[16px] sm:text-[17px] text-[#a1a1b5] max-w-[560px] mx-auto leading-[1.7]">
          I specialize in building modern web applications with clean code
          and exceptional user experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SERVICES_DATA.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.s_name}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
              className={`group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm
                cursor-default transition-all duration-500 ease-out
                hover:border-[#a855f7]/20 hover:bg-white/[0.04] hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(168,85,247,0.08)]
                ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-5`}
              >
                <div className="flex items-center justify-center w-full h-full rounded-[11px] bg-[#0a0a0f] group-hover:bg-[#111118] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#a855f7] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-[19px] sm:text-[20px] font-bold text-white/90 mb-3 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.s_name}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#a1a1b5] group-hover:text-[#c0c0d0] transition-colors duration-300">
                {service.s_desc}
              </p>

              {/* Hover gradient line at bottom */}
              <div className={`absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
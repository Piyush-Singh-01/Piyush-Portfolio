import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const SERVICES_DATA = [
  {
    s_no: "01",
    s_name: "Frontend Development",
    s_desc:
      "Building responsive and interactive UI using HTML, CSS, JavaScript and React.",
  },
  {
    s_no: "02",
    s_name: "Responsive Web Design",
    s_desc:
      "Creating mobile-friendly and fully responsive websites for all screen sizes.",
  },
  {
    s_no: "03",
    s_name: "MERN Stack Development",
    s_desc:
      "Developing full-stack web applications using MongoDB, Express, React and Node.js.",
  },
  {
    s_no: "04",
    s_name: "API Integration",
    s_desc:
      "Integrating REST APIs and handling dynamic data with asynchronous JavaScript.",
  },
  {
    s_no: "05",
    s_name: "UI Implementation",
    s_desc:
      "Converting Figma/Design files into pixel-perfect, functional web interfaces.",
  },
  {
    s_no: "06",
    s_name: "Performance Optimization",
    s_desc:
      "Improving application speed, code splitting and optimizing React components.",
  },
];

export default function Services() {
  const [servicesRef, servicesVisible] = useScrollAnimation();

  return (
    <section
      id="services"
      className="flex flex-col items-center gap-[60px] my-[80px] mx-auto max-w-[1200px] px-5"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-[32px] md:text-[42px] font-semibold text-center text-white">
          My Skills & Expertise
        </h1>
        <img
          src={theme_pattern}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[-10px] right-[-20px] -z-10"
        />
      </div>

      {/* Services Grid */}
      <div
        ref={servicesRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full transition-all duration-700 ease-out ${
          servicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.s_no}
            style={{
              transitionDelay: servicesVisible ? `${index * 100}ms` : "0ms",
            }}
            className={`flex flex-col justify-between gap-[15px] p-[30px] rounded-[15px] border-2 border-[#333] bg-[#111] cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.04] hover:border-[#ff00ff] hover:bg-gradient-to-br hover:from-[#3f0028] hover:to-[#582300] ${
              servicesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Number */}
            <h3 className="text-[20px] text-[#B415FF] font-medium">
              {service.s_no}
            </h3>

            {/* Service Name */}
            <h2 className="text-[26px] font-semibold text-white">
              {service.s_name}
            </h2>

            {/* Description */}
            <p className="text-[16px] leading-[24px] text-[#d0d0d0]">
              {service.s_desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
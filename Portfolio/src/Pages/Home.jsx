import React, { useEffect, useState, useMemo } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_image from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

/* ── floating orbs that drift behind the hero ── */
function FloatingOrbs() {
  const orbs = useMemo(
    () => [
      { size: 300, x: "10%", y: "20%", color: "rgba(168,85,247,0.08)", delay: 0, duration: 20 },
      { size: 250, x: "70%", y: "10%", color: "rgba(99,102,241,0.06)", delay: 3, duration: 25 },
      { size: 200, x: "80%", y: "60%", color: "rgba(236,72,153,0.06)", delay: 6, duration: 22 },
      { size: 180, x: "20%", y: "70%", color: "rgba(245,158,11,0.05)", delay: 9, duration: 28 },
      { size: 120, x: "50%", y: "40%", color: "rgba(168,85,247,0.04)", delay: 2, duration: 18 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            backgroundColor: orb.color,
            animation: `drift ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
          }}
        />
      ))}
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleResume = () => {
    window.open("/PIYUSH SINGH RESUME.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[100dvh] text-center px-5 pb-10"
    >
      <FloatingOrbs />

      {/* Status badge */}
      <div className="animate-[fadeDown_0.8s_ease-out] mt-5">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#a855f7]/[0.08] border border-[#a855f7]/20 text-[13px] font-medium text-[#a855f7] tracking-wide">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
          </span>
          Available for opportunities
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative mt-8 animate-[scaleIn_1s_ease-out]">
        {/* Glow ring behind image */}
        <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#ec4899] opacity-30 blur-lg animate-[pulseRing_4s_ease-in-out_infinite]" />
        <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#ec4899] opacity-60" />
        <img
          src={profile_image}
          alt="Piyush Singh - Full Stack Developer"
          className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full object-cover bg-[#0a0a0f] border-[3px] border-[#0a0a0f]"
        />
      </div>

      {/* Heading */}
      <div className="mt-8 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
        <p
          className="text-[16px] sm:text-[18px] font-medium text-[#a1a1b5] tracking-[0.15em] uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Hello, I'm
        </p>
        <h1
          className="text-[38px] sm:text-[52px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Piyush Singh
          </span>
        </h1>
      </div>

      {/* Typing Effect */}
      <div className="mt-4 animate-[fadeUp_0.8s_ease-out_0.5s_both]">
        <div
          className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold h-[44px] sm:h-[48px]"
          style={{ fontFamily: "var(--font-heading)" }}
          aria-label={`I am a ${roles[roleIndex]}`}
        >
          <span aria-live="polite" aria-atomic="true" className="sr-only">
            {roles[roleIndex]}
          </span>
          <span aria-hidden="true">
            <span className="bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
              {displayText}
            </span>
            <span
              className="inline-block w-[3px] h-[28px] sm:h-[32px] bg-[#a855f7] ml-[3px] align-middle animate-[cursorBlink_1s_step-end_infinite]"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[16px] sm:text-[18px] max-w-[520px] text-[#a1a1b5] leading-[1.7] mt-4 animate-[fadeUp_0.8s_ease-out_0.7s_both]">
        Building modern, scalable web applications with the MERN stack.
        Turning ideas into elegant digital experiences.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-[fadeUp_0.8s_ease-out_0.9s_both]">
        {/* Connect Button */}
        <AnchorLink
          href="#contact"
          offset={50}
          aria-label="Connect with Piyush Singh"
          className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white no-underline tracking-wide
            bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5]
            shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.4)]
            transition-all duration-400 hover:scale-105
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
        >
          Get In Touch
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </AnchorLink>

        {/* Resume Button */}
        <button
          type="button"
          onClick={handleResume}
          aria-label="Open Piyush Singh resume in a new tab"
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold
            border border-white/15 bg-white/[0.03] text-white/80 hover:text-white cursor-pointer
            hover:border-[#a855f7]/40 hover:bg-[#a855f7]/[0.06]
            transition-all duration-400 hover:scale-105
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M4 14h8M8 2v9M5 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          My Resume
        </button>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-4 mt-8 animate-[fadeUp_0.8s_ease-out_1.1s_both]">
        <a
          href="https://github.com/Piyush-Singh-01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-[#a855f7]/40 hover:bg-[#a855f7]/[0.08] transition-all duration-300"
        >
          <FaGithub className="w-[18px] h-[18px]" />
        </a>
        <a
          href="https://linkedin.com/in/piyush-singh-b94203319"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-[#a855f7]/40 hover:bg-[#a855f7]/[0.08] transition-all duration-300"
        >
          <FaLinkedin className="w-[18px] h-[18px]" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeUp_0.8s_ease-out_1.5s_both]">
        <AnchorLink
          href="#about"
          offset={80}
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-white/30 hover:text-[#a855f7] transition-colors duration-300 no-underline"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
            Scroll
          </span>
          <HiArrowDown className="w-4 h-4 animate-bounce" />
        </AnchorLink>
      </div>
    </section>
  );
}
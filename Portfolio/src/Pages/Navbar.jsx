import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close the drawer if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setMenu(visibleSection.target.id);
      },
      {
        root: null,
        rootMargin: "-80px 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full animate-[fadeDown_0.7s_ease-out] transition-all duration-500 ${
        scrolled
          ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : ""
      }`}
    >
      {/* Glass background */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      />

      <nav
        aria-label="Main navigation"
        className="relative w-full max-w-[1200px] mx-auto min-h-[72px] px-5 sm:px-7 lg:px-10 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleMenuClick("home")}
          aria-label="Piyush Singh - Home"
          className="no-underline shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] group"
        >
          <h1
            className="text-[26px] sm:text-[28px] lg:text-[30px] font-bold m-0 whitespace-nowrap tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-[shimmer_3s_ease-in-out_infinite] transition-all duration-300">
              PIYUSH
            </span>
            <span className="text-white/30 font-light ml-1">.</span>
          </h1>
        </a>

        {/* Mobile open button */}
        {!isMenuOpen && (
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="block lg:hidden cursor-pointer p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]"
          >
            <HiMenuAlt3 className="w-7 h-7" />
          </button>
        )}

        {/* Mobile backdrop */}
        {isMenuOpen && (
          <button
            type="button"
            aria-label="Close navigation menu backdrop"
            onClick={closeMenu}
            className="fixed inset-0 w-full h-dvh bg-black/70 backdrop-blur-sm z-40 lg:hidden cursor-default border-none outline-none"
          />
        )}

        {/* Drawer (mobile/tablet) / inline menu (desktop) */}
        <div
          id="mobile-navigation"
          className={`
            fixed top-0 right-0 z-50 h-dvh w-[80%] max-w-[320px] px-[30px] pt-[90px]
            bg-[#0f0f18]/95 backdrop-blur-2xl border-l border-white/[0.06]
            transition-[transform,visibility] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
            lg:static lg:h-auto lg:w-auto lg:max-w-none lg:p-0 lg:bg-transparent lg:border-none lg:backdrop-blur-none
            lg:translate-x-0 lg:visible
            ${isMenuOpen ? "translate-x-0 visible" : "translate-x-full invisible"}
          `}
        >
          {/* Mobile close button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="block lg:hidden absolute top-5 right-5 cursor-pointer p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]"
          >
            <HiX className="w-6 h-6" />
          </button>

          <ul className="flex flex-col items-start gap-[24px] lg:flex-row lg:items-center lg:gap-[8px] list-none m-0 p-0">
            {NAV_ITEMS.map((item) => {
              const isActive = menu === item.id;

              return (
                <li
                  key={item.id}
                  className="w-full lg:w-auto"
                >
                  <AnchorLink
                    href={`#${item.id}`}
                    offset={80}
                    onClick={() => handleMenuClick(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`no-underline block w-fit text-[17px] lg:text-[15px] font-medium px-3 py-2 rounded-lg transition-all duration-300
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]
                      ${
                        isActive
                          ? "text-[#a855f7] bg-[#a855f7]/[0.08]"
                          : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }`}
                  >
                    {item.label}
                  </AnchorLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop connect button */}
        <AnchorLink
          href="#contact"
          offset={80}
          onClick={() => setMenu("contact")}
          className="hidden lg:flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white no-underline whitespace-nowrap tracking-wide uppercase transition-all duration-400 ease-out
            bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5]
            hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:scale-105
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
        >
          <span>Let's Talk</span>
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </AnchorLink>
      </nav>
    </header>
  );
}
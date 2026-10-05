import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu();
  };

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
    <header className="sticky top-0 z-50 w-full animate-[fadeDown_0.7s_ease-out]">
      {/* Blur + background live on their own layer, NOT on <nav>,
          so they don't trap the fixed-position drawer. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/90 backdrop-blur-md"
      />

      <nav
        aria-label="Main navigation"
        className="relative w-full max-w-[1200px] mx-auto min-h-[75px] px-5 sm:px-7 lg:px-10 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleMenuClick("home")}
          aria-label="Piyush Singh - Home"
          className="no-underline shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B415FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <h1 className="text-[28px] sm:text-[30px] lg:text-[32px] font-bold m-0 whitespace-nowrap bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent">
            PIYUSH
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
            className="block lg:hidden cursor-pointer p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B415FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <img src={menu_open} alt="" className="w-7 h-7" />
          </button>
        )}

        {/* Mobile backdrop */}
        {isMenuOpen && (
          <button
            type="button"
            aria-label="Close navigation menu backdrop"
            onClick={closeMenu}
            className="fixed inset-0 w-full h-dvh bg-black/60 z-40 lg:hidden cursor-default border-none outline-none"
          />
        )}

        {/* Drawer (mobile/tablet) / inline menu (desktop) */}
        <div
          id="mobile-navigation"
          className={`
            fixed top-0 right-0 z-50 h-dvh w-[75%] max-w-[300px] px-[30px] pt-[85px]
            bg-[#1F0016] shadow-[-5px_0_25px_rgba(0,0,0,0.5)]
            transition-[transform,visibility] duration-300 ease-in-out
            lg:static lg:h-auto lg:w-auto lg:max-w-none lg:p-0 lg:bg-transparent lg:shadow-none
            lg:translate-x-0 lg:visible
            ${isMenuOpen ? "translate-x-0 visible" : "translate-x-full invisible"}
          `}
        >
          {/* Mobile close button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="block lg:hidden absolute top-5 right-5 cursor-pointer p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B415FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F0016]"
          >
            <img src={menu_close} alt="" className="w-5 h-5" />
          </button>

          <ul className="flex flex-col items-start gap-[28px] lg:flex-row lg:items-center lg:gap-[32px] list-none m-0 p-0 text-[18px]">
            {NAV_ITEMS.map((item) => {
              const isActive = menu === item.id;

              return (
                <li
                  key={item.id}
                  className="w-full lg:w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <AnchorLink
                    href={`#${item.id}`}
                    offset={80}
                    onClick={() => handleMenuClick(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`no-underline text-white block w-fit text-[20px] lg:text-[18px] transition-all duration-300 rounded-sm hover:text-[#DF8908] hover:underline hover:decoration-[#CB357E] hover:decoration-2 hover:underline-offset-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B415FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F0016] ${
                      isActive
                        ? "underline decoration-[#CB357E] decoration-2 underline-offset-[5px] font-medium"
                        : ""
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
          className="hidden lg:block shrink-0 px-5 py-2.5 rounded-[50px] bg-gradient-to-r from-[#B923E1] to-[#DA7C25] text-[17px] text-white no-underline whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B415FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Connect with me
        </AnchorLink>
      </nav>
    </header>
  );
}
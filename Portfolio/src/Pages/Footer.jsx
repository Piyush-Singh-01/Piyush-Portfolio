import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/919939606075",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/piyush-singh-b94203319",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Piyush-Singh-01",
  },
];

function Footer() {
  return (
    <footer className="relative mt-10">
      {/* Top gradient line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Left — Brand */}
          <div className="text-center md:text-left max-w-[400px]">
            <h2
              className="text-[28px] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
                PIYUSH SINGH
              </span>
              <span className="text-white/20 font-light ml-1">.</span>
            </h2>
            <p className="mt-3 text-[14px] leading-[1.8] text-[#6b6b80]">
              Full Stack Developer passionate about building modern,
              scalable web applications using the MERN stack.
            </p>
          </div>

          {/* Center — Quick links */}
          <div className="text-center">
            <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#6b6b80] mb-4">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <AnchorLink
                  key={link.id}
                  href={`#${link.id}`}
                  offset={80}
                  className="text-[14px] text-[#a1a1b5] hover:text-white no-underline transition-colors duration-300"
                >
                  {link.label}
                </AnchorLink>
              ))}
            </div>
          </div>

          {/* Right — Socials */}
          <div className="text-center md:text-right">
            <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#6b6b80] mb-4">
              Connect
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] text-[#6b6b80] hover:text-white hover:border-[#a855f7]/30 hover:bg-[#a855f7]/[0.06] transition-all duration-300"
                  >
                    <Icon className="w-[15px] h-[15px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.04] my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-[#6b6b80]">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Piyush Singh. Built with
            <HiHeart className="w-3.5 h-3.5 text-[#ec4899] inline" />
          </p>

          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
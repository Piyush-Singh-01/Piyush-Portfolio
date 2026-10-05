import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto mt-[80px] mb-[30px] px-5 animate-[fadeUp_0.8s_ease-out]">
      
      {/*  TOP  */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        
        {/* LEFT */}
        <div>
          <h1 className="text-[32px] font-semibold bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent">
            PIYUSH SINGH
          </h1>

          <p className="mt-2 text-[16px] leading-[26px] text-[#cfcfcf] max-w-[420px]">
            Full Stack Developer passionate about building modern,
            scalable web applications using the MERN stack and AI integrations.
            Experienced in developing responsive, user-focused applications
            and currently seeking a full-time Full Stack Developer opportunity.
          </p>
        </div>

        {/* RIGHT - Social Links */}
        <div>
          <div className="flex items-center justify-center gap-5 text-[26px]">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919939606075"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white transition-all duration-300 hover:scale-110 hover:text-[#B415FF]"
            >
              <FaWhatsapp />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/piyush-singh-b94203319"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-all duration-300 hover:scale-110 hover:text-[#B415FF]"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Piyush-Singh-01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white transition-all duration-300 hover:scale-110 hover:text-[#B415FF]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-[30px] border-0 h-px bg-[#333]" />

      {/*  BOTTOM  */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-[14px] text-[#aaa] pb-[10px]">
        
        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Piyush Singh. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <a
            href="#"
            className="cursor-pointer transition-colors duration-300 hover:text-white no-underline text-[#aaa]"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="cursor-pointer transition-colors duration-300 hover:text-white no-underline text-[#aaa]"
          >
            Privacy Policy
          </a>

          <a
            href="#contact"
            className="cursor-pointer transition-colors duration-300 hover:text-white no-underline text-[#aaa]"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
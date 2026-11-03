import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from "react-icons/hi";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { toast } from "react-toastify";

const CONTACT_INFO = [
  {
    icon: HiMail,
    label: "Email",
    value: "piyushsinghrajput9939@gmail.com",
    href: "mailto:piyushsinghrajput9939@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 9939606075",
    href: "tel:+919939606075",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Gurugram, Haryana (India)",
    href: null,
  },
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

function Contact() {
  const [loading, setLoading] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully");
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-[100px] px-5 max-w-[1200px] mx-auto"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
          Get In Touch
        </p>
        <h2
          className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <p className="mt-4 text-[16px] sm:text-[17px] text-[#a1a1b5] max-w-[560px] mx-auto leading-[1.7]">
          I'm currently looking for internship opportunities as a Full Stack
          Developer. Feel free to reach out!
        </p>
      </div>

      {/* Content grid */}
      <div
        ref={contentRef}
        className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 transition-all duration-700 ease-out ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left side — Contact info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact cards */}
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? { href: item.href, className: "no-underline" }
                : {};

              return (
                <Wrapper key={item.label} {...wrapperProps}>
                  <div className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#a855f7]/20 hover:bg-[#a855f7]/[0.03] transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#a855f7]/[0.08] text-[#a855f7] shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#6b6b80] mb-1">
                        {item.label}
                      </p>
                      <p className="text-[14px] sm:text-[15px] text-white/80 group-hover:text-white transition-colors duration-300 break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Social links */}
          <div>
            <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#6b6b80] mb-4">
              Follow me
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 hover:text-white hover:border-[#a855f7]/30 hover:bg-[#a855f7]/[0.06] transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right side — Form */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 space-y-5 p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          {/* Name & Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-[13px] font-semibold text-white/70 tracking-wide"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white text-[15px] border border-white/[0.08] outline-none transition-all duration-300 placeholder:text-[#555]
                  focus:border-[#a855f7]/40 focus:bg-[#a855f7]/[0.03] focus:shadow-[0_0_20px_rgba(168,85,247,0.08)]"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[13px] font-semibold text-white/70 tracking-wide"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white text-[15px] border border-white/[0.08] outline-none transition-all duration-300 placeholder:text-[#555]
                  focus:border-[#a855f7]/40 focus:bg-[#a855f7]/[0.03] focus:shadow-[0_0_20px_rgba(168,85,247,0.08)]"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-[13px] font-semibold text-white/70 tracking-wide"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your project or opportunity..."
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-white text-[15px] border border-white/[0.08] outline-none resize-none transition-all duration-300 placeholder:text-[#555]
                focus:border-[#a855f7]/40 focus:bg-[#a855f7]/[0.03] focus:shadow-[0_0_20px_rgba(168,85,247,0.08)]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[15px] font-semibold text-white
              bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5]
              shadow-[0_4px_20px_rgba(168,85,247,0.25)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.35)]
              cursor-pointer border-none transition-all duration-400 hover:scale-105
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_20px_rgba(168,85,247,0.25)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
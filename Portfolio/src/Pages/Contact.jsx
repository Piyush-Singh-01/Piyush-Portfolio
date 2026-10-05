import React, { useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { toast } from "react-toastify";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [contactRef, contactVisible] = useScrollAnimation();

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
      ref={contactRef}
      className={`
        flex flex-col items-center gap-12 md:gap-[70px]
        my-[60px] md:my-[80px] mx-auto max-w-[1200px] px-5 md:px-8 
        transition-all duration-1000 ease-out
        ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* TITLE */}
      <div className="relative">
        <h1 className="text-[32px] md:text-[42px] font-semibold text-center text-white">
          Get In Touch
        </h1>
        <img
          src={theme_pattern}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-2.5 -right-5 -z-10"
        />
      </div>

      {/* CONTACT CONTENT  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-start">
       
        {/*  LEFT SIDE  */}
        <div className="flex flex-col gap-5 w-full animate-[fadeLeft_0.8s_ease-out]">
          <h2 className="text-[28px] md:text-[36px] font-semibold bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#d0d0d0] max-w-[500px]">
            I'm currently looking for internship opportunities as a Full Stack
            Developer. If you have any opportunity or project collaboration,
            feel free to reach out. I would love to contribute and grow as a
            developer.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-[18px] mt-2">

            <a
              href="mailto:piyushsinghrajput9939@gmail.com"
              className="flex items-center gap-3 group w-fit text-[#d0d0d0] hover:text-white transition-colors"
            >
              <img src={mail_icon} alt="Email icon" className="w-[22px] h-[22px]" />
              <span className="text-[15px] md:text-[17px] break-all">
                piyushsinghrajput9939@gmail.com
              </span>
            </a>

            <a
              href="tel:+919939606075"
              className="flex items-center gap-3 group w-fit text-[#d0d0d0] hover:text-white transition-colors"
            >
              <img src={call_icon} alt="Phone icon" className="w-[22px] h-[22px]" />
              <span className="text-[15px] md:text-[17px]">
                +91 9939606075
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 text-[#d0d0d0]">
              <img src={location_icon} alt="Location icon" className="w-[22px] h-[22px]" />
              <p className="text-[15px] md:text-[17px]">
                Gurugram, Haryana (India)
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-2 text-[30px]">
            <a
              href="https://wa.me/919939606075"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white transition-transform duration-300 hover:scale-[1.15]"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://linkedin.com/in/piyush-singh-b94203319"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-transform duration-300 hover:scale-[1.15]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Piyush-Singh-01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white transition-transform duration-300 hover:scale-[1.15]"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/*  RIGHT SIDE FORM  */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 w-full max-w-[600px] lg:justify-self-end animate-[fadeRight_0.8s_ease-out]"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[15px] md:text-[16px] font-medium text-white"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-[18px] py-[14px] rounded-lg bg-[#1f1f1f] text-white text-[16px] border border-transparent outline-none transition-all duration-300 placeholder:text-[#777] focus:border-[#B415FF] focus:shadow-[0_0_15px_rgba(180,21,255,0.15)]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[15px] md:text-[16px] font-medium text-white"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-[18px] py-[14px] rounded-lg bg-[#1f1f1f] text-white text-[16px] border border-transparent outline-none transition-all duration-300 placeholder:text-[#777] focus:border-[#B415FF] focus:shadow-[0_0_15px_rgba(180,21,255,0.15)]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[15px] md:text-[16px] font-medium text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Enter your message"
              required
              className="w-full px-[18px] py-[14px] rounded-lg bg-[#1f1f1f] text-white text-[16px] border border-transparent outline-none resize-none transition-all duration-300 placeholder:text-[#777] focus:border-[#B415FF] focus:shadow-[0_0_15px_rgba(180,21,255,0.15)]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-fit px-[30px] py-[14px] mt-2 rounded-[40px] border-none bg-gradient-to-r from-[#B415FF] to-[#DF8908] text-white text-[17px] md:text-[18px] font-medium cursor-pointer transition-transform duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
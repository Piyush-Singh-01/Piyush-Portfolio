import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_image from "../assets/profile.png";

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
    const typingSpeed = isDeleting ? 60 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1800);
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
      className="flex flex-col items-center justify-center gap-[25px] text-center max-w-[900px] mx-auto p-5"
    >
      {/* Profile Image */}
      <img
        src={profile_image}
        alt="Piyush Singh - Full Stack Developer"
        className="mt-[50px] sm:mt-[80px] w-[170px] h-[170px] sm:w-[250px] sm:h-[250px]
         rounded-full object-cover border-4 border-[#B415FF] animate-[float_4s_ease-in-out_infinite]"
      />

      {/* Heading */}
      <h1 className="w-full text-[30px] sm:text-[42px] leading-[1.2] font-semibold text-white">
        {/* Name */}
        <span className="bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent">
          I'm Piyush Singh,{" "}
        </span>

        {/* Typing Effect */}
        <span
          aria-label={`I am a ${roles[roleIndex]}`}
          className="inline-block min-w-[260px] sm:min-w-[360px] text-left"
        >
          <span aria-live="polite" aria-atomic="true" className="sr-only">
            {roles[roleIndex]}
          </span>

          {/* Visual typing text */}
          <span aria-hidden="true">
            {displayText}
            <span
              className="text-[#B415FF] animate-pulse ml-[2px]"
              aria-hidden="true"
            >
              |
            </span>
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="text-[18px] sm:text-[22px] px-[10px] sm:px-0 max-w-[600px] text-[#d0d0d0]">
        I am a Fullstack Developer from INDIA
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[15px] sm:gap-5 text-[20px] mb-10">
        {/* Connect Button */}
        <AnchorLink
          href="#contact"
          offset={50}
          aria-label="Connect with Piyush Singh"
          className="px-[15px] py-[8px] md:px-[30px] md:py-[10px] rounded-[40px]
            bg-gradient-to-r from-[#B415FF] to-[#DF8908] text-white no-underline
            border-transparent transition-all duration-300 hover:scale-105
            hover:border-white focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#B415FF] focus-visible:ring-offset-2
            focus-visible:ring-offset-black animate-[fadeUp_1s_ease-out]"
        >
          Connect with me
        </AnchorLink>

        {/* Resume Button */}
        <button
          type="button"
          onClick={handleResume}
          aria-label="Open Piyush Singh resume in a new tab"
          className="px-[25px] py-[8px] md:px-[30px] md:py-[10px] rounded-[40px] 
           border-2 border-white bg-transparent text-white cursor-pointer transition-all
           duration-300 hover:scale-105 hover:border-[#B415FF] focus-visible:outline-none 
           focus-visible:ring-2 focus-visible:ring-[#B415FF] focus-visible:ring-offset-2
          focus-visible:ring-offset-black animate-[fadeUp_1.2s_ease-out]"
        >
          My resume
        </button>
      </div>
    </section>
  );
}
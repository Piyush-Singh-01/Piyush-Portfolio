import { HiExternalLink, HiLockClosed } from "react-icons/hi";
import ai_assistant from "../assets/ai_assistant.png";
import ecommerce from "../assets/E_commerce.png";
import movie_app from "../assets/movie_app.png";
import chatgpt_clone from "../assets/chatgpt_clone.png";
import netflix_clone from "../assets/netflix_clone.png";
import Applicant_Tracking from "../assets/Applicant_Tracking.png";
import useScrollAnimation from "../hooks/useScrollAnimation";

const MY_WORK_DATA = [
  {
    w_no: 1,
    w_name: "AI Virtual Assistant",
    w_desc:
      "Voice-based AI assistant built with JavaScript and APIs to perform tasks and answer queries.",
    w_img: ai_assistant,
    w_link: "https://piyush-ai-virtual-assistance.onrender.com",
    w_tags: ["React", "Rest API", "Gemini API"],
  },
  {
    w_no: 2,
    w_name: "E-commerce Platform",
    w_desc:
      "Full-stack MERN e-commerce with product management, cart, wishlist, order tracking, admin dashboard, and Razorpay payments.",
    w_img: ecommerce,
    w_link: "https://cartify-eosin-chi.vercel.app/",
    w_tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
  },
  {
    w_no: 3,
    w_name: "Applicant Tracking System",
    w_desc:
      "Full-stack recruitment platform for managing job postings, applicants, recruitment workflows, and hiring activities.",
    w_img: Applicant_Tracking,
    w_link: "",
    w_tags: ["MERN", "TanStack Query", "Pdf-Parse", "Puppeteer"],
  },
  {
    w_no: 4,
    w_name: "Movie Guide App",
    w_desc:
      "React-based movie discovery app with API integration to search films and explore ratings, trailers, and details.",
    w_img: movie_app,
    w_link: "https://piyush-singh-01.github.io/Movie-Guide/",
    w_tags: ["React", "API", "CSS"],
  },
  {
    w_no: 5,
    w_name: "ChatGPT Clone",
    w_desc:
      "AI-powered chat application using the OpenAI API with a responsive conversational interface and real-time interactions.",
    w_img: chatgpt_clone,
    w_link: "https://piyush-singh-01.github.io/PIYUSH-GPT/",
    w_tags: ["React", "Gemini API", "Tailwind CSS"],
  },
  {
    w_no: 6,
    w_name: "Netflix Clone",
    w_desc:
      "Responsive movie streaming interface with React and API integration for browsing movies, TV shows, and content.",
    w_img: netflix_clone,
    w_link: "https://netflix-clone-jove.onrender.com",
    w_tags: ["React", "API", "Firebase"],
  },
];

export default function Project() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section
      id="work"
      className="relative py-[100px] px-5 max-w-[1200px] mx-auto"
    >
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#6366f1]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-[#ec4899]/[0.03] rounded-full blur-[100px] pointer-events-none" />

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
          My Work
        </p>
        <h2
          className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="mt-4 text-[16px] sm:text-[17px] text-[#a1a1b5] max-w-[560px] mx-auto leading-[1.7]">
          A selection of projects that showcase my skills in building
          modern full-stack web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MY_WORK_DATA.map((work, index) => {
          const isLive = !!work.w_link;

          const Card = (
            <div
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
              className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden
                transition-all duration-500 ease-out h-full
                ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${
                  isLive
                    ? "cursor-pointer hover:border-[#a855f7]/25 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.1)]"
                    : ""
                }`}
            >
              {/* Image container */}
              <div className="relative overflow-hidden aspect-video bg-[#0d0d16]">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Link icon on hover */}
                {isLive ? (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[13px] font-medium">
                      <HiExternalLink className="w-4 h-4" />
                      View Live
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/50 text-[11px] font-medium">
                      <HiLockClosed className="w-3 h-3" />
                      Private
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {work.w_tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#a855f7]/[0.08] text-[#a855f7]/80 border border-[#a855f7]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-[18px] sm:text-[19px] font-bold text-white/90 group-hover:text-white transition-colors duration-300 mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {work.w_name}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] leading-[1.7] text-[#a1a1b5] flex-1">
                  {work.w_desc}
                </p>
              </div>
            </div>
          );

          return isLive ? (
            <a
              key={work.w_no}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${work.w_name} live project (opens in new tab)`}
              className="no-underline text-inherit block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] rounded-2xl"
            >
              {Card}
            </a>
          ) : (
            <div key={work.w_no} className="block h-full">
              {Card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
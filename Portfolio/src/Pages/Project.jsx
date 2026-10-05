import theme_pattern from "../assets/theme_pattern.svg";

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
    w_desc: "Voice-based AI assistant built with JavaScript and APIs to perform tasks and answer queries.",
    w_img: ai_assistant,
    w_link: "https://piyush-ai-virtual-assistance.onrender.com",
  },
  {
    w_no: 2,
    w_name: "E-commerce Website with Admin Panel",
    w_desc: "Full-stack MERN e-commerce platform with product management, shopping cart, wishlist, order tracking, admin dashboard, and Razorpay payments.",
    w_img:ecommerce,
    w_link: "https://cartify-eosin-chi.vercel.app/"
  },
  {
    w_no: 3,
    w_name: "Applicant Tracking and Recruitment Management System",
    w_desc: "Full-stack recruitment platform for managing job postings, applicants, recruitment workflows, interviews, and hiring activities.",
    w_img: Applicant_Tracking,
    w_link: "",
  },
  {
    w_no: 4,
    w_name: "Movie Guide App",
    w_desc:
      "React-based movie discovery app using a movie API to search films and explore ratings, trailers, and detailed information.",
    w_img: movie_app,
    w_link: "https://piyush-singh-01.github.io/Movie-Guide/",
  },
  {
    w_no: 5,
    w_name: "ChatGPT Clone",
    w_desc:
      "AI-powered chat application using the OpenAI API with a responsive conversational interface and real-time interactions.",
    w_img: chatgpt_clone,
    w_link: "https://piyush-singh-01.github.io/PIYUSH-GPT/",
  },
  {
    w_no: 6,
    w_name: "Netflix Clone",
    w_desc:
      "Responsive movie streaming interface built with React and API integration for browsing movies, TV shows, and detailed content.",
    w_img: netflix_clone,
    w_link: "https://netflix-clone-jove.onrender.com",
  },
];

export default function Project() {
  const [projectsRef, projectsVisible] = useScrollAnimation();

  return (
    <section
      id="work"
      className="flex flex-col items-center gap-[60px] my-[80px] mx-auto max-w-[1200px] px-5"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-[32px] md:text-[42px] font-semibold text-white">
          My Projects
        </h1>
        <img
          src={theme_pattern}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[-10px] right-[-20px] -z-10"
        />
      </div>

      {/* Projects Grid */}
      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full"
      >
        {MY_WORK_DATA.map((work, index) => {
          const CardContent = (
            <div
              style={{
                transitionDelay: projectsVisible ? `${index * 120}ms` : "0ms",
              }}
              className={`bg-[#111] rounded-[15px] p-5 border border-[#333] transition-all duration-300 ease-out h-full flex flex-col justify-between ${
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                work.w_link
                  ? "cursor-pointer hover:-translate-y-2 hover:border-[#B415FF] hover:shadow-[0_15px_40px_rgba(180,21,255,0.15)]"
                  : ""
              }`}
            >
              <div>
                {/* Project Image */}
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-full h-[180px] object-cover rounded-[10px]"
                />

                {/* Project Title */}
                <h2 className="text-[22px] mt-[15px] font-semibold text-white">
                  {work.w_name}
                </h2>

                {/* Project Description */}
                <p className="text-[15px] text-[#cfcfcf] leading-[22px] mt-2">
                  {work.w_desc}
                </p>
              </div>
            </div>
          );

          return work.w_link ? (
            <a
              key={work.w_no}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${work.w_name} live project (opens in new tab)`}
              className="no-underline text-inherit block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B415FF] rounded-[15px]"
            >
              {CardContent}
            </a>
          ) : (
            <div key={work.w_no} className="block h-full">
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
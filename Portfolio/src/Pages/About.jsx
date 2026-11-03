import profile_image from "../assets/my_photo_2.jpeg";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { HiCode, HiLightningBolt, HiGlobe } from "react-icons/hi";

const SKILLS = [
  { name: "React / Next.js", percent: 90 },
  { name: "JavaScript / TypeScript", percent: 85 },
  { name: "Node.js / Express", percent: 85 },
  { name: "HTML & CSS", percent: 95 },
  { name: "MongoDB / MySQL", percent: 80 },
  { name: "DSA / Problem Solving", percent: 75 },
];

const STATS = [
  { value: "4+", label: "Months Experience", icon: HiLightningBolt },
  { value: "5+", label: "MERN Projects", icon: HiCode },
  { value: "5+", label: "Live Deployments", icon: HiGlobe },
];

function About() {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      className="relative py-[100px] px-5 max-w-[1200px] mx-auto"
    >
      {/* Section heading */}
      <div
        ref={aboutRef}
        className={`text-center mb-16 transition-all duration-700 ease-out ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p
          className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#a855f7] mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          About Me
        </p>
        <h2
          className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Know Who I Am
          </span>
        </h2>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left — Photo + Bio */}
        <div
          className={`transition-all duration-700 ease-out delay-200 ${
            aboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Photo card */}
          <div className="relative group">
            {/* Glow behind */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 via-transparent to-[#6366f1]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
              <img
                src={profile_image}
                alt="Piyush Singh"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Bio text */}
          <div className="mt-8 space-y-4">
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#a1a1b5]">
              I'm a passionate <span className="text-white font-medium">MERN Stack Developer</span> with
              hands-on experience building full-stack web applications using
              MongoDB, Express, React, and Node.js.
            </p>
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#a1a1b5]">
              I enjoy solving real-world problems through code and continuously
              improving my skills in <span className="text-white font-medium">DSA</span> and
              modern web technologies.
            </p>
          </div>
        </div>

        {/* Right — Skills */}
        <div
          ref={skillsRef}
          className={`transition-all duration-700 ease-out delay-300 ${
            skillsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h3
            className="text-[22px] sm:text-[24px] font-bold mb-8 text-white/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Technical Skills
          </h3>

          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{
                  transitionDelay: skillsVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                {/* Label & percent */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[14px] sm:text-[15px] font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span
                    className="text-[13px] font-semibold text-[#a855f7]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {skill.percent}%
                  </span>
                </div>

                {/* Bar track */}
                <div className="relative h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
                  {/* Fill */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] transition-all duration-1000 ease-out"
                    style={{
                      width: skillsVisible ? `${skill.percent}%` : "0%",
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  />
                  {/* Shimmer effect */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      width: `${skill.percent}%`,
                      animation: "shimmer 2s ease-in-out infinite",
                      backgroundSize: "200% 100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack tags */}
          <div className="mt-10">
            <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#6b6b80] mb-4">
              Also familiar with
            </p>
            <div className="flex flex-wrap gap-2">
              {["Git", "REST APIs", "Tailwind CSS", "Firebase", "Vite", "VS Code", "Figma"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-white/50 bg-white/[0.04] border border-white/[0.06] hover:border-[#a855f7]/30 hover:text-[#a855f7] hover:bg-[#a855f7]/[0.04] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 transition-all duration-700 ease-out ${
          statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              style={{
                transitionDelay: statsVisible ? `${index * 120}ms` : "0ms",
              }}
              className={`group relative flex flex-col items-center gap-3 py-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#a855f7]/20 hover:bg-[#a855f7]/[0.03] transition-all duration-500 ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#a855f7]/[0.08] text-[#a855f7] mb-1 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3
                className="text-[36px] sm:text-[42px] font-extrabold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </h3>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#a1a1b5]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
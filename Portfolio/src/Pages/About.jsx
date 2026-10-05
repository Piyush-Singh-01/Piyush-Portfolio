import theme_pattern from "../assets/theme_pattern.svg";
import profile_image from "../assets/my_photo_2.jpeg";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const [aboutRef, aboutVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`flex flex-col items-center justify-center gap-[60px] my-[80px] mx-auto px-5 max-w-[1400px] transition-all duration-1000 ease-out ${
        aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* TITLE  */}
      <div className="relative">
        <h1 className="px-[30px] text-[50px] font-semibold md:text-[80px] max-md:px-0">
          About me
        </h1>

        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 max-md:w-[130px] max-md:right-[-20px]"
        />
      </div>

      {/* ABOUT SECTION  */}
      <div className="flex gap-[80px] w-full items-center max-md:flex-col max-md:gap-[50px]">
        {/* Left - Profile Image */}
        <div className="flex justify-center shrink-0 animate-[fadeLeft_0.9s_ease-out]">
          <img
            src={profile_image}
            alt="Piyush Singh"
            className="w-[300px] h-[400px] object-cover rounded-lg md:w-[400px] md:h-[530px]"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-[50px] flex-1 md:gap-[80px] animate-[fadeLeft_0.9s_ease-out]">
          {/* Paragraphs */}
          <div className="flex flex-col gap-5 text-[18px] font-medium leading-[1.5] md:text-[24px]">
            <p>
              I am a passionate MERN Stack Developer with hands-on experience
              in building full-stack web applications using MongoDB, Express,
              React, and Node.js.
            </p>

            <p>
              I enjoy solving real-world problems through code and continuously
              improving my skills in DSA and modern web technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-5">

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                HTML & CSS
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                React JS
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                JavaScript
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                Node JS
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                Express JS
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                MongoDB
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                MySQL
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>

            <div className="flex items-center gap-5 transition-transform duration-300 hover:scale-[1.05] md:gap-[50px]">
              <p className="min-w-[120px] text-[18px] font-medium md:min-w-[150px] md:text-[24px]">
                DSA
              </p>
              <hr className="h-[6px] w-1/2 border-none rounded-full bg-gradient-to-r from-[#B415FF] to-[#DF8908] md:h-[10px]" />
            </div>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="flex w-full justify-around items-center gap-5 mb-[80px] max-md:justify-between">
        {/* Experience */}
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12] text-center">
          <h1 className="text-[34px] font-bold bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent md:text-[60px]">
            4+
          </h1>
          <p className="text-[16px] font-medium md:text-[22px]">
            Months of Experience
          </p>
        </div>

        {/* Divider */}
        <hr className="h-[80px] border-none border-l border-[#444] md:h-[100px]" />

        {/* Projects */}
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12] text-center">
          <h1 className="text-[34px] font-bold bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent md:text-[60px]">
            5+
          </h1>
          <p className="text-[16px] font-medium md:text-[22px]">
            MERN Stack Projects
          </p>
        </div>

        {/* Divider */}
        <hr className="h-[80px] border-none border-l border-[#444] md:h-[100px]" />

        {/* Live Projects */}
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-[1.12] text-center">
          <h1 className="text-[34px] font-bold bg-gradient-to-r from-[#B415FF] to-[#DF8908] bg-clip-text text-transparent md:text-[60px]">
            5+
          </h1>
          <p className="text-[16px] font-medium md:text-[22px]">
            Live Project Deployed
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
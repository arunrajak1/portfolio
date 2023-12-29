import React from "react";
import heroImg from "../../assets/images/hero.svg";
import Arun_Rajak_Resume from "../../assets/resume/Arun_Rajak_Resume.pdf"
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between  sm:flex-col md:flex-row">
          {/* ======= hero left content  start ======== */}
          <div className="w-full basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600 text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-smallTextColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                     sm:leading-[46px] mt-5"
            >
              I'm Arun Rajak <br /> Softwere Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className=" bg-primaryColor rounded-[8px] py-2 px-4 text-white font-[500]
                flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300"
                >
                  <i className="ri-mail-line"></i> Hire me
                </button>
              </a>
              <button
                className=" bg-primaryColor rounded-[8px] py-2 px-4 text-white font-[500]
                flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300"
              >
                <a
                  className="button"
                  href={Arun_Rajak_Resume}
                  download="Arun_Rajak_Resume.pdf"
                >
                  <i className="ri-download-line"> Resume</i>
                </a>
              </button>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex  gap-2 text-headingColor mt-6 font-[500] text-[16px] leading-7 sm:pl-5
               sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Frontend developer with a 1 year experience in MERN Stack
              development, proficient in React JS, HTML, CSS, Tailwind CSS, NodeJs,
              ExpressJs, MySQL, MongoDB, and JavaScript. Contributing to web
              applications at DXFactor Solution.
            </p>
            <div className="flex items-center gap-9  mt-14">
              <span className="text-smallTextColor text-[17px] font-[600]">
                Follow me :
              </span>
              <span className="h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/arunrajak1"
                  className="text-white text-[18px] font-[600]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/arun-rajak-a5858416a"
                  className="text-white text-[18px] font-[600"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://twitter.com/arunrajak527"
                  className="text-white text-[18px] font-[600]"
                >
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ======= hero left content end ======== */}
          {/* ======= Hero Imgage start========= */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure flex="true" items-center="true" justify-center="true">
              <img src={heroImg} alt="MyImage" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

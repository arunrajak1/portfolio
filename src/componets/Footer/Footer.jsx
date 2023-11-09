import React from "react";

const Footer = () => {

  const year=new Date().getFullYear()
  return (
    <footer className="bg-[#12141e]  pt-12">
      {/* ========= footer tag ========== */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-3 md:text-[2rem] ">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor rounded-[8px] py-2 px-4 text-white font-[500]
                flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300"
              >
                <i className="ri-mail-line"></i> Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
            Frontend developer, I created websites and dashboard . 
            I have a year of experience and many client are happy with the project carried out.
            </p>
            <div className="flex items-center gap-4  flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/arunrajak1"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/arun-rajak-a5858416a"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="h-[35px] w-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://twitter.com/arunrajak527"
                  className="text-gray-300 text-[18px] font-[500]"
                >
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ====== Footer End ====== */}
      {/* ====== Footer bottom Start====== */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className=" flex items-center gap-3">
                <span
                  className="w-[35px] h-[35px] bg-[#2b2d33] text-white tex-[18px] font-[500]
                rounded-full flex items-center justify-center"
                >
                  A
                </span>

                <div className="leading-[20px]">
                  <h2 className=" text-gray-200 font-[500] text-[18px]">
                    Arun
                  </h2>
                  <p className="text-gray-200  text-[14px] font-[500]">
                    personal
                  </p>
                </div>
              </div>
            </div>
            <div>
                <p className="text-gray-400 text-[14px]">Copyright {year} developed by Arun - All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ====== Footer bottom  End====== */}
    </footer>
  );
};

export default Footer;

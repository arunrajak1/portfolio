import React,{useRef,useEffect} from "react";
import { FaWhatsapp } from 'react-icons/fa';

function Header() {

const headerRef=useRef(null);

const StickyHeaderFunc = ()=>{
  window.addEventListener('scroll',()=>{
     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky_header');
     }
     else{
      headerRef.current.classList.remove('sticky_header');
     }
  })
}

useEffect(()=>{
StickyHeaderFunc();

return window.removeEventListener('scroll',StickyHeaderFunc)
},[])

  return (
<header ref={headerRef}
className="w-full h-[80px] leading-[80px] flex items-center flex='true'">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============= Logo ============= */}
          <div className=" flex items-center gap-3">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white tex-[18px] font-[500]
                rounded-full flex items-center justify-center"
            >
              A
            </span>

            <div className="leading-[18px]">
              <h2 className="text-xl text-smallTextColor font-[600]">Arun</h2>
              <p className="text-smallTextColor  text-[18px] font-[600]">
                personal
              </p>
            </div>
          </div>
          {/* ======= Logo end ======= */}

          {/* ======= Menu start ====== */}
          <div className="menu flex">
            <ul className="items-center gap-[20px]  font-semibold cursor-pointer hidden md:flex">
              <li>
                <a className="text-smallTextColor" href="#about">About</a>
              </li>
              <li>
                <a className="text-smallTextColor" href="#services">Services</a>
                
              </li>
              <li>
                <a className="text-smallTextColor" href="#portfolio">Portfolio</a>
                
              </li>
              <li>
                <a className="text-smallTextColor" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* ======= Menu end ====== */}

          {/* ======= Menu Right start ======= */}
          <div className="flex items-center gap-4">
            <button
              className="items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-[300]  hidden md:flex"
            >
             <a href="https://wa.me/9516619816" className="flex items-center gap-2">
             <FaWhatsapp className="text-2xl text-green-400 rounded-full"/>
              <span>Let's Talk</span>
             </a>
            </button>
            <div className="">
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
            </div>
          </div>
          {/* ======= Menu Right end ======= */}
        </div>
      </div>
    </header>
  );
}

export default Header;

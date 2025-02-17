import { useMemo } from "react";
import FloatingTextEffect from "../FloatingTexts";
import Marquee from "react-fast-marquee";
import Thoughtprocess from "../home/ThoughtProcess";

const Sub = () => {
  // ✅ Memoizing Marquee to prevent unnecessary re-renders
  const marqueeComponent = useMemo(() => (
    <Marquee speed={40} gradient={false} pauseOnHover={true} direction="right">
      <h1 className="font-semibold text-xl text-black mx-8">Open to Work</h1>
      <h1 className="font-semibold text-xl text-black mx-8">Open to Work</h1>
      <h1 className="font-semibold text-xl text-black mx-8">Open to Work</h1>
      <h1 className="font-semibold text-xl text-black mx-8">Open to Work</h1>
    </Marquee>
  ), []);

  return (
    <section data-scroll-section className='selection:bg-sky-500 selection:text-white roboto-condensed-regular min-h-fit bg-[#f5f5f5] p-8 pt-24 md:pl-[9rem] text-black'>
      <div data-scroll data-scroll-speed="-1.5" className="flex flex-col md:flex-row gap-4 justify-center items-start py-[2rem]">
        <div className="w-full h-full md:w-[48%] flex flex-col justify-around items-center gap-6">
          <div className="border-2 border-black p-2 roboto-condensed-regular rounded-sm w-full">
            <h2 className="font-semibold text-2xl">Designed for Interaction</h2>
            <p className="font-medium">
              Seamless interactions that enhance, not distract—because good design feels effortless.
            </p>
          </div>

          {/* ✅ Memoized Marquee */}
          {marqueeComponent}

          <div className="border-2 border-black p-[1rem] roboto-condensed-regular rounded-sm flex justify-around text-sm sm:text-lg w-full">
            <p className="font-bold">Handles</p>
            <a href="https://www.linkedin.com/in/utsvsxn1" target="blank">LinkedIn</a>
            <a href="https://github.com/Utsav-sxn" target="_blank">GitHub</a>
            <a href="https://leetcode.com/u/Utsav1101/" target="blank">LeetCode</a>
          </div>
        </div>

        <div data-scroll data-scroll-speed="-0.1" className="w-full flex justify-center items-center rounded-sm lg:bg-black overflow-hidden">
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <div className="w-70 min-h-full md:h-60 md:w-60 relative overflow-hidden">
              <img
                data-scroll
                data-scroll-speed="-1"
                src="src/assets/utsavSxnwhite_11zon.jpg"
                alt="Utsav"
                className="w-full h-full object-cover mix-blend-difference clip-triangle grayscale-100 z-20"
              />
              <p className="absolute top-[1rem] left-[50%] -translate-x-[50%] text-white text-xl font-medium font-mono tracking-widest hidden md:block">
                UTSAV
              </p>
            </div>
          </div>
          <FloatingTextEffect />
        </div>
      </div>
      <div className="pb-[2rem] px-[1rem]">
        <Thoughtprocess />
      </div>
    </section>
  );
};

export default Sub;

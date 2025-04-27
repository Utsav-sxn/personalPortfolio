import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Marquee from "react-fast-marquee";
import AppleProject from '../components/projects/AppleProject';
import PortfolioProject from '../components/projects/PortfolioProject';
import WorkwiseProject from '../components/projects/WorkwiseProject';
import ZerodhaProject from '../components/projects/ZerodhaProject';
import AIFightingArenaProject from '../components/projects/AIFightingArena';

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      setTimeout(() => {
        scroll.update();
      }, 1000);

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <>
      <div ref={scrollRef} data-scroll-container className="w-full min-h-screen flex flex-col gap-[1rem] relative bg-[#f5f5f7] p-[1rem] sm:pl-[9rem]">
        <div data-scroll-section><AppleProject /></div>
        <div data-scroll-section><AIFightingArenaProject /></div>
        <div data-scroll-section><WorkwiseProject /></div>
        <div data-scroll-section><PortfolioProject /></div>
        <div data-scroll-section><ZerodhaProject /></div>
        <div data-scroll-section className="h-10 flex items-center">
          <Marquee speed={60} gradient={false} pauseOnHover={true}>
            <h1 className="font-medium text-xl text-[#A0A0A0] mx-10">That&apos;s a wrap! &nbsp;&nbsp; More projects coming soon... &nbsp;&nbsp; Stay tuned for new updates.</h1>
            <h1 className="font-medium text-xl text-[#A0A0A0] mx-10">That&apos;s a wrap! &nbsp;&nbsp; More projects coming soon... &nbsp;&nbsp; Stay tuned for new updates.</h1>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Projects;

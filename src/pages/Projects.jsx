import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Marquee from "react-fast-marquee";
import AppleProject from '../components/projects/AppleProject';
import PortfolioProject from '../components/projects/PortfolioProject';
import WorkwiseProject from '../components/projects/WorkwiseProject';
import ZerodhaProject from '../components/projects/ZerodhaProject';
import ScrollProgress from '../components/global/Scrollprogress';
const Projects = () => {
  useEffect(() => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
  
      return () => {
        scroll.destroy();
      };
    }, []);


  return (
    <>
    <ScrollProgress></ScrollProgress>
    <div data-scroll-container className="w-full h-fit relative bg-[#f5f5f7] p-[1rem]  sm:pl-[9rem] ">
      <AppleProject></AppleProject>
      <PortfolioProject></PortfolioProject>
      <WorkwiseProject></WorkwiseProject>
      <ZerodhaProject></ZerodhaProject>
      <div className="h-10 flex items-center">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        <h1 className="font-medium text-xl text-[#A0A0A0] mx-10">That&apos;s a wrap! &nbsp;&nbsp; More projects coming soon... &nbsp;&nbsp; Stay tuned for new updates.</h1>
        <h1 className="font-medium text-xl text-[#A0A0A0] mx-10">That&apos;s a wrap! &nbsp;&nbsp; More projects coming soon... &nbsp;&nbsp; Stay tuned for new updates.</h1>
      </Marquee>

      </div>
    </div>
    </>
    
  )
}

export default Projects
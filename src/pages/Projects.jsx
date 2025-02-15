import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import AppleProject from '../components/AppleProject';
import ZerodhaProject from '../components/ZerodhaProject';


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
    <div data-scroll-container className="w-full h-fit relative bg-[#f5f5f7] sm:pl-[9rem] ">
      <AppleProject></AppleProject>
      <ZerodhaProject></ZerodhaProject>
    </div>
    
  )
}

export default Projects
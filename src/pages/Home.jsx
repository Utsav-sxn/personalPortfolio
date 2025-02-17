import { useEffect, useRef, useState } from 'react'; 
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Hero from '../components/home/Hero';
import About from '../components/home/Sub';
import ScrollProgressBar from '../components/global/Scrollprogress';
import ScrollIndicator from '../components/home/ScrollIndicator';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocoScroll] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      setLocoScroll(scroll);

      // ✅ Force refresh on mount & after route change
      setTimeout(() => {
        scroll.update();
      }, 1000);

      return () => {
        scroll.destroy();
      };
    }
  }, [location.pathname]); // ✅ Refresh on page change

  // ✅ Another Fix: Ensure height updates
  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.update();
    }
  }, [locomotiveScroll]);

  return (
    <>
      <ScrollProgressBar />
      <ScrollIndicator locomotiveScroll={locomotiveScroll} />
      <div 
        ref={scrollRef} 
        data-scroll-container 
        className='roboto-condensed-regular z-20 min-h-screen pt-[2rem] sm:pt-0 overflow-hidden'
      >
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;

import { useEffect, useRef, useState, Suspense } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Hero from '../components/home/Hero';
import About from '../components/home/Sub';
import ScrollProgressBar from '../components/global/Scrollprogress';
import ScrollIndicator from '../components/home/ScrollIndicator';

const Home = () => {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocoScroll] = useState(null);

  useEffect(() => {
    const handlePageLoad = () => {
      if (scrollRef.current) {
        console.log("Initializing Locomotive Scroll...");
  
        const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });
  
        setLocoScroll(scroll);
  
        // ✅ Force scroll update after content is loaded
        setTimeout(() => {
          console.log("Updating Locomotive Scroll...");
          scroll.update();
        }, 1000);  // Delay to ensure page is loaded
  
        return () => {
          console.log("Destroying Locomotive Scroll...");
          scroll.destroy();
        };
      }
    };
  
    // Trigger scroll initialization once the page is loaded
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.onload = handlePageLoad;
    }
  }, []);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollProgressBar />
      <ScrollIndicator locomotiveScroll={locomotiveScroll} />
      <div
        ref={scrollRef}
        data-scroll-container
        className='roboto-condensed-regular z-20 min-h-screen pt-[2rem] sm:pt-0 overflow-visible'
      >
        <Hero />
        <About />
      </div>
    </Suspense>
  );
};

export default Home;

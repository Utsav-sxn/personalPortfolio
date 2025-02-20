import { useEffect, useRef, useState } from 'react';
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
    document.querySelectorAll(".c-scrollbar").forEach(el => el.remove());

    if (!scrollRef.current) return;
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    setLocoScroll(scroll);

    setTimeout(() => {
      scroll.update();
    }, 1000);

    return () => {
      scroll.destroy();
      setLocoScroll(null);
      document.querySelectorAll(".c-scrollbar").forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <ScrollIndicator locomotiveScroll={locomotiveScroll} />
      <div
        ref={scrollRef}
        data-scroll-container
        className='roboto-condensed-regular z-20 min-h-screen pt-[2rem] sm:pt-0'
      >
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;

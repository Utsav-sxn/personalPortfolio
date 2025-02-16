import { useEffect, useRef, useState } from 'react'; 
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Hero from '../components/Hero';
import About from '../components/Sub';
import ScrollProgressBar from '../components/global/Scrollprogress';
import ScrollIndicator from '../components/ScrollIndicator';

const Home = () => {
  const scrollRef = useRef(null);
  const [locomotiveScroll, setLocoScroll] = useState(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    setLocoScroll(scroll);

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <ScrollIndicator locomotiveScroll={locomotiveScroll} />
      <div ref={scrollRef} data-scroll-container className='roboto-condensed-regular z-20 max-h-fit pt-[2rem] sm:pt-0'>
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Home;
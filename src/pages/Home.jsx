import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Hero from '../components/Hero';
import About from '../components/About';
import ScrollProgressBar from '../components/global/Scrollprogress';

const Home = () => {
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
    <ScrollProgressBar></ScrollProgressBar>
      <div data-scroll-container className='roboto-condensed-regular z-20 max-h-fit'>
        <Hero></Hero>
        <About></About>
      </div>
    </>
  );
}
export default Home

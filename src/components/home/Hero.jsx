import Marquee from "react-fast-marquee"
import { useMemo } from "react";
const Hero = () => {  

  const marqueeComponent = useMemo(() => (
    <Marquee className="h-[10.5rem]" speed={120} gradient={true} gradientColor="black" gradientWidth={200}>
      <p className="mx-12 md:text-9xl hover:text-[#a1a1a6] transition-all duration-200">Web Developer</p>
      <p className="mx-12 md:text-9xl hover:text-[#a1a1a6] transition-all duration-200">UI Designer</p>
      <p className="mx-12 md:text-9xl hover:text-[#a1a1a6] transition-all duration-200">Web Developer</p>
      <p className="mx-12 md:text-9xl hover:text-[#a1a1a6] transition-all duration-200">UI Designer</p>
    </Marquee>
  ), []);

  return (
    <section data-scroll-section className='px-8 sm:pl-[9rem] h-[40rem] sm:h-[100vh] relative top-0 overflow-hidden bg-[#000] selection:bg-orange-500 selection:text-black flex flex-col justify-center items-center md:flex-row gap-2 z-10'>
  <div className="w-full min-h-fit">
    <div className="h-fit w-full text-xl md:text-5xl text-center md:text-end text-[#a1a1a6]">Utsav Saxena</div>
    {marqueeComponent}
  </div>
</section>

  )
}

export default Hero
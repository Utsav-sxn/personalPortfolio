import FloatingText from "./FloatingTexts";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <section data-scroll-section className='selection:bg-sky-500 selection:text-white roboto-condensed-regular h-[70vh] bg-[#f5f5f5] p-8 pt-24  md:pl-[9rem] text-black '>
        <div data-scroll data-scroll-speed="-1.5" className="flex flex-col md:flex-row  gap-4 justify-center items-start py-[2rem]">
            <div className="w-full h-full md:w-[48%] flex flex-col justify-around items-center gap-6">
                <div className="border-2 border-black p-[1rem] roboto-condensed-regular rounded-sm w-full">
                    <h2 className="font-semibold text-2xl">Designed for Interaction</h2>
                    <p className="font-medium">
                        Seamless interactions that enhance, not distract—because good design feels effortless.
                    </p>
                </div>
                <Marquee speed={20} gradient={false} pauseOnHover={true} direction="right">
                <h1 className="font-semibold text-xl text-black mx-8">Available for Work</h1>
                <h1 className="font-semibold text-xl text-black mx-8">Available for Work</h1>
                <h1 className="font-semibold text-xl text-black mx-8">Available for Work</h1>
                <h1 className="font-semibold text-xl text-black mx-8">Available for Work</h1>
                </Marquee>

                <div className="border-2 border-black outline-2 outline-offset-4 p-[1rem] roboto-condensed-regular rounded-sm flex justify-around w-full">
                <p className="text-lg font-semibold">Handles</p>
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                    <a href="">LeetCode</a>
                </div>
            </div>
            <div data-scroll data-scroll-speed="0" className="w-full md:w-[50%] flex justify-center rounded-sm lg:bg-black overflow-hidden">
                    <div className="w-70 min-h-full md:h-60 md:w-60 relative overflow-hidden" >
                            <img 
                                data-scroll data-scroll-speed="-0.5"
                                src="/utsavSxnwhite.jpg" 
                                alt="Utsav" 
                                className="w-full h-full object-cover mix-blend-difference clip-triangle grayscale-100 " 
                            />
                            <p className="absolute top-[1rem] left-[50%] -translate-x-[50%] text-white text-xl font-bold hidden md:block">ウツサブ</p>
                    </div>
                    <FloatingText/>
            </div>
        </div>
        <div>
            
        </div>
    </section>
  )
}

export default About
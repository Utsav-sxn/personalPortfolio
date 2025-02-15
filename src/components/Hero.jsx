import { Canvas } from "@react-three/fiber"
import Gold from '../../public/Golden'
import gsap from "gsap"
import { useEffect } from "react"

const Hero = () => {

  useEffect(()=>{
    gsap.fromTo('.hero-sec-1',{
      x:-40,
      opacity:0
    },{
      x:0,
      opacity:1,
      duration:1,
    })
    gsap.fromTo('.hero-sec-2',{
      x:40,
      opacity:0
    },{
      x:0,
      opacity:1,
      duration:1,
    })
  },[])

  const handleImgHover = () => {
    gsap.to(".img-text", { opacity: 1, duration: 0.3, ease: "power2.out" });
  };
  
  const handleImgHoverExit = () => {
    gsap.to(".img-text", { opacity: 0, duration: 0.3, ease: "power2.in" });
  };


  const handleModelHover = () => {
    gsap.to(".model-text", { opacity: 1, duration: 0.3, ease: "power2.out" });
  };
  
  const handleModelHoverExit = () => {
    gsap.to(".model-text", { opacity: 0, duration: 0.3, ease: "power2.in" });
  };
  
  return (
    <section data-scroll-section className='px-8 sm:pl-[9rem] h-[40rem] sm:h-[100vh] relative top-0 overflow-hidden bg-[#000] selection:bg-orange-500 selection:text-black flex flex-col justify-center items-center md:flex-row gap-2'>
          {/* div 1 (image) */}
          <div data-scroll data-scroll-speed="3" className='hero-sec-1 w-full md:w-[50%] p-[1rem]  lg:h-[70%] z-[1] flex flex-col justify-evenly text-start border-2 overflow-hidden rounded-sm'>
            <div>
              <h2 className='font-bold text-3xl'>Clean and Professional</h2>
              <p>
                Crafting Digital Experiences
                that are fast, functional, and visually stunning.
                Let’s build the web, one pixel at a time.
              </p>
            </div>
            <div data-scroll data-scroll-speed="-2" className='mt-4 flex flex-col'>
              <p className="img-text opacity-0 absolute text-sm text-orange-600 font-extrabold mix-blend-difference top-[50%] left-[50%] -translate-[50%] rounded-sm p-2 pointer-events-none">It&apos;s a Screenshot Sir!</p>
              <img src="\AppleClone-ss.png" alt="" className='h-[80%] md:h-full text-center' onMouseEnter={handleImgHover} onMouseLeave={handleImgHoverExit} draggable='false' />
              <p className="absolute top-[40%] left-[50%] md:relative md:top-0 ,d:-translate-x-0 -translate-x-[50%]">screenshot from <sub className='font-normal'><a href='https://15pro-clone-utsav-sxn.netlify.app' target='_blank' className='text-purple-500'>project</a></sub></p>
            </div>
          </div>
          {/* div 2 (model) */}
          <div data-scroll data-scroll-speed="-1.5" className='hero-sec-2 md:w-[50%] lg:h-[70%] p-[1rem] relative z-[2] text-start text-white flex flex-col justify-start md:justify-end border-2 overflow-hidden rounded-sm'>
          <div className='3d-models w-full h-full hidden md:block relative top-0'>
            <p>Model from Sketchfab <sub className='font-normal'><a href="https://sketchfab.com/SonnyG1" className='text-purple-500'>by SonnyG1</a></sub></p>
          <Canvas data-scroll data-scroll-speed="-2.5" style={{ height: '90%', width: '100%',position:'relative',bottom:0 }} onMouseEnter={handleModelHover} onMouseLeave={handleModelHoverExit}>
            <ambientLight intensity={2} />
            {/* <directionalLight position={[2, 12, 2]} intensity={3} /> */}
            <directionalLight position={[5, 5, 5]} intensity={3} color={"white"} />
            <Gold/>
          </Canvas>
          <p className="model-text opacity-0 absolute text-sm text-sky-500 font-extrabold mix-blend-difference top-[50%] left-[50%] -translate-[50%] rounded-sm p-2 pointer-events-none">This Model doesn&apos;t &quot;Interact&quot;.</p>
          </div>
            <h1 className='font font-semibold text-4xl'>Creative and Playful</h1>
            <p>Code. Design. Create.
              Turning caffeine into clean code
              and ideas into interactive experiences.</p>
          </div>
    </section>
  )
}

export default Hero
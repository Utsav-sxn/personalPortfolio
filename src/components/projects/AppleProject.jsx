const AppleProject = () => {


  return (
    <div className="h-fit text-xl text-black xl:text-3xl font-medium pt-[3rem] selection:bg-slate-200 ">
        <div className='w-fit h-[2rem] flex items-center relative top-[3rem]'>
          <h1>1. Apple Clone.</h1>
          <img src="./src/assets/appleLogo.svg" alt="" className='invert-100 w-8 h-8 -translate-y-[10%]' />
        </div>
        <div className='w-fit relative top-12'>
          <p className='xl:text-2xl text-[#6e6e73]'>More specifically, iPhone 15 Pro Showcase</p>
        </div>
        <div className='w-full h-fit bg-[#ececee] rounded-4xl mt-16 pr-[1rem] shadow-md shadow-[#b4b2b2] overflow-y-scroll lg:overflow-hidden'>
          <div className="w-fit h-fit relative left-4 top-4 flex ">
            {/* <div className="flex-col items-start hidden sm:flex scale-75 sm:scale-100 relative">
              
              <p className="relative left-6 text-[#6e6e73]">Have a look.</p>
              <p className="relative left-6 text-[#A1A1A6] text-xl">Live Website.</p>

              <div className="scale-75 relative w-[358px] no-cursor -top-20 xl:-top-5" 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseExit}>

                <iframe
                  src="https://15pro-clone-utsav-sxn.netlify.app"
                  className="w-[308px] h-[664px] relative z-0 left-6 top-5 rounded-[3.6rem] apple"
                />

                <img
                  src="src/assets/iphone16frame.png"
                  alt="iPhone Frame"
                  className="absolute top-0 left-0 w-full h-auto pointer-events-none z-10"
                />
                 <p className="absolute -top-5 left-[50%] -translate-x-[50%] text-4xl font-extrabold z-10 
                            bg-gradient-to-b from-gray-400 to-gray-100 
                            bg-clip-text text-transparent pointer-events-none text-center">
                Scrollable
                </p>
              </div>
            </div> */}
            <div className="pr-0">
              <div>
              <h2 className='font-semibold text-xs xl:text-lg'>Technologies Used</h2>
              <p className='font-medium xl:text-2xl'>React, React Three Fiber, Gsap, Tailwind CSS</p>
              </div>
              <div className='py-8'>
              <h2 className='text-[#6e6e73]'>Purpose of the Project</h2>
              <p className='text-xs xl:text-[1.2rem] font-normal'>This project was built to get hands-on experience with React Three Fiber for 3D rendering and GSAP for smooth animations. The goal was to recreate Apple&apos;s iPhone 15 page while experimenting with interactive web elements.</p>
              </div>
              <div className='text-xs md:text-sm font-normal'>
                <p className='xl:text-2xl font-semibold text-[#6e6e73]'>Features</p>
                <ul>
                    <li>Scroll-based animations that mimic Apple’s product showcase.</li>
                    <li>Realistic 3D iPhone model rendered with React Three Fiber.</li>
                    <li>Orbit Controlls for Mouse based Interaction with 3D Model.</li>
                </ul>
              </div>
              <div className='flex justify-center items-center h-fit xl:scale-75 relative top-10 xl:-top-5'>
                  <p className="absolute -top-8 left-[50%] -translate-x-[50%] font-xl lg:text-4xl font-extrabold z-10 
                            bg-gradient-to-b from-gray-400 to-gray-100 
                            bg-clip-text text-transparent pointer-events-none text-center">
                    Screenshot
                  </p>
                <img src="src\assets\AppleWebsiteFrontPage-pc_11zon.jpg" alt="Apple Website Pc" className='sm:w-[70%] rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AppleProject
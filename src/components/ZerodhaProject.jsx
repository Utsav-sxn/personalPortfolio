const ZerodhaProject = () => {
  return (
    <div className="h-full text-black text-3xl font-medium pt-[3rem]">
        <div data-scroll data-scroll-speed="0.5" className='w-fit h-[2rem] flex items-center relative top-[3rem]'>
          <h1>2. Zerodha Clone.</h1>
          <img src="./src/assets/kiteLogo.svg" alt="" className='invert-100 w-10 h-10 -translate-y-[10%] filter-none' />
        </div>
        <div className='w-full h-fit bg-[#ececee] rounded-md mt-16 pr-[1rem]'>
          <div className="w-fit h-[110vh] relative left-0 top-4 flex ">
            <div className='flex-col items-start hidden sm:flex'>
                <p className='relative left-6 text-[#A1A1A6]'>Have a look.</p>
              <div className="relative w-[358px] no-cursor ">
                <img
                  src="src/assets/iphone16frame.png"
                  alt="iPhone Frame"
                  className="absolute top-0 left-0 w-full h-auto pointer-events-none z-10"
                />
              </div>
            </div>
            <div>
              <div>
              <h2 className='font-semibold text-lg'>Technologies Used</h2>
              <p className='font-medium text-2xl'>React, React Three Fiber, Gsap</p>
              </div>
              <div className='py-8'>
              <h2 className='text-[#6e6e73]'>Purpose of the Project</h2>
              <p className='text-[1.2rem] font-normal'>This project was built to get hands-on experience with React Three Fiber for 3D rendering and GSAP for smooth animations. The goal was to recreate Apple&apos;s iPhone 15 page while experimenting with performance optimization and interactive web elements.</p>
              </div>
              <div className='text-lg font-normal'>
                <p className='text-2xl font-semibold text-[#6e6e73]'>Features</p>
                <ul>
                    <li>Scroll-based animations that mimic Apple’s product showcase.</li>
                    <li>Realistic 3D iPhone model rendered with React Three Fiber.</li>
                    <li>Orbit Controlls for Mouse based Interaction.</li>
                </ul>
              </div>
              <div className='flex justify-center items-center h-fit relative top-10'>
                <img src="src\assets\AppleWebsiteFrontPage-pc.png" alt="Apple Website Pc" className='w-[70%] rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ZerodhaProject
const PortfolioProject = () => {

return (
  <div className="h-full text-xl text-black xl:text-3xl font-medium pt-[3rem] selection:bg-sky-100 ">
      <div className='w-fit h-[2rem] flex items-center relative top-[3rem]'>
        <h1>3. Portfolio Project.</h1>
        <p className="font-semibold">ツ</p>
      </div>
      <div className='w-full h-fit bg-sky-50 rounded-4xl mt-16 pr-8 shadow-md shadow-[#D0E4F5] overflow-y-scroll lg:overflow-hidden'>
        <div className="w-fit h-fit relative left-4 top-4 flex ">
          <div className="pr-0">
            <div>
            <h2 className='font-semibold text-sm xl:text-lg'>Technologies Used</h2>
            <p className='font-medium xl:text-2xl'>React, React Three Fiber, Gsap, Framer Motion, Locomotive Scroll, Tailwind CSS</p>
            </div>
            <div className='py-8'>
            <h2 className='text-sky-300'>Purpose of the Project</h2>
            <p className='text-xs xl:text-[1.2rem] font-normal'>The goal of this portfolio was to craft a visually striking, interactive, and immersive experience that showcases my projects, skills, and creativity. I wanted to go beyond a traditional portfolio by integrating 3D elements (visible on big screens), smooth animations, and a futuristic aesthetic to reflect my personality and interests.</p>
            </div>
            <div className="flex justify-evenly flex-col lg:flex-row">
              <div className='text-xs xl:text-lg font-normal'>
                <p className='xl:text-2xl font-semibold text-sky-300'>Design Approach</p>
                <ul>
                    <li>Minimalist yet Futuristic.</li>
                    <li>Smooth Navigation & UX.</li>
                    <li>Dynamic & Interactive Elements.</li>
                </ul>
              </div>
              <div className='text-xs md:text-sm font-normal hidden sm:block'>
                <p className='xl:text-xl font-semibold text-sky-300'>Features</p>
                <ul>
                <li>Scroll-based animations using Locomotive Scroll and GSAP.</li>
                <li>Dynamic 3D elements integrated with React Three Fiber.</li>
                <li>Page transitions and motion effects powered by Framer Motion.</li>
                <li>Fully responsive layout optimized for different screen sizes.</li> 
                <li>Integration of Websites in the Project section.</li> 
                </ul>
              </div>

            </div>
            <div className='flex justify-center items-center h-fit xl:scale-75 relative top-10 xl:top-0'>
                  <p className="absolute -top-8 left-[50%] -translate-x-[50%] font-xl lg:text-4xl font-extrabold z-10 
                            bg-gradient-to-b from-sky-400 to-sky-100 
                            bg-clip-text text-transparent pointer-events-none text-center">
                    Screenshot
                  </p>
              <img src="\assets\PortfolioWebsiteFrontPage_11zon.jpg" alt="Portfolio website" className='sm:w-[70%] rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default PortfolioProject
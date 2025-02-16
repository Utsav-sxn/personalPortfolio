const WorkwiseProject = () => {

    const handleMouseEnter = () => {
        const mouse = document.getElementsByClassName('custom-cursor');
        mouse[0].style.display = 'none';
      }
      const handleMouseExit = () => {
        const mouse = document.getElementsByClassName('custom-cursor');
        mouse[0].style.display = 'flex';
    }
  return (
    <div className="h-full text-xl text-black xl:text-3xl font-medium pt-[3rem] selection:bg-purple-100 overflow-hidden">
        <div data-scroll data-scroll-speed='1'  className='w-fit h-[2rem] flex flex-col items-start relative top-[3rem]'>
        <div className="flex items-center text-sm md:text-2xl">
          <h1>3. Workwise Website Revamp.</h1>
          <img src="src\assets\workwiseLogo.webp" alt="" className='w-20 h-10 mix-blend-color rounded-sm' />
        </div>
        <div>
            <p className="text-sm md:text-xl text-purple-300">IIT Kharagpur Tech Traid Hackathon</p>
        </div>
        </div>
        <div className='w-full h-fit bg-[#F6F0FF] rounded-lg mt-16 pr-[1rem] shadow-md shadow-[#eed0f5]'>
          <div className="w-fit h-[80vh] lg:h-[110vh] relative left-4 top-4 flex pr-6">
            <div className="pr-4 lg:pr-0">
              <div>
              <h2 className='font-semibold text-xs xl:text-lg'>Technologies Used</h2>
              <p className='font-medium xl:text-2xl'>React, ChartJs, Tailwind CSS, ShadCN, Lucide React</p>
              </div>
              <div className='py-8'>
              <h2 className='text-purple-300'>Purpose of the Project</h2>
              <p className='text-xs xl:text-[1.2rem] font-normal z-10'>Revamped an RFQ (Request for Quotation) website to enhance usability, data visualization, and user interface. The goal was to create a seamless experience for businesses submitting and managing RFQs.</p>
              </div>
              <div>
                <div className='flex-col items-start hidden md:flex'>
                <p className='relative text-purple-300'>Workwise Revamp.</p>
                <p className='relative text-purple-200 text-xl'>Live Website.</p>
                <div className="relative w-full flex justify-center items-center no-cursor sm:scale-75 -mt-[10rem]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                    <div className="relative w-[90%] max-w-[1200px]">
                        {/* Wrapper to maintain aspect ratio */}
                        <div className="relative w-full aspect-[16/10]">
                            <iframe
                                src="https://kshitij-workwise.netlify.app/"
                                className="absolute top-[12%] left-[12%] w-[75%] h-[75%] z-0 rounded-lg"
                            />
                        </div>
                        <img
                            src="src/assets/macBookframe.webp"
                            alt="MacBook Frame"
                            className="absolute top-0 left-0 w-full h-auto pointer-events-none z-10"
                        />
                    </div>
                </div>
            </div>
            </div>
              <div className='flex justify-center items-center h-fit xl:scale-75 absolute top-[50%] md:hidden z-0'>
                <img src="src\assets\WorkwiseFrontPage.png" alt="Workwise Website revamp" className='sm:w-[70%] rounded-lg opacity-60 sm:opacity-100' />
              </div>
            </div>
            {/* <div className='flex-col items-start hidden sm:flex'>
                <p className='relative text-sky-300'>Phone view.</p>
                <p className='relative text-sky-200 text-xl'>Live Website.</p>
              <div className="scale-75 relative w-[358px] no-cursor -top-20 xl:-top-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                <iframe
                  src="http://localhost:5173"
                  className="w-[308px] h-[664px] relative z-0 left-6 top-5 rounded-[3.6rem] apple"
                />
                <img
                  src="src/assets/iphone16frame.png"
                  alt="iPhone Frame"
                  className="absolute top-0 left-0 w-full h-auto pointer-events-none z-10"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
  )
  }
  
  export default WorkwiseProject
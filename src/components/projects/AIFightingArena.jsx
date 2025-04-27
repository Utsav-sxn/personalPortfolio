const AIFightingArenaProject = () => {


    return (
      <div className="h-fit text-xl text-black xl:text-3xl font-medium pt-[3rem] selection:bg-emerald-100 ">
          <div className='w-fit h-[2rem] flex items-center relative top-[3rem]'>
            <h1>AI Fighting Arena.</h1>
          </div>
          <div className='w-full h-fit bg-emerald-50 rounded-4xl mt-16 pr-[1rem] shadow-md shadow-[#b5f6d5] overflow-y-scroll lg:overflow-hidden'>
            <div className="w-fit h-fit relative left-4 top-4 flex ">
              <div className="pr-0">
                <div>
                <h2 className='font-semibold text-xs xl:text-lg'>Technologies Used</h2>
                <p className='font-medium xl:text-2xl'>React, React Three Fiber, Mediapipe-hands, React-webcam</p>
                </div>
                <div className='py-8'>
                <h2 className='text-emerald-200'>Purpose of the Project</h2>
                <p className='text-xs xl:text-[1.2rem] font-normal'>
                    This project was built to create a 3D AI fighting game using React Three Fiber for immersive 3D rendering and animations, combined with AI logic to control the opponent. The goal was to experiment with interactive web elements, gesture detection, and AI-driven gameplay in a React environment.
                </p>
                </div>
                <div className='text-xs md:text-sm font-normal'>
                <p className='xl:text-2xl font-semibold text-emerald-200'>Features</p>
                    <ul>
                        <li>3D character models rendered with React Three Fiber for immersive gameplay.</li>
                        <li>AI-controlled opponent with dynamic actions and health management.</li>
                        <li>Gesture detection for user input to perform punches, blocks, and idle actions.</li>
                        <li>Multiple camera views with smooth transitions using OrbitControls.</li>
                        <li>Real-time health tracking and game reset on defeat.</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center h-fit xl:scale-75 relative top-10 xl:-top-5'>
                    <p className="absolute -top-8 left-[50%] -translate-x-[50%] font-xl lg:text-4xl font-extrabold z-10 
                              bg-gradient-to-b from-emerald-400 to-emerald-100 
                              bg-clip-text text-transparent pointer-events-none text-center">
                      Screenshot
                    </p>
                    <img src="\assets\AiFightingArena-ss.png" alt="AI fighting Arena" className='sm:w-[70%] rounded-lg' />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default AIFightingArenaProject
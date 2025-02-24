const PortfolioProject = () => {

  return (
    <div  className="h-full text-xl text-black xl:text-3xl font-medium pt-[3rem] selection:bg-orange-100 ">
        <div className='w-fit h-[2rem] flex items-center relative top-[3rem]'>
          <h1>4. Zerodha Kite Inspired Website.</h1>
          <img src="\assets\kiteLogo.svg" alt="" className=' w-8 h-6 -translate-y-[10%]' />
        </div>
        <div className='w-full h-fit bg-orange-50 rounded-4xl mt-16 pr-8 shadow-md shadow-[#f5d0d0] overflow-y-scroll lg:overflow-hidden'>
          <div className="w-fit h-fit relative left-4 top-4 flex ">
            <div className="pr-0">
              <div>
              <h2 className='font-semibold text-sm xl:text-lg'>Technologies Used</h2>
              <p className='font-medium xl:text-2xl'> HTML, CSS, JavaScript, Django, Yfinance, OpenAI API</p>
              </div>
              <div className='py-8'>
              <h2 className='text-orange-300'>Purpose of the Project</h2>
              <p className='text-xs xl:text-[1.2rem] font-normal'>The primary goal of this project was to gain hands-on experience with RESTful APIs and API integration. By working with real-time stock data and AI-driven interactions, the project provided an opportunity to understand data fetching, processing, and visualization in a web application.</p>
              </div>
                <div className='text-xs md:text-sm font-normal hidden sm:block'>
                    <p className='xl:text-xl font-semibold text-orange-300'>Features</p>
                    <ul>
                        <li>Real-time stock market data fetching using the Yfinance library.</li>
                        <li>Interactive stock graph feature for visualizing historical performance.</li>
                        <li>AI-powered chatbot integrated with OpenAI API for market insights.</li>
                        <li>Custom stock graph generation based on selected symbols and date ranges.</li>
                        <li>Built with Django and JavaScript for a seamless and dynamic experience.</li>
                    </ul>
                </div>
              <div className='flex flex-col justify-center items-center text-start h-fit xl:scale-75 relative top-10 xl:top-0 text-orange-200'>
                  <p className="absolute -top-8 left-[50%] -translate-x-[50%] font-xl lg:text-4xl font-extrabold z-10 
                            bg-gradient-to-b from-orange-400 to-orange-100 
                            bg-clip-text text-transparent pointer-events-none text-center">
                    Screenshot
                  </p>
                <img src="\assets\zerodhaWebsiteFrontPage_11zon.jpg" alt="Zerodha website" className='sm:w-[70%] rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  }
  
  export default PortfolioProject
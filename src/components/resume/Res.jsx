export default function ResumePage() {
    const handleMouseEnter = () => {
        const mouse = document.getElementsByClassName('custom-cursor');
        mouse[0].style.display = 'none';
      }
      const handleMouseExit = () => {
        const mouse = document.getElementsByClassName('custom-cursor');
        mouse[0].style.display = 'flex';
      }
  return (
    <div className="w-full h-screen bg-black text-white relative sm:pl-[9rem] flex items-center justify-center">
      <iframe src="/resume_utsav_compressed.pdf" className="w-[90vw] lg:w-[60vw] h-[60vh] sm:h-[98vh] grayscale-50 shadow-md shadow-gray-600" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}></iframe>
      <p className="absolute top-2 left-[16rem] -translate-x-[50%] font-xl lg:text-4xl font-extrabold z-10 
        bg-gradient-to-b from-[#3d3d3f] to-[#A1a1a6] 
        bg-clip-text text-transparent pointer-events-none text-center">
        Résumé
      </p>
    </div>
  );
}
import { useEffect, useLayoutEffect, useState } from 'react';
import { navlinks } from '../../constants/navlinks'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap';
import { useRef } from 'react';


const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState('');
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActive('Home');
    else if (path === '/projects') setActive('Projects');
    else if (path === '/resume') setActive('Resume');
    else if (path === '/contact') setActive('Contact');
    else setActive('');
  }, [location])

  const labelRefs = useRef([]);
  const iconRefs = useRef([]);
  const navIndicatorRefs = useRef([]);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".nav-btns",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.2 }
    );
    gsap.from('.labels',{
      x:-40
    })
  }, [])

  const handleMouseEnterLabel = (index) => {
    gsap.to(labelRefs.current[index], { x: 0, opacity: 1, duration: 0.5, ease: 'ease.inOut' });
  };

  const handleMouseLeaveLabel = (index) => {
    gsap.to(labelRefs.current[index], { x: -40, opacity: 0 });
  };

  const handleMouseEnterIcon = () => {
    gsap.to(iconRefs.current, { x: 0, opacity: 1, duration: 0.5, ease: 'ease.inOut' });
    gsap.to(navIndicatorRefs.current, { x: -100, opacity: 0, duration: 0.5, ease: 'ease.inOut' });
  };

  const handleMouseLeaveIcon = () => {
    gsap.to(iconRefs.current, { x: -40, opacity: 0 });
    gsap.to(navIndicatorRefs.current, { x: 0, opacity: 1, duration: 0.5, ease: 'ease.inOut' });
  };

  return (
    <div className='hidden sm:block'>
    <nav ref={iconRefs} className=" bg-neutral-800 navbar px-4 my-4 z-nav ml-[1rem] fixed top-[25%] mix-blend-difference rounded-[6rem]" onMouseEnter={handleMouseEnterIcon} onMouseLeave={handleMouseLeaveIcon}>
      {navlinks.map((navlink, index) => {
        return (
          <div className='relative flex flex-row gap-4 items-center nav-btns cursor-none' key={navlink.id}>
            <div className={`relative w-[50px] h-[50px] rounded-[50%] my-4 transition-all duration-200 hover:scale-110 z-20 ${active === navlink.name ? 'active shadow-lg outline-2 outline-white outline-offset-4 bg-white' : 'bg-gray-200'}`} onMouseEnter={() => handleMouseEnterLabel(index)}
              onMouseLeave={() => handleMouseLeaveLabel(index)}><Link to={navlink.link} className='flex justify-center items-center'><img src={navlink.path} alt={navlink.name} className="w-[40px] h-[40px] translate-y-1" /></Link></div>
            <p ref={(el) => (labelRefs.current[index] = el)} className='text-white font-extrabold absolute left-[5rem] roboto-condensed-regular text-xl opacity-0 z-10 rounded-sm labels'>{navlink.name}</p>
          </div>
        )
      })}
    </nav>
    <div ref={navIndicatorRefs} className='opacity-0 fixed top-[49%] z-20 flex flex-row roboto-condensed-regular cursor- ml-[1rem] mix-blend-difference'>
      <img src="src\assets\leftArr.svg" alt="nav" className='text-white'/><p>Navigation</p>
    </div>
    </div>
  )
}

export default Navbar

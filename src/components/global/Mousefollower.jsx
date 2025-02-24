import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Mousefollower = () => {
  useEffect(() => {
    const customCursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      customCursor.style.left = `${x}px`;
      customCursor.style.top = `${y}px`;
      customCursor.style.background = `white`;
      customCursor.style.opacity = 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLogoEnter = () => {
    const logo = document.querySelector(".logo-text");
    if (logo) {
      logo.textContent = "UTSAV";
    }
  };

  const handleLogoExit = () => {
    const logo = document.querySelector(".logo-text");
    if (logo) {
      logo.textContent = "ウツサブ";
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".logo",
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="">
      {/* Logo */}
      <div
        className="logo transition-colors duration-200 absolute -translate-[50%] mix-blend-difference z-50 rounded-[50%] top-8 md:top-[4rem] left-[4rem] flex items-center justify-center"
        onMouseEnter={handleLogoEnter}
        onMouseLeave={handleLogoExit}
      >
        <Link to="/" className="">
          <h4 className="mix-blend-difference text-white rounded-sm logo-text font-mono font-extrabold text-md w-24 text-center tracking-widest">
            ウツサブ
          </h4>
        </Link>
      </div>
      <div className="opacity-0 w-14 h-14 custom-cursor fixed -translate-[50%] pointer-events-none mix-blend-difference z-cursor rounded-[50%] top-[4rem] left-[4rem] flex items-center justify-center">
        <h4 className="mix-blend-difference">ツ</h4>
      </div>
      {/* CC Statement */}
      <div className="hidden md:flex absolute bottom-4 right-6 text-xs text-gray-400 font-mono tracking-wide z-cursor mix-blend-difference">
        © 2025 Utsav Saxena | utsavmra2004@gmail.com | India
      </div>
    </div>
  );
};

export default Mousefollower;

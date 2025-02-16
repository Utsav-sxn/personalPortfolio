import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    const updateProgress = () => {
      const scrollY = scroll.scroll.instance.scroll.y; // Current scroll position
      const scrollHeight = scroll.scroll.instance.limit.y; // Max scroll height
      const progress = (scrollY / scrollHeight) * 100;
      setProgress(progress);
    };

    scroll.on("scroll", updateProgress);

    return () => {
      scroll.destroy(); // Cleanup
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50 mix-blend-difference">
      <div
        className="h-full bg-gradient-to-r from-[#b4b4b4] to-[#ffffff] transition-all duration-350 ease-linear flex justify-end items-center rounded-r-lg"
        style={{ width: `${progress}%` }}>
        </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ScrollIndicator = ({ locomotiveScroll }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!locomotiveScroll) return; 

    const handleScroll = (args) => {
      const scrollY = args.scroll.y; 
      setIsVisible(scrollY < 30); 
    };

    locomotiveScroll.on("scroll", handleScroll); 

    return () => {
      locomotiveScroll.off("scroll", handleScroll); 
    };
  }, [locomotiveScroll]);

  return (
    <motion.div
      className="fixed left-1/2 top-[90vh] -translate-x-1/2 flex flex-col items-center text-white z-20"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, 10, 0] : 0, // Bounce animation
      }}
      transition={{
        opacity: { duration: 0.4, ease: "easeOut" },
        y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <p className="text-sm font-medium roboto-condensed-regular tracking-widest">SCROLL</p>
      <img src="\assets\downArr.svg" alt="" />
    </motion.div>
  );
};

export default ScrollIndicator;

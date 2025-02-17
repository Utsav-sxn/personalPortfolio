import { motion } from 'framer-motion';
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const pageVariants = {
    initial: { opacity: 0, x: "-10%" },
    animate: { opacity: 1, x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: "20%", transition: { duration: 0.4, ease: "easeInOut" } }
  };
  
export default function PageWrapper({ children }) {
    useEffect(() => {
      setTimeout(() => {
        const scroll = new LocomotiveScroll();
        scroll.update();
      }, 600);
    }, []);
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="relative w-full h-full"
        onAnimationComplete={() => {
          setTimeout(() => {
            const scroll = new LocomotiveScroll();
            scroll.update();
          }, 100);
        }}
      >
        {children}
      </motion.div>
    );
  }
  
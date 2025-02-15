import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
  };
  
  export default function PageWrapper({ children }) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="absolute w-full h-full"
      >
        {children}
      </motion.div>
    );
  }
  
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageWrapper from "./components/global/Pagewrapper";
import Lottie from "lottie-react";
import animationData from "./assets/animation.json";
const Home = lazy(() =>import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

const LoadingAnim = () => {
  return (
    <div className="absolute text-3xl top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex">
      <Lottie animationData={animationData} loop autoplay className="w-36 h-36" />
    </div>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<LoadingAnim/>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

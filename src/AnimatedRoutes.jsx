import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import PageWrapper from "./components/global/Pagewrapper";
import Home from "./pages/Home";
import Projects from './pages/Projects'
import Resume from './pages/Resume'

const AnimatedRoutes = () => {
  const location = useLocation();

  

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"  exact element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
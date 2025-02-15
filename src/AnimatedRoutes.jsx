import { AnimatePresence } from 'framer-motion';
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import PageWrapper from './components/global/Pagewrapper';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<PageWrapper key={location.pathname}><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper key={location.pathname}><Projects /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper key={location.pathname}><Resume /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
  
};

export default AnimatedRoutes;
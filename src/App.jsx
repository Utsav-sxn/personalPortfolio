import Mousefollower from "./components/global/Mousefollower";
import Navbar from "./components/global/Navbar"
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full h-screen">
        <Navbar />
        <Mousefollower/>
        <AnimatedRoutes/>
      </div>
    </BrowserRouter>
  )
}

export default App

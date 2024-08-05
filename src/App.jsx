import SideBar from "./components/SideBar"
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from "./components/elements/About";
import SkillSet from "./components/elements/SkillSet";
import { motion } from "framer-motion";
import Experience from "./components/elements/Experience";
import { MovingHeader, MovingHeaderLeftAligned } from "./components/elements/Utils";
import { PROJECTS } from "./consts/data";
import Projects from "./components/elements/Projects";
import Contact from "./components/elements/Contact";

function App() {

  return (
    <>
      <div className="lg:flex flex-row text-white custom-scrollbar">
        <SideBar />
        <NavBar />
        <main className="bg-[#151515] lg:ml-[23%] lg:w-[100%]">
          <div className="flex flex-col w-auto">
            <Home />
            <About />
            <SkillSet />
            <Experience />
            <Projects/>
            <Contact/>

          </div>
        </main>
      </div>
    </>
  )
}


export default App

import React, {useRef} from "react";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Navbar from "./components/common/Navbar/Navbar";
import Contact from "./components/pages/Contact/Contact";
import './App.css'
import Services from "./components/pages/Services/Services";
import Experience from "./components/pages/Experience/Experience";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  const parallaxRef = useRef();

  const routes = [
  {
    path: '/richard_school',
    element: <Home parallaxRef={parallaxRef}/>
  },
  {
    path: '/richard_school/about',
    element: <About />
  },
  {
    path: '/richard_school/services',
    element: <Services />
  },
  {
    path: '/richard_school/experience',
    element: <Experience />
  },
  {
    path: '/richard_school/contact',
    element: <Contact />
  },
]

  return(
    <div>
      <Navbar onNavigate={(page) => parallaxRef.current.scrollTo(page)}/>
      <Parallax pages={5} ref={parallaxRef}>
        {
          routes.map(({path, element}, key) => (
            <ParallaxLayer key={path} offset={key}>
              {element}
            </ParallaxLayer>
          ))
        }
      </Parallax>
    </div>
  );
}

export default App;
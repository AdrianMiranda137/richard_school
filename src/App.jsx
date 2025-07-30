import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Navbar from "./components/common/Navbar/Navbar";
import Contact from "./components/pages/Contact/Contact";
import './App.css'
import Services from "./components/pages/Services/Services";
import Experience from "./components/pages/Experience/Experience";

const routes = [
  {
    path: '/richard_school',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/experience',
    element: <Experience />
  },
  {
    path: '/contact',
    element: <Contact />
  },
]

const App = () => {

  return(
    <Router>
      <Navbar />
      <Routes>
        {
          routes.map(({path, element}) => (
            <Route 
              key={path}
              path={path}
              element={element}
            />
          ))
        }
      </Routes>
    </Router>
  );
}

export default App;
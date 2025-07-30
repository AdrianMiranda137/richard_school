import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Navbar from "./components/common/Navbar/Navbar";
import Contact from "./components/pages/Contact";
import './App.css'
import Services from "./components/pages/Services/Services";

const routes = [
  {
    path: '/',
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
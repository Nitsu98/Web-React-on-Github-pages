//@ts-nocheck
import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import backgroundImage from "./assets/images/fondo-hoja-cuadriculada.jpg";
import { useRef, useState, useEffect } from "react";
import ClassroomExperiences from "./ClassroomExperiences";
import NewsBlog from "./NewsBlog";

export default function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const styles = {
    app: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "repeat",
      backgroundPosition: "center center",
      backgroundAttachment: "scroll",
      height: "100%",
      width: "100%",
      minHeight: windowSize.innerHeight,
      minWidth: windowSize.innerWidth,
    },
  };
  return (
    <div className="App" style={styles.app}>
      {/* <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/classroom-experiences"
          element={<ClassroomExperiences />}
        />
        <Route path="news-blog" element={<NewsBlog />} />
      </Routes>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

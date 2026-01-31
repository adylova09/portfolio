import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project"; 
import Contact from "./pages/Contact";
import ScrollLine from "./components/ScrollLine";
import MapModal from "./components/MapLocation";
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
import FooterHeader from "./components/FooterHeader";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mapCoords, setMapCoords] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const openMap = (coords) => {
    setMapCoords(coords);
    setShowMap(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const closeMap = () => setShowMap(false);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home openMap={openMap} />;
      case "about":
        return <About openMap={openMap} />;
      case "resume":
        return <Resume openMap={openMap} />;
      case "project": 
        return <Project />; 
      case "contact":
        return <Contact openMap={openMap} />;
      default:
        return null;
    }
  };

  return (
    <>
      <ScrollLine />

      <Layout
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        openMap={openMap}
      >
        {renderSection()}
      </Layout>

      <FooterHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {showMap && <MapModal coords={mapCoords} closeMap={closeMap} />}
    </>
  );
}

export default App;

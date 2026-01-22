import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ScrollLine from "./components/ScrollLine";
import MapModal from "./components/MapLocation";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mapCoords, setMapCoords] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const openMap = (coords) => {
    setMapCoords(coords);
    setShowMap(true);
  };

  const closeMap = () => setShowMap(false);


  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home openMap={openMap} />;
      case "about":
        return <About openMap={openMap} />;
      case "resume":
        return <Resume openMap={openMap} />;
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

      {showMap && <MapLoation coords={mapCoords} closeMap={closeMap} />}
    </>
  );
}

export default App;

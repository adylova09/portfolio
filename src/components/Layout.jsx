import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { FaGithub, FaInstagram, FaVk } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Layout = ({ children, activeSection, setActiveSection, openMap }) => {
  const [coords, setCoords] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lon = pos.coords.longitude.toFixed(6);
        setCoords(`${lat},${lon}`);
      });
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black p-4 gap-4">
      <aside className="w-full lg:w-72 bg-[#1f1f1f] rounded-2xl p-6 flex flex-col shadow-lg shadow-yellow-400/10">

        <div className="relative flex justify-center">
          <div className="relative flex justify-center">
            <img
              src="https://i1.sndcdn.com/avatars-FwgJaCvpfelEvzZB-9Vmb5A-t240x240.jpg"
              alt="avatar"
              className="w-36 h-36 rounded-xl object-cover mb-6 border-2 border-black shadow-[0_0_10px_rgba(255,204,0,0.3)]"
            />
          </div>
          {/* <span
            className={`absolute bottom-7 right-24 w-4 h-4 rounded-full border-2 border-black ${isOnline ? "bg-green-600" : "bg-red-600"
              }`}
          /> */}
        </div>
        <h2
          className="text-white font-extrabold tracking-tight text-center text-4xl md:text-4x1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Adylova Alina
        </h2>



        <span className="text-gray-300 text-center text-sm font-medium px-1 py-0.5 rounded bg-zinc-800 mt-2 mb-4 inline-block">
          Frontend Developer
        </span>


        <div className="w-full h-px bg-gray-500" />

        <div className="flex flex-col gap-6 mt-6 w-full text-sm">

          <a
            href="mailto:ady1ova178@gmail.com"
            className="flex items-start gap-4 hover:text-yellow-400 transition"
          >
            <MdEmail className="text-yellow-400 text-3xl mt-1 bg-[#1f1f1f] p-2 rounded-lg border border-yellow-400/30 shadow-md" />

            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">EMAIL</span>
              <span className="text-white">ady1ova178@gmail.com</span>
            </div>
          </a>

          <a
            href="tel:+996755080929"
            className="flex items-start gap-4 hover:text-yellow-400 transition"
          >
            <MdPhone className="text-yellow-400 text-3xl mt-1 bg-[#1f1f1f]  p-2 rounded-lg border border-yellow-400/30 shadow-md" />

            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">PHONE</span>
              <span className="text-white">+996 (755) 08-09-29</span>
            </div>
          </a>

          <div
            onClick={() => openMap(coords)}
            className="flex items-start gap-4 cursor-pointer hover:text-yellow-400 transition"
          >
            <MdLocationOn className="text-yellow-400 text-3xl mt-1 bg-[#1f1f1f]  p-2 rounded-lg border border-yellow-400/30 shadow-md" />

            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">LOCATION</span>
              <span className="text-white">My Location</span>
            </div>
          </div>

        </div>



        {coords && (
          <div
            className="mt-4 cursor-pointer w-full"
            onClick={() => openMap(coords)}
          >
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${coords}&zoom=15&size=600x300&markers=color:red|${coords}&key=ВАШ_API_KEY`}
              alt="Map preview"
              className="w-full h-48 rounded-lg object-cover shadow-lg"
            />
          </div>
        )}

        <div className="flex gap-4 mt-auto justify-center pt-6">
          <a
            href="https://github.com/adylova09/portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-lg hover:text-white transition-all duration-200 active:scale-90"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-lg hover:text-white transition-all duration-200 active:scale-90"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ady1ova178@gmail.com"
            className="text-gray-400 text-lg hover:text-white transition-all duration-200 active:scale-90"
          >
            <SiGoogle />
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-lg hover:text-white transition-all duration-200 active:scale-90"
          >
            <FaVk />
          </a>
        </div>

      </aside>

      <main className="flex-1 bg-[#2a2a2a] rounded-2xl p-6 shadow-lg shadow-yellow-400/10 flex flex-col">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex-1 overflow-y-auto mt-6">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
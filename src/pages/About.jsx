import React, { useEffect, useState } from "react";
import { FiSmartphone, FiCode, FiPenTool, FiServer } from "react-icons/fi";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
   <div
  className={`transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
  <h1 className="text-3xl font-bold text-white mb-4">
    About Me
  </h1>

  <p className="text-gray-300 leading-relaxed mb-6">
    I am a frontend developer focused on building clean and modern user
    interfaces. I enjoy turning complex problems into simple, beautiful
    solutions.
  </p>

  <h2 className="text-xl font-semibold text-white mb-6">
    What I'm Doing
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-[#1f1f1f] rounded-xl p-5 border border-gray-700 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex items-start gap-4">
        <FiSmartphone className="text-yellow-400 text-3xl mt-1" />
        <div>
          <h3 className="text-white font-medium mb-1">Mobile Apps</h3>
          <p className="text-sm text-gray-400">
            Professional development of applications for Android and iOS.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#1f1f1f] rounded-xl p-5 border border-gray-700 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex items-start gap-4">
        <FiCode className="text-yellow-400 text-3xl mt-1" />
        <div>
          <h3 className="text-white font-medium mb-1">Web Development</h3>
          <p className="text-sm text-gray-400">
            High-quality development of sites at the professional level.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#1f1f1f] rounded-xl p-5 border border-gray-700 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex items-start gap-4">
        <FiPenTool className="text-yellow-400 text-3xl mt-1" />
        <div>
          <h3 className="text-white font-medium mb-1">UI/UX Design</h3>
          <p className="text-sm text-gray-400">
            The most modern and high-quality design made at a professional level.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#1f1f1f] rounded-xl p-5 border border-gray-700 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex items-start gap-4">
        <FiServer className="text-yellow-400 text-3xl mt-1" />
        <div>
          <h3 className="text-white font-medium mb-1">Backend Development</h3>
          <p className="text-sm text-gray-400">
            High-performance backend services designed for scalability and seamless user experience.
          </p>
        </div>
      </div>
    </div>
  </div>



</div>

  );
};

export default About;
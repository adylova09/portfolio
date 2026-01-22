import React from "react";

const Header = ({ activeSection, setActiveSection }) => {
  const menu = ["About", "Resume", "Contact"];

  return (
    <nav className="flex gap-6 border-b border-gray-600 pb-3">
      {menu.map((item) => (
        <button
          key={item}
          onClick={() => setActiveSection(item.toLowerCase())}
          className={`relative text-sm font-medium transition-colors duration-200
            ${
              activeSection === item.toLowerCase()
                ? "text-yellow-400 after:absolute after:left-0 after:-bottom-3 after:w-full after:h-[2px] after:bg-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Header;
import React from "react";

const FooterHeader = ({ activeSection, setActiveSection }) => {
  const menu = ["About", "Resume", "Project", "Contact"];

  return (
    <footer className="lg:hidden w-full flex justify-center mt-12">
      <div className="
        bg-black/70 backdrop-blur-md
        border border-neutral-700
        rounded-2xl
        px-6 py-4
        w-full max-w-md
      ">
        <nav className="flex flex-row justify-center gap-6">
          {menu.map((item) => {
            const isActive = activeSection === item.toLowerCase();

            return (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative text-sm font-medium transition-all duration-300
                  ${isActive
                    ? "text-yellow-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-yellow-400"
                    : "text-neutral-300 hover:text-yellow-400"
                  }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default FooterHeader;

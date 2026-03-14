import React from "react";


const Header = ({ activeSection, setActiveSection }) => {
  const menu = ["About", "Resume", "Project", "Contact"];

  return (
    <>
      <header className="hidden lg:flex w-full justify-end mb-12">
        <div className="bg-neutral-800 border border-neutral-700 border-t-0 border-r-0 rounded-bl-2xl px-12 py-6">
          <nav className="flex gap-10">
            {menu.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`relative text-lg font-medium transition-all duration-300
                    ${
                      isActive
                        ? "text-yellow-400 after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:w-full after:bg-yellow-400"
                        : "text-neutral-300 hover:text-yellow-400"
                    }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

    </>
  );
};

export default Header;

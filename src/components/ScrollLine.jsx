import { useEffect, useState } from "react";

const ScrollLine = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = Math.min(scrollTop / docHeight, 1);
      setProgress(percent);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-0 h-full flex items-center z-50">
      <div className="relative h-[70%] w-[4px] bg-gray-700 rounded-full overflow-hidden">

        {/* активная часть */}
        <div
          className="absolute top-0 left-0 w-full bg-gray-400 transition-all duration-300 ease-out"
          style={{ height: `${progress * 100}%` }}
        />

      </div>
    </div>
  );
};

export default ScrollLine;

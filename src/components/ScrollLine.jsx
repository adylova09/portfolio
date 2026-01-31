import { useEffect, useState } from "react";

const ScrollLine = ({ scrollRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!scrollRef?.current) return;

    const el = scrollRef.current;

    const updateProgress = () => {
      const maxScroll = el.scrollHeight - el.clientHeight;
      const percent = maxScroll > 0 ? el.scrollTop / maxScroll : 0;
      setProgress(percent);
    };

    updateProgress();

    el.addEventListener("scroll", updateProgress);
    return () => el.removeEventListener("scroll", updateProgress);
  }, [scrollRef]);

  return (
    <div className="fixed right-6 top-0 h-full flex items-center z-50">
      <div className="relative h-[70%] w-[4px] bg-gray-700 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-gray-400 transition-all duration-300"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollLine;

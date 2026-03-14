import React, { useEffect, useState } from "react";

const Resume = () => {
  const [show, setShow] = useState(false);

  const education = [
    {
      year: "2026",
      title: "Okurmen Bootcamp",
      description: "Интенсивная программа по Frontend Development: HTML, CSS, JavaScript и React."
    },
    {
      year: "2026",
      title: "Edu Pro Academy",
      description: "3-месячная стажировка по разработке интерфейсов и работе с REST API."
    },
    {
      year: "2026",
      title: "Школа «Келечек»",
      description: "Учусь в 11 классе и параллельно развиваюсь в веб-разработке."
    }
  ];

  const experience = [
    {
      year: "2026",
      title: "Junior Frontend Developer",
      description: "Разработка SPA-интерфейсов на React с использованием современного JavaScript."
    },
    {
      year: "2026",
      title: "UI-компоненты",
      description: "Создание переиспользуемых компонентов и управление состояниями приложения."
    },
    {
      year: "2026",
      title: "REST API интеграция",
      description: "Подключение API, обработка загрузки данных и ошибок."
    },
    {
      year: "2026",
      title: "Адаптивная верстка",
      description: "Создание интерфейсов для мобильных и десктопных устройств с TailwindCSS."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const renderTimeline = (items) => (
    <div className="relative border-l-2 border-yellow-400 ml-4 pl-6">
      {items.map((item, idx) => (
        <div key={idx} className="mb-8 relative">
          <span className="absolute -left-4 top-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
          <h3 className="font-bold text-lg text-white">{item.title}</h3>
          <span className="text-sm text-gray-400">{item.year}</span>
          <p className="mt-2 text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <h1 className="text-3xl font-bold text-white mb-6">Resume</h1>

      <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
      {renderTimeline(education)}

      <h2 className="text-2xl font-semibold text-white mb-4 mt-6">Experience</h2>
      {renderTimeline(experience)}

      <button
        onClick={() =>
          window.open(
            "resume.pdf",
            "_blank"
          )
        }
        className="px-6 py-3 bg-black/90 text-white font-semibold rounded-md border border-yellow-400/50 shadow-[0_0_15px_rgba(255,204,0,0.3)] hover:shadow-[0_0_25px_rgba(255,204,0,0.5)] transition-all duration-300 active:scale-95"
      >
        Прочитать
      </button> 
    </div>
  );
};

export default Resume;

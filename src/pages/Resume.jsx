import React, { useEffect, useState } from "react";

const Resume = () => {
  const [show, setShow] = useState(false);

  const education = [
    {
      year: "2025",
      title: "Frontend курсы (3 месяца)",
      description: "Изучала HTML, CSS, JavaScript, React и Tailwind CSS."
    },
    {
      year: "2026 – настоящее время",
      title: "Школа «Келечек»",
      description: "Учусь в 11-м классе. Изучаю веб-разработку параллельно с учебой."
    },
    {
      year: "2026",
      title: "Саморазвитие во Frontend",
      description: "Продолжаю улучшать навыки и закреплять базовые знания."
    },
    {
      year: "2026",
      title: "Практика и проекты",
      description: "Отрабатываю навыки на мини-проектах и изучаю структуру приложений."
    }
  ];

  const experience = [
    {
      year: "2026",
      title: "Junior Frontend Developer",
      description: "Создаю интерфейсы на React с использованием Tailwind CSS."
    },
    {
      year: "2026",
      title: "Пет-проекты",
      description: "Разрабатываю собственные мини-приложения для портфолио."
    },
    {
      year: "2026",
      title: "Работа с компонентами",
      description: "Пишу функциональные компоненты и работаю с состояниями."
    },
    {
      year: "2026",
      title: "Адаптивная верстка",
      description: "Делаю интерфейсы удобными для разных устройств."
    },
    {
      year: "2026",
      title: "Рост и развитие",
      description: "Постоянно учусь и улучшаю качество кода."
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
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
            "/Gray and White Simple Professional Marketing Manager CV Resume.pdf",
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

import React, { useEffect, useState } from "react";

const Resume = () => {
  const [show, setShow] = useState(false);

  const education = [
  {
    year: "2025",
    title: "Frontend курсы (3 месяца)",
    description:
      "Прошла интенсивный курс по Frontend разработке. Изучала HTML, CSS, JavaScript, React и Tailwind CSS. Практиковалась на реальных мини-проектах."
  },
  {
    year: "2026 – настоящее время",
    title: "Школа «Келечек»",
    description:
      "Учусь в 11 классе. Село Беловодск. Совмещаю обучение в школе с изучением веб-разработки."
  },
  {
    year: "2026",
    title: "Самостоятельное развитие во Frontend",
    description:
      "После окончания курсов продолжаю самостоятельно углубляться в Frontend. Часто возвращаюсь к базовым темам, чтобы лучше их понять и увереннее применять на практике."
  },
  {
    year: "2026",
    title: "Практика и работа над ошибками",
    description:
      "Много времени уделяю практике. Иногда переписываю код несколько раз, стараясь сделать его чище и понятнее. Постепенно начинаю лучше чувствовать структуру приложений."
  }
];

const experience = [
  {
    year: "2026",
    title: "Junior Frontend Developer",
    description:
      "Создаю интерфейсы на React. Работаю с Tailwind CSS, верстаю адаптивные страницы, разбираюсь с компонентами и состоянием."
  },
  {
    year: "2026",
    title: "Практика и пет-проекты",
    description:
      "Разрабатываю собственные проекты для портфолио. Учусь писать чистый код, понимать структуру приложений и улучшать UI."
  },
  {
    year: "2026",
    title: "Работа с React и компонентной логикой",
    description:
      "Пишу функциональные компоненты, работаю с props и state. Учусь разбивать интерфейс на небольшие части и связывать их между собой."
  },
  {
    year: "2026",
    title: "Адаптивность и внимание к деталям",
    description:
      "Делаю интерфейсы удобными для разных экранов. Обращаю внимание на отступы, выравнивание и общее ощущение аккуратности в интерфейсе."
  },
  {
    year: "2026",
    title: "Понимание и рост",
    description:
      "Стараюсь не просто повторять решения, а понимать, почему код работает именно так. Если что-то не получается, разбираюсь и ищу причину."
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
          <span className="absolute -left-4 top-1 w-4 h-4 bg-yellow-400 rounded-full"></span>
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

      <h2 className="text-2xl font-semibold text-white mb-4 mt-6">
        Experience
      </h2>
      {renderTimeline(experience)}
    </div>
  );
};

export default Resume;
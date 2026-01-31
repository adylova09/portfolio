import React, { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } px-6 md:px-12 lg:px-20`}
    >
      <h1 className="text-gray-200 text-5xl md:text-6xl font-bold mb-6">
        Привет, я Алина
      </h1>

      <p className="text-gray-400 text-xl max-w-2xl mb-8">
        Я начинающий фронтенд-разработчик. Создаю аккуратные интерфейсы
        с React и Tailwind, которые приятно смотреть и удобно использовать.
      </p>

      <button className="px-8 py-4 bg-black/90 text-white font-semibold rounded-md border border-yellow-400/50 hover:shadow-lg transition">
        Посмотреть проекты
      </button>
    </section>
  );
};

export default Home;
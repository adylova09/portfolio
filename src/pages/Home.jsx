import React, { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
  <div className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
  <h1 className="text-gray-300 text-4xl font-bold mb-4">Привет, я Алина</h1>
  <p className="text-gray-400 text-lg mb-6">
    Я начинающий фронтенд-разработчик. Создаю красивые интерфейсы с Tailwind и React.
  </p>
  <button className="px-6 py-3 bg-black/90 text-white font-semibold rounded-md border border-yellow-400/50 shadow-[0_0_15px_rgba(255,204,0,0.3)] hover:shadow-[0_0_25px_rgba(255,204,0,0.5)] transition-all duration-300 active:scale-95">
    Посмотреть портфолио
  </button>
</div>

  );
};

export default Home;
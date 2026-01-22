// import React, { useEffect, useState } from "react";

// const projects = [
//   { title: "Портфолио", description: "Мой первый проект, сделанный на Tailwind.", link: "#" },
//   { title: "Мини-приложение", description: "Небольшое приложение для практики JS и React.", link: "#" },
//   { title: "Сюрприз-проект", description: "От меня небольшой дизайн-эксперимент.", link: "#" },
// ];

// const Portfolio = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(true), 200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//       <h1 className="text-3xl font-bold mb-4">Портфолио</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((proj, idx) => (
//           <div key={idx} className="bg-gray-800 p-4 rounded shadow-lg hover:shadow-yellow-400 transition">
//             <h2 className="text-2xl font-semibold mb-2 text-black">{proj.title}</h2>
//             <p className="text-black mb-2">{proj.description}</p>
//             <a href={proj.link} className="text-yellow-400 hover:underline">Посмотреть</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>

      <p className="text-gray-300 leading-relaxed mb-6">
        Я училась на курсе по фронтенд-разработке в буткемпе A1. Обучение длилось три месяца.<br></br> За это время я изучала фронтенд и училась делать работающие проекты, не просто учебные задания, а реальные интерфейсы, которые можно запустить и использовать.
        <br />
        После курса я перешла на стажировку и продолжила работать с фронтендом уже на практике. Там стало понятнее, как устроены реальные проекты, как выглядят задачи и почему важно не только написать код, но и сделать его понятным и рабочим.
        <br />
        Сейчас я начинающий фронтенд-разработчик уровня junior. Я умею работать с фронтендом, разрабатывать проекты, собирать их целиком и доводить до рабочего состояния. Я всё ещё в начале пути, но уже имею практический опыт и продолжаю развиваться через проекты и работу.
      </p>

      <h2 className="text-3xl font-bold text-white mb-6">My Skills</h2>

      <div className="w-[850px] mx-auto overflow-x-scroll scrollbar-hide py-4">
        <div className="flex gap-6  ">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="
                  flex-none
                  w-32 h-32
                  md:w-40 md:h-40
                  lg:w-48 lg:h-48
                  bg-[#1f1f1f]
                  rounded-2xl
                  flex flex-col items-center justify-center
                  gap-2
                  text-center
                  cursor-pointer
                  transition-transform duration-300
                  hover:scale-110
                "
              >
                <Icon size={48} color={skill.color} />
                <span className="text-white font-semibold text-sm sm:text-base">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

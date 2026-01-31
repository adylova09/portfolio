import { motion } from "framer-motion";
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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-[#EFE9DD] p-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <h1 className="text-center text-5xl md:text-6xl font-extrabold text-gray-800 mb-16">
          Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.25 }}
                className="flex flex-col items-center gap-4"
              >
                <Icon size={90} color={skill.color} />
                <span className="text-2xl font-semibold text-gray-700">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";

export default function Projects() {
  const myProjects = [
    {
      name: "Exclusive Project",
      description: "Веб-проект с интерфейсом на React и адаптивной версткой.",
      url: "https://exclusive-project-eight.vercel.app/",
      github: "https://github.com/adylova09/exclusive-project",
      stars: 5,
    },
    {
      name: "edupro-tech-kg/3legant-frontend",
      description: "уникальные мебели ",
      url: "https://github.com/adylova09/project2",
      github: "https://github.com/edupro-tech-kg/3legant-frontend.git",
      stars: 3,
    },
    {
      name: "Portfolio ",
      description: "портфолио ",
      url: "https://portfolio-tau-blue-86.vercel.app/",
      github: "https://github.com/adylova09/portfolio.git",
      stars: 4,
    },
  ];

  return (
    <section className="pt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-center mb-16
        bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        МОИ ПРОЕКТЫ
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((repo, i) => (
          <motion.a
            key={i}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              relative p-6 rounded-2xl
              bg-gradient-to-br from-neutral-900 to-neutral-800
              border border-neutral-700
              hover:border-indigo-500
              transition-all
              shadow-lg hover:shadow-indigo-500/20
            "
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {repo.name}
            </h2>

            <p className="text-neutral-400 mb-4">
              {repo.description}
            </p>

            <div className="flex gap-4 mt-4 text-gray-400">
              <a href={repo.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <span className="text-sm font-medium text-indigo-400">
              ⭐ {repo.stars} stars
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

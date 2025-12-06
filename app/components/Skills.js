"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Server, Cpu, Globe, Layers } from "lucide-react";

export default function Skills({ skills }) {
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getIcon = (category) => {
    const size = 16;
    switch (category) {
      case "Frontend": return <Globe size={size} />;
      case "Backend": return <Database size={size} />;
      case "DevOps": return <Terminal size={size} />;
      case "Cloud": return <Server size={size} />;
      case "Architecture": return <Cpu size={size} />;
      default: return <Layers size={size} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Technical Arsenal
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Core technologies and tools I use to build scalable systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categories).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIndex * 0.05 }}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4 text-zinc-900 dark:text-zinc-50 font-semibold text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">
                  {getIcon(category)}
                </span>
                {category}
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md select-none hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Briefcase, User, Target, Lightbulb } from "lucide-react";

export default function About({ data }) {
  const sections = [
    {
      title: "Experience & Expertise",
      icon: <Briefcase size={24} />,
      items: data.experience,
      color: "blue"
    },
    {
      title: "Work Style",
      icon: <Lightbulb size={24} />,
      items: data.workStyle,
      color: "yellow"
    },
    {
      title: "Career Goals",
      icon: <Target size={24} />,
      items: data.careerGoals,
      color: "red"
    },
    {
      title: "Personality",
      icon: <User size={24} />,
      items: data.personality,
      color: "purple"
    }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400",
      yellow: "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400",
      red: "text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400",
      purple: "text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400",
    };
    return colors[color];
  };

  return (
    <section id="about-details" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            About Me
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            A deeper look into my journey, mindset, and what drives me as an engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${getColorClass(section.color)}`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
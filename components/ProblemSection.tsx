'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Lightbulb, Mic } from 'lucide-react';

const problems = [
  {
    icon: Rocket,
    title: "Second-guessing every\ndecision",
    description: "Constantly questioning yourself is draining your energy\nand slowing your progress."
  },
  {
    icon: Lightbulb,
    title: "Overthinking instead of\ntaking action",
    description: "Endless mental loops are keeping you stuck instead of\nmoving forward."
  },
  {
    icon: Mic,
    title: "Feeling like your goals are\nslipping away",
    description: "Each day without action makes your dreams feel\nfurther out of reach. Ask ChatGPT"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-normal leading-tight tracking-tight text-[#111827] sm:text-5xl">
            If You're Feeling Stuck,<br />You're Not <span className="text-[#166534]">Alone.</span>
          </h2>
          <p className="mt-6 text-sm text-gray-500">Right now, you might be:</p>
        </motion.div>

        <div className="mt-16 flex flex-col md:flex-row items-stretch gap-8">
          {problems.map((problem, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                  <problem.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-xl font-medium text-[#111827] whitespace-pre-line">{problem.title}</h3>
                <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-xs whitespace-pre-line">
                  {problem.description}
                </p>
              </motion.div>
              {index < problems.length - 1 && (
                <div className="hidden md:block w-px bg-emerald-500/50 self-stretch" />
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button className="cursor-pointer rounded-full bg-[#166534] px-10 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Let's Make It Happen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

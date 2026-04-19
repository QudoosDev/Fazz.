'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Gamepad2, Award } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: "Book a Free Call",
    description: "Tell us about your biggest challenges and what you want to achieve."
  },
  {
    icon: Gamepad2,
    title: "Get Your Game Plan",
    description: "A clear, personalized roadmap designed specifically for your goals."
  },
  {
    icon: Award,
    title: "Start Winning",
    description: "Weekly progress check-ins. Stay accountable and on track."
  }
];

const Steps = () => {
  return (
    <section className="py-20 lg:py-32 bg-white flex flex-col items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-semibold tracking-tight text-[#111827]">
            <span className="block text-4xl sm:text-5xl mb-2">Your First Win is Just</span>
            <span className="block text-4xl sm:text-5xl text-[#2F6A4F]">3 Steps Away</span>
          </h2>
          <p className="mt-6 text-[15px] text-gray-500 max-w-lg mx-auto">
            Follow a simple, proven path to clarity, confidence, and results — starting today.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-white border-[12px] border-[#F8F9FA] rounded-[2.5rem] px-8 py-12"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#2F6A4F] ring-[6px] ring-[#2F6A4F]/20 mb-8 mt-2">
                  <step.icon className="h-7 w-7 text-[#A7F3D0]" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-medium text-[#1E1B4B]">{step.title}</h3>
                <p className="mt-3 text-[13px] text-gray-500 leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button className="cursor-pointer rounded-full bg-[#2F6A4F] px-10 py-3.5 text-[15px] font-medium text-white hover:bg-[#2F6A4F]/90 transition-colors">
            Reserve Your Spot
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;

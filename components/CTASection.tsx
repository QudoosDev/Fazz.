'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white flex justify-center">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#215A3A] via-[#2A6E46] to-[#215E39] pt-16 pb-0 px-10 md:px-16"
        >
          {/* Subtle Radial Gradient to match glow behind the man */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_60%_50%,_rgba(255,255,255,0.15),_transparent_60%)] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[400px]">
            {/* Left Content */}
            <div className="flex flex-col justify-center pb-16 pt-8 max-w-md">
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.15] tracking-tight text-white mb-10">
                You Can Wait<br />
                Another Year...<br />
                or Start Now.
              </h2>
              
              <div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#1F4D33] shadow-lg transition-transform"
                >
                  Book Your Free Call Today — Spots Filling Fast
                </motion.button>
              </div>
            </div>
          </div>

          {/* Absolute Right Side Elements */}
          
          {/* 1. Man Cutout Image */}
          <div className="absolute bottom-0 right-[10%] md:right-[22%] lg:right-[24%] w-[70%] md:w-[50%] h-[100%] scale-[1.35] origin-bottom pointer-events-none">
            <Image 
              src="/last-section.png"
              alt="Start Now Coach"
              fill
              className="object-contain object-bottom"
              referrerPolicy="no-referrer"
              quality={100}
              sizes="(max-width: 1024px) 100vw, 1000px"
              priority
            />
          </div>

          {/* 2. Small Text Top Right */}
          <div className="absolute top-16 right-10 lg:right-16 hidden md:block">
            <p className="text-[14px] text-white/80 font-light leading-relaxed tracking-wide">
              Most people wait until they're<br />
              "ready." The truth? You'll never feel<br />
              ready — until you begin.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

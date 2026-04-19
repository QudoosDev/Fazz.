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
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#215A3A] via-[#2A6E46] to-[#215E39] pt-12 md:pt-16 pb-0 px-6 sm:px-10 md:px-16"
        >
          {/* Subtle Radial Gradient to match glow behind the man */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_60%_50%,_rgba(255,255,255,0.15),_transparent_60%)] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-10 min-h-[400px]">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left pb-[340px] sm:pb-[360px] md:pb-16 pt-6 md:pt-8 max-w-md mx-auto md:mx-0 relative z-20 w-full">
              <h2 className="text-[34px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-white mb-6 md:mb-10 w-full">
                You Can Wait<br />
                Another Year...<br />
                or Start Now.
              </h2>

              <div className="mb-8 md:hidden w-full max-w-[280px]">
                <p className="text-[14px] text-white/80 font-light leading-relaxed tracking-wide text-center">
                  Most people wait until they're "ready." The truth? You'll never feel ready — until you begin.
                </p>
              </div>
              
              <div className="w-full px-2 sm:px-0 sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto cursor-pointer rounded-full bg-white px-6 py-2.5 md:px-8 md:py-4 text-[14px] md:text-[15px] font-semibold text-[#1F4D33] shadow-lg transition-transform block leading-snug"
                >
                  Book Your Free Call Today <span className="hidden sm:inline">—</span>
                  <br className="sm:hidden" />
                  <span className="sm:hidden font-medium opacity-80 text-[12.5px]">Spots Filling Fast</span>
                  <span className="hidden sm:inline"> Spots Filling Fast</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Absolute Right Side Elements */}
          
          {/* 1. Man Cutout Image */}
          <div className="absolute bottom-0 left-[45%] -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[10%] lg:right-[14%] w-[160%] sm:w-[120%] md:w-[60%] h-[320px] sm:h-[350px] md:h-[100%] scale-[1.18] md:scale-[1.27] origin-bottom pointer-events-none z-10">
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

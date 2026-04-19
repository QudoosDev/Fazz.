'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Phone, Award, Users, TrendingUp, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#F6F6F6] px-6 pt-24 pb-0 lg:px-8 lg:pt-32">
      {/* Grid Pattern with Fade Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to left, black, transparent 70%)'
        }}
      ></div>
      
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          {/* Label Note */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center rounded-full bg-[#166534] px-4 py-1.5 text-sm font-medium text-white shadow-sm"
          >
            Helping high-achievers stop overthinking
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
          >
            Your Breakthrough<br />
            <span className="text-[#166534]">Moment</span> Starts Here.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-6 mx-auto lg:mx-0 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg"
          >
            Trusted by 500+ professionals worldwide to unlock clarity, confidence, and unstoppable momentum — all in the first 30 days.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer flex items-center gap-2 rounded-full bg-[#166534] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#166534]/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Book Your Free Call Now
            </motion.button>
          </motion.div>

          {/* Social Proof Authority Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:items-center"
          >
            <div className="flex flex-wrap justify-center -space-x-4">
              <Image className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm" width={48} height={48} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="userImage1" />
              <Image className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm" width={48} height={48} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2" />
              <Image className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm" width={48} height={48} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="userImage3" />
            </div>
            <div className="flex flex-col items-center lg:items-start text-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-1 font-medium text-gray-700">
                Loved by <span className="font-bold">500+</span> professionals
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative h-full w-full flex items-end justify-center self-end"
        >
          {/* Loaded Image - No background, aligned to bottom, scaled up an extra 20% */}
          <div className="relative aspect-[3/4] w-full max-w-lg lg:max-w-xl scale-[2.27] origin-bottom">
            <Image
              src="/hero-section.png"
              alt="Coach Adam"
              fill
              className="object-contain object-bottom"
              referrerPolicy="no-referrer"
              priority
              quality={100}
              sizes="(max-width: 768px) 150vw, (max-width: 1200px) 120vw, 2000px"
            />
          </div>
          
          {/* Floating Refined Badges - Adjusted positioning */}
          <div className="absolute bottom-1/3 right-0 flex flex-col gap-3 scale-90 sm:scale-100">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/40 p-1.5 pr-6 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500 text-white">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-gray-900">10+ Years Coaching</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/40 p-1.5 pr-6 shadow-xl backdrop-blur-md translate-x-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-gray-900">500+ Clients Coached</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

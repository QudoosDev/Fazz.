'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Plane, Puzzle, User } from 'lucide-react';

const Differentiation = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white flex justify-center">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="rounded-[2.5rem] border-[12px] border-[#F8F9FA] bg-white p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-stretch">
            
            {/* Left Column: Text & Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-semibold tracking-tight text-[#111827]">
                <span className="block text-4xl sm:text-5xl mb-2">Not All Coaches</span>
                <span className="block text-4xl sm:text-5xl">Are the <span className="text-[#2F6A4F]">Same.</span></span>
              </h2>
              <p className="mt-6 text-[15px] text-gray-500 max-w-md leading-relaxed pr-4">
                Experience personalized coaching that adapts to your unique journey — no generic advice here.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-[#F8F9FA] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E293B] mb-4 text-white ring-4 ring-[#1E293B]/10">
                    <Plane className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1E1B4B]">Proven Results</h3>
                  <p className="mt-2 text-[12px] text-gray-500 leading-relaxed">
                    500+ success stories speak for <br className="hidden sm:block" />themselves
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#F8F9FA] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E293B] mb-4 text-white ring-4 ring-[#1E293B]/10">
                    <Puzzle className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1E1B4B]">Real Accountability</h3>
                  <p className="mt-2 text-[12px] text-gray-500 leading-relaxed">
                    I don't let you quit on <br className="hidden sm:block" />yourself
                  </p>
                </div>

                {/* Card 3 (Full Width) */}
                <div className="bg-[#F8F9FA] rounded-[1.5rem] p-6 flex items-center col-span-2 gap-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1E293B] text-white ring-4 ring-[#1E293B]/10">
                    <User className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1E1B4B]">No Cookie-Cutter Advice</h3>
                    <p className="mt-1 text-[12px] text-gray-500">
                      Every session tailored to your unique life
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] lg:h-auto min-h-[400px]"
            >
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <Image
                  src="/not-all-coaches.png"
                  alt="Coaching Session"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;

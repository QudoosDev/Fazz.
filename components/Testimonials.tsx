'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "In just 6 weeks, I doubled my income and finally launched my online business. The clarity I gained was life-changing!",
    details: "With the right guidance and a clear plan, six weeks was all it took to transform uncertainty into confidence, double the income, and bring a long-awaited business dream to life.",
    author: "Austin Arthur",
    role: "Businesswoman",
    rating: 5,
    avatar: "https://picsum.photos/seed/person1/100/100",
    gradient: "from-yellow-100 to-transparent"
  },
  {
    quote: "I went from crippling doubt to signing my first 5 high-ticket clients. This program changed everything for me.",
    details: "Breaking through self-doubt unlocked the confidence, strategy, and momentum needed to attract dream clients and build a thriving business.",
    author: "Elena Rodriguez",
    role: "Startup Consultant",
    rating: 5,
    avatar: "https://picsum.photos/seed/person2/100/100",
    gradient: "from-emerald-200 to-transparent"
  },
  {
    quote: "The personalized approach is unmatched. I finally feel like I have a clear roadmap to success and the tools to get there.",
    details: "Replacing overwhelm with targeted strategies resulted in immediate business momentum and total peace of mind.",
    author: "Sarah Jenkins",
    role: "Agency Founder",
    rating: 5,
    avatar: "https://picsum.photos/seed/person3/100/100",
    gradient: "from-blue-100 to-transparent"
  },
  {
    quote: "I've worked with coaches before, but Adam's accountability is next level. He doesn't let you hide from your potential.",
    details: "By identifying blind spots and pushing past limitations, I closed my biggest enterprise contract yet.",
    author: "Marcus Vance",
    role: "Sales Director",
    rating: 5,
    avatar: "https://picsum.photos/seed/person4/100/100",
    gradient: "from-purple-100 to-transparent"
  },
  {
    quote: "From chaos to absolute clarity. The framework provided helped me cut my work hours in half while doubling output.",
    details: "Streamlining processes and focusing on high-leverage tasks completely transformed my work-life balance.",
    author: "Leia Thompson",
    role: "Tech Entrepreneur",
    rating: 5,
    avatar: "https://picsum.photos/seed/person5/100/100",
    gradient: "from-orange-100 to-transparent"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-normal leading-tight tracking-tight text-[#111827] sm:text-5xl">
            From Overwhelmed to <span className="text-[#166534]">Unstoppable</span>
          </h2>
          <p className="mt-6 text-sm text-gray-500 max-w-lg mx-auto">
            Turn chaos into clarity and step boldly into your greatest potential.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="mt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbars no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] snap-start p-8 rounded-[2rem] bg-gradient-to-br ${item.gradient} border border-gray-100 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <blockquote className="text-xl font-medium text-[#111827] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  {item.details}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      width={40}
                      height={40}
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">{item.author}</div>
                    <div className="text-xs text-gray-500">{item.role}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">{item.rating}.0 Ratings</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button 
            onClick={scrollLeft}
            className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={scrollRight}
            className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full bg-[#166534] text-white hover:opacity-90 transition-opacity"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

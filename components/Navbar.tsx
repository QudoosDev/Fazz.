'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { GraduationCap, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-8"
    >
      <nav className="mx-auto max-w-4xl flex h-16 items-center justify-between rounded-full border border-gray-200 bg-white/90 backdrop-blur-md px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#166534] text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <Link href="/" className="text-lg font-extrabold tracking-tight text-[#111827]">
            Fazz<span className="text-[#166534]">.</span>
          </Link>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8">
            <Link href="#home" className="text-sm font-semibold text-[#111827] hover:text-[#166534] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-semibold text-gray-500 hover:text-[#166534] transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-sm font-semibold text-gray-500 hover:text-[#166534] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-black"
        >
          <Phone className="h-3 w-3" />
          <span>Book Free Call</span>
        </motion.button>
      </nav>
    </motion.div>
  );
};

export default Navbar;

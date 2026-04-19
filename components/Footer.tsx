'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#111827]">
              Fazz<span className="text-[#166534]">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-gray-500">
              Empowering driven professionals to bridge the gap between where they are and where they belong. Breakthrough coaching for high-performers.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold leading-6 text-[#111827]">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">1:1 Coaching</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Power Sessions</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Workshops</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Speaking</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-[#111827]">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Blog</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Podcast</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Free Tools</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
               <div>
                <h3 className="text-sm font-bold leading-6 text-[#111827]">Information</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold leading-6 text-[#111827]">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-500 hover:text-[#166534]">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Fazz Coaching. All rights reserved.
          </p>
          <div className="flex gap-6">
             <Link href="#" className="text-gray-400 hover:text-[#166534]">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.831 2.851A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844" /></svg>
             </Link>
             <Link href="#" className="text-gray-400 hover:text-[#166534]">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

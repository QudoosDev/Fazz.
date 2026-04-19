'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Steps from '@/components/Steps';
import Differentiation from '@/components/Differentiation';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <PricingSection />
      <Testimonials />
      <Steps />
      <Differentiation />
      <CTASection />
      <Footer />
    </main>
  );
}

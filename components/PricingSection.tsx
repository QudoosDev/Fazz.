'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Standard",
    price: "$197",
    tag: "Essential",
    features: [
      "1:1 Power Sessions",
      "Monthly Strategy Call",
      "Goal Tracking Dashboard",
      "Email Support"
    ],
    highlight: false,
    buttonText: "Get Started"
  },
  {
    name: "90-Day Transformation",
    price: "$497",
    tag: "Most Popular",
    features: [
      "Weekly 1:1 Sessions",
      "Full Performance Audit",
      "Direct WhatsApp Access",
      "Priority Support",
      "Resource Library Access"
    ],
    highlight: true,
    buttonText: "Join Now"
  },
  {
    name: "Advance Mastermind",
    price: "$997",
    tag: "High Tier",
    features: [
      "Daily Direct Coaching",
      "Strategic Planning Weekends",
      "Executive Networking",
      "Infinite Revisions",
      "VIP Event Access"
    ],
    highlight: false,
    buttonText: "Apply Now"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            Your Personal Game Plan for <span className="text-[#166534]">Success</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">Choose the path that fits your goals and timeline.</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: plan.highlight ? 1.05 : 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl p-8 shadow-sm ${
                plan.highlight 
                  ? 'bg-[#166534] text-white ring-4 ring-[#166534]/10 transform md:scale-105 z-10' 
                  : 'bg-white text-[#111827] border border-gray-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#22C55E] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  {plan.tag}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-lg font-bold ${plan.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>/Month</span>
                </div>
              </div>

              <ul role="list" className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlight ? 'text-[#22C55E]' : 'text-[#166534]'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`cursor-pointer w-full rounded-2xl py-4 text-sm font-bold transition-all ${
                  plan.highlight
                    ? 'bg-white text-[#166534] hover:bg-gray-100'
                    : 'bg-[#166534] text-white hover:bg-[#166534]/90'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

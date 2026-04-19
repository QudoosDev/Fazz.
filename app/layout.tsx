import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fazz - Modern Coaching for Breakthrough Success',
  description: 'Transform your journey with Fazz, the premium coaching platform designed for driven professionals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body suppressHydrationWarning className="bg-[#F9FAFB] text-[#111827] font-sans">
        {children}
      </body>
    </html>
  );
}

# Fazz - Premium Coaching Provider Landing Page

<img width="1908" height="794" alt="Fazz" src="https://github.com/user-attachments/assets/ee7daaf7-d78a-4650-8bcc-9382ecd608b7" />

This is a modern, high-conversion landing page built for high-end coaching professionals. It is designed with precision to establish authority, present clear roadmaps, and maximize conversion rates for exclusive strategy sessions. 

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), React 19, and TypeScript.
- **Beautiful UI**: Styled with Tailwind CSS v4, providing a clean, professional, and entirely responsive experience across all screen sizes.
- **Fluid Micro-Interactions**: Native motion graphics and scroll-triggered entrance animations powered by `motion/react` to create a living, premium feel.
- **Image Optimization**: High-resolution Next.js `<Image>` components ensure razor-sharp graphics with responsive loading.
- **Testimonial Carousel**: An interactive horizontal scroll-snap review component providing continuous social proof.
- **Glassmorphism Design**: Frosted navigation headers and subtle overlays to reinforce the modern high-end look.

## Installation and Setup

To get this project running on your local machine:

1. Setup environment variables:
   Copy `.env.example` to `.env.local` and add your deployment root domain:
   ```bash
   cp .env.example .env.local
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The project is natively built on Next.js, meaning the easiest and most optimized way to deploy it is via **Vercel**!

**To Deploy on Vercel:**
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Vercel will automatically detect that it's a Next.js project.
4. Add your `APP_URL` into the Environment Variables section.
5. Click **Deploy**.

Alternatively, to build and run it locally on standard Node.js hosting:

```bash
npm run build
npm run start
```

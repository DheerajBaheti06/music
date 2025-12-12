# Live Demo

[https://music-dheerajbaheti-projects.vercel.app/]([https://music-dheerajbaheti-projects.vercel.app/](https://music-beta-bice.vercel.app/))

# Music School – Next.js & Tailwind CSS

This is a modern, full-featured music academy web app built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It offers a beautiful, interactive experience for students to explore music courses, meet instructors, read testimonials, and join webinars.

---

## Features

- **Landing Page**: Hero section, featured courses, testimonials, upcoming webinars, and more.
- **Courses**: Browse all music courses with 3D card effects, images, and details.
- **Instructors**: Meet the team with animated tooltips and wavy backgrounds.
- **Testimonials**: Infinite moving cards with real student feedback.
- **Webinars**: Highlighted upcoming events and easy navigation.
- **Why Choose Us**: Sticky scroll section with unique selling points.
- **Contact Page**: Interactive contact links with animated tooltips.
- **Responsive Design**: Fully mobile-friendly and dark mode support.
- **Modern UI**: Custom UI components, gradients, and animations.

---

## Project Structure

```
src/
  app/           # Next.js app directory (pages, layout, styles)
    Courses/     # All courses page
    Contacts/    # Contact & links page
    ...
  components/    # UI and feature components
    ui/          # Reusable UI components (cards, tooltips, effects)
    ...
  data/          # Static data (music_courses.json)
  utils/         # Utility functions
public/          # Static assets
```

---

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Customization & Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, custom gradients, and animations
- **UI Libraries**: Framer Motion, Lucide React, Simplex Noise
- **TypeScript**: Full type safety
- **Data**: Static JSON for courses
- **Deployment**: [Vercel](https://vercel.com/)

---

## Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT

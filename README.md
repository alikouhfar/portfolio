# Personal Portfolio Showcase of Ali Kouhfar

![Ali Kouhfar Logo](https://alikouhfar.liara.run/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0b29b488.png&w=2048&q=75)

## Table of Contents

- [Personal Portfolio Showcase of Ali Kouhfar](#personal-portfolio-showcase-of-ali-kouhfar)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Version History](#version-history)
  - [Challenges](#challenges)
    - [Technical Challenges](#technical-challenges)
    - [Design \& Performance](#design--performance)
  - [What I Learned](#what-i-learned)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This repository contains a sleek and professional portfolio website built using Next.js with TypeScript. The application serves as a showcase for my projects, skills, and experiences, demonstrating my expertise to potential employers or clients. With its modern design, intuitive navigation, and dedicated project detail pages, this portfolio app highlights both my technical and design capabilities.

## Features

- **Customizable Content**: Easily update and customize portfolio sections including projects, skills, and personal information.
- **Responsive Design**: Optimized for viewing on all devices.
- **Dedicated Projects Page**: Centralized hub to explore projects in detail.
- **Project Detail Pages**: Includes descriptions, animations, and integration with GitHub data.
- **Skills Section**: Highlights core technical expertise.
- **Modern Theme**: Clean and minimal aesthetic with motion-based interactions.
- **Social Media Integration**: Links to social profiles for visibility and networking.

## Technologies Used

- **Next.js (v15)**: Framework for React with support for server-side rendering and static generation.
- **TypeScript**: Strong typing for reliability and maintainability.
- **React (v19)**: Library for building user interfaces.
- **Framer Motion (via Motion)**: For smooth animations and transitions.
- **Radix UI**: Accessible and customizable UI primitives.
- **Lucide Icons & Iconify**: Modern, flexible icon libraries.
- **React Fast Marquee**: For animated text/scroll effects.
- **React Markdown**: For rendering markdown content.
- **React Intersection Observer**: For scroll-based interactions.
- **Tailwind CSS v4 + Tailwind Merge**: Utility-first styling with streamlined class merging.
- **ESLint + Prettier**: For consistent code style and quality.

## Version History

- **Version 1.0.0** (Initial Release - 2024-02-15):
  - Implemented basic portfolio structure with project showcase, skills section, and contact form.
  - Integrated smooth page transitions for enhanced user experience.
  - Updated dependencies to the latest versions for improved performance and security.
  - Added multi-language support for internationalization.

- **Version 1.1.0** (2024-05-22):
  - Changed the Persian font to Yekan Bakh.
  - Changed the project structure to use TypeScript.
  - As it is not a good thing to use database to store static data, the necessary information is now stored inside of project folders.

- **Version 2.0.0** (2024-08-25):
  - Migrated to Next.js with TypeScript for improved performance and maintainability.
  - Enhanced routing capabilities with Next.js features.
  - Improved type safety and developer experience with TypeScript.
  - Optimized server-side rendering for faster initial load times.
  - Enhanced SEO capabilities through proper Next.js configuration.
  - Improved error handling and debugging with TypeScript-specific tools.
  - Simplified state management using React Context API and custom hooks.
  - Implemented responsive design improvements for better mobile experience.
  - Added TypeScript-specific linting rules for stricter code quality checks.

- **Version 2.1.0** (2024-09-01):
  - Bug fixes and error resolutions.
  - Accent color changed.
  - Contact form functionality improvement.

- **Version 3.0.0** (2025-10-02 – Current Version):
  - Brand new theme and design overhaul.
  - Introduced a dedicated projects page with individual project detail pages.
  - Replaced **Swiper** with lightweight alternatives.
  - Integrated **GitHub GraphQL API** to fetch project/user details.
  - Added advanced scroll-spy behavior for project details.
  - Animations powered by **Framer Motion**.
  - Contact form temporarily removed (to be reintroduced in a future release).

## Challenges

### Technical Challenges

- Implementing a **scroll-spy system** for tracking sections in project detail pages.
- Connecting to **GitHub APIs via GraphQL** and handling authentication/data fetching.
- Migrating away from Swiper while keeping lightweight and smooth UI interactions.

### Design & Performance

- Creating a **fresh theme** that balances animations with minimalism.
- Ensuring smooth animations and transitions with **Framer Motion** while maintaining performance.
- Designing new **project detail pages** with consistent styling and responsive layout.

## What I Learned

1. **Framer Motion**: Leveraged its animation system for smooth, production-ready transitions.
2. **GraphQL Integration**: Learned to fetch GitHub project/user data via GraphQL efficiently.
3. **Scroll Spy Techniques**: Implemented intersection observer hooks for advanced scroll tracking.
4. **Design Overhaul**: Experience in redesigning an entire theme while preserving accessibility.
5. **Package Ecosystem Update**: Migrated to new libraries and removed unnecessary dependencies for performance gains.

## Getting Started

To get started with this project:

1. Clone this repository:

   ```bash
   git clone https://github.com/alikouhfar/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Contributing

Contributions are welcome! Please fork the repo, create a branch, make changes, and submit a pull request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

import { IPricing } from "@/app/_models/pricing.model";

export const pricingPlans: IPricing[] = [
  {
    title: "Starter",
    description:
      "Perfect for beginners or those starting out with small projects.\nAccess to essential tools and resources for web development.",
    price: 500,
    rate: "month",
    features: [
      "Basic HTML/CSS/JavaScript support",
      "Limited access to version control systems (e.g., Git)",
      "Email support for inquiries",
      "Basic responsive design support",
    ],
  },
  {
    title: "Professional",
    description:
      "Tailored for experienced developers handling medium-sized projects.\nComprehensive suite of tools for efficient project management.",
    price: 1000,
    rate: "month",
    isPopluar: true,
    features: [
      "Advanced CSS frameworks (e.g., Bootstrap, TailwindCSS)",
      "Version control system access (Git, GitHub)",
      "Priority email support and occasional video tutorials",
      "Advanced responsive design tools (e.g., Figma, Adobe XD integration)",
      "Performance optimization tools (e.g., Lighthouse, WebPageTest integration)",
    ],
  },
  {
    title: "Ultimate",
    description:
      "Designed for large-scale projects requiring top-tier support and resources.\nEverything included in the Professional plan plus additional benefits for high-stakes projects.",
    price: 1500,
    rate: "month",
    features: [
      "Premium CSS frameworks and libraries (e.g., Sass, Less)",
      "Full access to version control systems (Git, GitHub, Bitbucket)",
      "Dedicated account manager for personalized support",
      "Regular live workshops and advanced training sessions",
      "Custom UI component library creation",
      "End-to-end testing automation (e.g., Selenium, Cypress integration)",
      "Priority support for custom tool integrations",
    ],
  },
];

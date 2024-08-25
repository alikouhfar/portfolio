import { IPricing } from "@/app/_models/pricing.model";

export const pricingPlans: IPricing[] = [
  {
    title: "Starter",
    description:
      "Perfect for beginners or those starting out with small projects.\nAccess to essential tools and resources for web development.",
    price: 549,
    rate: "month",
    features: [
      "Core Web Building ▪️ Essential tools for creating a basic, responsive website.",
      "Learning Resources ▪️ Access to video tutorials and guides for easy learning.",
      "Single Project Focus ▪️ Concentrated effort on a single project or a tight budget.",
      "Responsive Design ▪️ Ensures the website looks great on any device.",
    ],
  },
  {
    title: "Professional",
    description:
      "Tailored for experienced developers handling medium-sized projects.\nComprehensive suite of tools for efficient project management.",
    price: 1299,
    rate: "month",
    isPopluar: true,
    features: [
      "Advanced Tools ▪️ Access to a wider range of tools for more complex projects.",
      "Fast Priority Support ▪️ Quick assistance through live chat and email.",
      "Multi-Project Management ▪️ Efficient handling of multiple projects.",
      "Customizable Themes ▪️ Variety of themes to match your brand.",
    ],
  },
  {
    title: "Ultimate",
    description:
      "Designed for large-scale projects requiring top-tier support and resources.\nEverything included in the Professional plan plus additional benefits for high-stakes projects.",
    price: 1999,
    rate: "month",
    features: [
      "Custom Web Development ▪️ Tailored solutions to meet your unique needs.",
      "Dedicated Expert Team ▪️ A team committed to your project's success.",
      "In-depth Analytics ▪️ Gain deep insights into your website's performance.",
      "Scalable Solutions ▪️ As your business grows, your plan scales with you.",
    ],
  },
];

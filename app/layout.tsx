import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio of Ali Kouhfar",
  description:
    "Portfilio is a sleek portfolio website showcasing my skills, projects, and experience. Built with modern web technologies, including HTML, CSS, JavaScript, and React this website is designed to impress potential employers, clients, and collaborators. With a responsive layout, it looks great on any device, from desktops to smartphones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Header from "./_components/Header";
import { ThemeProvider } from "./_contexts/ThemeContext";
import { jost } from "./_ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio of Ali Kouhfar",
    template: "Ali Kouhfar ◾ %s",
  },
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
      <body className={`${jost.className} overflow-x-hidden antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

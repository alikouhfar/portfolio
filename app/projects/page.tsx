import { Metadata } from "next";
import Projects from "./_components/Projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return <Projects />;
}

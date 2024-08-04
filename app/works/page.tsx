import { Metadata } from "next";
import Works from "../_components/Works";

export const metadata: Metadata = {
  title: "Works",
};

export default function Page() {
  return <Works />;
}

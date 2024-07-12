import { Caveat, Jost } from "next/font/google";

export const jost = Jost({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const caveat = Caveat({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

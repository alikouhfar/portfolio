import { Caveat, Jost } from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

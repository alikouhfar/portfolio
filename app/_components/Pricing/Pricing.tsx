import { pricingPlans } from "@/app/_lib/pricing";
import { jost } from "@/app/_ui/fonts";
import VerticalLine from "../VerticalLine";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div
      className={`${jost.className} relative flex w-full flex-wrap justify-center p-3 pb-14 antialiased`}
    >
      <div className="grid max-w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 md:gap-10 xl:max-w-container xl:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      <VerticalLine
        linePosition="left-0"
        imagePosition="-right-5 md:-right-12"
      />
    </div>
  );
}

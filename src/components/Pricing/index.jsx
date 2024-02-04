import { IconCurrencyDollar } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { supabase } from "../../data/supabase";
import Card from "./Card";

export default function Pricing() {
  const [pricings, setPricings] = useState([]);
  useEffect(() => {
    const fetchPricings = async () => {
      let { data: pricings, error: pricingsError } = await supabase
        .from("pricings")
        .select("*");
      setPricings(pricings);
    };
    fetchPricings();
  }, []);
  return (
    <section
      className="overflow-hidden py-[90px] tablet:pb-[50px]"
      id="pricing"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white">
              <IconCurrencyDollar
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>Pricing</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              My <span className="text-theme">Pricing</span>
            </h1>
            <div>
              <div className="grid grid-cols-2 gap-x-5 mobile:gap-y-4">
                {pricings.map((pricing, index) => (
                  <Card pricing={pricing} key={index} />
                ))}
              </div>
              <div className="mt-16 text-sm leading-6 text-white">
                <span>Don't find any package match with your plan!</span>
                <div>
                  <span>
                    Want to setup a new tailor-made package for only you?.
                  </span>
                  <a href="#" className="ml-2 text-theme underline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

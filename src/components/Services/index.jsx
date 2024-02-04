import { IconVip } from "@tabler/icons-react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { supabase } from "../../data/supabase";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchExperiences = async () => {
      let { data: services, error: servicesError } = await supabase
        .from("services")
        .select("*");
      setServices(services);
    };
    fetchExperiences();
  }, []);
  return (
    <section
      className="overflow-hidden py-[90px] tablet:pb-[50px]"
      id="services"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white">
              <IconVip className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>Services</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              My <span className="break-words text-theme">Specializations</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-4 small:grid-cols-1">
            {/** Service Cards **/}
            {services.map((service, index) => (
              <Card service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col gap-5 md:flex-row mb-5 md:mb-0 max-w-md mx-auto md:mx-0">
      <div className="bg-purple-600 rounded-[70px] md:rounded-[200px] w-full md:w-[270px] h-36 md:h-[400px]"></div>
      <div className="flex flex-col md:border-t-zinc-800 md:border-t-2 md:border-b-zinc-800 md:border-b-2 md:absolute md:left-[260px] md:top-1/2 md:h-[98%] md:-translate-y-1/2 md:max-w-[65%] md:py-10 md:pr-3 md:pl-20">
        <p className="text-lg text-center md:text-left lg:text-2xl text-zinc-500 dark:text-zinc-200 font-light capitalize flex-nowrap mb-3 md:mb-0">
          {testimonial.testimonial}
        </p>
        <span className="mt-auto text-xl lg:text-[26px] text-zinc-800 dark:text-purple-600 font-semibold capitalize text-center md:text-left">
          {testimonial.name}
        </span>
        <div className="flex items-center gap-1.5 mx-auto md:mx-0">
          <span className="block w-6 border-t-2 border-t-purple-600 dark:border-t-zinc-600"></span>
          <small className="text-xs dark:font-semibold dark:text-zinc-600">
            <span className="uppercase">{testimonial.job}</span>,
            <span className="capitalize">{testimonial.company}</span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

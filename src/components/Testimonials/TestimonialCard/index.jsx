function TestimonialCard({ testimonial }) {
  return (
    <div className="flex">
      <div className="bg-purple-600 rounded-[200px] w-[270px] h-[400px]"></div>
      <div className="flex flex-col border-t-zinc-800 border-t-2 border-b-zinc-800 border-b-2 absolute left-[260px] top-1/2 h-[98%] -translate-y-1/2 max-w-[65%] py-10 pr-3 pl-20">
        <p className="text-2xl text-zinc-500 font-light capitalize flex-nowrap">
          {testimonial.testimonial}
        </p>
        <span className="mt-auto text-[26px] text-zinc-800 font-semibold capitalize">
          {testimonial.name}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="block w-6 border-t-2 border-t-purple-600"></span>
          <small className="text-xs">
            <span className="uppercase">{testimonial.job}</span>,
            <span className="capitalize">{testimonial.company}</span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

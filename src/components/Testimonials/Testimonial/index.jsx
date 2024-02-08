export default function Testimonial({ testimonial }) {
  return (
    <>
      <div className="mb-11 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <h3 className="mb-1.5 text-lg font-light leading-5 text-white">
            {testimonial.name}
          </h3>
          <p className="m-0 text-sm font-light leading-3 text-zinc-400 mobile:leading-4">
            {testimonial.jobTitle}
            <span> of </span>
            <span className="text-theme">{testimonial.company}</span>
          </p>
        </div>
      </div>
      <p className="mb-7 text-2xl font-light leading-[36px] text-white mobile:text-xl">
        “{testimonial.body}”
      </p>
      <a className="inline-block text-xs uppercase text-white">
        {testimonial.tag}
      </a>
    </>
  );
}

export default function ({ project }) {
  return (
    <div
      className={`group/project ${project.span && "col-span-2"} ${!project.span && "mobile:col-span-2"}`}
    >
      <div className="mb-16">
        <div className="relative mb-8 h-[410px] overflow-hidden rounded-[30px]">
          <a href="#">
            <img
              src={project.image}
              className="block h-full w-full
                     object-cover"
            />
          </a>
          <ul className="absolute bottom-5 left-5 flex flex-wrap items-center gap-3">
            {project.tags.map((tag, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block rounded-[20px] bg-white px-5 py-2 text-sm text-zinc-900 transition-all group-hover/project:bg-zinc-900 group-hover/project:text-white"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="m-0 text-2xl font-light">
          <a
            href="#"
            className="inline-block text-white transition-all group-hover/project:text-theme"
          >
            {project.title}
          </a>
        </h2>
      </div>
    </div>
  );
}

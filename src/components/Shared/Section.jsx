export default function ({ children, isColored, id }) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-between h-screen py-16 px-44 max-w-screen-2xl mx-auto ${
        isColored && "bg-[#ffd670]"
      }`}
    >
      {children}
    </section>
  );
}

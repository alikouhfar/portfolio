export default function ({ children, isColored, id }) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-between 2xl:h-screen py-4 px-5 md:py-20 md:px-16 lg:px-44 lg:py-16 max-w-screen-2xl mx-auto ${
        isColored
          ? "bg-[#ffd670] dark:text-zinc-800"
          : "dark:bg-zinc-900 dark:text-zinc-200"
      }`}
    >
      {children}
    </section>
  );
}

export default function ({ skill }) {
  return (
    <li style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="flex items-center justify-center text-left rounded-full bg-zinc-900 text-white w-14 h-14 mx-auto md:mx-0">
        {skill.icon}
      </div>
      <p className="font-semibold text-center md:text-left text-base">
        {skill.title}
      </p>
    </li>
  );
}

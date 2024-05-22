export default function ({ codingSkill }) {
  return (
    <div>
      <div className="mb-[50px]">
        <div className="mb-5 rounded-[100px] border-2 border-zinc-600 py-12 transition-all hover:border-theme">
          <img
            src={codingSkill.image}
            className="m-auto mb-[29px] block max-h-20"
          />
          <h1 className="m-0 text-3xl font-light text-theme">
            {codingSkill.mastery}%
          </h1>
        </div>
        <p className="m-0 text-sm text-white">{codingSkill.title}</p>
      </div>
    </div>
  );
}

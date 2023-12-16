export default function ({ contact }) {
  return (
    <div className="flex border-t-zinc-800 border-t-2 py-7 gap-6">
      <div className="bg-white rounded-full self-start p-4">{contact.icon}</div>
      <div className="w-3/4">
        <h3 className="text-[13px] text-zinc-700">{contact.title}</h3>
        <p className="font-semibold text-xl">{contact.content}</p>
      </div>
    </div>
  );
}

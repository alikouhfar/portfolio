import PropTypes from "prop-types";

export default function ContactCard({ contact }) {
  return (
    <div className="flex flex-col md:flex-row border-t-zinc-800 border-t-2 md:border-t-0 md:border-l-zinc-800 md:border-l-2 xl:border-l-0 xl:border-t-zinc-800 xl:border-t-2 py-7 md:py-0 xl:py-7 md:pl-4 gap-3 md:gap-6 w-full">
      <div className="bg-white rounded-full self-start p-4">{contact.icon}</div>
      <div className="w-full lg:w-3/4">
        <h3 className="text-[13px] text-zinc-700">{contact.title}</h3>
        <p className="font-semibold text-xl">{contact.content}</p>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object,
  icon: PropTypes.element,
  title: PropTypes.string,
  content: PropTypes.string,
};

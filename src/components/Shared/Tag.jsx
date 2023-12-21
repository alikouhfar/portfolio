import PropTypes from "prop-types";

export default function Tag({ children }) {
  return (
    <span className="md:absolute text-purple-600 text-[13px] font-semibold -rotate-[30deg] -top-4 -left-5">
      {children}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.element,
};

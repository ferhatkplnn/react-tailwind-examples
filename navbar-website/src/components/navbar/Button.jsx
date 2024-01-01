import PropTypes from "prop-types";

function Button({ name, href, isActive = false }) {
  const active = "text-lg font-bold px-6 py-3 bg-gray-300 text-red-600 rounded";
  const inActive =
    "text-lg font-medium leading-6 text-slate-900 px-6 py-3 hover:text-red-400";
  return (
    <>
      <a href={href} className={isActive ? active : inActive}>
        {name}
      </a>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Button;

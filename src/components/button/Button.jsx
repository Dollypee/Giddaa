
import PropTypes from 'prop-types'

const Button = ({
  title = "",
  type = "button",
  style = {},
  className = "",
  disabled = false,
  loading = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      style={{ ...style, cursor: disabled ? "not-allowed" : "pointer" }}
      onClick={onClick}
      disabled={disabled || loading}
      className={"px-4 flex items-center text-black text-center whitespace-nowrap " + className}
    >
      {title ? title : "Title"}
    </button>
  );
};


export default Button;

Button.propTypes = {
  title: PropTypes.object.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}



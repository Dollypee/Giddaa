/* eslint-disable react/prop-types */


const CustomTextField = ({ id, label, variant, ...rest }) => {
  let variantClass = '';
  if (variant === 'outlined') {
    variantClass = 'border border-gray-300 rounded px-3 py-2';
  } else {
    // Handle other variants if needed
  }

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">{label}</label>
      <input
        id={id}
        type="text"
        className={`appearance-none block w-full ${variantClass}`}
        {...rest}
      />
    </div>
  );
};

export default CustomTextField;

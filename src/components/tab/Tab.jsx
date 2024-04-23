import { useState } from "react";
import PropTypes from 'prop-types'


function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

const Tabs = ({ labels, contents, className }) => {
  const [value, setValue] = useState(3);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`w-full font-custom ${className || ""}`}>
      <div className="border-b border-gray-400">
        <nav className="flex" aria-label="Tabs">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleChange(index)}
              className={`gidaa-normal-text-three py-4 px-4 block focus:outline-none ${
                value === index ? "text-primary font-bold border-b border-primary" : "giddaa-dark-grey-2"
              }`}
              aria-selected={value === index ? "true" : "false"}
              aria-controls={`simple-tabpanel-${index}`}
              id={`simple-tab-${index}`}
              role="tab"
              tabIndex={value === index ? 0 : -1}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
      {contents.map((content, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  labels: PropTypes.array.isRequired,
  contents: PropTypes.array.isRequired,
  className: PropTypes.string,
}
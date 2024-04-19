import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react';

const Partners = ({ partners, autoScroll = true, scrollInterval = 3000 }) => {
  const carouselRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let intervalId;

    const handleAutoScroll = () => {
      if (autoScroll) {
        intervalId = setInterval(() => {
          carouselRef.current.scrollLeft += 1; // Adjust the scroll speed as needed
        }, scrollInterval);
      }
    };

    handleAutoScroll();

    return () => {
      clearInterval(intervalId);
    };
  }, [autoScroll, scrollInterval]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center" ref={carouselRef} style={{ scrollBehavior: 'smooth', scrollLeft }}>
        {partners.map((partner, index) => (
          <div key={index} className="inline-block p-4">
            {/* Render partner content here */}
            <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;


Partners.propTypes = {
  partners: PropTypes.array.isRequired,
  autoScroll: PropTypes.bool,
  scrollInterval: PropTypes.string

}

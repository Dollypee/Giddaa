import { useState } from 'react';
import PropTypes from 'prop-types'
import { NextIcon } from '../../assets/icons/Icon';


const CardScroll = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollRight = () => {
    const gallery = document.getElementById("cardGallery");
    gallery.scrollLeft += 100; // You can adjust the scroll amount as needed
    setScrollPosition(gallery.scrollLeft);
  };

  const scrollLeft = () => {
    const gallery = document.getElementById("cardGallery");
    gallery.scrollLeft -= 100; // You can adjust the scroll amount as needed
    setScrollPosition(gallery.scrollLeft);
  };
  return (
    <div className="relative pt-16 py-8">
      <div id="cardGallery"
        className="flex overflow-x-scroll whitespace-nowrap no-scrollbar space-x-3 lg:space-x-20"
        style={{ scrollBehavior: "smooth" }}>
        {children}
      </div>
      <div className='flex justify-center lg:justify-end space-x-3 lg:w-[90%] mt-8'>
        <button onClick={scrollLeft}
          className={` ${scrollPosition === 0 ? "hidden" : "block"
            }`}>
          <NextIcon />
        </button>
        <button onClick={scrollRight} className={`       
        `}>
         <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default CardScroll;

CardScroll.propTypes = {
  children: PropTypes.node.isRequired,
}
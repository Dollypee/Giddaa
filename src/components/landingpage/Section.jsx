/* eslint-disable react/prop-types */
import  { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Section = ({ children }) => {
  const sectionRef = useRef();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, 
  });

  return (
    <div ref={ref} className="section">
      <div ref={sectionRef} className={`fade-in ${inView ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;

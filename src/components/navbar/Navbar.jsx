
import { BsList } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Navbar = ({ height, navHeading, open, toggleSidebar }) => {
  return (
    <nav className="pb-4 pt-6 md:pt-8 px-6 flex justify-between items-center" style={{ height: height }}>
      <div className='flex items-center space-x-2'>
        {open ? ('') : (
          <button
            className='top-5 z-20 left-4 mt-2 fixed block xl:hidden'
            onClick={toggleSidebar}
          ><BsList />
          </button>
        )}
        <h3 className='px-4 lg:pl-8 giddaa-heading-two font-bold'>
          {navHeading}
        </h3>
      </div>

    </nav>
  );
};

export default Navbar;

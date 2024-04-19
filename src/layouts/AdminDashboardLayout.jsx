import {useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import PropTypes from 'prop-types'




const AdminDashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [navHeading, setNavHeading] = useState('')
  const location = useLocation();


  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    function handleResize() {
      // Check if the screen width is greater than a certain value (e.g., 1024 pixels)
      if (window.innerWidth > 1024) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (location.pathname?.startsWith('/dashboard/home')) {
      setNavHeading('Account Overview')
    } else if (location.pathname?.startsWith('/dashboard/customers')) {
      setNavHeading('Customers')
    } else if (location.pathname?.startsWith('/dashboard/invoices')) {
      setNavHeading('Invoices')
    } else if (location.pathname?.startsWith('/dashboard/payments')) {
      setNavHeading('Payments')
    } else if (location.pathname?.startsWith('/dashboard/requests')) {
      setNavHeading('Requests')
    } else if (location.pathname?.startsWith('/dashboard/settings')) {
      setNavHeading('Settings')
    }
  }, [location.pathname]);

  const width = "240px";
  const height = "60px";

  return (
    <>
      <div className="flex">
        <div className="flex">
        <Sidebar isSidebarOpen={open} handleOpen={handleOpen} width={width} />
        </div>
      <div className="flex-1" style={{ marginLeft: `${(open&&window.innerWidth > 1023) ? width : '0'}` }}>
        <Navbar toggleSidebar={() => setOpen(!open)} height={height} navHeading={navHeading}open={open} />
        <div className={`mx-3 xl:mx-9 mb-4 lg:mb-8 mt-3 lg:mt-6 p-6 lg:p-8 bg-white rounded-md`} style={{ height: `${window.innerWidth > 1024 ? '87vh' : 'auto'}`, overflowY: "auto" }}>
          {children}
        </div>
        </div>
        
      </div>
    </>


  );
};

export default AdminDashboardLayout;

AdminDashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
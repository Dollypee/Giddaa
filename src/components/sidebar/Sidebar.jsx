import  { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Logo } from "../../assets/images/images";
import PropTypes from 'prop-types'
import {  TransactionsIcon } from "../../assets/icons/Icon";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/Auth.slice";



const Sidebar = ({ isSidebarOpen, handleOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  useEffect(() => {
    if (location.pathname == "/admin/transactions") {
      setActiveLink(0);
    }
  }, [location.pathname]);

  const handleLinkClick = (
    index,
    link
  ) => {
    setActiveLink(index);
    if (link.subItems.length > 0) {
      setOpenSubMenu(!openSubMenu);
      navigate(link.path);
    } else {
      navigate(link.path);
      setOpenSubMenu(false);
    }
  };

  const handleSubItemClick = (path) => {
    navigate(path);
    window.innerWidth < 1024 && handleOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout())
  }

  const links = [
    // {
    //   label: "DASHBOARD",
    //   path: "/admin/dashboard",
    //   icon: <DashboardIcon color={activeLink === 0 ? "#335F32" : "#000000"} />,
    //   subItems: [],
    // },
    {
      label: "TRANSACTIONS & EARNINGS",
      path: "/admin/transactions",
      icon: <TransactionsIcon color={activeLink == 0 ? "#335F32" : "#000000"} />,
      subItems: [],
    },
  ];

  return (
    <div
      className={`top-0 left-0 fixed giddaa-bg-light-grey h-full z-10 pl-4 pr-1 pt-6 flex flex-col ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
      // style={{ width: width }}
    >
      {isSidebarOpen && (
        <button
          className="top-5 z-20 right-4 fixed block lg:hidden"
          onClick={() => handleOpen(!isSidebarOpen)}
        >
          <CgClose />
        </button>
      )}

      <img src={Logo} alt="Giddaa Logo" className="mt-8 object-contain w-[108px] h-[104px]" />

      <ul style={{ height: "400px", zIndex: 9999 }} className="w-full">
        {links.map((link, index) => (
          <li key={index} className="flex flex-col mt-3 justify-center w-full">
            <Button
              className={`cursor-pointer bg-transparent giddaa-subtitle-three w-full ${
                index === activeLink
                  && "giddaa-primary font-bold border-r-4 border-r-primary"
              }`}
              onClick={() => handleLinkClick(index, link)}
              title={
                <div className="flex space-x-4 items-center">
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                  <span>
                    {link.subItems.length > 0 &&
                    index === activeLink &&
                    openSubMenu ? (
                      <MdExpandMore />
                    ) : (link.subItems.length > 0 && index !== activeLink) ||
                      (link.subItems.length > 0 &&
                        index === activeLink &&
                        !openSubMenu) ? (
                      <MdExpandLess />
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              }
            />
            {link.subItems.length > 0 &&
              index === activeLink &&
              openSubMenu && (
                <ul className="mt-2">
                  {link.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => handleSubItemClick(subItem.path)}
                      className={`ml-8 flex flex-row items-stretch cursor-pointer py-2 rounded-lg justify-center px-3${
                        activeLink === index &&
                        subItem.path === window.location.pathname
                          ? "giddaa-heading-five "
                          : ""
                      }`}
                    >
                      <span className="whitespace-nowrap">{subItem.label}</span>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-8 border-t-2 pt-3 w-full">
        <button
          className="cursor-pointer font-bold text-[#C11111] flex items-center space-x-2 pl-7"
          onClick={() => {
            handleLogout();
            // navigate("/login");
          }}
        >
          
          <span>LOG OUT</span> <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired
}
import { useState } from "react"
import { Link } from "react-router-dom"

const pages = [
  {
    name: "Home",
    link: '/'
  },
  {
    name: "Properties",
    link: '/'
  },
  {
    name: "Developers",
    link: '/'
  },
  {
    name: "Mortgage Banks",
    link: '/'
  },
  {
    name: "Consult an Expert",
    link: '/'
  },
]

const NavMenu = () => {
  const [activepage, setActivePage] = useState(0);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="giddaa-navbar sticky left-0 top-0 flex items-center w-full h-16 md:h-20 py-2 px-4 md:px-8 lg:px-14 z-[90] justify-between">
        <div className="flex justify-start items-center">
          <div className="h-10 w-10 lg:h-14 lg:w-[69px]">
            <Link to="/" className="h-full">
              <img src="https://s3.amazonaws.com/appforest_uf/f1675031132769x885606220423525500/GiddaaLogoGreen.svg" alt="" />
            </Link>
          </div>
        </div>

        <ul className="hidden lg:flex lg:pt-3">
          {pages.map((page, index) => (
            <li key={page.name} className="px-10" onClick={() => setActivePage(index)}><Link to={page.link} className={`${index === activepage ? 'giddaa-primary giddaa-heading-five' : 'giddaa-text-dark-grey giddaa-subtitle-one'}`}>
              {index === activepage ? (
                <div className="flex flex-col items-center">
                  <span>
                    {page.name}
                  </span>
                  <span className="h-3 w-3 rounded-full giddaa-bg-primary"></span>
                </div>
              ) : (
                <span className=""> {page.name}</span>
              )}
            </Link></li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <Link className="giddaa-bg-primary flex rounded-full py-2 px-5 text-white items-center hover:bg-[#1f3d1e] space-x-1" to="/login">Login
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
            </span>
          </Link>
        </div>
        {!isSidebarOpen &&
          (
            <button
              className="giddaa-primary focus:outline-none lg:hidden"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}

        {isSidebarOpen && (
          <div className="lg:hidden">
            {/* Sidebar content */}
            <div className={`top-0 right-0 fixed bg-white h-full z-100 p-4 pt-3 flex flex-col ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
              } ease-in-out duration-300 inset-y-0 z-50 w-56 transform transition-transform`}>
              <button className="text-xl text-center p-3 flex justify-end" onClick={toggleSidebar}>x</button>
              <ul className="flex flex-col justify-start items-start">
                {pages.map((page, index) => (
                  <li key={page.name} className=" pt-3" onClick={() => { setActivePage(index); toggleSidebar() }}><Link to={page.link} className={`${index === activepage ? 'giddaa-primary giddaa-heading-five' : 'giddaa-text-dark-grey giddaa-subtitle-one'}`}>
                    <span className=""> {page.name}</span>
                  </Link></li>
                ))}
              </ul>
              <div className="mb-0 absolute bottom-6">

              <Link className="giddaa-bg-primary flex rounded-full py-2 px-3 text-white items-center hover:bg-[#1f3d1e] space-x-1" to="/login">Login
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
            </span>
                </Link>
                </div>
            </div>
          </div>
        )}
      </nav>
  )
}

export default NavMenu
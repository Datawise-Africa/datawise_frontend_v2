import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import datawise_logo from "/assets/datawise-logo-dark.png";
import { navigation } from "../../constants";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isNavItemDropdown, setIsNavItemDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNavItemDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleNavItemClick = (e, item) => {
    e.preventDefault();

    if (item.dropdownItems?.length > 0) {
      setIsNavItemDropdown((prev) => !prev);
    } else {
      navigate(item.url);
      if (openNavigation) {
        toggleNavigation();
      }
    }
  };

  const handleExploreDatasetsClick = () => {
    window.open(
      "https://datalab.datawiseafrica.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-[#0F2542] text-[#E5E7EB]">
      <div
        className={`fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm ${
          openNavigation ? "bg-[#0F2542]" : "bg-[#0F2542]/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-5 lg:px-8 max-lg:py-4">
          <Link to="/" className="w-[12rem]">
            <img
              src={datawise_logo}
              alt="Datawise logo"
              loading="lazy"
              width={180}
              height={20}
            />
          </Link>

          {/* Mobile hamburger menu */}
          <button
            className="lg:hidden text-white"
            onClick={toggleNavigation}
            aria-label="Toggle navigation menu"
          >
            {openNavigation ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          {/* Navigation and button container */}
          <div
            className={`${
              openNavigation ? "flex" : "hidden"
            } lg:flex lg:items-center lg:justify-between lg:flex-1
              fixed lg:static top-[4rem] left-0 right-0 bottom-0 
              bg-[#0F2542] lg:bg-transparent
              flex-col lg:flex-row
              pt-8 lg:pt-0`}
          >
            <nav className="flex flex-col lg:flex-row items-center lg:mx-auto">
              <div
                className="relative z-2 flex flex-col items-center lg:flex-row"
                ref={dropdownRef}
              >
                {navigation.map((item) => (
                  <div key={item.id} className="relative group mb-4 lg:mb-0">
                    <button
                      onClick={(e) => handleNavItemClick(e, item)}
                      className={`flex items-center gap-1 text-white px-4 py-2 transition-colors duration-200 ${
                        item.url === pathname
                          ? "text-white"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {item.title}
                      {item.dropdownItems?.length > 0 && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isNavItemDropdown ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>

                    {item.dropdownItems?.length > 0 &&
                      isNavItemDropdown &&
                      item.title === "Tools" && (
                        <div className="absolute left-0 mt-2 min-w-[8rem]  bg-[#1E3A5F] rounded-lg shadow-lg z-50">
                          {item.dropdownItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.url}
                              className="block px-4 py-2 text-sm text-white hover:bg-[#2D4B6A] transition-colors duration-150"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </nav>
            <button
              onClick={handleExploreDatasetsClick}
              className="flex items-center justify-center bg-[#26A37E] text-[#E5E7EB] px-4 py-2 font-medium rounded-lg mt-4 lg:mt-0 w-48 lg:w-auto self-center"
            >
              Explore Datasets
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

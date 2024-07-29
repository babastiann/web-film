import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";

const NavItem = ({ label, to, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="relative group w-full lg:w-auto">
      <Link
        to={to}
        className="text-white flex items-center justify-between w-full lg:w-auto"
        onClick={dropdownItems ? toggleDropdown : null}
      >
        {label}
        {dropdownItems && (
          <box-icon
            name={isDropdownOpen ? "chevron-up" : "chevron-down"}
            color="white"
            className="lg:hidden"
          ></box-icon>
        )}
      </Link>
      {dropdownItems && (
        <ul
          className={`lg:absolute lg:mt-2 lg:bg-black lg:bg-opacity-75 lg:border lg:border-gray-700 lg:rounded-lg lg:shadow-lg lg:group-hover:block ${
            isDropdownOpen ? "block" : "hidden"
          } z-50 max-h-48 overflow-y-scroll no-scrollbar`}
        >
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className="p-2 lg:px-4 lg:py-2 lg:hover:bg-gray-700"
            >
              <Link to={item.to} className="text-white text-sm">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;

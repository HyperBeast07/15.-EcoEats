import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef(null);
  const burgerIconRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      burgerIconRef.current &&
      !burgerIconRef.current.contains(e.target)
    )
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-50">
      {/* Burger Menu Button */}
      <button
        ref={burgerIconRef}
        className="lg:hidden text-white p-4 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0x"
          y="0px"
          width="30"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden mt-12 absolute top-16 left-0 w-full bg-green-100/80 transition-transform duration-500 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-4 text-xl">
          <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-300" onClick={toggleMenu}>
            Shop
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BurgerNav;

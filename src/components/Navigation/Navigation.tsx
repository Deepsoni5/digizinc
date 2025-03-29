import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 absolute top-0 left-0 right-0 z-50">
      {/* Logo - same on all devices */}
      <div className="text-lg font-bold text-white">
        <img
          src="/logo.png"
          alt="Digizinc Logo"
          className="h-12 sm:h-15 w-auto"
        />
      </div>

      {/* Desktop Navigation - hidden on mobile */}
      <ul className="hidden sm:flex justify-between w-full ml-35">
        <li className="hover:text-purple-400 cursor-pointer text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer text-white">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer text-white">
          <Link to="/Casestudy">Works</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer text-white">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer text-white">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer text-white">
          <Link to="/careers">Careers</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer text-white mr-20">
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Button - hidden on desktop */}
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu - appears when hamburger is clicked */}
      <div
        className={`sm:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/about-us"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/Casestudy"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/services"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/blog"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/careers"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer text-white w-full text-center">
            <Link
              to="/contactus"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

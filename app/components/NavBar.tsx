import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent  w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="/portrait.png" // Replace with your actual profile pic URL
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-semibold text-white">
            Md Arbaaz Hussain
          </span>
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/arbaaz-hussain-5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf" // Replace with your resume URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="https://github.com/arbaaz-hussain-5"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-red-400 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

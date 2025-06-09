import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import logo from "../assets/logo.png"; // Adjust if your path differs

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [processorOpen, setProcessorOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LapYatra" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Brand Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBrandOpen(!brandOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
              >
                Brand <ChevronDown size={16} />
              </button>
              {brandOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-md rounded p-2 z-10">
                  {["Lenovo", "Dell", "HP", "Apple"].map((brand) => (
                    <Link
                      key={brand}
                      to={`/browse?brand=${brand}`}
                      className="block px-4 py-1 hover:bg-gray-100"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Processor Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProcessorOpen(!processorOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
              >
                Processor <ChevronDown size={16} />
              </button>
              {processorOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-md rounded p-2 z-10">
                  {["i3", "i5", "i7", "Ryzen"].map((cpu) => (
                    <Link
                      key={cpu}
                      to={`/browse?cpu=${cpu}`}
                      className="block px-4 py-1 hover:bg-gray-100"
                    >
                      {cpu}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search Box */}
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1 text-sm"
            />

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <User size={20} />
              </button>
              {userDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded p-2 z-10">
                  <Link
                    to="/login"
                    className="block px-4 py-1 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-1 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow p-4 space-y-4">
          {/* Brand */}
          <div>
            <span className="block text-gray-700 font-medium">Brand</span>
            {["Lenovo", "Dell", "HP", "Apple"].map((brand) => (
              <Link
                key={brand}
                to={`/browse?brand=${brand}`}
                className="block px-4 py-1 hover:bg-gray-100"
              >
                {brand}
              </Link>
            ))}
          </div>

          {/* Processor */}
          <div>
            <span className="block text-gray-700 font-medium">Processor</span>
            {["i3", "i5", "i7", "Ryzen"].map((cpu) => (
              <Link
                key={cpu}
                to={`/browse?cpu=${cpu}`}
                className="block px-4 py-1 hover:bg-gray-100"
              >
                {cpu}
              </Link>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded px-3 py-1 text-sm"
          />

          {/* User Links */}
          <div>
            <Link
              to="/login"
              className="block px-4 py-1 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-4 py-1 hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

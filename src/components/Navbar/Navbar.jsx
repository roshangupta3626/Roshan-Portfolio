import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with proper offset
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  // Scroll to top function
  const handleLogoClick = () => {
    setActiveSection("");
    setIsOpen(false);
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-yellow-500/20" 
          : "bg-slate-900/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white py-3 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-lg font-bold cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleLogoClick}
          >
            <span className="text-yellow-400">&lt;</span>
            <span className="text-white">Roshan</span>
            <span className="text-amber-400">/</span>
            <span className="text-white">Gupta</span>
            <span className="text-yellow-400">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-300 hover:text-yellow-400 hover:scale-105 ${
                  activeSection === item.id ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className="relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/roshangupta3626"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/roshan-gupta-629902251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-2xl text-yellow-400 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-2xl text-amber-400 cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-yellow-500/20 shadow-lg md:hidden animate-slide-down">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer transition-all duration-300 hover:text-yellow-400 ${
                    activeSection === item.id ? "text-yellow-400 font-semibold" : ""
                  }`}
                >
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className="py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-amber-500/10 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com/codingmastr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

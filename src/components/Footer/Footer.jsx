import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-20 h-20 bg-yellow-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-5 right-10 w-16 h-16 bg-amber-500 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Name / Logo */}
          <h2 className="text-xl font-bold text-white mb-2">
            <span className="text-yellow-400">&lt;</span>
            <span className="text-white">Roshan</span>
            <span className="text-amber-400">/</span>
            <span className="text-white">Gupta</span>
            <span className="text-yellow-400">/&gt;</span>
          </h2>
          <p className="text-gray-300 text-sm mb-4">Full Stack Developer & Technology Enthusiast</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            {[
              { icon: <FaGithub size={20} />, link: "https://github.com/roshangupta3626", label: "GitHub" },
              { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/roshan-gupta-629902251/", label: "LinkedIn" },
              { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/roshangupta9852/", label: "Instagram" },
              { icon: <FaYoutube size={20} />, link: "https://www.youtube.com/@roshanworld7039", label: "YouTube" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-amber-500/10 border border-slate-700/50 hover:border-yellow-400/30"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-4 rounded-full"></div>

          {/* Copyright Text */}
          <div className="space-y-1">
            <p className="text-gray-400 text-xs">
              © 2025 Roshan Gupta. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;

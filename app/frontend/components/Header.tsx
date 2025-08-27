import React, { useState } from "react";
import { Zap, Phone, Sparkles } from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-sm" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Genfix
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block font-medium">
                Powering Brisbane Since 2020
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: "/#features", label: "Features" },
              { href: "/equipment", label: "Equipment" },
              { href: "/blog", label: "Blog" },
              { href: "/faqs", label: "FAQs" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/5 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+61412345678"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform"
            >
              <Phone className="w-4 h-4" />
              <span>0412 345 678</span>
            </a>
            <a
              href="/#quote-form"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-white to-gray-100 text-gray-900 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-white/25 hover:scale-105 transform hover:from-gray-50 hover:to-white"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative p-2 -mr-2 text-white hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-lg border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2">
              {[
                { href: "/#features", label: "Features" },
                { href: "/equipment", label: "Equipment" },
                { href: "/blog", label: "Blog" },
                { href: "/faqs", label: "FAQs" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="border-t border-gray-700/50 pt-4 mt-6 space-y-3">
                <a
                  href="/#quote-form"
                  className="flex items-center gap-3 text-white hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span>Get Quote</span>
                </a>
                <a
                  href="tel:+61412345678"
                  className="flex items-center gap-3 text-white hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5 text-green-500" />
                  <span>0412 345 678</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

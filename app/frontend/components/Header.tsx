export default function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg sticky top-0 z-50 relative overflow-hidden">
      {/* Electricity pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-10 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute top-4 right-20 w-6 h-6 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-2 left-1/4 w-4 h-4 border-2 border-white rounded-full"></div>
        <svg
          className="absolute top-1 right-10 w-12 h-12 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm relative">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                ⚡ Genfix
              </h1>
              <p className="text-xs text-orange-100">
                Powering Brisbane Since 2020
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/#equipment"
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Equipment
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/blog"
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/#quote"
              className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Get Quote
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+61412345678"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">0412 345 678</span>
            </a>
            <a
              href="/admin"
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Admin Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
            <svg
              className="w-6 h-6"
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
          </button>
        </div>
      </div>
    </header>
  );
}

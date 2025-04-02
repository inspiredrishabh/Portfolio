import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside and prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleClickOutside = (e) => {
      if (menuOpen && e.target.id === "mobile-menu-backdrop") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const resumeLink =
    "https://docs.google.com/document/d/1hpUiFqxS67Sw6Bdfch6PYmlcWpwPi-SL/edit?usp=sharing&ouid=116044492263898377107&rtpof=true&sd=true";

  const navItems = [
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Experience", section: "experience" },
    { name: "Achievements", section: "achievements" },
  ];

  return (
    <header className="bg-gray-900 bg-opacity-90 shadow-xl fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-xl font-bold text-white">
              RG
            </div>
            <div>
              <h1 className="text-2xl font-bold text-teal-400">
                Rishabh Gupta
              </h1>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-300 hover:bg-gray-800/70 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row gap-3 items-center">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-teal-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-2 py-2 bg-gray-800 text-teal-300 rounded-md hover:bg-gray-700 transition-colors"
            >
              Contact
            </a>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2  bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center transition-colors ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              Resume
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          id="mobile-menu-backdrop"
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 lg:hidden flex flex-col"
        >
          <div className="container mx-auto px-4 py-8">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-lg font-bold text-white">
                  RG
                </div>
                <span className="text-xl font-bold text-teal-400">Menu</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full bg-gray-800 text-teal-400 hover:bg-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl py-4 px-4 border-b border-gray-800 text-gray-200 hover:text-teal-400 flex items-center transition-colors"
                >
                  <span className="bg-gray-800/60 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-teal-400">
                    {item.name.charAt(0)}
                  </span>
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-xl py-4 px-4 border-b border-gray-800 text-gray-200 hover:text-teal-400 flex items-center transition-colors"
              >
                <span className="bg-gray-800/60 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-teal-400">
                  C
                </span>
                Contact
              </a>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-center py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                View Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

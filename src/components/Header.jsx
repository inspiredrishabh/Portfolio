import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const resumeLink =
    "https://docs.google.com/document/d/1hpUiFqxS67Sw6Bdfch6PYmlcWpwPi-SL/edit?usp=sharing&ouid=116044492263898377107&rtpof=true&sd=true";

  const navItems = [
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Education", section: "education" },
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

          <button
            className="md:hidden bg-teal-600 text-white p-2 rounded-md flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
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
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
            <span className="ml-2">Menu</span>
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-3 w-full md:w-auto items-center`}
          >
            {navItems.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-1.5 rounded-md hover:bg-gray-800 hover:text-teal-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3 py-1.5 bg-gray-800 text-teal-300 rounded-md hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center"
              onClick={() => setMenuOpen(false)}
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
                className="mr-1"
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
    </header>
  );
}

export default Header;

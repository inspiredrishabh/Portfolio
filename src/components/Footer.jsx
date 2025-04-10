function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-200 py-20 border-t border-gray-800"
    >
      <div className="container mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        {/* Contact Information - Reorganized */}
        <div className="w-full bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 mt-10">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4 flex items-center gap-2">
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Contact Me
          </h3>

          {/* Direct Contact Info */}
          <div className="bg-slate-800/70 p-4 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-3">
              {/* Email */}
              <div className="flex items-center gap-3 hover:bg-slate-700/50 p-2 rounded-md transition-colors">
                <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
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
                    className="text-teal-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a
                  href="mailto:inspiredrishabh@gmail.com"
                  className="text-lg hover:text-teal-300  transition-colors flex overflow-hidden"
                >
                  inspiredrishabh@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 hover:bg-slate-700/50 p-2 rounded-md transition-colors">
                <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
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
                    className="text-teal-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <a
                  href="tel:+916392526545"
                  className="text-lg hover:text-teal-300 transition-colors"
                >
                  +91 6392526545
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <h4 className="text-lg font-medium text-slate-300 mb-3">
            Find Me On
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/inspiredrishabh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-slate-700/70 hover:bg-slate-700 text-teal-400 px-3 py-4 rounded-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="text-teal-400"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/inspiredrishabh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-slate-700/70 hover:bg-slate-700 text-teal-400 px-3 py-4 rounded-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="text-teal-400"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm">GitHub</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/inspiredrishabh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-slate-700/70 hover:bg-slate-700 text-teal-400 px-3 py-4 rounded-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-teal-400"
              >
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
              <span className="text-sm">LeetCode</span>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} : Rishabh Gupta
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

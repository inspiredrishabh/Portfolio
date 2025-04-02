function About() {
  return (
    <section id="about" className="pt-28 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl leading-relaxed mb-8 text-slate-300">
              I'm a Computer Science student passionate about web development
              and software engineering. With experience in React, Java, and
              various web technologies, I aim to create efficient and
              user-friendly solutions that solve real-world problems.
            </p>

            <div className="space-y-5 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 bg-opacity-10 flex items-center justify-center">
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
                    className="text-teal-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-lg">inspiredrishabh@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 bg-opacity-10 flex items-center justify-center">
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
                    className="text-teal-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-lg">+91 6392526545</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 bg-opacity-10 flex items-center justify-center">
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
                </div>
                <a
                  href="https://linkedin.com/in/inspiredrishabh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-teal-400 hover:underline"
                >
                  inspiredrishabh
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 bg-opacity-10 flex items-center justify-center">
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
                </div>
                <a
                  href="https://github.com/inspiredrishabh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-teal-400 hover:underline"
                >
                  inspiredrishabh
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-teal-400/60 rounded-tl-md"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teal-400/60 rounded-br-md"></div>

              <div className="h-full w-full p-2 bg-slate-800 rounded-xl shadow-lg">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Rishabh Gupta"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

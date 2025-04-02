function About() {
  return (
    <section id="about" className="pt-28 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Bio & Education */}
          <div className="space-y-8">
            {/* Professional Introduction */}
            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
              <p className="text-lg leading-relaxed text-slate-300">
                I'm a Computer Science student passionate about web development
                and software engineering. With experience in React, Java, and
                various web technologies, I aim to create efficient and
                user-friendly solutions that solve real-world problems.
              </p>
            </div>

            {/* Education Component - Moved from right column */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
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
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                <h4 className="text-xl font-semibold text-teal-400">
                  Education
                </h4>
              </div>

              <div className="text-left pl-2 border-l-2 border-teal-400/30">
                <div className="relative pl-6">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-teal-400"></div>
                  <p className="font-semibold text-xl text-slate-200">
                    University of Lucknow
                  </p>
                  <p className="text-slate-300 text-base mt-1">
                    Bachelor of Technology – Computer Science
                  </p>
                  <div className="flex flex-wrap justify-between items-center mt-2 gap-2">
                    <div className="text-white px-3 py-1 bg-teal-600/20 rounded-md text-sm">
                      CGPA:{" "}
                      <span className="font-semibold text-teal-300">9.26</span>
                    </div>
                    <div className="border border-slate-600 text-teal-300 px-3 py-1 rounded-md text-sm font-medium">
                      Nov 2022 - Present
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mt-3">
                    Courses: Data Structures and Algorithms, OOPS, DBMS,
                    Operating System
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile  */}
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Profile Image - Positioned higher */}
            <div className="relative w-72 h-72 m-5">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-teal-400/60 rounded-tl-md"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-teal-400/60 rounded-br-md"></div>

              <div className="absolute w-full h-full bg-teal-500/5 rounded-xl -left-3 -top-3 -z-10"></div>
              <div className="h-full w-full p-2 bg-slate-800 rounded-xl shadow-xl">
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

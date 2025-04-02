function Education() {
  const educationData = [
    {
      institution: "University of Lucknow",
      location: "Lucknow, India",
      degree: "Bachelor of Technology – Computer Science",
      duration: "Nov 2022 - Present",
      details: "CGPA: 9.26",
      courses:
        "Courses: Data Structures and Algorithms, OOPS, DBMS, Operating System",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 w-full py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-400">
                    {item.institution}
                  </h3>
                  <p className="text-xl font-medium text-slate-300 mt-2">
                    {item.degree}
                  </p>
                  {item.details && (
                    <p className="text-slate-400 mt-3 text-lg">
                      {item.details}
                    </p>
                  )}
                  {item.courses && (
                    <p className="text-slate-500 mt-3">{item.courses}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-slate-400 mb-2">{item.location}</p>
                  <p className="bg-slate-700 text-teal-300 px-4 py-2 rounded-md text-sm">
                    {item.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

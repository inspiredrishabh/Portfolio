function Experience() {
  const experienceData = [
    {
      company: "En-Lit, Lucknow University",
      position: "Design Team Lead",
      duration: "December 2022 - Present",
      details:
        "Led the design team, organizing and executing design projects for university events, enhancing the club's visual identity and engagement.",
    },
    {
      company: "Coding Connoisseurs, Lucknow University",
      position: "Member",
      duration: "May 2023 - May 2024",
      details:
        "Contributed to club activities by designing promotional materials and engaging in coding challenges.",
    },
    {
      company: "E-Cell, Lucknow University",
      position: "Designer",
      duration: "December 2022 - July 2023",
      details:
        "Designed eye-catching graphics and visuals for startup-focused events.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="w-full sm:w-3/4">
                  <h3 className="text-2xl font-semibold text-teal-400">
                    {item.company}
                  </h3>
                  <p className="text-xl font-medium text-gray-300 mt-1">
                    {item.position}
                  </p>
                  <p className="text-gray-400 mt-3">{item.details}</p>
                </div>
                <div className="w-auto sm:w-1/4 sm:text-right mt-2 sm:mt-0">
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-md text-sm inline-block">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

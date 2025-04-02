function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        "JavaScript",
        "Java",
        "C",
        "SQL"
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "GSAP"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git & GitHub", "MongoDB", "MySQL", "REST APIs", "Socket.io"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Leadership",
        "Event Management",
        "Public Speaking",
        "Problem Solving",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 w-full py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
          <p className="text-slate-400 mt-4">
            I've developed a diverse set of skills throughout my journey as a
            developer. Here's an overview of my technical expertise and soft
            skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700 text-teal-300 px-4 py-2 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-5xl font-bold text-teal-400">11+</h4>
            <p className="text-slate-300 mt-2">Projects Completed</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-5xl font-bold text-teal-400">1632</h4>
            <p className="text-slate-300 mt-2">LeetCode Rating</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-5xl font-bold text-teal-400">5+</h4>
            <p className="text-slate-300 mt-2">Technologies</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-5xl font-bold text-teal-400">9.26</h4>
            <p className="text-slate-300 mt-2">CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

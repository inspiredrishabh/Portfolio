function Achievements() {
  const achievements = [
    "Honored with LIC Student of the Year for academic excellence at School, showcasing merit and distinction.",
    "Leetcode Max. Rating: 1632 id: inspiredrishabh",
    "Qualified for the Internal Round of SIH Hackathon as part of Team Awadh",
    "Code-Satra Winner (Coding Contest): Achieved first place in the Code-Satra coding competition.",
    "Google Cloud Foundation Certifications: Successfully completed multiple Google Cloud Foundation certifications.",
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 w-full py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">
            Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mt-1.5">
                  <span className="text-teal-400 text-xs">•</span>
                </div>
                <span className="text-slate-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

function Volunteering() {
  const responsibilities = [
    "Volunteered and contributed as part of the design team for GDSC WOW at IET Lucknow 2024.",
    "Volunteered and served as part of the design team for PRISM 2024, the annual tech fest of Lucknow University.",
    "Volunteered and participated as part of the design team for ICCICS International Conference at Lucknow University.",
    "Volunteered and collaborated as part of the design team for RAASHEE International Conference at Lucknow University.",
  ];

  return (
    <section id="volunteering" className="py-20">
      <div className="container mx-auto px-4 w-full py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">
            Other Positions & Volunteering
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <ul className="space-y-6">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-4 h-4 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mt-1.5">
                  <span className="text-teal-400 text-xs">•</span>
                </div>
                <span className="text-slate-300">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Volunteering;

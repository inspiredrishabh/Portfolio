function Projects() {
  const projectsData = [
    {
      title: "AI Code Reviewer",
      description:
        "A full-stack web application that allows users to submit code snippets for AI-generated review suggestions and detailed explanations. The backend leverages the Google Gemini API to analyze the input.",
      technologies: ["React.js", "Express.js", "Node.js", "API"],
      url: "https://github.com/inspiredrishabh/AI-Code-Review",
    },
    {
      title: "AI Homeo Suggester",
      description:
        "An interactive web application that helps users get personalized homeopathic remedy recommendations based on their symptoms. Users can describe symptoms through text input or voice, using Google's Gemini AI.",
      technologies: ["React.js", "API"],
      url: "https://github.com/inspiredrishabh/AI-Homeo-Suggester",
    },
    {
      title: "AI Image Enhancer",
      description:
        "A modern web app that uses AI to enhance images with improved clarity, sharpness, and quality. Features include drag-and-drop interface, side-by-side comparison, and one-click downloads.",
      technologies: ["React.js", "Tailwind CSS", "API"],
      url: "https://github.com/inspiredrishabh/AI-Image-Enhancer",
    },
    {
      title: "Dictionary App",
      description:
        "A user-friendly web application that allows users to search for meanings, phonetics, synonyms, and sources of English words using the Dictionary API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      url: "https://github.com/inspiredrishabh/Dictionary_App",
    },
    {
      title: "Employee Management System",
      description:
        "A web-based platform with separate admin and employee dashboards for task management within an organization. Built with modern technologies for an efficient interface.",
      technologies: ["React.js", "Tailwind CSS"],
      url: "https://github.com/inspiredrishabh/Employee-Management-System",
    },
    {
      title: "Image Resizer",
      description:
        "A simple and efficient tool that allows users to resize images and download them in reduced quality, designed for various use cases.",
      technologies: ["HTML", "JavaScript", "CSS"],
      url: "https://github.com/inspiredrishabh/Image_Resizer",
    },
    {
      title: "SGPA Calculator",
      description:
        "A modern web app for calculating SGPA according to Lucknow University's grading system, featuring dynamic inputs, real-time validation, and beautiful animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/inspiredrishabh/SGPACalculator",
    },
    {
      title: "Real-Time Tracking",
      description:
        "A real-time location tracking system using Node.js, Express, Socket.IO, and Leaflet.js that allows clients to share their geolocation displayed on a map interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Leaflet.js",
        "Socket.io",
      ],
      url: "https://github.com/inspiredrishabh/Real-Time-Tracking",
    },
    {
      title: "Video Call App",
      description:
        "A React-based video calling application leveraging the ZegoCloud API for real-time video calls. Users can join video rooms using unique room IDs.",
      technologies: ["React.js", "API"],
      url: "https://github.com/inspiredrishabh/Video_Call_App",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 w-full py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600"></div>
          <p className="text-slate-400 mt-4">
            Below is a collection of my projects that demonstrate my skills and
            experience in various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-teal-300 px-2.5 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

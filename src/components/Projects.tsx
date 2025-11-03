import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import School from '../components/Assets/School.png';
import HrDash from '../components/Assets/HrDash.png';
import KeyVault from '../components/Assets/KeyVault.png';
import SchoolWebsite from '../components/Assets/SchoolWebsite.png';



const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'School Dashboard',
      description: 'Comprehensive school management system with student, teacher, and admin portals. Features attendance tracking, grade management, and real-time notifications.',
      image: School,
      tech: ['React', 'Node.js', 'MySQL', 'Express'],
      // liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'HR & Employee Dashboard',
      description: 'Employee management platform similar to GreytHR with leave management, payroll tracking, attendance system, and performance analytics.',
      image: HrDash,
      tech: ['React', 'Express.js', 'MySQL', 'Chart.js'],
      // liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'KeyVault',
      description: 'Securely upload and share files with unique keys. Your clients can download files without logging in if they have the unique key. Manage your files effortlessly and share them securely.',
      image: KeyVault,
      tech: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
      // liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'School Website',
      description: 'Modern, responsive school website with information pages, gallery, admission forms, and contact system. Built with clean UI and smooth animations.',
      image: SchoolWebsite,
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      // liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Some of my recent work</p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                projectsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative overflow-hidden h-48 group">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900 text-cyan-400 rounded-full text-sm border border-gray-700 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a> */}
                  {/* <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold border border-gray-700 hover:border-cyan-500 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

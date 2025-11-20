import { Briefcase, Calendar, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  const responsibilities = [
    'Developed front-end school management and HR dashboards using React.js.',
    'Built reusable and maintainable React components to improve scalability.',
    'Implemented responsive layouts optimized for mobile and tablet devices.',
    'Enhanced web performance by minimizing CSS/JS and compressing assets.',
    'Improved UI consistency, accessibility, and responsiveness across the School Website.',
  ];

  const secondResponsibilities = [
    'Worked on the development of web applications using React.js, HTML, CSS and JavaScript.',
    'Created and managed content through STRAPI CMS, integrating seamlessly with frontend component.',
    'Contributed to project co-ordination by handling documentation, feature tracking, and development updates.',
    'Collaborated with content and design teams to ensure consistent layout, colour schemes and component behaviour across the plaform.',
    'Collaborated with cross-functional teams following agile practices including sprint planning, daily stand-up’s, and code reviews.',
  ];

  const achievements = [
    {
      title: 'React.js Developer Certificate',
      description: 'Earned from LearnTube.ai (July 2025).',
      icon: Award,
    },
    {
      title: 'Java Full Stack Developer',
      description: 'Completed Full Stack Java Developer course at JSpiders Training & Development Center — covered Core Java, SQL, HTML, CSS, and JavaScript.',
      icon: Award,
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      college: 'Visvesvaraya Technological University, Belagavi',
      year: 'Graduated 2023',
      icon: GraduationCap,
      // description:
      //   'Specialized in Web Development, Database Management, and Software Engineering. Completed major full-stack projects using modern technologies.',
    },
    {
      degree: 'Bachelor of Computer Applications',
      college: 'Bapuji Institute of Hi-Tech Education',
      year: 'Graduated 2021',
      icon: GraduationCap,
      // description:
      //   'Built a strong foundation in programming, database systems, and web development. Completed mini projects and participated in coding competitions.',
    },
    {
      degree: 'Intermediate',
      college: 'Sir M.V Pu College',
      year: 'Graduated 2017',
      icon: GraduationCap,
    },
    {
      degree: 'Higher Primary School',
      college: 'D.R.R School',
      year: 'Graduated 2015',
      icon: GraduationCap,
    },
  ];


  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ---------- Section Title ---------- */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* ---------- Experience Cards ---------- */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* --------- First Company --------- */}
          <div
            className={`bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
                <p className="text-cyan-400 font-semibold mb-1">Magnum Technologies Services</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>December 2024 – May 2025</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --------- Second Company --------- */}
          <div
            className={`bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Technical Program Co-ordinator</h3>
                <p className="text-green-400 font-semibold mb-1">CLI Infotech Pvt.Ltd.(MindMatrix)</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>July 2025 – Present</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {secondResponsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Achievements Section ---------- */}
        <div ref={achievementsRef}>
          <h3
            className={`text-3xl font-bold text-white mb-8 text-center transition-all duration-1000 ${achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:rotate-2 ${achievementsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-center text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- Education Details Section ---------- */}

        {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Details</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div> */}

        {/* ---------- Education Details Section (Alternate Timeline) ---------- */}
        <div
          className={`mt-20 transition-all duration-700 ${achievementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h3 className="text-5xl font-bold text-white mb-16 text-center">
            Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Details
            </span>
          </h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>

            <div className="space-y-20">
              {education.map((edu, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                      }`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/40"></div>

                    {/* Card */}
                    <div
                      className={`w-[45%] bg-gray-900 border border-gray-700 rounded-xl p-2 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 ${isLeft ? "text-left" : "text-right"
                        }`}
                    >
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm">{edu.college}</p>

                      <div
                        className={`flex items-center gap-2 text-gray-500 text-sm mt-1 ${isLeft ? "" : "flex-row-reverse"
                          }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Experience;

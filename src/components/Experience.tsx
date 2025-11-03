import { Briefcase, Calendar, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  const responsibilities = [
    'Built a responsive School Dashboard using React & Node.js',
    'Developed HR Dashboard similar to GreytHR',
    'Created reusable UI components for better maintainability',
    'Implemented REST APIs and database integration',
    'Collaborated with team members using Git and GitHub',
  ];

  const achievements = [
    // {
    //   title: 'Salesforce Trailhead',
    //   description: 'Completed multiple badges in Salesforce development',
    //   icon: Award,
    // },
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

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 mb-16">
          <div
            className={`bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
                <p className="text-cyan-400 font-semibold mb-1">Magnum Technologies Services</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>February 2025 – Present</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                <p className="text-cyan-400 font-semibold mb-1">Master of Computer Applications</p>
                <p className="text-gray-400">Visvesvaraya Technological University, Belagavi</p>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Graduated 2024</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Specialized in Web Development, Database Management, and Software Engineering. Completed major projects in full-stack development and gained hands-on experience with modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div ref={achievementsRef}>
          <h3
            className={`text-3xl font-bold text-white mb-8 text-center transition-all duration-1000 ${
              achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:rotate-2 ${
                    achievementsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
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
      </div>
    </section>
  );
};

export default Experience;

import { Code2, Database, Wrench, Server } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express.js', 'Core-Java'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: ['MySQL'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500',
      skills: ['Git', 'VS Code', 'Postman','GitHub'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:rotate-1 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700 hover:border-cyan-500 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500">
            <p className="text-gray-400 text-lg mb-4">
              {/* Always learning and exploring new technologies */}
              Area of Intrest to learn
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'MongoDB',].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 rounded-lg text-sm border border-cyan-500/30 font-medium hover:scale-110 hover:border-cyan-500 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

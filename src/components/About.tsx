import { MapPin, GraduationCap, Briefcase, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const facts = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'MCA, VTU',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      label: 'Current Role',
      value: 'Web Developer Intern',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Rocket,
      label: 'Passion',
      value: 'Building Interactive UIs',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl hover:border-cyan-500/50 transition-all duration-500">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate <span className="text-cyan-400 font-semibold">Web Developer</span> with an MCA from Visvesvaraya Technological University, Belagavi. I enjoy building clean, modern interfaces using React, JavaScript, and Node.js.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My focus is on creating seamless user experiences through responsive design, interactive components, and performance optimization. I'm always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 ${
                    cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 400}ms`,
                  }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${fact.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-400 text-sm font-medium mb-1">{fact.label}</h3>
                  <p className="text-white font-semibold">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

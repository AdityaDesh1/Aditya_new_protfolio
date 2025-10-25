import { MapPin, GraduationCap, Briefcase, Rocket } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate <span className="text-cyan-400 font-semibold">Front-End Developer</span> with an MCA from Visvesvaraya Technological University, Belagavi. I enjoy building clean, modern interfaces using React, JavaScript, and Node.js.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My focus is on creating seamless user experiences through responsive design, interactive components, and performance optimization. I'm always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${fact.color} mb-4`}>
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

import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-gradient-rotate"></div>

              <div className="relative rounded-3xl overflow-hidden border-4 border-gray-700 group-hover:border-cyan-500 transition-all duration-500 shadow-2xl transform group-hover:scale-[1.02]">
                <div className="aspect-[4/5] bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <img
                    src="src/components/Aditya.jpeg"
                    alt="Aditya Deshpande"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-6">
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="mailto:adityadeshpande1999@gmail.com"
                      className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm animate-fade-in">
                <span className="text-cyan-400 font-medium">👋 Hello, I'm</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                Aditya
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-text">
                  Deshpande
                </span>
              </h1>

              <div className="flex items-center gap-3 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                  Front-End Developer
                </h2>
              </div>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                I build responsive, modern, and user-friendly web applications. Passionate about creating seamless digital experiences that combine beautiful design with powerful functionality.
              </p>

              <div className="flex items-center gap-3 text-gray-400 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
                <span className="text-gray-600">|</span>
                <span>📍 Bengaluru</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </a>

                <a
                  href="#"
                  className="group px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 border border-gray-700 hover:border-cyan-500 shadow-lg transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-400 rounded-lg text-sm border border-gray-700/50">React</span>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-400 rounded-lg text-sm border border-gray-700/50">JavaScript</span>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-400 rounded-lg text-sm border border-gray-700/50">Node.js</span>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-400 rounded-lg text-sm border border-gray-700/50">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

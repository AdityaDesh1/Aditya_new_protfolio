import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aditya.deshpande@example.com',
      link: 'mailto:aditya.deshpande@example.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      link: null,
    },
    {
      icon: Phone,
      label: 'Available',
      value: 'Open to opportunities',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:bg-gray-700',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:aditya.deshpande@example.com',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 text-lg">Let's work together on your next project</p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white font-medium hover:text-cyan-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status && (
                <div className="mb-4 p-4 bg-green-500/10 border border-green-500 rounded-lg animate-fade-in">
                  <p className="text-green-400 text-center">{status}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

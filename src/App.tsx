import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/Animations/SplashCursor'
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SplashCursor/>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center mb-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-30 pointer-events-none" />

      <div className={`z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
            Absolut kein Plan.
          </span>
          <br />
          <span className="text-[#F5F4EF]">Nur Stories.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#F5F4EF]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Ein halb reales Tagebuch, halb spekulativer Zettelkasten. <br />
          <span className="text-cyan-400">Chaos an der Oberfläche</span> — darunter ein vernetztes Netz aus Motiven, Menschen und Parallelwelten.
        </p>

        {/* Floating Accent Text */}
        <div className="mb-12 text-sm md:text-base text-[#C6FF00]/70 font-mono tracking-wider">
          &gt; Notizen • Beweisfotos • Audiosamples • Skizzen
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 bg-cyan-500 text-[#0F0F10] font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
            Hineinschauen
          </button>
          <button className="px-8 py-3 border-2 border-[#C6FF00] text-[#C6FF00] font-bold rounded-lg hover:bg-[#C6FF00]/10 transition-all duration-300">
            Archive erkunden
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-cyan-400">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-500/30 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-lime-400/20 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default HeroSection;

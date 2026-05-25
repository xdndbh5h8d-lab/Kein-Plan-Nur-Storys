import { useState, useMemo } from 'react';

const RealitySlider = () => {
  const [realityLevel, setRealityLevel] = useState(50);

  // Berechne Farbe basierend auf Slider-Position
  const getSliderColor = (value) => {
    if (value < 30) return '#C6FF00'; // Acid Lime = Pure Fiction
    if (value < 70) return '#00E5FF'; // Cyan = Hybrid
    return '#FF5A5F'; // Red = Dokumentiert Real
  };

  // Berechne Label und Description basierend auf Position
  const getStateLabel = (value) => {
    if (value < 30) return 'Pure Fiction';
    if (value < 70) return 'Hybrid / Zwischenraum';
    return 'Dokumentierter Realismus';
  };

  const getStateDescription = (value) => {
    if (value < 30)
      return 'Spekulative Essays, Doodles, fiktive Szenarien. Hier regiert die Imagination.';
    if (value < 70)
      return 'Fiktionalisierte Erinnerungen, verschwommene Grenzen. Wo endet die Realität?';
    return 'Verifizierte Einträge, Interviews, dokumentierte Beweise. Quellenverweise inbegriffen.';
  };

  const getStateEmoji = (value) => {
    if (value < 30) return '🟢';
    if (value < 70) return '🔵';
    return '🔴';
  };

  const sliderColor = getSliderColor(realityLevel);

  return (
    <section className="my-24 py-16 px-8 rounded-lg bg-gradient-to-br from-[#1A1A1B] to-[#0F0F10] border border-[#F5F4EF]/10">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
            Reality/Fiction Slider
          </span>
        </h2>
        <p className="text-[#F5F4EF]/60 text-sm font-mono">
          Schieberegler zwischen dokumentierter Realität und spekulativer Fiktion
        </p>
      </div>

      {/* Slider Container */}
      <div className="max-w-2xl mx-auto mb-12">
        {/* Slider Input */}
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max="100"
            value={realityLevel}
            onChange={(e) => setRealityLevel(Number(e.target.value))}
            className="w-full h-3 appearance-none bg-[#0F0F10] rounded-full outline-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, 
                #C6FF00 0%, 
                #C6FF00 30%, 
                #00E5FF 30%, 
                #00E5FF 70%, 
                #FF5A5F 70%, 
                #FF5A5F 100%)`,
            }}
          />
          <style jsx>{`
            .slider::-webkit-slider-thumb {
              appearance: none;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              box-shadow: 0 0 12px ${sliderColor};
              border: 2px solid ${sliderColor};
              transition: box-shadow 0.3s;
            }
            .slider::-moz-range-thumb {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              box-shadow: 0 0 12px ${sliderColor};
              border: 2px solid ${sliderColor};
              transition: box-shadow 0.3s;
            }
          `}</style>
        </div>

        {/* Percentage Display */}
        <div className="text-center mb-8">
          <div className="text-5xl font-bold font-mono mb-2" style={{ color: sliderColor }}>
            {realityLevel}%
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">{getStateEmoji(realityLevel)}</span>
            <p className="text-xl font-bold text-[#F5F4EF]">{getStateLabel(realityLevel)}</p>
          </div>
          <p className="text-[#F5F4EF]/70 text-sm max-w-md mx-auto">
            {getStateDescription(realityLevel)}
          </p>
        </div>
      </div>

      {/* Context Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {/* Fiction Card */}
        <div
          className={`p-4 rounded-lg border-2 transition-all duration-300 ${
            realityLevel < 30
              ? 'border-lime-400 bg-lime-400/10'
              : 'border-lime-400/30 bg-lime-400/5'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🟢</span>
            <h3 className="font-bold text-lime-400">Fiction (0-30%)</h3>
          </div>
          <p className="text-xs text-[#F5F4EF]/70">
            Essays, Doodles, Traumbeiträge, anonyme Stimmen. Künstlerische Freiheit.
          </p>
        </div>

        {/* Hybrid Card */}
        <div
          className={`p-4 rounded-lg border-2 transition-all duration-300 ${
            realityLevel >= 30 && realityLevel < 70
              ? 'border-cyan-400 bg-cyan-400/10'
              : 'border-cyan-400/30 bg-cyan-400/5'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔵</span>
            <h3 className="font-bold text-cyan-400">Hybrid (30-70%)</h3>
          </div>
          <p className="text-xs text-[#F5F4EF]/70">
            Fiktionalisierte Erinnerungen. Tonbänder. Persona "Lila". Verschwommene Grenzen.
          </p>
        </div>

        {/* Real Card */}
        <div
          className={`p-4 rounded-lg border-2 transition-all duration-300 ${
            realityLevel >= 70
              ? 'border-red-500 bg-red-500/10'
              : 'border-red-500/30 bg-red-500/5'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔴</span>
            <h3 className="font-bold text-red-500">Real (70-100%)</h3>
          </div>
          <p className="text-xs text-[#F5F4EF]/70">
            Dokumentierte Einträge, Interviews, Fotos mit Kontext, Quellenverweise.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-4 bg-[#0F0F10] border border-[#F5F4EF]/10 rounded-lg text-center">
        <p className="text-xs text-[#F5F4EF]/60 font-mono">
          💡 Hinweis: Dieser Slider zeigt die <strong>Authentizitätsebene</strong> an. Markierungen mit #Echt, #Fiktion und #Hybrid helfen bei der Orientierung.
        </p>
      </div>
    </section>
  );
};

export default RealitySlider;

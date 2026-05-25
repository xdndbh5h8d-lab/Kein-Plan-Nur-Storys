import { useState, useEffect } from 'react';

const ChaosFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Mock Data - später durch API ersetzen
  const mockData = [
    {
      id: 1,
      type: 'story',
      title: 'Nachtfahrt nach Nirgendwo',
      category: '#Echt',
      color: 'border-red-500',
      icon: '📝',
    },
    {
      id: 2,
      type: 'audio',
      title: '12-Sekunden Loop: Berlin Neon',
      category: '#Audio',
      color: 'border-cyan-400',
      icon: '🎵',
    },
    {
      id: 3,
      type: 'photo',
      title: 'Polaroid-Archiv #007',
      category: '#Fiktion',
      color: 'border-lime-400',
      icon: '📸',
    },
    {
      id: 4,
      type: 'sketch',
      title: 'Skizze: Parallelgesellschaft',
      category: '#Hybrid',
      color: 'border-purple-400',
      icon: '🎨',
    },
    {
      id: 5,
      type: 'story',
      title: 'Fragment: Lila erwacht',
      category: '#Fiktion',
      color: 'border-lime-400',
      icon: '📝',
    },
    {
      id: 6,
      type: 'audio',
      title: 'Tonband: Nachrichten von mir selbst',
      category: '#Echt',
      color: 'border-red-500',
      icon: '🎵',
    },
    {
      id: 7,
      type: 'photo',
      title: 'Polaroid-Archiv #042',
      category: '#Echt',
      color: 'border-red-500',
      icon: '📸',
    },
    {
      id: 8,
      type: 'story',
      title: 'Essay: Realität vs. Illusion',
      category: '#Hybrid',
      color: 'border-purple-400',
      icon: '📝',
    },
  ];

  // Initialize Feed
  useEffect(() => {
    setFeedItems(mockData);
  }, []);

  // Shuffle Function
  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...feedItems].sort(() => Math.random() - 0.5);
      setFeedItems(shuffled);
      setIsShuffling(false);
    }, 500);
  };

  // Category Colors für Highlighting
  const getCategoryColor = (category) => {
    switch (category) {
      case '#Echt':
        return 'text-red-500 bg-red-500/10';
      case '#Fiktion':
        return 'text-lime-400 bg-lime-400/10';
      case '#Hybrid':
        return 'text-purple-400 bg-purple-400/10';
      case '#Audio':
        return 'text-cyan-400 bg-cyan-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section className="mb-24">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              Chaos-Feed
            </span>
          </h2>
          <p className="text-[#F5F4EF]/60 text-sm font-mono">
            Zufällige Entdeckungsreisen durch Stories, Audios, Fotos und Skizzen
          </p>
        </div>

        {/* Shuffle Button */}
        <button
          onClick={handleShuffle}
          disabled={isShuffling}
          className="px-4 py-2 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 disabled:opacity-50 flex items-center gap-2 font-mono text-sm"
        >
          <svg className={`w-4 h-4 transition-transform duration-500 ${isShuffling ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {isShuffling ? 'Shuffling...' : 'Shuffle'}
        </button>
      </div>

      {/* Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ${isShuffling ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}`}>
        {feedItems.map((item) => (
          <div
            key={item.id}
            className={`group relative p-6 bg-[#1A1A1B] border-2 ${item.color} rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 overflow-hidden`}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-lime-400/0 group-hover:from-cyan-500/10 group-hover:to-lime-400/10 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#F5F4EF] mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${getCategoryColor(item.category)}`}>
                {item.category}
              </span>
            </div>

            {/* Arrow Icon (hover) */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tags */}
      <div className="mt-12 flex flex-wrap gap-2 justify-center">
        {['#Echt', '#Fiktion', '#Hybrid', '#Audio'].map((tag) => (
          <button
            key={tag}
            className="px-4 py-1 text-xs font-mono border border-[#F5F4EF]/30 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ChaosFeed;

import React from 'react';

const platforms = [
  {
    id: 1,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$23.33',
    welcome: '100%',
    vipFree: '$1628',
    url: 'https://thepokies33.com'
  },
  {
    id: 2,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$29.99',
    welcomeBonus: 'Up To $996',
    vipWeekly: '$1999',
    url: 'https://gday96.com'
  },
  {
    id: 3,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '15',
    totalGames: '5000+',
    registerFree: '$18',
    daily: '50%',
    sundayVip: 'Free',
    url: 'https://bbb007.com'
  },
  {
    id: 4,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '5',
    totalGames: '4000+',
    dailyFree: '$33.33',
    welcome: '100%',
    vipDaily: '$189.99',
    url: 'https://retro33.com'
  },
  {
    id: 5,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$27.77',
    randomDaily: '$1 - $5',
    refBonus: '$17.77',
    url: 'https://class777.com'
  },
  {
    id: 6,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '20',
    totalGames: '5500+',
    vipFree: '$2300',
    weeklyQuest: '$2495.96',
    dailyQuest: '$99.64',
    url: 'https://enjoy96.com'
  },
  {
    id: 7,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '25',
    totalGames: '6000+',
    registerFree: '$50',
    welcome: '200%',
    vipBonus: '$2000',
    url: 'https://crown9.com'
  },
  {
    id: 8,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '30',
    totalGames: '7000+',
    registerFree: '$88',
    welcome: '300%',
    vipPackage: '$5000',
    url: 'https://royal88.com'
  }
];

// 渐变背景
const gradients = [
  "radial-gradient(circle at top left, #7ADAA5 0%, #1CA7EC 50%, #0A3D62 100%)",
  "radial-gradient(circle at bottom right, #1CA7EC 0%, #7ADAA5 50%, #003049 100%)",
  "radial-gradient(circle at center, #ffffff 0%, #7ADAA5 40%, #1CA7EC 80%)",
  "radial-gradient(circle at top right, #7ADAA5 0%, #ffffff 50%, #0F3057 100%)",
  "radial-gradient(circle at bottom left, #1CA7EC 0%, #ffffff 50%, #004d61 100%)",
  "radial-gradient(circle at center, #7ADAA5 0%, #1CA7EC 60%, #002244 100%)",
  "radial-gradient(circle at top, #ffffff 0%, #1CA7EC 50%, #0A192F 100%)",
  "radial-gradient(circle at bottom, #7ADAA5 0%, #ffffff 40%, #003366 100%)",
];

const GamePlatforms: React.FC = () => {
  return (
    <section id="platforms" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={platform.id}
              className="relative rounded-2xl p-6 overflow-hidden
                         border border-white/30 
                         shadow-[0_0_25px_rgba(0,0,0,0.2)] 
                         hover:shadow-[0_0_40px_rgba(0,0,0,0.35)] 
                         transition-all duration-500 
                         hover:scale-[1.03]"
            >
              {/* 背景渐变 */}
              <div 
                className="absolute inset-0"
                style={{ background: gradients[index % gradients.length] }}
              />
              {/* Glassmorphism */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />

              {/* 内容 */}
              <div className="relative z-10 text-black">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-left">
                    <div className="text-xs opacity-80">MIN DEPOSIT</div>
                    <div className="text-lg font-rubik font-bold" style={{ color: '#222831' }}>
                      {platform.minDeposit} <span className="text-xs">AUD</span>
                    </div>
                  </div>

                  <div className="flex-[1.5] flex justify-center">
                    <img 
                      src={platform.logo} 
                      alt="Platform Logo"
                      className="h-16 object-contain drop-shadow-xl"
                    />
                  </div>

                  <div className="flex-1 text-right">
                    <div className="text-xs opacity-80">TOTAL GAMES</div>
                    <div className="text-lg font-rubik font-bold" style={{ color: '#222831' }}>
                      {platform.totalGames}
                    </div>
                  </div>
                </div>

                {/* Bonus 三栏 */}
                <div className="grid grid-cols-3 gap-2 text-center text-sm mb-4">
                  <div>
                    <div className="opacity-80">Register Free</div>
                    <div className="font-rubik font-bold text-2xl" style={{ color: '#222831' }}>
                      {platform.registerFree}
                    </div>
                  </div>
                  <div>
                    <div className="opacity-80">Bonus</div>
                    <div className="font-rubik font-bold text-2xl" style={{ color: '#222831' }}>
                      {platform.welcome || platform.welcomeBonus || platform.daily || "-"}
                    </div>
                  </div>
                  <div>
                    <div className="opacity-80">Special</div>
                    <div className="font-rubik font-bold text-2xl" style={{ color: '#222831' }}>
                      {platform.vipFree || platform.vipBonus || platform.vipPackage || "-"}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => window.open(platform.url, '_blank')}
                  className="w-full bg-gradient-to-r from-cyan-500 via-green-500 to-blue-600 text-white py-2 
                            rounded-lg font-extrabold text-lg shadow hover:shadow-xl 
                            hover:scale-[1.05] transition flex items-center justify-center space-x-2"
                >
                  <img 
                    src="/cards cta/bonus-2.webp"
                    alt="CTA Icon" 
                    className="w-7 h-7 drop-shadow-md"
                  />
                  <span>Visit Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePlatforms;

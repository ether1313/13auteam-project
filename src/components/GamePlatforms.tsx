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
    url: ''
  },
  {
    id: 2,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$29.99',
    welcomeBonus: '$996',
    vipWeekly: '$1999',
    url: ''
  },
  {
    id: 3,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '15',
    totalGames: '5000+',
    registerFree: '$18',
    daily: '50%',
    sundayVip: 'Free',
    url: ''
  },
  {
    id: 4,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '5',
    totalGames: '4000+',
    dailyFree: '$33.33',
    welcome: '100%',
    vipDaily: '$189.99',
    url: ''
  },
  {
    id: 5,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$27.77',
    randomDaily: '$1 - $5',
    refBonus: '$17.77',
    url: ''
  },
  {
    id: 6,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '20',
    totalGames: '5500+',
    vipFree: '$2300',
    weeklyQuest: '$2495.96',
    dailyQuest: '$99.64',
    url: ''
  },
  {
    id: 7,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '25',
    totalGames: '6000+',
    registerFree: '$50',
    welcome: '200%',
    vipBonus: '$2000',
    url: ''
  },
  {
    id: 8,
    logo: '/games logo/IPAY9.webp',
    minDeposit: '30',
    totalGames: '7000+',
    registerFree: '$88',
    welcome: '300%',
    vipPackage: '$5000',
    url: ''
  }
];

const GamePlatforms: React.FC = () => {
  return (
    <section id="platforms" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <div 
              key={platform.id}
              className="relative rounded-2xl overflow-hidden 
                         border border-white/30 
                         shadow-[0_0_25px_rgba(0,0,0,0.2)] 
                         hover:shadow-[0_0_40px_rgba(0,0,0,0.35)] 
                         transition-all duration-500 
                         hover:scale-[1.03]"
            >
              {/* 上半部分 */}
              <div className="bg-[#e4eded] text-black p-4 flex items-center justify-between">
                {/* 左侧：MIN DEPOSIT */}
                <div className="bg-[#f0f7f7] rounded-md px-1.5 py-1 shadow-sm text-left">
                  <div className="text-xs font-medium opacity-70">MIN DEPOSIT</div>
                  <div className="text-xl font-extrabold text-gray-900">
                    {platform.minDeposit} <span className="text-sm font-bold">AUD</span>
                  </div>
                </div>

                {/* 中间 LOGO */}
                <img 
                  src={platform.logo} 
                  alt="Platform Logo" 
                  className="h-12 object-contain mx-4 drop-shadow-lg"
                />

                {/* 右侧：TOTAL GAMES */}
                <div className="bg-[#f0f7f7] rounded-md px-3 py-2 shadow-sm text-right">
                  <div className="text-xs font-medium opacity-70">TOTAL GAMES</div>
                  <div className="text-xl font-extrabold text-gray-900">
                    {platform.totalGames}
                  </div>
                </div>
              </div>

              {/* 下半部分 */}
              <div className="bg-white p-4 text-[#222831]">
                <div className="grid grid-cols-3 divide-x-[2px] divide-[#d1d6ce] text-center mb-4">
                  <div className="px-2">
                    <div className="text-xs font-medium opacity-70">Register Free</div>
                    <div className="text-xl font-extrabold text-gray-900">
                      {platform.registerFree || "-"}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="text-xs font-medium opacity-70">Bonus</div>
                    <div className="text-xl font-extrabold text-gray-900">
                      {platform.welcome || platform.welcomeBonus || platform.daily || "-"}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="text-xs font-medium opacity-70">Special</div>
                    <div className="text-xl font-extrabold text-gray-900">
                      {platform.vipFree || platform.vipBonus || platform.vipPackage || "-"}
                    </div>
                  </div>
                </div>

                {/* CTA Button - 保持不动 */}
                <button 
                  onClick={() => window.open(platform.url, '_blank')}
                  className="w-full bg-[#78e63d] 
                            text-white py-2 rounded-lg font-extrabold text-lg 
                            shadow-md hover:shadow-lg 
                            hover:bg-[#4bb352]
                            transition-all duration-300 
                            flex items-center justify-center space-x-2"
                >
                  <img 
                    src="/cards cta/3d-dice.webp"
                    alt="CTA Icon" 
                    className="w-6 h-6 drop-shadow-md"
                  />
                  <span>Claim Now</span>
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

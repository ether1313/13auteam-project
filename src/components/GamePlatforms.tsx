import React, { useMemo } from 'react';

// 定义 Platform 类型
type Platform = {
  id: number;
  logo: string;
  minDeposit: string;
  totalGames: string;
  registerFree: string;
  welcomeBonus: string;
  vipFree: string;
  url: string;
};

// 平台数据
const platforms: Platform[] = [
  {
    id: 1,
    logo: '/games logo/ipay logo.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$23.33',
    welcomeBonus: '100%',
    vipFree: '$1628',
    url: ''
  },
  {
    id: 2,
    logo: '/games logo/kingbet logo.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$29.99',
    welcomeBonus: '$996',
    vipFree: '$1999',
    url: ''
  },
  {
    id: 3,
    logo: '/games logo/mario logo.webp',
    minDeposit: '15',
    totalGames: '5000+',
    registerFree: '$18',
    welcomeBonus: '50%',
    vipFree: 'Free',
    url: ''
  },
  {
    id: 4,
    logo: '/games logo/me99 logo.webp',
    minDeposit: '5',
    totalGames: '4000+',
    registerFree: '$33.33',
    welcomeBonus: '100%',
    vipFree: '$189.99',
    url: ''
  },
  {
    id: 5,
    logo: '/games logo/queen13 logo.webp',
    minDeposit: '20',
    totalGames: '5500+',
    registerFree: '$45',
    welcomeBonus: '150%',
    vipFree: '$2500',
    url: ''
  },
  {
    id: 6,
    logo: '/games logo/epay9 logo.webp',
    minDeposit: '25',
    totalGames: '6000+',
    registerFree: '$60',
    welcomeBonus: '200%',
    vipFree: '$3000',
    url: ''
  }
];

// 打乱数组函数 (Fisher-Yates shuffle)，使用泛型
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GamePlatforms: React.FC = () => {
  // 每次渲染时随机顺序
  const shuffledPlatforms = useMemo(() => shuffleArray<Platform>(platforms), []);

  return (
    <section id="platforms" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {shuffledPlatforms.map((platform) => (
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
                {/* 左边 MIN DEPOSIT */}
                <div className="text-left">
                  {/* 桌面显示: MIN DEPOSIT 一行，手机显示: MIN / DEPOSIT 两行 */}
                  <div className="text-xs font-medium opacity-70">
                    <span className="hidden sm:inline">MIN DEPOSIT</span>
                    <span className="block sm:hidden">MIN</span>
                    <span className="block sm:hidden">DEPOSIT</span>
                  </div>
                  {/* 数值 */}
                  <div className="text-xl font-piedra text-[#343434]">
                    {platform.minDeposit} <span className="text-sm font-bold">AUD</span>
                  </div>
                </div>

                {/* LOGO */}
                <img 
                  src={platform.logo} 
                  alt="Platform Logo" 
                  className="h-12 object-contain mx-3 drop-shadow-lg"
                />

                {/* 右边 TOTAL GAMES */}
                <div className="text-right">
                  {/* 桌面显示: TOTAL GAMES 一行，手机显示: TOTAL / GAMES 两行 */}
                  <div className="text-xs font-medium opacity-70">
                    <span className="hidden sm:inline">TOTAL GAMES</span>
                    <span className="block sm:hidden">TOTAL</span>
                    <span className="block sm:hidden">GAMES</span>
                  </div>
                  {/* 数值 */}
                  <div className="text-xl font-piedra text-[#343434]">
                    {platform.totalGames}
                  </div>
                </div>
              </div>

              {/* 下半部分 */}
              <div className="bg-white p-4 text-[#222831]">
                <div className="grid grid-cols-3 divide-x-[2px] divide-[#d1d6ce] text-center mb-4">
                  <div className="px-2">
                    <div className="text-xs font-medium opacity-70">Register Free</div>
                    <div className="text-xl font-piedra text-[#343434]">
                      {platform.registerFree || "-"}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="text-xs font-medium opacity-70">Bonus</div>
                    <div className="text-xl font-piedra text-[#343434]">
                      {platform.welcomeBonus || "-"}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="text-xs font-medium opacity-70">Special</div>
                    <div className="text-xl font-piedra text-[#343434]">
                      {platform.vipFree || "-"}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
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

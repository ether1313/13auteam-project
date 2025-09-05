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
    logo: '/games logo/.webp',
    minDeposit: '5',
    totalGames: '4000+',
    registerFree: '$288',
    welcomeBonus: '70%',
    vipFree: '',
    url: 'https://bugatti13.vip'
  },
  {
    id: 2,
    logo: '/games logo/chanel9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$399.99',
    welcomeBonus: 'BNG 50%',
    vipFree: '',
    url: 'https://chanel9.net/'
  },
  {
    id: 3,
    logo: '/games logo/.webp',
    minDeposit: '5',
    totalGames: '5000+',
    registerFree: '$286.66',
    welcomeBonus: 'JILI 50%',
    vipFree: '',
    url: 'https://hermes13.net/'
  },
  {
    id: 4,
    logo: '/games logo/louis13.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$399.99',
    welcomeBonus: 'JILI 80%',
    vipFree: '',
    url: 'https://louis13.co/'
  },
  {
    id: 5,
    logo: '/games logo/.webp',
    minDeposit: '8',
    totalGames: '5000+',
    registerFree: '$400',
    welcomeBonus: 'JILI 50%',
    vipFree: '',
    url: 'https://audpay.vip/'
  },
  {
    id: 6,
    logo: '/games logo/prada9.webp',
    minDeposit: '8',
    totalGames: '5000+',
    registerFree: '$399',
    welcomeBonus: 'BNG 80%',
    vipFree: '$3000',
    url: 'https://prada9.vip/'
  }
];

// 打乱数组函数 (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GamePlatforms: React.FC = () => {
  const shuffledPlatforms = useMemo(() => shuffleArray<Platform>(platforms), []);

  return (
    <section id="platforms" className="bg-white">
      <div className="max-w-7xl mx-auto px-[clamp(0.8rem,2vw,2rem)] py-[clamp(1rem,3vw,3rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[clamp(1rem,2.5vw,2rem)] w-full">
          {shuffledPlatforms.map((platform) => (
            <div 
              key={platform.id}
              className="relative rounded-2xl overflow-hidden 
                         border border-white/30 
                         shadow-[0_0_25px_rgba(0,0,0,0.2)] 
                         hover:shadow-[0_0_40px_rgba(0,0,0,0.35)] 
                         transition-all duration-500 
                         hover:scale-[1.03] 
                         w-full"
            >
              {/* 上半部分 */}
              <div className="bg-[#e4eded] text-black 
                                py-[clamp(0.3rem,1vw,0.75rem)] 
                                px-[clamp(0.75rem,2vw,1.5rem)]
                                grid grid-cols-3 sm:grid-cols-[1fr_2fr_1fr] 
                                items-center w-full">
                {/* 左边 MIN DEPOSIT */}
                <div className="w-full text-left">
                  <div className="text-[clamp(0.7rem,1.5vw,1rem)] font-medium opacity-70">
                    <span className="hidden sm:inline">MIN DEPOSIT</span>
                    <span className="block sm:hidden">MIN</span>
                    <span className="block sm:hidden">DEPOSIT</span>
                  </div>
                  <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-piedra text-[#343434]">
                    {platform.minDeposit} <span className="text-[clamp(0.6rem,1.5vw,0.9rem)] font-bold">AUD</span>
                  </div>
                </div>

                {/* 中间 LOGO */}
                <div className="flex justify-center items-center w-full">
                  <img 
                    src={platform.logo} 
                    alt="Platform Logo" 
                    className="w-full max-w-[clamp(100px,20vw,400px)] 
                              h-[clamp(40px,8vw,80px)] 
                              object-contain drop-shadow-lg"
                  />
                </div>

                {/* 右边 TOTAL GAMES */}
                <div className="w-full text-right">
                  <div className="text-[clamp(0.7rem,1.5vw,1rem)] font-medium opacity-70">
                    <span className="hidden sm:inline">TOTAL GAMES</span>
                    <span className="block sm:hidden">TOTAL</span>
                    <span className="block sm:hidden">GAMES</span>
                  </div>
                  <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-piedra text-[#343434]">
                    {platform.totalGames}
                  </div>
                </div>
              </div>

              {/* 下半部分 */}
              <div className="bg-white p-[clamp(0.75rem,2vw,1.5rem)] text-[#222831] w-full">
                <div className="grid grid-cols-3 divide-x-[2px] divide-[#d1d6ce] text-center mb-[clamp(0.5rem,1.5vw,1rem)] w-full">
                  <div className="px-[clamp(0.5rem,1vw,1rem)] w-full">
                    <div className="text-[clamp(0.7rem,1.5vw,1rem)] font-medium opacity-70">Register Free</div>
                    <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-piedra text-[#343434]">
                      {platform.registerFree || "-"}
                    </div>
                  </div>
                  <div className="px-[clamp(0.5rem,1vw,1rem)] w-full">
                    <div className="text-[clamp(0.7rem,1.5vw,1rem)] font-medium opacity-70">Bonus</div>
                    <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-piedra text-[#343434]">
                      {platform.welcomeBonus || "-"}
                    </div>
                  </div>
                  <div className="px-[clamp(0.5rem,1vw,1rem)] w-full">
                    <div className="text-[clamp(0.7rem,1.5vw,1rem)] font-medium opacity-70">Special</div>
                    <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-piedra text-[#343434]">
                      {platform.vipFree || "-"}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => window.open(platform.url, '_blank')}
                  className="w-full bg-[#78e63d] 
                            text-white py-[clamp(0.5rem,1vw,0.75rem)] 
                            rounded-lg font-extrabold 
                            text-[clamp(0.9rem,2vw,1.2rem)] 
                            shadow-md hover:shadow-lg 
                            hover:bg-[#4bb352]
                            transition-all duration-300 
                            flex items-center justify-center space-x-[clamp(0.25rem,1vw,0.75rem)]"
                >
                  <img 
                    src="/cards cta/3d-dice.webp"
                    alt="CTA Icon" 
                    className="w-[clamp(18px,3vw,28px)] h-[clamp(18px,3vw,28px)] drop-shadow-md"
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

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
    vipFree: '$99.99',
    url: 'https://bugatti13.vip'
  },
  {
    id: 2,
    logo: '/games logo/chanel9.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$399.99',
    welcomeBonus: 'BNG 50%',
    vipFree: '$99.99',
    url: 'https://chanel9.net/'
  },
  {
    id: 3,
    logo: '/games logo/.webp',
    minDeposit: '5',
    totalGames: '5000+',
    registerFree: '$286.66',
    welcomeBonus: 'JILI 50%',
    vipFree: '$99.99',
    url: 'https://hermes13.net/'
  },
  {
    id: 4,
    logo: '/games logo/louis13.webp',
    minDeposit: '10',
    totalGames: '5000+',
    registerFree: '$399.99',
    welcomeBonus: 'JILI 80%',
    vipFree: '$99.99',
    url: 'https://louis13.co/'
  },
  {
    id: 5,
    logo: '/games logo/.webp',
    minDeposit: '8',
    totalGames: '5000+',
    registerFree: '$400',
    welcomeBonus: 'JILI 50%',
    vipFree: '$169.99',
    url: 'https://audpay.vip/'
  },
  {
    id: 6,
    logo: '/games logo/prada9.webp',
    minDeposit: '8',
    totalGames: '5000+',
    registerFree: '$399',
    welcomeBonus: 'BNG 80%',
    vipFree: '$888.88',
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
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
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
              <div className="bg-[#f0f1f1] text-black py-2 px-5 grid grid-cols-3 items-center w-full">
                {/* 左边 MIN DEPOSIT */}
                <div className="w-full text-left">
                  <div className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium opacity-70">
                    MIN DEPOSIT
                  </div>
                  <div className="text-[19px] sm:text-[21px] lg:text-[23px] font-piedra text-[#343434]">
                    {platform.minDeposit} <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold">AUD</span>
                  </div>
                </div>

                {/* 中间 LOGO */}
                <div className="flex justify-center items-center w-full">
                  <img 
                    src={platform.logo} 
                    alt="Platform Logo" 
                    className="w-[120px] h-[40px] sm:w-[160px] sm:h-[50px] lg:w-[200px] lg:h-[60px] object-contain drop-shadow-lg"
                  />
                </div>

                {/* 右边 TOTAL GAMES */}
                <div className="w-full text-right">
                  <div className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium opacity-70">
                    TOTAL GAMES
                  </div>
                  <div className="text-[19px] sm:text-[21px] lg:text-[23px] font-piedra text-[#343434]">
                    {platform.totalGames}
                  </div>
                </div>
              </div>

              {/* 下半部分 */}
              <div className="bg-white p-6 text-[#222831] w-full">
                <div className="grid grid-cols-3 divide-x-[1px] divide-[#d1d6ce] text-center mb-4 w-full">
                  <div className="px-2 w-full whitespace-nowrap">
                    <div className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium opacity-70 whitespace-nowrap">
                      Register Free
                    </div>
                    <div className="text-[20px] sm:text-[24px] lg:text-[26px] font-piedra text-[#343434] whitespace-nowrap">
                      {platform.registerFree || "-"}
                    </div>
                  </div>
                  <div className="px-2 w-full whitespace-nowrap">
                    <div className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium opacity-70 whitespace-nowrap">
                      Bonus
                    </div>
                    <div className="text-[20px] sm:text-[24px] lg:text-[26px] font-piedra text-[#343434] whitespace-nowrap">
                      {platform.welcomeBonus || "-"}
                    </div>
                  </div>
                  <div className="px-2 w-full whitespace-nowrap">
                    <div className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium opacity-70 whitespace-nowrap">
                      VIP Special
                    </div>
                    <div className="text-[20px] sm:text-[24px] lg:text-[26px] font-piedra text-[#343434] whitespace-nowrap">
                      {platform.vipFree || "-"}
                    </div>
                  </div>
                </div>



                {/* CTA Button */}
                <button 
                  onClick={() => window.open(platform.url, '_blank')}
                  className="w-full bg-[#78e63d] 
                            text-white py-1.5 sm:py-2 lg:py-2.5
                            rounded-lg font-extrabold 
                            text-[14px] sm:text-[15px] lg:text-[16px] 
                            shadow-md hover:shadow-lg 
                            hover:bg-[#4bb352]
                            transition-all duration-300 
                            flex items-center justify-center space-x-2"
                >
                  <img 
                    src="/cards cta/3d-dice.webp"
                    alt="CTA Icon" 
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] drop-shadow-md"
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

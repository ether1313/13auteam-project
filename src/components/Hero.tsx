import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Hero() {
  return (
    <section 
      className="relative max-w-7xl mx-auto px-4 text-center py-5 rounded-xl overflow-hidden"
    >
      {/* 背景国旗 */}
      <div className="absolute inset-0">
        <img 
          src="/ausflag.webp"   // 🇦🇺 把国旗图片放到 public 文件夹
          alt="Australia Flag Background"
          className="w-full h-full object-cover scale-110"
        />
        {/* 浅色 Overlay */}
        <div className="absolute inset-0 bg-white/90" /> 
      </div>

      {/* 内容层 (保持在前面) */}
      <div className="relative z-10">
        {/* 大标题 */}
        <h1
          className="font-extrabold tracking-wide mb-1 
                     text-[#22322c]
                     text-[clamp(1rem,5vw,2.5rem)] text-center
                     whitespace-nowrap"
          style={{ fontFamily: "'Bungee', cursive" }}
        >
          AUSTRALIA TRUSTED CASINO
        </h1>
        
        {/* 第二行副标题 */}
        <h2
          className="hud-glow inline-block px-6 py-2 mt-0.5
                     font-bold uppercase text-center
                     text-[clamp(0.7rem,2vw,1rem)]
                     text-black rounded-xl"
          style={{ fontFamily: "'Bungee', cursive'" }}
        >
          Since 2010
        </h2>

        {/* Banner 图片 */}
        <img
          src="/banner03.webp"
          alt="13auteam Certification"
          className="
            mx-auto
            mt-6
            mb-4
            w-full
            sm:w-[90%]
            lg:max-w-[1000px]
            h-auto
          "
        />

        {/* 副标题 */}
        <p className="text-sm sm:text-lg text-gray-600 mb-6">
          Certified by <span className="font-semibold">13auteam.com</span> & licensed under{" "}
          <span className="font-semibold">Curacao Gaming Control Board</span>.
        </p>

        {/* CTA 按钮组 */}
        <div className="flex justify-center gap-4 flex-nowrap">
          {/* Telegram 1 */}
          <a
            href="https://t.me/addlist/PbLUCPdgcG0yZWY9"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center space-x-2 
                       px-[clamp(12px,3vw,24px)] py-[clamp(10px,2vw,14px)]
                       text-white rounded-lg font-semibold 
                       text-[clamp(14px,2.5vw,18px)] shadow-md 
                       hover:shadow-xl transform transition-all duration-300 animate-shake
                       whitespace-nowrap min-w-[clamp(140px,30vw,180px)] holo-blue"
          >
            <FaTelegramPlane size={25} className="relative z-10" />
            <span className="relative z-10">Join Telegram</span>
          </a>
        
          {/* Telegram 2 */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center space-x-2 
                       px-[clamp(12px,3vw,24px)] py-[clamp(10px,2vw,14px)]
                       text-white rounded-lg font-semibold 
                       text-[clamp(14px,2.5vw,18px)] shadow-md 
                       hover:shadow-xl transform transition-all duration-300 animate-shake
                       whitespace-nowrap min-w-[clamp(140px,30vw,180px)] holo-pink"
          >
            {/* 自定义 icon 照片 */}
            <img 
              src="/sexy.webp" 
              alt="Custom Icon"
              className="w-8 h-8 object-contain relative z-10"
            />
            
            <span className="relative z-10">Telegram AV</span>
            
            {/* 18+ icon */}
            <img
              src="/adult.webp"
              alt="18+"
              className="absolute -top-3 -right-3 w-8 h-8 z-20"
            />
          </a>

        </div>
      </div>
    </section>
  );
}

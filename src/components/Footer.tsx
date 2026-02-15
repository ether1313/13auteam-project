import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative z-30 mx-auto mt-8 mb-6 w-[94%] max-w-6xl
      rounded-3xl backdrop-blur-2xl 
      bg-white/90 border border-blue-100
      shadow-[0_8px_28px_rgba(15,47,102,0.14)]
      before:content-[''] before:absolute before:inset-0 before:rounded-3xl 
      before:bg-gradient-to-br before:from-white before:to-blue-50/70 before:opacity-90
      overflow-hidden animate-floating transition-all duration-700"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
          <p className="text-[#0f2f66] text-xs sm:text-base text-center font-medium tracking-wide">
            © 2026 <span className="font-semibold">TopPokiesAustralia</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

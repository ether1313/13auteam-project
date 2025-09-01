import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#355E4D]"> {/* ✅ 深青色背景 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* ✅ 底部版权信息 */}
        <div className="pt-2"> {/* 去掉 border-t */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-white text-xs text-center md:text-left">
              © 2025 13auteam. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

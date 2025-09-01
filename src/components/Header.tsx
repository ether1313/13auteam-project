import React from 'react';
import { Spade, BotMessageSquare} from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-cyan-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 左邊 Logo + 名稱 */}
          <a href="/" className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/logo01.webp" 
                alt="13auteam Logo" 
                className="w-16 h-16 rounded-lg"
              />
            </div>
            <div className="ml-4">
              <span className="text-xl font-bold text-gray-900">13auteam</span>
            </div>
          </a>

          {/* 右邊 Icons */}
          <div className="flex items-center space-x-6">
            {/* Gaming Platforms Icon */}
            <a 
              href="#platforms" 
              className="p-2 text-gray-600 hover:text-cyan-600 transition-colors"
              title="Gaming Platforms"
            >
              <Spade size={24} />
            </a>

            {/* Support Icon */}
            <a 
              href="#footer" 
              className="p-2 text-gray-600 hover:text-cyan-600 transition-colors"
              title="Support"
            >
              <BotMessageSquare size={24} />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

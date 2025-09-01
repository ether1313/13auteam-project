import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

const platforms = [
  { name: 'IPAY9', color: 'text-yellow-600' },
  { name: 'KANGAROO BET88', color: 'text-orange-600' },
  { name: 'XPAY33', color: 'text-green-600' },
  { name: 'THE POKIES33', color: 'text-blue-600' },
  { name: 'RETRO33', color: 'text-purple-600' },
];

const generateRandomWithdrawal = () => {
  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  const amount = (Math.random() * (3000 - 100) + 100).toFixed(2);
  const accountNumber = `61${'*'.repeat(6)}${Math.floor(Math.random() * 900) + 100}`;
  
  return {
    id: `${Date.now()}-${Math.random()}`,
    platform: platform.name,
    color: platform.color,
    accountNumber,
    amount,
    timestamp: new Date().toLocaleString('en-AU', { 
      year: 'numeric',
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit', 
      minute: '2-digit'
    })
  };
};

const LiveWithdrawals: React.FC = () => {
  const [withdrawals, setWithdrawals] = useState(() => {
    return Array.from({ length: 5 }, () => generateRandomWithdrawal());
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWithdrawals(prev => {
        const newWithdrawal = generateRandomWithdrawal();
        const updated = [newWithdrawal, ...prev];
        return updated.slice(0, 5);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ✅ 外层框框 */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Partner Withdrawals</h2>
            <div className="flex items-center space-x-2 bg-red-500 px-4 py-1.5 rounded-full shadow-md">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-xs">LIVE</span>
            </div>
          </div>

          {/* Withdrawals List */}
          <div className="space-y-3">
            {withdrawals.map((withdrawal, index) => (
              <div 
                key={withdrawal.id}
                className={`bg-gray-50 rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${
                  index === 0 ? 'scale-[1.01] border-cyan-400' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  
                  {/* Left side */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-md flex items-center justify-center shadow-sm">
                      <DollarSign size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold text-sm">{withdrawal.platform}</div>
                      <div className="text-gray-500 font-mono text-xs">{withdrawal.accountNumber}</div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="text-right">
                    <div className="text-green-600 font-bold text-sm md:text-base">+{withdrawal.amount}</div>
                    <div className="text-gray-400 text-xs">{withdrawal.timestamp}</div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveWithdrawals;

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, name: 'James M.', rating: 5, text: 'Platform is very stable, withdrawal speed is fast, and customer service attitude is excellent!', platform: 'CROWN9' },
  { id: 2, name: 'Sarah L.', rating: 5, text: 'Rich variety of games, timely bonus distribution, a trustworthy platform.', platform: 'THE POKIES33' },
  { id: 3, name: 'Michael W.', rating: 4, text: 'Clean interface design, easy to operate, a great gaming platform.', platform: 'GDAY96' },
  { id: 4, name: 'Emma C.', rating: 5, text: 'Simple registration process, generous newcomer bonuses, highly recommend!', platform: 'RETRO33' },
  { id: 5, name: 'David L.', rating: 5, text: 'Safe and reliable, never encountered any problems, will continue using.', platform: 'ENJOY96' },
  { id: 6, name: 'Jessica H.', rating: 4, text: 'Customer service responds quickly and solves problems professionally.', platform: 'CLASS777' },
  { id: 7, name: 'Robert Z.', rating: 5, text: 'Withdrawals arrive quickly, platform has high credibility, very satisfied!', platform: 'BBB007' },
  { id: 8, name: 'Lisa W.', rating: 5, text: 'Smooth gaming experience, generous bonuses, the best platform I have played.', platform: 'ROYAL88' },
];

const PlayerReviews: React.FC = () => {
  return (
    <section className="py-5 bg-gradient-to-br from-cyan-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2
              className="font-bold text-gray-900 mb-4 whitespace-nowrap 
                         text-[clamp(1.7rem,5vw,2.5rem)]"
            >
              Prestige Testimonials
            </h2>
          </div>


        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-10 pointer-events-none"></div>
          
          <div className="animate-scroll-up space-y-6">
            {/* First set */}
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 mx-4"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-cyan-600">{review.platform} Player</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
            
            {/* Second set for infinite scroll */}
            {reviews.map((review) => (
              <div 
                key={`${review.id}-duplicate`}
                className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 mx-4"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-cyan-600">{review.platform} Player</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerReviews;
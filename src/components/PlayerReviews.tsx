import React, { useEffect, useMemo, useState } from 'react';
import { Star } from 'lucide-react';

// 平台 + 品牌色對應
const platformColors: Record<string, string> = {
  BP77: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
  BYBID9: 'bg-indigo-900/70 text-indigo-100 border border-indigo-400/35',
  GUCCI9: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
  IPAY9: 'bg-sky-900/70 text-sky-100 border border-sky-400/35',
  KINGBET9: 'bg-indigo-900/70 text-indigo-100 border border-indigo-400/35',
  ME99: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
  MICKY9: 'bg-indigo-900/70 text-indigo-100 border border-indigo-400/35',
  MRBEAN9: 'bg-cyan-900/70 text-cyan-100 border border-cyan-400/35',
  POKEMON9: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
  QUEEN13: 'bg-sky-900/70 text-sky-100 border border-sky-400/35',
  ROLEX9: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
  WINNIE777: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
  ACE96AU: 'bg-blue-900/70 text-blue-100 border border-blue-400/35',
};

const reviewTemplates = [
  // Withdrawals / Payments
  "withdrawals processed fast, no issues at all.",
  "payout arrived faster than I expected, very impressed.",
  "instant withdrawals make this my go-to platform.",
  "never had a delay with withdrawals — reliable as always.",
  "I received my payout within minutes, love the efficiency.",
  "fastest withdrawal process I’ve ever experienced.",
  "payouts are consistent and transparent, no hidden fees.",
  "smooth transactions every time, zero problems with deposits or withdrawals.",
  "payment verification was quick and simple.",
  "they processed my cashout while I was still celebrating the win!",

  // Bonuses / Promotions
  "welcome bonus was generous and activated instantly.",
  "I love the surprise promotions — keeps the fun going.",
  "daily bonuses are amazing, always something new.",
  "the cashback rewards are really worth it.",
  "I got free credits just for signing up, unbelievable!",
  "bonus terms are clear and fair, easy to understand.",
  "they give you real value with every deposit bonus.",
  "I keep playing because the offers are so rewarding.",
  "referral bonus actually works — my friend and I both got paid!",
  "VIP rewards are fantastic, makes you feel valued.",

  // Gameplay / Design
  "gameplay runs smoothly even on mobile devices.",
  "love the interface design, feels premium and easy to use.",
  "games load super fast, and the graphics are stunning.",
  "every game feels unique and exciting.",
  "mobile version is perfectly optimized, no lag at all.",
  "animations and sounds are top-notch — feels like a real casino.",
  "UI is clean and professional, easy to find everything.",
  "the whole platform feels polished and modern.",
  "variety of games keeps me entertained for hours.",
  "I can switch between slots and live games instantly, no delay.",

  // Support / Trust / Reliability
  "support replied within minutes, very professional team.",
  "customer service was kind and resolved my issue quickly.",
  "team is friendly and genuinely cares about players.",
  "I trust this platform completely, never had a single problem.",
  "very transparent with payments and policies.",
  "they always keep communication clear and helpful.",
  "support staff go above and beyond — great experience.",
  "they take feedback seriously and constantly improve.",
  "super safe and secure, I feel confident playing here.",
  "best online casino experience I’ve had so far!",
];


const names = [
  "James K.", "Sarah T.", "Michael B.", "Emma R.", "David W.",
  "Jessica P.", "Robert S.", "Linda J.", "Mark H.", "Olivia F.",
  "Daniel C.", "Sophia L.", "Kevin M.", "Isabella V.", "Brian G.",
  "Emily R.", "Chris D.", "Hannah W.", "Steven B.", "Chloe S.",
  "Anthony P.", "Natalie G.", "Jason L.", "Samantha K.", "Andrew D.",
  "Victoria T.", "Paul J.", "Rachel F.", "Ethan K.", "Grace N.",
  "Jack O.", "Ella M.", "Liam P.", "Mia R.", "Lucas B.",
  "Amelia Q.", "Benjamin H.", "Zoe L.", "Henry C.", "Lily J.",
  "Noah S.", "Aria D.", "Matthew E.", "Sophie K.", "Joseph N.",
  "Harper V.", "William Z.", "Ava Y.", "Logan T.", "Charlotte G.",
];

// 生成 15 平台 × 10 条 = 150 条评论
const platforms = Object.keys(platformColors);
const reviews = platforms.flatMap((platform, idx) =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: idx * 10 + i + 1,
    name: names[(idx * 10 + i) % names.length],
    rating: Math.random() > 0.2 ? 5 : 4,
    text: `${platform} ${reviewTemplates[i]}`,
    platform,
  }))
);

const PlayerReviews: React.FC = () => {
  const featuredReviews = useMemo(() => reviews.slice(0, 12), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [featuredReviews.length]);

  const getCircularIndex = (index: number) => {
    const total = featuredReviews.length;
    return (index + total) % total;
  };

  const activeReview = featuredReviews[activeIndex];
  const avatarOffsets = [-2, -1, 0, 1, 2];

  return (
    <section className="relative overflow-hidden py-14 bg-[#081633]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#14357f] via-[#0b2560] to-[#081633]"></div>
      <div className="pointer-events-none absolute -top-24 -left-14 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="relative z-[1] text-center font-bold tracking-wide text-white mb-8 text-[clamp(1.4rem,4.2vw,2.1rem)]">
          Community Spotlight
        </h2>

        <div className="relative z-[1] mb-10 flex items-center justify-center gap-3 sm:gap-6">
          {avatarOffsets.map((offset) => {
            const index = getCircularIndex(activeIndex + offset);
            const review = featuredReviews[index];
            const isActive = offset === 0;
            const isNear = Math.abs(offset) === 1;
            const sizeClass = isActive ? 'h-20 w-20 sm:h-24 sm:w-24' : isNear ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-12 w-12 sm:h-14 sm:w-14';
            const visibilityClass = Math.abs(offset) === 2 ? 'hidden sm:flex' : 'flex';

            return (
              <div
                key={`${review.id}-${offset}`}
                className={`${visibilityClass} items-center justify-center rounded-full border transition-all duration-500 ${isActive ? 'border-cyan-200/85 bg-cyan-400/20 shadow-[0_8px_30px_-10px_rgba(34,211,238,0.8)] scale-100' : 'border-blue-200/30 bg-blue-950/45 shadow-[0_8px_20px_-14px_rgba(30,64,175,0.85)] scale-95 opacity-80'}`}
              >
                <img
                  src={`https://robohash.org/${encodeURIComponent(review.name)}.png?set=set3&bgset=bg1&size=120x120`}
                  alt={review.name}
                  className={`${sizeClass} rounded-full object-cover transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>

        <div className="relative z-[1] mx-auto max-w-2xl">
          <div className="rounded-2xl border border-cyan-200/35 bg-[#1c3f97] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_30px_-20px_rgba(2,8,32,0.95)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h4 className="truncate font-bold text-white text-base sm:text-lg">
                  {activeReview.name}
                </h4>
                <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${platformColors[activeReview.platform]}`}>
                  {activeReview.platform}
                </span>
              </div>
              <div className="flex items-center space-x-1 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < activeReview.rating ? 'text-yellow-300 fill-current' : 'text-blue-100/30'}
                  />
                ))}
              </div>
            </div>

            <p className="text-blue-50/95 leading-relaxed text-sm sm:text-base">
              {activeReview.text}
            </p>

            <p className="mt-4 text-[11px] sm:text-xs text-cyan-100/75">
              Auto switching every 3 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerReviews;

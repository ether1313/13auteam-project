import React from 'react';

const Certifications: React.FC = () => {
  const licenses = [
    { logo: '/cert logo/gaminglicense.webp' },
    { logo: '/cert logo/MGA.webp' }
  ];

  const certifications = [
    { logo: '/cert logo/bmm.webp' },
    { logo: '/cert logo/GLI.webp' },
    { logo: '/cert logo/TST.webp' },
    { logo: '/cert logo/itechlab.webp' }
  ];

  const payments = [
    { logo: '/payment logo/osko.webp' },
    { logo: '/payment logo/visa.webp' },
    { logo: '/payment logo/mastercard.webp' },
    { logo: '/payment logo/applepay.webp' },
    { logo: '/payment logo/payid.webp' },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ 外层框框 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Certifications & Licenses
          </h2>

          {/* Gaming Licences */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Gaming Licences</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {licenses.map((item, index) => (
                <img 
                  key={index}
                  src={item.logo}
                  alt="Gaming License"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {certifications.map((item, index) => (
                <img 
                  key={index}
                  src={item.logo}
                  alt="Certification"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Methods</h3>
            <div className="flex justify-center items-center gap-6 flex-nowrap overflow-x-auto scrollbar-hide">
              {payments.map((item, index) => (
                <img 
                  key={index}
                  src={item.logo}
                  alt="Payment Method"
                  className="h-3.5 sm:h-5 md:h-8 lg:h-9 w-auto object-contain"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;

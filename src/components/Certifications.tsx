import React from 'react';

const Certifications: React.FC = () => {
  const certificationPhoto = '/certlogo/eccb54686c796c324ae65.png';

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={certificationPhoto}
          alt="Certifications"
          className="w-full max-w-7xl mx-auto h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Certifications;

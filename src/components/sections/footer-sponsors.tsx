import React from 'react';

const sponsors = [
  {
    title: 'Promosso da:',
    logoUrl:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3805fa7d-c471-4ece-ba29-a2c542545a27-luganolivinglab-ch/assets/svgs/6834b5e15db4d788f454b636_citta-di-lugano-1.svg?',
    alt: 'Città di Lugano logo',
    height: 70,
  },
  {
    title: 'In partenariato con:',
    logoUrl:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3805fa7d-c471-4ece-ba29-a2c542545a27-luganolivinglab-ch/assets/svgs/687e603b1339d85da66a9933_Logo_USI_nero-2.svg?',
    alt: 'Università della Svizzera italiana logo',
    height: 56,
  },
  {
    title: 'Membro di:',
    logoUrl:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3805fa7d-c471-4ece-ba29-a2c542545a27-luganolivinglab-ch/assets/svgs/6834b5e197acbeb0e756d774_enlb-3.svg?',
    alt: 'European Network of Living Labs logo',
    height: 56,
  },
];

const FooterSponsors = () => {
  return (
    <footer className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#1a1a1a] p-12 sm:p-16 flex flex-col justify-between min-h-[380px] lg:min-h-0">
          <h2 className="font-light text-5xl md:text-[56px] text-white leading-[1.1] -tracking-[0.02em]">
            L*3 Lugano
            <br />
            Living Lab
          </h2>
          <p className="text-[#CCCCCC] text-xs self-start lg:self-end mt-16 lg:mt-0">
            2025 © L*3 Lugano Living Lab
          </p>
        </div>
        <div className="bg-[#faff00] p-12 sm:p-16 text-black flex items-center">
          <div className="w-full flex flex-col sm:flex-row gap-12 sm:gap-14">
            {sponsors.map((sponsor) => (
              <div key={sponsor.title}>
                <p className="text-sm mb-5">{sponsor.title}</p>
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.alt}
                  style={{ height: `${sponsor.height}px` }}
                  className="object-contain object-left"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSponsors;
import React from 'react';

interface Award {
  name: string;
  recipient: string;
  status: string;
}

const awardsData: Award[] = [
  {
    name: "ENoLL European Network of\u00A0Living Labs",
    recipient: "Lugano Living Lab",
    status: "Certificazione",
  },
  {
    name: "Concorso e-Partecipazione 2020",
    recipient: "Speakers'corner",
    status: "Vincitore",
  },
  {
    name: "Best Practitioner Award 2021 dei Living Labs OLLD2021",
    recipient: "Lugano Living Lab",
    status: "Vincitore",
  },
  {
    name: "Smart City Award IEEE 2022",
    recipient: "3AChain",
    status: "Finalista",
  },
  {
    name: "100 Swiss Digital Shapers 2023",
    recipient: "Head di Lugano Living Lab, Robert Bregy",
    status: "Nomination",
  },
  {
    name: "Smart City Award IEEE 2023",
    recipient: "MyLugano",
    status: "Vincitore",
  },
];

const AwardItem: React.FC<{ award: Award }> = ({ award }) => (
  <div>
    <div className="flex justify-between items-start py-6">
      <div className="pr-8">
        <p className="text-xl font-normal">{award.name}</p>
        <p className="text-muted-foreground text-sm font-normal mt-1">{award.recipient}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-base font-normal">{award.status}</p>
      </div>
    </div>
    <div className="h-px bg-border" />
  </div>
);

const AwardsSection = () => {
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="container">
        <h2 className="text-4xl font-normal leading-[1.3]">Awards e riconoscimenti</h2>
        <div className="h-px bg-border mt-5 mb-8" />
        <div>
          {awardsData.map((award, index) => (
            <AwardItem key={index} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
import React from 'react';

interface Award {
  name: string;
  recipient: string;
  status: string;
}

const awardsData: Award[] = [
  {
    name: "Global EdTech Innovation Award 2024",
    recipient: "HEXON Platform",
    status: "Winner - Best Adaptive Learning Solution",
  },
  {
    name: "AI in Education Excellence",
    recipient: "HEXON AI Engine",
    status: "Top 5 Finalist - 2023",
  },
  {
    name: "Digital Learning Innovation Award",
    recipient: "HEXON Learning Platform",
    status: "Winner - 2022",
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light">HEXON's Excellence in EdTech Innovation</h2>
          <p className="text-muted-foreground text-sm">Our commitment to educational excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <div 
              key={index} 
              className="border border-border p-6 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <h3 className="text-xl font-medium mb-2">{award.name}</h3>
              <p className="text-muted-foreground mb-3">{award.recipient}</p>
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                {award.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
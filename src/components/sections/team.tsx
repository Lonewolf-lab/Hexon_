import React from 'react';

const teamData = [
  {
    name: "Robert Bregy",
    title: "Segretario Comunale",
  },
  {
    name: "Jan Trautmann",
    title: "Responsabile Comunicazione e Innovazione Città",
  },
  {
    name: "Elena Marchiori",
    title: "Project Lead",
  },
  {
    name: "Simona Gamba",
    title: "Project Lead",
  },
  {
    name: "Lorenzo Barisone",
    title: "Data Scientist",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-background text-foreground py-[60px]">
      <div className="container mx-auto px-6">
        <div className="flex">
          <div className="w-full">
            <h2 className="text-4xl font-light">Il team L*3</h2>
          </div>
        </div>
        <div className="h-px bg-border mt-8 mb-10" />

        <div className="flex flex-wrap">
          <div className="w-11/12 sm:w-1/2 lg:w-1/3 mb-12 lg:mb-0">
            <div className="text-lg text-muted-foreground leading-[1.6]">
              Il team del L*3 è formato da cinque persone con competenze e percorsi differenti che contribuiscono al successo e alla realizzazione dei nostri progetti.
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/6" />

          <div className="w-full sm:w-1/2 lg:w-1/2">
            <div>
              <div role="list">
                {teamData.map((member) => (
                  <div key={member.name} role="listitem" className="border-b border-border last:border-b-0">
                    <div className="py-5">
                      <div className="text-lg text-foreground">{member.name}</div>
                      <div className="text-muted-foreground">{member.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
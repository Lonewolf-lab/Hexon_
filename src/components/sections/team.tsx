import React from 'react';

const teamData = [
  {
    name: "Ansh Johnson",
    title: "Backend Developer",
  },
  {
    name: "Siddhant Sinha",
    title: "Frontend Developer",
  },

];

const TeamSection = () => {
  return (
    <section className="bg-background text-foreground py-[60px]">
      <div className="container mx-auto px-6">
        <div className="flex">
          <div className="w-full">
            <h2 className="text-4xl font-light">Meet the HEXON Innovation Team</h2>
          </div>
        </div>
        <div className="h-px bg-border mt-8 mb-10" />

        <div className="flex flex-wrap">
          <div className="w-11/12 sm:w-1/2 lg:w-1/3 mb-12 lg:mb-0">
            <div className="text-lg text-muted-foreground leading-[1.6]">
              Our diverse team of education and technology experts is dedicated to transforming the learning experience through innovative adaptive learning solutions.
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/6" />

          <div className="w-full sm:w-1/2 lg:w-1/2">
            <div>
              <div role="list">
                {teamData.map((member) => (
                  <div key={member.name} role="listitem" className="border-b border-border last:border-b-0">
                    <div className="py-4">
                      <h3 className="text-xl font-medium">{member.name}</h3>
                      <p className="text-muted-foreground">{member.title}</p>
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
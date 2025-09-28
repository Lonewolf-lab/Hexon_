import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-background text-foreground pt-48 pb-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col gap-6">
          <p
            className="text-base text-muted-foreground"
            aria-label="/ Chi siamo"
          >
            / About Us
          </p>
          <h1
            className="font-light text-[92px] leading-[1.1] tracking-tighter"
            aria-label="Lugano Living Lab"
          >
            Hexon
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
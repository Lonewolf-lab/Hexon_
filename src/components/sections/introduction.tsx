import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="bg-background text-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6">
        {/* Top Row with Heading */}
        <div className="grid grid-cols-12 gap-x-6 mb-16 lg:mb-24">
          <div className="col-span-6 md:col-span-3 lg:col-span-4">
            <p className="text-secondary-text text-base">/ Chi siamo</p>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6 order-last md:order-none mt-8 md:mt-0">
            <h2 className="text-3xl lg:text-[2.5rem] text-primary-text font-light leading-snug">
              Promosso dalla Città di Lugano come contributo concreto alla realizzazione delle Linee di Sviluppo 2030 e della Strategia Digitale 2025-2030.
            </h2>
          </div>
          <div className="col-span-6 md:col-span-1 lg:col-span-2 text-right">
            <p className="text-primary-text text-base">L*3</p>
          </div>
        </div>

        {/* Bottom Row with Body Text */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="hidden md:block md:col-span-3 lg:col-span-4">
            {/* Spacer */}
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <div className="md:columns-2 md:gap-8">
              <p className="text-secondary-text text-base leading-relaxed break-inside-avoid-column mb-8 md:mb-0">
                Pensato come un laboratorio di innovazione aperto e diffuso su tutta l’area della città, coinvolge un vasto partenariato di attori pubblici e privati interessati a fare crescere l’ecosistema locale dell’innovazione. Concetto questo racchiuso nel “motto” del nostro Lab: Sharing Innovation.
              </p>
              <p className="text-secondary-text text-base leading-relaxed break-inside-avoid-column">
                Le nostre attività spaziano dalla creazione e sviluppo di progetti d’innovazione, eventi e contenuti divulgativi sui temi legati alla trasformazione digitale e il sostegno attivo (non economico) a progetti concreti di cittadini e/o partner. Lo scopo ultimo del laboratorio è favorire il miglioramento della qualità di vita, promuovere la crescita economica e la competitività della regione, puntando su trasformazione digitale e sostenibilità.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
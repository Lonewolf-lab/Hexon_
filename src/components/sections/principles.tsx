import { ArrowRight } from 'lucide-react';
import React from 'react';

const principlesData = [
  {
    number: "01",
    title: "Visione",
    description: "Pensato come un laboratorio di innovazione aperto e diffuso su tutta l’area della città, coinvolge un vasto partenariato di attori pubblici e privati interessati a fare crescere l’ecosistema locale dell’innovazione. Concetto questo racchiuso nel “motto” del nostro Lab: Sharing Innovation.",
  },
  {
    number: "02",
    title: "Valori",
    description: "Lugano Living Lab è trasversale, collaborativo, data-informed e sperimentale. Affrontiamo sfide urbane in modo olistico, valorizziamo il confronto con l’ecosistema locale, sfruttiamo il potenziale dei dati generati dalla città e crediamo che la sperimentazione – anche con margini d’errore – sia la via per innovare davvero.",
  },
  {
    number: "03",
    title: "Missione",
    description: [
      "Con un approccio aperto e concreto ci impegniamo a creare, testare e sviluppare soluzioni digitali e tecnologiche, integrando progetti di ricerca e sviluppo legati alla trasformazione digitale, al fine di rendere Lugano una città innovativa ma pur sempre a misura d’uomo.",
      "Questa missione si inserisce pienamente nel percorso delineato nella Strategia Digitale 2025-2030 della Città di Lugano, rafforzando l’impegno verso un futuro innovativo, sostenibile e centrato sulle persone."
    ],
  },
];

const linksData = [
  { text: "Scarica la Strategia Digitale 2025-2030 della Città di Lugano", href: "https://cdn.prod.website-files.com/68343fa1c24481e96810ea51/68b95e059dacef091d17de28_Strategia%20digitale_2025-2030_def.pdf", isExternal: true },
  { text: "Vedi il network di Lugano Living Lab", href: "https://www.luganolivinglab.ch/network", isExternal: false },
  { text: "Scopri i nostri progetti", href: "https://www.luganolivinglab.ch/chi-siamo#", isExternal: false },
];

const PrinciplesSection = () => {
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-normal">I nostri principi</h2>
        </div>
        
        <div className="border-t border-border">
          {principlesData.map((principle, index) => {
            const isLast = index === principlesData.length - 1;
            return (
              <div
                key={principle.number}
                className={`pt-8 ${!isLast ? 'pb-8 border-b border-border' : 'pb-8'}`}
              >
                <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-4">
                  <div className="col-span-1 md:col-span-1 text-muted-foreground">
                    ({principle.number})
                  </div>
                  <div className="col-span-3 md:col-span-5">
                    <h3 className="text-2xl font-normal text-foreground">{principle.title}</h3>
                  </div>
                  <div className={`col-span-4 ${isLast ? 'md:col-span-full md:col-start-7' : 'md:col-span-5 md:col-start-7'} lg:col-span-auto ${isLast ? 'lg:col-span-6 lg:col-start-auto' : 'lg:col-span-4 lg:col-start-auto'} text-muted-foreground leading-relaxed`}>
                    {Array.isArray(principle.description) ? (
                      <div className="space-y-6">
                        {principle.description.map((p, i) => <p key={i}>{p}</p>)}
                      </div>
                    ) : (
                      <p>{principle.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-12">
          <div className="w-full lg:w-6/12">
            <ul className="w-full">
              {linksData.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target={link.isExternal ? "_blank" : undefined} 
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="group flex justify-between items-center py-5 text-foreground border-b border-border hover:opacity-80 transition-opacity"
                  >
                    <span className="text-base">{link.text.replace(/\u200d/g, '')}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
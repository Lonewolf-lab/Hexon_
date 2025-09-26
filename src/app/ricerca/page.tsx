import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[65px]">
        {/* Hero */}
        <section className="border-b border-border-gray">
          <div className="container py-10 md:py-16">
            <div className="text-sm text-secondary-text mb-6">/ Innovation</div>
            <h1 className="text-4xl md:text-6xl font-light">Ricerca</h1>
            <p className="max-w-3xl text-secondary-text text-body-large mt-6">
              Collaborazioni con università e partner per produrre conoscenza, linee guida
              e sperimentazioni a supporto delle politiche pubbliche.
            </p>
          </div>
        </section>

        {/* Areas of research */}
        <section className="border-b border-border-gray">
          <div className="container py-12 md:py-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Dati & AI",
                desc: "Governance dei dati, modelli responsabili e casi d'uso per i servizi urbani.",
              },
              {
                title: "Partecipazione Civica",
                desc: "Metodi e piattaforme per coinvolgere cittadini e stakeholder nei processi decisionali.",
              },
              {
                title: "Spazio Pubblico",
                desc: "Osservazione e prototipazione per migliorare qualità e fruibilità degli spazi urbani.",
              },
            ].map((a) => (
              <div key={a.title} className="border border-border-gray bg-secondary-background p-6 md:p-7">
                <h3 className="text-2xl font-light">{a.title}</h3>
                <p className="mt-3 text-secondary-text">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications (static demo) */}
        <section>
          <div className="container py-12 md:py-16 grid gap-6">
            <h2 className="text-3xl md:text-4xl font-light">Pubblicazioni e report</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Linee guida per l'uso responsabile dell'AI nei servizi pubblici",
                  year: "2025",
                },
                { title: "Dati urbani come bene comune: modelli di governance", year: "2024" },
                { title: "Toolkit per la partecipazione digitale", year: "2024" },
                { title: "Indicatori per la qualità dello spazio pubblico", year: "2023" },
              ].map((p) => (
                <article
                  key={p.title}
                  className="flex items-start justify-between gap-4 border border-border-gray bg-secondary-background p-5 md:p-6 hover:bg-[#181818] transition-colors"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-light">{p.title}</h3>
                    <div className="mt-2 text-secondary-text">Report • {p.year}</div>
                  </div>
                  <div className="text-link whitespace-nowrap self-center">Scarica</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
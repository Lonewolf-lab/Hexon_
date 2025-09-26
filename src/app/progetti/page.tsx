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
            <div className="text-sm text-secondary-text mb-6">/ Creating</div>
            <h1 className="text-4xl md:text-6xl font-light">Progetti</h1>
            <p className="max-w-3xl text-secondary-text text-body-large mt-6">
              Una selezione dei progetti promossi da L*3 per esplorare, sperimentare
              e diffondere pratiche di innovazione urbana, digitale e sociale.
            </p>
          </div>
        </section>

        {/* Filters (static placeholders to match style) */}
        <section className="border-b border-border-gray">
          <div className="container py-6 flex flex-wrap items-center gap-3 text-sm text-secondary-text">
            <span className="text-white/90">Filtri:</span>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Tutti</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Cittadinanza</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Dati e AI</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Territorio</button>
          </div>
        </section>

        {/* Projects grid (static demo content) */}
        <section>
          <div className="container py-12 md:py-16 grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Digital Lugano Map",
                tag: "Dati e AI",
                desc:
                  "Una mappa interattiva per esplorare servizi, dati e iniziative digitali sul territorio.",
              },
              {
                title: "Urban Living Pilot",
                tag: "Territorio",
                desc:
                  "Sperimentazioni sullo spazio pubblico per migliorare vivibilità e partecipazione.",
              },
              {
                title: "Civic Tech Toolkit",
                tag: "Cittadinanza",
                desc:
                  "Strumenti open-source per facilitare il dialogo tra amministrazione e cittadini.",
              },
              {
                title: "AI for Public Services",
                tag: "Dati e AI",
                desc:
                  "Prototipi di utilizzo responsabile dell'AI per servizi più efficienti e inclusivi.",
              },
              {
                title: "Data Commons Lugano",
                tag: "Dati e AI",
                desc:
                  "Infrastrutture e pratiche per la condivisione sicura di dati tra partner pubblici e privati.",
              },
              {
                title: "Green Mobility Lab",
                tag: "Territorio",
                desc:
                  "Test di soluzioni per la mobilità sostenibile e la riduzione dell'impatto ambientale.",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group border border-border-gray bg-secondary-background p-6 md:p-7 hover:bg-[#181818] transition-colors"
              >
                <div className="text-xs tracking-wide text-secondary-text uppercase">{p.tag}</div>
                <h3 className="mt-2 text-2xl font-light">{p.title}</h3>
                <p className="mt-3 text-secondary-text">{p.desc}</p>
                <div className="mt-6 text-link underline-offset-4">
                  <span className="text-link">Scopri di più</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
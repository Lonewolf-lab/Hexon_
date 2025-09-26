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
            <div className="text-sm text-secondary-text mb-6">/ Sharing</div>
            <h1 className="text-4xl md:text-6xl font-light">Eventi</h1>
            <p className="max-w-3xl text-secondary-text text-body-large mt-6">
              Incontri, workshop e conferenze per condividere saperi, pratiche e risultati
              dell'innovazione con la comunità.
            </p>
          </div>
        </section>

        {/* Filters (static placeholders) */}
        <section className="border-b border-border-gray">
          <div className="container py-6 flex flex-wrap items-center gap-3 text-sm text-secondary-text">
            <span className="text-white/90">Filtri:</span>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Tutti</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">In arrivo</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Passati</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Workshop</button>
            <button className="px-3 py-1 bg-secondary-background hover:bg-[#222] transition-colors">Talk</button>
          </div>
        </section>

        {/* Events list (static demo content) */}
        <section>
          <div className="container py-10 md:py-16 grid gap-8">
            {[
              {
                title: "Civic Tech Meetup",
                date: "12 Nov 2025",
                type: "Talk",
                desc:
                  "Un incontro per esplorare strumenti e pratiche di partecipazione digitale.",
              },
              {
                title: "Data for Cities Workshop",
                date: "28 Ott 2025",
                type: "Workshop",
                desc:
                  "Laboratorio pratico su dataset urbani e casi d'uso per la città.",
              },
              {
                title: "AI & Servizi Pubblici",
                date: "15 Set 2025",
                type: "Conferenza",
                desc:
                  "Discussione aperta su opportunità e responsabilità dell'AI nei servizi pubblici.",
              },
            ].map((e) => (
              <article
                key={e.title}
                className="group border border-border-gray bg-secondary-background p-6 md:p-7 hover:bg-[#181818] transition-colors"
              >
                <div className="flex items-center gap-3 text-xs tracking-wide text-secondary-text uppercase">
                  <span>{e.type}</span>
                  <span className="h-[1px] w-6 bg-border-gray" />
                  <span>{e.date}</span>
                </div>
                <h3 className="mt-2 text-2xl font-light">{e.title}</h3>
                <p className="mt-3 text-secondary-text">{e.desc}</p>
                <div className="mt-6 text-link underline-offset-4">
                  <span className="text-link">Dettagli</span>
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
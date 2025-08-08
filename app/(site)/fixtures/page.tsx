import Head from 'next/head';

const fixtures = [
  { date: '2025-08-12', opponent: 'Dublin CC', venue: 'Adamstown Ground' },
  { date: '2025-08-20', opponent: 'Cork CC', venue: 'Away' }
];

export default function FixturesPage(){
  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"SportsEvent",
    "name":"Adamstown Fixtures",
    "startDate": fixtures[0].date,
    "location": { "@type":"Place", "name":"Adamstown Ground" }
  };

  return (
    <>
      <Head>
        <title>Fixtures — Adamstown Cricket Club</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </Head>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading text-wine mb-6">Fixtures</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {fixtures.map((f,i)=>(<article key={i} className="glass p-4 rounded-xl"><h3 className="text-lg font-semibold text-wine">{f.opponent}</h3><p className="text-sm text-charcoal/80">{f.date} • {f.venue}</p></article>))}
        </div>
      </section>
    </>
  )
}
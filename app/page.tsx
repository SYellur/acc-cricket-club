import Hero from '../components/Hero'

export default function Page() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-heading text-wine mb-6">Upcoming Fixtures</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="glass p-4 rounded-xl">Fixture vs Dublin CC — 12 Aug 2025</article>
          <article className="glass p-4 rounded-xl">Fixture vs Cork CC — 20 Aug 2025</article>
        </div>
      </section>
    </>
  )
}
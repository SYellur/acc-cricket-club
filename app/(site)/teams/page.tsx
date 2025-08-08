import Image from 'next/image';

export default function TeamsPage(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading text-wine mb-6">Teams</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-wine">Senior Squad</h3>
          <p className="text-sm text-charcoal/80">Competitive senior team.</p>
        </div>
        <div className="glass p-4 rounded-xl">
          <h3 className="text-lg font-semibold text-wine">Youth Squad</h3>
          <p className="text-sm text-charcoal/80">Development squads for young players.</p>
        </div>
      </div>
    </section>
  )
}
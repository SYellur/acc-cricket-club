export default function ContactPage(){
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading text-wine mb-4">Contact</h1>
      <p className="mb-6 text-charcoal/85">Email <strong>info@adamstowncc.example</strong> or use the form below.</p>
      <form className="grid gap-3">
        <input className="border p-3 rounded" placeholder="Your name" />
        <input className="border p-3 rounded" placeholder="Your email" />
        <textarea className="border p-3 rounded" rows={4} placeholder="Message"></textarea>
        <button className="btn-wine w-max" id="join">Send message</button>
      </form>
    </section>
  )
}
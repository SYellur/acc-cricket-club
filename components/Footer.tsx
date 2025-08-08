export default function Footer(){
  return (
    <footer className="mt-16 bg-charcoal text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-sm">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} Adamstown Cricket Club</div>
          <div>Made with ❤️ — Wine & Grey</div>
        </div>
      </div>
    </footer>
  )
}
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* <Link href="/"><a className="flex items-center gap-3"><img src="/logo.svg" alt="Adamstown logo" style={{height:48}}/></a></Link> */}
        <Link legacyBehavior href="/"><a className="flex items-center gap-3"><img src="/logo.svg" alt="Adamstown logo" style={{height:48}}/></a></Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/about">About</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/fixtures">Fixtures</Link>
          <Link href="/contact">Contact</Link>
          <a className="btn-wine" href="#join">Join</a>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3">
            <Link href="/about">About</Link>
            <Link href="/teams">Teams</Link>
            <Link href="/fixtures">Fixtures</Link>
            <Link href="/contact">Contact</Link>
            <a className="btn-wine inline-block text-center" href="#join">Join</a>
          </div>
        </div>
      )}
    </header>
  )
}
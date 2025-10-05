import React, { useState } from 'react'

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-dark/50 border-b border-white/10">
      <nav className="section py-4 flex items-center justify-between">
        <a href="#about" className="font-semibold tracking-tight text-slate-100 hover:text-primary transition">{name.split(' ')[0]}<span className="text-primary">.</span></a>

        <button className="sm:hidden px-2 py-1 border border-white/15 rounded-md hover:border-primary/40 transition" onClick={() => setOpen(o => !o)} aria-label="Toggle Menu">
          <span className="i-material-symbols-menu text-xl">≡</span>
        </button>

        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a className="text-slate-200 hover:text-primary transition" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden section pb-4 pt-0 animate-fadeInUp">
          {links.map(l => (
            <li key={l.href} className="py-2 border-t border-white/10"><a onClick={() => setOpen(false)} className="block text-slate-200 hover:text-primary" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}

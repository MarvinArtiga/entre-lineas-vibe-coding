'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookHeart, BookOpen, Compass, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useReadingList } from '@/components/reading-list'

const navigation = [
  { href: '/', label: 'Inicio', icon: BookOpen },
  { href: '/explorar', label: 'Explorar', icon: Compass },
  { href: '/guardados', label: 'Mi estantería', icon: BookHeart },
  { href: '/proceso', label: 'El proyecto', icon: Menu },
]

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { books } = useReadingList()
  return (
    <>
      <header className="site-header wrap">
        <Link className="brand" href="/" aria-label="Entre líneas, inicio"><span className="brand-mark">e.</span><span>entre líneas</span></Link>
        <button className="mobile-menu" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Navegación principal">
          {navigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={`nav-link ${pathname === href ? 'active' : ''}`} aria-current={pathname === href ? 'page' : undefined}><Icon size={15} /><span>{label}</span>{href === '/guardados' && books.length > 0 && <span className="nav-count">{books.length}</span>}</Link>)}
        </nav>
        <Link href="/explorar" className="header-cta">Encuentra un libro <span>↗</span></Link>
      </header>
      {children}
    </>
  )
}

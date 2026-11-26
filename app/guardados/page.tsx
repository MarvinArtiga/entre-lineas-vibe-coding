'use client'

import Link from 'next/link'
import { ArrowRight, BookHeart } from 'lucide-react'
import { useReadingList } from '@/components/reading-list'
import { BookCard } from '@/components/book-card'
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'

export default function SavedPage() {
  const { books } = useReadingList()
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])
  return <main className="wrap page-content"><div className="page-intro"><p className="eyebrow">TU RINCÓN DE LECTURAS</p><h1>Una estantería <em>a tu medida.</em></h1><p>Guarda los libros que te hacen cosquillas en la curiosidad. Ya decidirás cuándo es su momento.</p></div>
    {!ready ? <div className="loading-panel" role="status">Preparando tu estantería…</div> : books.length ? <><p className="results-count">{books.length} {books.length === 1 ? 'libro guardado' : 'libros guardados'}</p><div className="book-grid">{books.map((book, index) => <BookCard key={book.key} book={book} tone={['sage','rose','lilac','ochre'][index % 4]} />)}</div></> : <div className="empty-library"><div className="empty-icon"><BookHeart size={24} /></div><p className="eyebrow">TODAVÍA HAY SITIO</p><h2>Tu próxima historia <em>te está esperando.</em></h2><p>Cuando encuentres un libro que te llame, guárdalo aquí con el icono del marcapáginas.</p><Link className="button button-dark" href="/explorar">Explorar libros <ArrowRight size={16} /></Link></div>}
  </main>
}

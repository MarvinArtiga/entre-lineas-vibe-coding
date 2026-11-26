'use client'

import { FormEvent, useState } from 'react'
import { AlertCircle, LoaderCircle, Search, Sparkles } from 'lucide-react'
import { BookCard, type Book } from '@/components/book-card'

const suggestions = ['novelas cortas', 'Ursula K. Le Guin', 'poesía', 'misterio']
export function Explorer() {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)
  async function searchBooks(value = query) {
    const clean = value.trim()
    if (clean.length < 2) { setError('Escribe al menos dos caracteres para iniciar la búsqueda.'); return }
    setQuery(clean); setLoading(true); setError(''); setSearched(true)
    try {
      const response = await fetch(`/api/books?q=${encodeURIComponent(clean)}`)
      const data = await response.json() as { books?: Book[]; error?: string }
      if (!response.ok) throw new Error(data.error ?? 'No se pudo completar la búsqueda.')
      setBooks(data.books ?? [])
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Ocurrió un error inesperado.')
      setBooks([])
    } finally { setLoading(false) }
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); void searchBooks() }
  return <section className="explorer-area">
    <form className="search-form" onSubmit={handleSubmit} role="search"><label className="sr-only" htmlFor="book-query">Buscar título, autor o tema</label><Search size={19} aria-hidden="true" /><input id="book-query" value={query} onChange={event => setQuery(event.target.value)} placeholder="¿Qué te gustaría leer?" maxLength={100} /><button type="submit" disabled={loading}>{loading ? <LoaderCircle className="spin" size={17} /> : 'Buscar'}<span className="sr-only"> libros</span></button></form>
    <div className="suggestions"><span>PRUEBA CON</span>{suggestions.map(item => <button key={item} onClick={() => void searchBooks(item)}>{item}</button>)}</div>
    {error && <div className="error-panel" role="alert"><AlertCircle size={18} /><p>{error}</p><button onClick={() => void searchBooks()}>Intentar de nuevo</button></div>}
    {loading && <div className="loading-panel" role="status"><LoaderCircle className="spin" size={24} /><p>Buscando historias para ti…</p></div>}
    {!loading && searched && !error && books.length === 0 && <div className="empty-state"><Sparkles size={24} /><h2>Aún no encontramos ese título.</h2><p>Prueba con otras palabras o busca por autor.</p></div>}
    {!loading && books.length > 0 && <><p className="results-count">Encontramos <strong>{books.length} lecturas</strong> para «{query}»</p><div className="book-grid">{books.map((book, index) => <BookCard key={book.key} book={book} tone={['sage','rose','lilac','ochre'][index % 4]} />)}</div></>}
    {!searched && !loading && <div className="explore-note"><span className="note-mark">e.</span><div><p className="eyebrow">UN UNIVERSO DE HISTORIAS</p><h2>Tu siguiente libro podría estar <em>aquí.</em></h2><p>Conectamos con el catálogo abierto de Open Library. Más de millones de libros, al alcance de una búsqueda.</p></div></div>}
  </section>
}

'use client'

import Image from 'next/image'
import { Bookmark, Check } from 'lucide-react'
import type { Book as BookType } from '@/components/reading-list'
import { useReadingList } from '@/components/reading-list'

export type Book = BookType & { tone?: string }
export function BookCard({ book, tone = 'sage', priority = false }: { book: Book; tone?: string; priority?: boolean }) {
  const { toggleBook, hasBook } = useReadingList()
  const saved = hasBook(book.key)
  const cover = book.coverId ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg` : null
  return <article className="book-card">
    <div className={`cover-wrap cover-${tone}`}>
      {cover ? <Image src={cover} alt={`Portada de ${book.title}`} fill sizes="(max-width: 640px) 42vw, (max-width: 1000px) 28vw, 210px" priority={priority} unoptimized /> : <div className="cover-placeholder"><span>e.</span><b>{book.title}</b><small>{book.author}</small></div>}
      <button className={`save-button ${saved ? 'saved' : ''}`} onClick={() => toggleBook(book)} aria-label={saved ? `Quitar ${book.title} de tu estantería` : `Guardar ${book.title}`} aria-pressed={saved}>{saved ? <Check size={16} /> : <Bookmark size={16} />}</button>
    </div>
    <div className="book-meta"><p className="book-title">{book.title}</p><p className="book-author">{book.author}</p>{book.year && <span className="book-year">{book.year}</span>}</div>
  </article>
}

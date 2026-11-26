'use client'

import { createContext, useContext, useMemo, useState } from 'react'

export type Book = { key: string; title: string; author: string; year?: number; coverId?: number; firstSentence?: string }
type ReadingListValue = { books: Book[]; toggleBook: (book: Book) => void; hasBook: (key: string) => boolean }
const ReadingListContext = createContext<ReadingListValue | null>(null)

export function ReadingListProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([])
  const value = useMemo(() => ({
    books,
    toggleBook: (book: Book) => setBooks(current => current.some(item => item.key === book.key) ? current.filter(item => item.key !== book.key) : [...current, book]),
    hasBook: (key: string) => books.some(book => book.key === key),
  }), [books])
  return <ReadingListContext.Provider value={value}>{children}</ReadingListContext.Provider>
}

export function useReadingList() {
  const value = useContext(ReadingListContext)
  if (!value) throw new Error('useReadingList debe usarse dentro de ReadingListProvider')
  return value
}

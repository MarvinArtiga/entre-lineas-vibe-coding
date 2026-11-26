import { BookCard } from '@/components/book-card'

type EditorialPick = { title: string; author: string; year: string; tone: string }

export function BookShelf({ books }: { books: EditorialPick[] }) {
  return <div className="book-grid">{books.map((book, index) => <BookCard key={book.title} book={{ key: `editorial-${index}`, title: book.title, author: book.author, year: Number(book.year) }} tone={book.tone} priority={index < 3} />)}</div>
}

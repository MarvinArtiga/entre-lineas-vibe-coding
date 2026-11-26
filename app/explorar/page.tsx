import type { Metadata } from 'next'
import { Explorer } from '@/components/explorer'

export const metadata: Metadata = { title: 'Explorar libros', description: 'Busca libros por título, autor o tema en el catálogo de Open Library.' }
export default function ExplorePage() {
  return <main className="wrap page-content"><div className="page-intro"><p className="eyebrow">LA BIBLIOTECA ES TUYA</p><h1>Deja que la curiosidad <em>elija.</em></h1><p>Busca por título, autor o tema. El libro indicado a veces llega por caminos inesperados.</p></div><Explorer /></main>
}

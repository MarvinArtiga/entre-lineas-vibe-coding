import { NextRequest, NextResponse } from 'next/server'

type OpenLibraryDoc = { key: string; title: string; author_name?: string[]; first_publish_year?: number; cover_i?: number; first_sentence?: string | string[] }

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.trim()
  if (!query || query.length < 2) return NextResponse.json({ error: 'Escribe al menos dos caracteres para buscar.' }, { status: 400 })
  if (query.length > 100) return NextResponse.json({ error: 'La búsqueda no puede superar 100 caracteres.' }, { status: 400 })
  try {
    const url = new URL('https://openlibrary.org/search.json')
    url.searchParams.set('q', query)
    url.searchParams.set('limit', '12')
    url.searchParams.set('fields', 'key,title,author_name,first_publish_year,cover_i,first_sentence')
    const response = await fetch(url, { next: { revalidate: 3600 }, headers: { 'User-Agent': 'EntreLineasApp/1.0 (educational project)' } })
    if (!response.ok) return NextResponse.json({ error: 'La biblioteca no respondió. Inténtalo de nuevo en un momento.' }, { status: 502 })
    const data = await response.json() as { docs?: OpenLibraryDoc[] }
    const books = (data.docs ?? []).map(doc => ({
      key: doc.key,
      title: doc.title,
      author: doc.author_name?.[0] ?? 'Autoría desconocida',
      year: doc.first_publish_year,
      coverId: doc.cover_i,
      firstSentence: Array.isArray(doc.first_sentence) ? doc.first_sentence[0] : doc.first_sentence,
    }))
    return NextResponse.json({ books })
  } catch {
    return NextResponse.json({ error: 'No se pudo conectar con Open Library. Revisa tu conexión y vuelve a intentarlo.' }, { status: 502 })
  }
}

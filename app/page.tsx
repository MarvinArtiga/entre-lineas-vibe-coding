import Link from 'next/link'
import { ArrowDown, ArrowRight, BookOpen, Compass, Sparkles } from 'lucide-react'
import { BookShelf } from '@/components/book-shelf'

const picks = [
  { title: 'El libro de la almohada', author: 'Sei Shōnagon', year: '1002', cover: 'OL263413W', tone: 'lilac' },
  { title: 'Una habitación propia', author: 'Virginia Woolf', year: '1929', cover: 'OL262635W', tone: 'rose' },
  { title: 'El infinito en un junco', author: 'Irene Vallejo', year: '2019', cover: 'OL20824148W', tone: 'sage' },
]

export default function HomePage() {
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> UN RINCÓN PARA LEER SIN PRISA</p>
          <h1>Una historia<br />siempre <em>te encuentra.</em></h1>
          <p className="hero-text">Libros para los días que tienes, para las preguntas que te haces y para los lugares a los que todavía no has ido.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/explorar">Encuentra tu próxima lectura <ArrowRight size={16} /></Link>
            <Link className="text-link" href="/guardados">Tu estantería <ArrowDown size={15} /></Link>
          </div>
          <div className="reader-note"><div className="avatar-stack"><span>m</span><span>l</span><span>+</span></div><span>Un pequeño club de lectores curiosos</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustración de una pila de libros, una taza y una planta">
          <div className="sun-disc" />
          <div className="plant"><i /><i /><i /><i /><b /></div>
          <div className="cup"><span /></div>
          <div className="book book-top"><small>MARY OLIVER</small><strong>Devotions</strong><i /></div>
          <div className="book book-mid"><small>UNA NOVELA</small><strong>La vida<br />invisible</strong></div>
          <div className="book book-bottom"><span>LECTURAS PARA EL ALMA</span><b>El jardín<br />secreto</b></div>
          <span className="art-caption">LENTO TAMBIÉN ES UN RITMO</span>
        </div>
      </section>

      <section className="intro-band"><div className="wrap band-inner"><Sparkles size={17} /><p>No hace falta leer más. <em>Solo encontrar ese libro</em> que te hace querer volver a abrirlo.</p><span>01 / 03</span></div></section>

      <section className="wrap section-block">
        <div className="section-heading"><div><p className="eyebrow">UNA SELECCIÓN PARA EMPEZAR</p><h2>Libros que hacen <em>compañía.</em></h2></div><Link className="text-link" href="/explorar">Ver más libros <ArrowRight size={15} /></Link></div>
        <BookShelf books={picks} />
      </section>

      <section className="discover-card wrap"><div className="discover-icon"><Compass size={22} /></div><div><p className="eyebrow">TU PRÓXIMA PÁGINA</p><h2>¿Y si hoy lees algo <em>distinto?</em></h2><p>Busca por título, autor o esa idea que no te deja en paz.</p></div><Link className="button button-light" href="/explorar">Explorar la biblioteca <ArrowRight size={16} /></Link></section>
      <footer className="site-footer wrap"><Link className="brand" href="/"><span className="brand-mark">e.</span><span>entre líneas</span></Link><span>Un espacio hecho para leer a tu manera.</span><span>© 2026</span></footer>
    </main>
  )
}

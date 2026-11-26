import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Check, Code2, Lightbulb, MessageSquareText, WandSparkles } from 'lucide-react'

export const metadata: Metadata = { title: 'El proyecto', description: 'Proceso de creación de Entre líneas con Vibe Coding, decisiones y herramientas.' }
const steps = [
  { number: '01', title: 'Una idea con intención', text: 'Partimos de una necesidad sencilla: no hacen falta más listas infinitas, sino una forma amable de descubrir libros y guardar los que nos llaman.', icon: Lightbulb },
  { number: '02', title: 'Un copiloto, no un piloto automático', text: 'Usamos v0 para proponer estructura y componentes. La dirección visual, las rutas y los requisitos se definieron antes de escribir código.', icon: WandSparkles },
  { number: '03', title: 'Construir por capas', text: 'Primero navegación y portada; después búsqueda con API Route Handler; por último, estados, estantería, documentación y ajustes responsive.', icon: Code2 },
  { number: '04', title: 'Revisar también es construir', text: 'Se validan límites de entrada, errores de red, estados vacíos, etiquetas accesibles, contraste, metadatos y comportamiento en móvil.', icon: Check },
]
export default function ProcessPage() {
  return <main className="wrap page-content process-page"><div className="page-intro"><p className="eyebrow">DE LA IDEA A LA INTERFAZ</p><h1>Vibe Coding, con <em>intención.</em></h1><p>Un proyecto pequeño para probar que trabajar con IA no significa dejar de pensar. Aquí está el cómo, el porqué y las decisiones.</p></div>
    <section className="process-layout"><div className="process-timeline">{steps.map(({ number, title, text, icon: Icon }) => <article className="process-step" key={number}><span className="step-number">{number}</span><div className="step-icon"><Icon size={18} /></div><div><h2>{title}</h2><p>{text}</p></div></article>)}</div>
      <aside className="prompt-card"><div className="prompt-card-top"><MessageSquareText size={17} /><span>PROMPT DE PARTIDA</span></div><blockquote>«Crea una aplicación editorial en español para descubrir libros con calma. Debe tener portada, explorador conectado a Open Library, estantería personal y una página que explique el proceso. Prioriza claridad, accesibilidad y un diseño cálido.»</blockquote><div className="prompt-footer"><span>ITERACIÓN 01</span><span>v0 · NEXT.JS 16</span></div></aside></section>
    <section className="decisions"><p className="eyebrow">DECISIONES TÉCNICAS</p><div className="decision-grid"><article><span>01</span><h3>Next.js App Router</h3><p>Cuatro rutas, layouts compartidos y metadatos por página.</p></article><article><span>02</span><h3>Route Handler propio</h3><p>La interfaz consulta /api/books; el servidor consulta Open Library y normaliza resultados.</p></article><article><span>03</span><h3>Server + Client Components</h3><p>Las páginas informativas se renderizan en servidor; búsqueda y estantería gestionan interacción y estado.</p></article><article><span>04</span><h3>Validar antes de entregar</h3><p>Estados de carga y error, límites de consulta y preferencias de lectura en el navegador.</p></article></div></section>
    <div className="process-cta"><BookOpen size={20} /><p>La parte más bonita de un proyecto es lo que viene después.</p><Link href="/explorar">Ve a buscar tu historia <ArrowRight size={15} /></Link></div>
  </main>
}

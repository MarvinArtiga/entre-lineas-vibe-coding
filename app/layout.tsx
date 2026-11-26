import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteShell } from '@/components/site-shell'
import { ReadingListProvider } from '@/components/reading-list'

export const metadata: Metadata = {
  title: { default: 'Entre líneas — una biblioteca para volver a ti', template: '%s | Entre líneas' },
  description: 'Descubre libros, guarda tus próximas lecturas y haz espacio para leer a tu ritmo.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f3ed',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ReadingListProvider>
          <SiteShell>{children}</SiteShell>
        </ReadingListProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

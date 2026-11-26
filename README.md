# Entre líneas

Aplicación editorial en español para descubrir libros, guardar lecturas y explorar el proceso de desarrollo. Construida con Next.js 16 App Router, TypeScript y Tailwind CSS 4.

## Rutas

- `/` — portada y selección editorial.
- `/explorar` — búsqueda de libros en Open Library.
- `/guardados` — estantería personal guardada en el navegador.
- `/proceso` — decisiones y proceso de Vibe Coding.

## Requisitos

Node.js 20.9+ y pnpm (el proyecto fija pnpm 12).

## Instalación y uso

```bash
pnpm install
pnpm dev
```

Abre <http://localhost:3000>. Para comprobar TypeScript: `pnpm exec tsc --noEmit`; para compilar producción: `pnpm build`.

## API y configuración

La búsqueda usa el Route Handler `GET /api/books?q=...`, que consulta el catálogo público de Open Library. No requiere clave ni variables de entorno. La ruta valida el término, limita la consulta, devuelve datos normalizados y maneja fallos del servicio externo. Consulta `.env.example` para ver las variables opcionales de despliegue.

Los libros guardados se mantienen en memoria durante la sesión actual; al recargar la página o cerrar la pestaña se reinicia la estantería. No se envían a un servidor.

## Despliegue

Importa el repositorio en Vercel, conserva los valores por defecto de Next.js y despliega. No se necesitan variables de entorno. Añade aquí el enlace público de Vercel cuando se complete el despliegue: **pendiente de publicación**.

## Historial de desarrollo

El historial comienza con el commit de entrega y los cambios iterativos registrados en Git. Para generar un commit descriptivo por cambio, usa mensajes como `feat: añade búsqueda de libros` y `docs: registra proceso de Vibe Coding`. No se inventa un historial anterior al trabajo realizado.

## Proceso de Vibe Coding

Consulta [VIBE_CODING.md](./VIBE_CODING.md) para prompts, iteraciones, decisiones y retos.

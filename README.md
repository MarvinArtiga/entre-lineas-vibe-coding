# Entre líneas

Aplicación editorial en español para descubrir libros, guardar lecturas y explorar el proceso de desarrollo. Construida con Next.js 16 App Router, TypeScript y Tailwind CSS 4.

## Rutas

- `/` — portada y selección editorial.
- `/explorar` — búsqueda de libros en Open Library.
- `/guardados` — estantería personal disponible durante la sesión actual.
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

- **Aplicación en producción:** [Abrir Entre líneas](https://v0-project-weld-sigma-60.vercel.app)
- **Repositorio público:** [MarvinArtiga/entre-lineas-vibe-coding](https://github.com/MarvinArtiga/entre-lineas-vibe-coding)

El despliegue está publicado en Vercel. No se necesitan variables de entorno.

## Historial de desarrollo

El repositorio público conserva el commit inicial de la entrega y los commits descriptivos posteriores de documentación. La bitácora [VIBE_CODING.md](./VIBE_CODING.md) registra las iteraciones funcionales realizadas; no se presenta como historial Git previo a la entrega.

## Proceso de Vibe Coding

Consulta [VIBE_CODING.md](./VIBE_CODING.md) para prompts, iteraciones, decisiones y retos.

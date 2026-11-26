# Bitácora de Vibe Coding

## Objetivo

Crear una aplicación Next.js funcional de cuatro rutas para descubrir libros, practicar un flujo de generación iterativa con IA y dejar explícitas las decisiones y validaciones.

## Prompts principales utilizados

1. **Enunciado original:** desarrollar una aplicación Next.js 16+ con App Router y TypeScript; incluir cuatro rutas o más, API por Route Handler, Server y Client Components, hooks de React, responsive, estados de carga/error, despliegue público y repositorio GitHub público con `.env.example`, README y bitácora.
2. **Dirección de producto sintetizada a partir del enunciado:** aplicación editorial en español para lectores, con rutas de inicio, explorar, estantería y proyecto; identidad de papel, tinta, verde bosque y terracota.
3. **Implementación iterativa:** primero navegación y portada; después catálogo Open Library vía `/api/books`; luego guardados de sesión, feedback de red, estados vacíos y documentación.
4. **Criterios de validación aplicados:** accesibilidad, adaptación móvil/escritorio, validación en servidor, metadatos, manejo de fallos y comprobación real en navegador.

## Iteraciones realizadas

- **01 — Estructura:** inspección del scaffold existente y decisión de mantener Next.js 16, TypeScript, App Router y Tailwind 4, en vez de regenerar el proyecto.
- **02 — Experiencia:** creación de portada, navegación responsive y lenguaje visual editorial; las páginas comparten shell, mientras que sus contenidos mantienen responsabilidades separadas.
- **03 — Catálogo:** búsqueda de libros desde la interfaz cliente, pasando por un Route Handler que valida entrada y consulta Open Library en el servidor. La API normaliza título, autor, año y cubierta.
- **04 — Estantería:** guardar y quitar libros durante la sesión actual, contador en navegación y estados inicial, cargando, error y resultados vacíos. Se dejó explícito que no hay persistencia entre recargas ni sincronización entre dispositivos.
- **05 — Validación:** comprobación en navegador de la portada, búsqueda real de “The Hobbit”, resultados con cubiertas y guardado en la estantería; recorrido de la página de proceso. `pnpm build` completó correctamente e incluyó la comprobación TypeScript.
- **06 — Publicación:** despliegue de producción listo en Vercel y repositorio GitHub público. Los enlaces finales aparecen en el README.

## Decisiones técnicas

- **App Router:** rutas `app/`, metadatos individuales y layout raíz compartido.
- **Server Components por defecto:** portada y bitácora son páginas renderizadas en servidor. `SiteShell`, `Explorer`, `ReadingListProvider` y `BookCard` usan Client Components donde hay interacción, estado, eventos o APIs del navegador.
- **Route Handler:** la UI consulta `/api/books`; la llamada externa no está acoplada directamente al componente. El servidor valida longitud, limita resultados, normaliza respuesta y traduce fallos a estados HTTP claros.
- **Estado:** `useState` controla búsqueda y estantería; `useEffect` se usa en la ruta de estantería para evitar discrepancias de hidratación. Los marcadores viven en memoria durante la sesión y se reinician al recargar.
- **Sin secretos:** Open Library permite esta consulta pública sin API key; no hay credenciales requeridas.
- **Responsive y accesible:** navegación móvil, estructura semántica, nombres accesibles, foco visible, avisos de carga/errores y alternativas de texto para portadas.

## Desafíos y resolución

- **Evitar acoplar el cliente al proveedor:** se incorporó un endpoint interno `/api/books` para validación, normalización y manejo uniforme de errores.
- **Variación del catálogo:** algunos resultados no tienen cubierta o año; la interfaz presenta una cubierta tipográfica de respaldo y omite el año cuando no existe.
- **Estado vacío y error:** se añadieron mensajes diferenciados y opción de reintento, además de sugerencias de búsqueda.
- **Estado de guardados:** la consigna no exige cuentas ni base de datos. Para no fingir persistencia, los marcadores viven solo en memoria durante la sesión; se declara en el README que se reinician al recargar y no se sincronizan entre dispositivos.

## Validación realizada

- `pnpm build`: compilación de producción correcta; TypeScript y prerender de las rutas completados por Next.js.
- Navegador: portada revisada en escritorio y a 375 × 812; búsqueda real de “The Hobbit” devolvió resultados de Open Library, Guardar incrementó el contador y Quitar dejó la estantería vacía.
- Navegador: se recorrieron las cuatro rutas, incluida `/guardados` y `/proceso`; el despliegue de producción quedó `Ready` en Vercel.
- La vista guardada y las búsquedas requieren conexión a Open Library para consultar resultados; no se simula una base de datos ni se promete persistencia de marcadores.

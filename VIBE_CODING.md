# Bitácora de Vibe Coding

## Objetivo

Crear una aplicación Next.js funcional de cuatro rutas para descubrir libros, practicar un flujo de generación iterativa con IA y dejar explícitas las decisiones y validaciones.

## Prompts principales utilizados

1. **Brief del proyecto:** «Desarrollar una aplicación web completa con Next.js 16 o superior, App Router y TypeScript. Incluir al menos cuatro rutas, consumo de API mediante Route Handler, Server y Client Components, hooks de React, estados de carga y error, diseño responsive, `.env.example`, README y bitácora de Vibe Coding». La temática quedó a elección del desarrollador.
2. **Dirección de producto y visual:** aplicación editorial en español para lectores, con un tono cálido y tranquilo; rutas de inicio, explorar, estantería y proyecto; identidad de papel, tinta, verde bosque y terracota.
3. **Implementación por iteraciones:** primero navegación y portada; luego integración con Open Library a través de `/api/books`; después guardados, feedback de red, estados vacíos y documentación.
4. **Criterio de calidad:** respetar accesibilidad, diseño adaptable, validación en servidor y cliente, metadatos, manejo explícito de fallos y revisión en navegador antes de entrega.

## Iteraciones realizadas

- **01 — Estructura:** inspección del scaffold existente y decisión de mantener Next.js 16, TypeScript, App Router y Tailwind 4, en vez de regenerar el proyecto.
- **02 — Experiencia:** creación de portada, navegación responsive y lenguaje visual editorial; las páginas comparten shell, mientras que sus contenidos mantienen responsabilidades separadas.
- **03 — Catálogo:** búsqueda de libros desde la interfaz cliente, pasando por un Route Handler que valida entrada y consulta Open Library en el servidor. La API normaliza título, autor, año y cubierta.
- **04 — Estantería:** guardar y quitar libros, contador en navegación, persistencia local y estados inicial, cargando, error y resultados vacíos.
- **05 — Entrega:** documentación del proyecto, ejemplo de entorno y esta bitácora. Pendiente de completar el despliegue público y enlazar un repositorio GitHub del propietario.

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
- **Persistencia:** la consigna no exige cuentas ni base de datos. Para este prototipo, los marcadores se almacenan localmente; se declara en el README que no hay sincronización entre dispositivos.

## Validación pendiente de entrega

- Ejecutar `pnpm exec tsc --noEmit` y `pnpm build`.
- Recorrer las cuatro rutas en navegador y probar búsqueda, error/estado vacío y guardar/quitar un libro.
- Publicar en Vercel y en GitHub; añadir enlaces públicos en el README después de que se proporcionen los destinos/cuenta necesarios.

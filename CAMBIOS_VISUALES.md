# Registro de Cambios Visuales — STIRE-Soft

Este proyecto funciona exclusivamente como un laboratorio visual y entorno de prototipado interactivo para STIRE-Soft (Universidad de Córdoba). Ninguna modificación es definitiva ni debe llevarse al repositorio de producción sin previa validación. Únicamente se copian al proyecto real de producción aquellos cambios visuales cuyas filas en la tabla de registro estén explícitamente marcadas con **«sí»** en la columna «¿Listo para copiar?».

## NO COPIAR — adaptaciones de AI Studio y Modo Demo

Los siguientes archivos existen solo para que el laboratorio funcione en **MODO DEMO sin backend**. Nunca se copian al proyecto real:

- `frontend-nuxt/plugins/00.lab-demo.client.ts`: intercepta `$fetch` y responde desde la simulación en memoria (200-400 ms de retardo).
- `frontend-nuxt/lab/`: enrutador de simulación (`mock-api.ts`), lo nuevo desde el 29/09 (`mock-nuevas.ts`: proyectos,
  entregas, notas, refuerzos, sugerencias, código de clase, cambios de rol, foto, estadísticas) y datos de ejemplo (`datos/*.ts`).
- `frontend-nuxt/nuxt.config.ts`: `apiBase` vacío, `demoMode` siempre activo y etiquetas `og:`.
- `frontend-nuxt/pages/auth/login.vue`, **solo estas 4 partes** (el resto del archivo sí se puede copiar):
  1. `const demoModeEnabled = computed(() => true)`
  2. `esCorreoUnicor` también acepta `@example.com`
  3. los nombres de las tarjetas demo (Camila Díaz, Prof. Laura Martínez, Admin Simulación)
  4. `cuentasDemo` + `authStore.login(cuentasDemo[role], 'Test123')` en lugar de `switchRoleForDemo`
- `frontend-nuxt/package-lock.json`: versiones resueltas en AI Studio.
- `package.json` (raíz), `scripts/start-applet.js`, `metadata.json`, `.env.example`, `.gitignore`: arranque del laboratorio.

El backend (`src/`, Docker, despliegue) se eliminó del laboratorio el 2026-09-29: ya no se usa.

## Actualizado con el proyecto real (2 de octubre de 2026)

El laboratorio trae ahora el frontend del proyecto real hasta la versión `v1.1.0` (tag en el repositorio de producción):
editor de diagramas de flujo, proyectos de pseudocódigo, entregas y su revisión, notas, refuerzos, «Sugerencias»,
código de clase único con QR y botón «Escanear QR», foto de perfil opcional, multimedia en las lecciones y el Tutor que
sabe qué lección está leyendo el estudiante. Todo funciona en **modo demo** con datos de ejemplo que se guardan en el
navegador (crear un proyecto y recargar: sigue ahí; «Reiniciar demo» lo borra).

- Las animaciones de la fila 1 se **volvieron a aplicar** sobre las páginas nuevas del estudiante (inicio, lección y
  ejercicio cambiaron de estructura en producción): mismas clases (`anim-subir`, `boton-tocar`, `opcion-tocar`,
  `tarjeta-hover`, `anim-celebracion`, `anim-tranquilo`), en los elementos equivalentes. Siguen «pendiente de revisión».
- En el demo **no se suben fotos de perfil** (no hay servidor de imágenes): al intentarlo, lo dice.
- Antes de copiar algo al proyecto real, compararlo con esa versión: el laboratorio ya no está 90 archivos atrás.

## Registro de Cambios Visuales

| # | Fecha | Qué cambió (en palabras simples) | Archivos tocados (ruta completa) | ¿Listo para copiar? |
|---|---|---|---|---|
| 1 | 2026-09-30 | Animaciones y microinteracciones en la ruta del estudiante (entradas escalonadas, escala 0.98 al presionar, confirmación de respuestas, ventana de resultado con celebración o entrada tranquila, y barra de dominio animada con GPU scaleX). | frontend-nuxt/assets/css/main.css, frontend-nuxt/pages/estudiante/index.vue, frontend-nuxt/pages/estudiante/unidad/[id].vue, frontend-nuxt/pages/estudiante/evaluacion/[activityId].vue, frontend-nuxt/components/exercise/McqExercise.vue, frontend-nuxt/components/exercise/OrderingExercise.vue, frontend-nuxt/components/exercise/MatchingExercise.vue, frontend-nuxt/components/exercise/FillCodeExercise.vue, frontend-nuxt/components/exercise/DragDropExercise.vue, frontend-nuxt/components/exercise/HtmlCssExercise.vue | pendiente de revisión |

## Sesión: ruta del estudiante

### Archivos para COPIAR (cambios visuales del estudiante)

- `frontend-nuxt/assets/css/main.css`: Clases y keyframes reutilizables para entradas suaves (subir 8px), escala al pulsar (0.98), celebración de éxito (máx. 0.75 s) y entrada tranquila de intentos calificados.
- `frontend-nuxt/pages/estudiante/index.vue`: Entrada escalonada de tarjetas (50 ms), respuesta táctil en botones y llenado animado de la barra de dominio desde 0 % usando `transform: scaleX`.
- `frontend-nuxt/pages/estudiante/unidad/[id].vue`: Entradas escalonadas, respuesta visual inmediata en las 3 opciones de confianza y animación suave en la lista de actividades.
- `frontend-nuxt/pages/estudiante/evaluacion/[activityId].vue`: Microinteracciones en pestañas y botón de entrega; ventana modal de resultado con celebración si aprueba y entrada tranquila sin castigo si no aprueba.
- `frontend-nuxt/components/exercise/McqExercise.vue`: Transición de confirmación visual (borde y anillo sutil) al seleccionar una opción de radio.
- `frontend-nuxt/components/exercise/OrderingExercise.vue`: Reordenamiento animado con `<TransitionGroup>` (`list-reorder`) al presionar ⬆ y ⬇, con escala táctil en botones.
- `frontend-nuxt/components/exercise/MatchingExercise.vue`: Transición de confirmación visual en la fila e indicador cuando se completa cada emparejamiento.
- `frontend-nuxt/components/exercise/FillCodeExercise.vue`: Microinteracción de foco y escalado sutil en los campos editables dentro de la plantilla de código.
- `frontend-nuxt/components/exercise/DragDropExercise.vue`: Transiciones fluidas con `<TransitionGroup>` al mover chips entre la bandeja y las categorías de destino.
- `frontend-nuxt/components/exercise/HtmlCssExercise.vue`: Microinteracciones de pulsación y foco en las pestañas HTML/CSS y en los botones «Probar» y «Entregar solución».

### Archivos NO COPIAR de esta sesión

- Ninguno. Todos los archivos modificados en esta sesión pertenecen a la capa visual estándar (`pages/`, `components/`, `assets/`) y pueden ser copiados al proyecto real previa revisión.

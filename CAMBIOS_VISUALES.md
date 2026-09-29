# Registro de Cambios Visuales — STIRE-Soft

Este proyecto funciona exclusivamente como un laboratorio visual y entorno de prototipado interactivo para STIRE-Soft (Universidad de Córdoba). Ninguna modificación es definitiva ni debe llevarse al repositorio de producción sin previa validación. Únicamente se copian al proyecto real de producción aquellos cambios visuales cuyas filas en la tabla de registro estén explícitamente marcadas con **«sí»** en la columna «¿Listo para copiar?».

## NO COPIAR — adaptaciones de AI Studio y Modo Demo

Los siguientes archivos existen solo para que el laboratorio funcione en **MODO DEMO sin backend**. Nunca se copian al proyecto real:

- `frontend-nuxt/plugins/00.lab-demo.client.ts`: intercepta `$fetch` y responde desde la simulación en memoria (200-400 ms de retardo).
- `frontend-nuxt/lab/`: enrutador de simulación (`mock-api.ts`) y datos de ejemplo (`datos/*.ts`).
- `frontend-nuxt/nuxt.config.ts`: `apiBase` vacío, `demoMode` siempre activo y etiquetas `og:`.
- `frontend-nuxt/pages/auth/login.vue`, **solo estas 4 partes** (el resto del archivo sí se puede copiar):
  1. `const demoModeEnabled = computed(() => true)`
  2. `esCorreoUnicor` también acepta `@example.com`
  3. los nombres de las tarjetas demo (Camila Díaz, Prof. Laura Martínez, Admin Simulación)
  4. `cuentasDemo` + `authStore.login(cuentasDemo[role], 'Test123')` en lugar de `switchRoleForDemo`
- `frontend-nuxt/package-lock.json`: versiones resueltas en AI Studio.
- `package.json` (raíz), `scripts/start-applet.js`, `metadata.json`, `.env.example`, `.gitignore`: arranque del laboratorio.

El backend (`src/`, Docker, despliegue) se eliminó del laboratorio el 2026-09-29: ya no se usa.

## Registro de Cambios Visuales

| # | Fecha | Qué cambió (en palabras simples) | Archivos tocados (ruta completa) | ¿Listo para copiar? |
|---|---|---|---|---|

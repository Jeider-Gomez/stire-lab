# Registro de Cambios Visuales — STIRE-Soft

Este proyecto funciona exclusivamente como un laboratorio visual y entorno de prototipado interactivo para STIRE-Soft (Universidad de Córdoba). Ninguna modificación es definitiva ni debe llevarse al repositorio de producción sin previa validación. Únicamente se copian al proyecto real de producción aquellos cambios visuales cuyas filas en la tabla de registro estén explícitamente marcadas con **«sí»** en la columna «¿Listo para copiar?».

## NO COPIAR — adaptaciones de AI Studio y Modo Demo

Los siguientes archivos y directorios corresponden a adaptaciones técnicas exclusivas para el arranque en el entorno aislado de AI Studio y el funcionamiento en **MODO DEMO sin backend**:

- `frontend-nuxt/plugins/00.lab-demo.client.ts`: Plugin cliente que intercepta `$fetch` global para responder las peticiones del frontend desde la capa de simulación en memoria con retardo realista (200-400 ms).
- `frontend-nuxt/lab/`: Directorio que contiene el router de simulación (`mock-api.ts`) y los datos en español (`datos/usuarios.ts`, `datos/cursos.ts`, `datos/estudiante.ts`, `datos/tutor.ts`, `datos/mensajes.ts`, `datos/sistema.ts`).
- `scripts/start-applet.js`: Script de arranque adaptado para iniciar únicamente el servidor frontend Nuxt en modo demo en `0.0.0.0:3000` (el backend NestJS ya no se ejecuta).
- `src/` (entidades y controladores NestJS): Adaptaciones previas de tipos TypeORM y rutas para compatibilidad inicial con SQLite.
- `src/database-sqlite-patch.ts`: Parche de normalización de tipos de metadatos en TypeORM para SQLite.
- `src/app.module.ts`: Configuración dinámica de TypeORM para soportar SQLite en local.
- `src/data-source.ts`: Configuración del DataSource para conexión SQLite.
- `src/main.ts`: Configuración de host `0.0.0.0`, puerto 3000 y entrega de archivos estáticos.
- `src/common/http-security.ts`: Desactivación de frameguard y CSP en Helmet para permitir la visualización dentro del iframe de AI Studio.
- `src/common/cors-options.ts`: Ajuste permisivo de orígenes CORS para el entorno de desarrollo y pruebas.
- `src/common/filters/http-exception.filter.ts`: Fallback SPA para redirección de rutas cliente Nuxt en errores 404 no-API.
- `src/app.controller.ts`: Endpoint raíz para servir el cliente Nuxt SPA.
- `src/tutor/tutor.service.ts`: Respaldo opcional con clave de entorno `GEMINI_API_KEY` para el tutor inteligente.
- `frontend-nuxt/nuxt.config.ts`: Configuración de Nuxt (modo SPA `ssr: false`, `apiBase` relativo y `demoMode: true`).
- `package.json`: Scripts de arranque (`dev`, `build`) adaptados para AI Studio.
- `.env` / `.env.example`: Variables de configuración y credenciales del entorno local de pruebas.
- `metadata.json`: Metadatos de la aplicación requeridos por la plataforma AI Studio.

## Registro de Cambios Visuales

| # | Fecha | Qué cambió (en palabras simples) | Archivos tocados (ruta completa) | ¿Listo para copiar? |
|---|---|---|---|---|

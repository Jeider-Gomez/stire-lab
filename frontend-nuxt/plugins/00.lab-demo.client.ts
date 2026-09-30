import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { watch } from 'vue'
import { handleMockApi } from '../lab/mock-api'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const apiBase = config.public?.apiBase || 'http://localhost:3001'

  const originalFetch = globalThis.$fetch

  const mockFetch: any = async (request: any, options: any = {}) => {
    let url = typeof request === 'string' ? request : request?.url || ''

    // Si es una petición externa que no es de la API de STIRE, delegar
    if (
      url.startsWith('http') &&
      !url.includes('localhost') &&
      !url.includes('127.0.0.1') &&
      (!apiBase || !url.startsWith(apiBase))
    ) {
      if (typeof originalFetch === 'function') {
        return originalFetch(request, options)
      }
    }

    // Quitar apiBase o prefijos de localhost
    if (apiBase && url.startsWith(apiBase)) {
      url = url.slice(apiBase.length)
    } else if (url.startsWith('http://localhost:3001')) {
      url = url.slice('http://localhost:3001'.length)
    } else if (url.startsWith('http://localhost:3000')) {
      url = url.slice('http://localhost:3000'.length)
    }

    if (!url.startsWith('/')) {
      url = '/' + url
    }

    const method = (options.method || 'GET').toUpperCase()

    // Retardo realista de 200 a 350 ms para visibilidad de estados de carga
    const delay = 200 + Math.floor(Math.random() * 150)
    await new Promise(resolve => setTimeout(resolve, delay))

    return handleMockApi(method, url, options)
  }

  mockFetch.raw = async (request: any, options: any) => {
    const data = await mockFetch(request, options)
    return { _data: data, data, status: 200, ok: true, headers: new Headers() }
  }
  mockFetch.create = () => mockFetch

  globalThis.$fetch = mockFetch

  // La sesión también va en localStorage: dentro del iframe de AI Studio el navegador puede bloquear la cookie
  // auth_token y cada recarga mandaría al login.
  const CLAVE_SESION = 'stire-lab-sesion-v1'
  const auth = useAuthStore()
  try {
    const guardado = localStorage.getItem(CLAVE_SESION)
    if (!auth.token && guardado) auth.token = guardado
  } catch { /* sin almacenamiento */ }
  watch(() => auth.token, (t) => {
    try {
      if (t) localStorage.setItem(CLAVE_SESION, t)
      else localStorage.removeItem(CLAVE_SESION) // al cerrar sesión lo creado se conserva: sirve para cambiar de rol
    } catch { /* sin almacenamiento */ }
  })
})

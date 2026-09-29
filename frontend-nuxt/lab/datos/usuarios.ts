import type { User } from '~/types'

export interface BackendUser extends User {
  isActive: boolean
  createdAt: string
  roleRequested?: string | null
  roleRequestReason?: string | null
}

export const USUARIOS_DEMO: Record<string, BackendUser> = {
  estudiante: {
    id: 101,
    email: 'camila.diaz@example.com',
    fullName: 'Camila Díaz',
    role: 'estudiante',
    isActive: true,
    createdAt: '2026-02-15T08:30:00.000Z',
  },
  docente: {
    id: 102,
    email: 'laura.martinez.docente@example.com',
    fullName: 'Prof. Laura Martínez',
    role: 'docente',
    isActive: true,
    createdAt: '2026-01-10T10:00:00.000Z',
  },
  administrador: {
    id: 103,
    email: 'admin.simulacion@example.com',
    fullName: 'Admin Simulación',
    role: 'administrador',
    isActive: true,
    createdAt: '2025-11-01T09:00:00.000Z',
  },
}

export const LISTA_USUARIOS_INICIAL: BackendUser[] = [
  USUARIOS_DEMO.administrador,
  USUARIOS_DEMO.docente,
  USUARIOS_DEMO.estudiante,
  {
    id: 104,
    email: 'juan.perez@example.com',
    fullName: 'Juan Pérez Gómez',
    role: 'estudiante',
    isActive: true,
    createdAt: '2026-02-18T14:20:00.000Z',
  },
  {
    id: 105,
    email: 'carlos.mendoza@example.com',
    fullName: 'Carlos Mendoza',
    role: 'estudiante',
    isActive: false,
    createdAt: '2026-02-20T11:00:00.000Z',
  },
  {
    id: 106,
    email: 'andres.docente@example.com',
    fullName: 'Prof. Andrés Velásquez',
    role: 'docente',
    isActive: true,
    createdAt: '2026-01-25T16:00:00.000Z',
  },
]

export const LISTA_SOLICITUDES_ROL_INICIAL = [
  {
    id: 1,
    userId: 104,
    userFullName: 'Juan Pérez Gómez',
    userEmail: 'juan.perez@example.com',
    currentRole: 'estudiante',
    requestedRole: 'docente',
    reason: 'Docente cátedra de Algoritmos I para el periodo 2026-1.',
    status: 'pending',
    createdAt: '2026-03-01T10:15:00.000Z',
  },
]

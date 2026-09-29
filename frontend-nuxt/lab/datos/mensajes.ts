export interface MockMessage {
  id: number
  senderId: number
  senderName: string
  receiverId: number
  receiverName: string
  subject: string
  body: string
  isRead: boolean
  createdAt: string
}

export interface MockNotification {
  id: number
  userId: number
  title: string
  message: string
  isRead: boolean
  type: string
  link?: string
  createdAt: string
}

export const MENSAJES_INICIALES: MockMessage[] = [
  {
    id: 1,
    senderId: 102,
    senderName: 'Prof. Laura Martínez',
    receiverId: 101,
    receiverName: 'Camila Díaz',
    subject: 'Bienvenida al curso de Fundamentos de Algoritmia',
    body: 'Hola Camila, bienvenida a la plataforma STIRE-Soft. Te invito a explorar el Módulo 1 y revisar las primeras actividades.',
    isRead: false,
    createdAt: '2026-03-28T09:00:00.000Z',
  },
  {
    id: 2,
    senderId: 101,
    senderName: 'Camila Díaz',
    receiverId: 102,
    receiverName: 'Prof. Laura Martínez',
    subject: 'Duda con el desafío de años bisiestos',
    body: 'Buenas tardes profesora, ya resolví los casos de prueba públicos y me gustaría saber si la fecha límite es mañana.',
    isRead: true,
    createdAt: '2026-03-28T14:30:00.000Z',
  },
]

export const NOTIFICACIONES_INICIALES: MockNotification[] = [
  {
    id: 1,
    userId: 101,
    title: 'Repaso Espaciado Pendiente',
    message: 'Tienes un repaso vencido en la unidad "Estructuras Condicionales if / else".',
    isRead: false,
    type: 'review_due',
    link: '/estudiante/repasos',
    createdAt: '2026-03-29T07:00:00.000Z',
  },
  {
    id: 2,
    userId: 101,
    title: 'Nuevo contenido publicado',
    message: 'Se ha habilitado la unidad "Ciclos for y while con Acumuladores".',
    isRead: true,
    type: 'content_published',
    link: '/estudiante/unidad/3',
    createdAt: '2026-03-27T10:00:00.000Z',
  },
]

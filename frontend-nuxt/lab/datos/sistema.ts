import type { SystemStatus, SystemLogs } from '~/types'

export const SISTEMA_STATUS_INICIAL: SystemStatus = {
  generatedAt: new Date().toISOString(),
  api: {
    version: '2.0.0-demo',
    nodeVersion: 'v22.23.2',
    environment: 'laboratory-demo',
    uptimeSeconds: 14520,
    memory: { rssMb: 142.5, heapUsedMb: 68.2 },
    requests: {
      sampled: 1840,
      windowSeconds: 3600,
      p50Ms: 14,
      p95Ms: 45,
      serverErrorRatePct: 0.0,
    },
  },
  database: { ok: true, latencyMs: 2 },
  sandbox: {
    adapter: 'python3-isolated-sandbox',
    timeoutMs: 2000,
    maxHeapMb: 128,
    maxOutputKb: 64,
    executionsLast24h: 342,
    avgExecutionMs: 48,
  },
  judgeQueue: { driver: 'inline', submissionsInProgress: 0 },
  tutor: {
    provider: 'Google Gemini',
    model: 'gemini-flash-latest',
    studentsWithKey: 24,
    studentMessagesLast24h: 87,
  },
  users: {
    total: 31,
    byRole: {
      estudiante: 25,
      docente: 5,
      administrador: 1,
    },
  },
  submissionsLast24h: 96,
}

export const SISTEMA_LOGS_INICIAL: SystemLogs = {
  capacity: 100,
  note: 'Logs del entorno de simulación STIRE-Soft',
  entries: [
    {
      timestamp: '2026-03-29T12:00:15.000Z',
      level: 'log',
      context: 'Bootstrap',
      message: 'STIRE-Soft Modo Laboratorio Visual iniciado correctamente.',
    },
    {
      timestamp: '2026-03-29T12:05:30.000Z',
      level: 'log',
      context: 'AuthService',
      message: 'Inicio de sesión exitoso: camila.diaz@example.com [estudiante]',
    },
    {
      timestamp: '2026-03-29T12:10:45.000Z',
      level: 'log',
      context: 'EvaluationEngine',
      message: 'Ejecución de código completada: 2/2 casos de prueba pasados (45ms).',
    },
    {
      timestamp: '2026-03-29T12:15:10.000Z',
      level: 'debug',
      context: 'SpacedRepetition',
      message: 'Algoritmo SM-2 recalculado para unidad #2 con factor de facilidad 2.1.',
    },
  ],
}

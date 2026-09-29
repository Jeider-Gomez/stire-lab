import type { StudentAnalytics, SpacedReviewItem, SubmissionResult } from '~/types'

export const ESTUDIANTE_ANALYTICS: StudentAnalytics = {
  avgMastery: 78.5,
  avgSuccessRate: 85.0,
  streakDays: 6,
  completedExercises: 12,
  reviewStats: {
    pending: 2,
    total: 5,
    critical: 1,
  },
  masteryByUnit: [
    {
      unitId: 1,
      unitTitle: 'Variables y Tipos Primitivos en Python',
      mastery: 92,
      status: 'dominado',
    },
    {
      unitId: 2,
      unitTitle: 'Estructuras Condicionales if / else',
      mastery: 65,
      status: 'en-progreso',
    },
    {
      unitId: 3,
      unitTitle: 'Ciclos for y while con Acumuladores',
      mastery: 20,
      status: 'por-iniciar',
    },
    {
      unitId: 4,
      unitTitle: 'Definición de Funciones y Retorno de Valores',
      mastery: 55,
      status: 'en-progreso',
    },
  ],
  recentSubmissions: [
    {
      id: 'sub-demo-01',
      activityTitle: 'Desafío de Código: Cálculo de Área y Perímetro',
      score: 100,
      maxScore: 100,
      passed: true,
      status: 'graded',
      createdAt: '2026-03-28T16:45:00.000Z',
    },
    {
      id: 'sub-demo-02',
      activityTitle: 'Quiz: Identificación de Tipos en Python',
      score: 100,
      maxScore: 100,
      passed: true,
      status: 'graded',
      createdAt: '2026-03-27T11:20:00.000Z',
    },
    {
      id: 'sub-demo-03',
      activityTitle: 'Completar Código: Clasificador de Calificaciones',
      score: 80,
      maxScore: 100,
      passed: true,
      status: 'graded',
      createdAt: '2026-03-26T09:10:00.000Z',
    },
  ],
}

export const REPASOS_ESPACIADOS_INICIALES: SpacedReviewItem[] = [
  {
    id: 1,
    learningUnitId: 2,
    conceptTitle: 'Estructuras Condicionales if / else',
    moduleTitle: 'Módulo 1: Variables, Tipos y Expresiones',
    urgency: 'critico',
    urgencyLabel: 'Vencido hace 2 días',
    easeFactor: 2.1,
    intervalDays: 1,
    nextReviewDate: '2026-03-27T08:00:00.000Z',
    estimatedTimeMin: 10,
  },
  {
    id: 2,
    learningUnitId: 1,
    conceptTitle: 'Variables y Tipos Primitivos en Python',
    moduleTitle: 'Módulo 1: Variables, Tipos y Expresiones',
    urgency: 'manana',
    urgencyLabel: 'Programado para mañana',
    easeFactor: 2.5,
    intervalDays: 4,
    nextReviewDate: '2026-03-30T08:00:00.000Z',
    estimatedTimeMin: 8,
  },
]

export const CONFIANZAS_UNIDAD_INICIALES: Record<number, number> = {
  1: 5,
  2: 3,
  3: 2,
  4: 3,
}

export const RECOMENDACIONES_ACTIVIDAD: Record<number, any> = {
  1: {
    activityId: 103,
    title: 'Desafío de Código: Cálculo de Área y Perímetro',
    reason: 'Excelente confianza inicial. Se recomienda poner a prueba la sintaxis con el desafío de código.',
    level: 'Básico',
  },
  2: {
    activityId: 203,
    title: 'Desafío de Código: Detector de Años Bisiestos',
    reason: 'Consolidación de condicionales compuestas y operadores booleanos.',
    level: 'Intermedio',
  },
  3: {
    activityId: 301,
    title: 'Quiz: Diferencias entre for y while',
    reason: 'Conceptos fundamentales previos a la implementación de algoritmos iterativos.',
    level: 'Intermedio',
  },
  4: {
    activityId: 401,
    title: 'Quiz: Parámetros y Valores de Retorno',
    reason: 'Comprobación de flujo de argumentos y retorno de expresiones.',
    level: 'Intermedio',
  },
}

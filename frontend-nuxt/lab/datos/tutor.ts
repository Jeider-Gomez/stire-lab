import type { TutorGuidance, TutorMessage, TutorApiKey, TutorSettings } from '~/types'

export const TUTOR_API_KEY_INICIAL: TutorApiKey = {
  success: true,
  hasKey: true,
  last4: '8F92',
}

export const TUTOR_GUIDANCE_INICIAL: TutorGuidance = {
  success: true,
  guidanceLevel: 2,
  tutorEnabled: true,
  maxGuideLevel: 3,
  dueReviews: {
    overdueCount: 1,
    scheduledCount: 1,
    oldest: {
      learningUnitId: 2,
      learningUnitTitle: 'Estructuras Condicionales if / else',
      daysOverdue: 2,
    },
  },
  contentLink: {
    learningUnitId: 2,
    title: 'Estructuras Condicionales if / else',
  },
}

export const TUTOR_MENSAJES_INICIALES: TutorMessage[] = [
  {
    id: 'msg-tutor-01',
    sender: 'tutor',
    text: '¡Hola Camila! Soy tu tutor inteligente de programación. Te ayudaré a analizar la lógica de tus ejercicios paso a paso mediante preguntas orientadoras. ¿Cómo puedo ayudarte hoy?',
    guidanceLevel: null,
    timestamp: '2026-03-29T10:00:00.000Z',
    suggestedActivity: {
      activityId: 203,
      activityTitle: 'Desafío de Código: Detector de Años Bisiestos',
      learningUnitId: 2,
      learningUnitTitle: 'Estructuras Condicionales if / else',
      reason: 'repaso_vencido',
      reasonMessage: 'Tienes un repaso pendiente en esta unidad. ¿Deseas practicarlo ahora?',
    },
  },
]

export const TUTOR_SETTINGS_DEFAULT: TutorSettings = {
  scopeType: 'class',
  scopeId: 1,
  own: {
    enabled: true,
    maxGuideLevel: 3,
    style: 'equilibrado',
  },
  effective: {
    enabled: true,
    maxGuideLevel: 3,
    style: 'equilibrado',
  },
}

export function obtenerRespuestaTutor(mensaje: string): string {
  const m = mensaje.toLowerCase()

  if (m.includes('bucle') || m.includes('ciclo') || m.includes('while') || m.includes('for')) {
    return 'En Python, el bucle `for` es ideal para recorrer secuencias o rangos predefinidos (usando `range(inicio, fin)`). En cambio, `while` se ejecuta mientras una condición booleana sea verdadera. ¿Cuál de las dos estructuras crees que se adapta mejor a tu condición de parada?'
  }

  if (m.includes('variable') || m.includes('tipo') || m.includes('int') || m.includes('str') || m.includes('float')) {
    return 'Python asigna tipos de forma dinámica. Puedes verificar el tipo con `type(variable)` y hacer conversiones explícitas como `int("10")` o `float("3.14")`. ¿Qué tipo de dato esperas recibir en la entrada estándar?'
  }

  if (m.includes('funcion') || m.includes('def') || m.includes('retorno') || m.includes('return')) {
    return 'Una función se define con la palabra reservada `def nombre(parametros):`. Para que devuelva un valor útil a quien la invoca, debes usar `return resultado`. Si omites el return, devolverá `None` por defecto. ¿Qué parámetro necesita recibir tu función?'
  }

  if (m.includes('condicion') || m.includes('if') || m.includes('else') || m.includes('elif') || m.includes('bisiesto')) {
    return 'Para evaluar múltiples condiciones, recuerda que `and` requiere que ambas partes sean verdaderas, mientras que `or` requiere al menos una. Además, el operador módulo `%` te indica si un número es divisible entre otro (cuando `n % divisor == 0`). ¿Probaste agrupar las condiciones con paréntesis?'
  }

  return 'Interesante pregunta. Observa las entradas que fallan y compáralas con lo que tu código imprime actualmente. ¿Qué paso de tu algoritmo crees que produce una salida diferente a la esperada?'
}

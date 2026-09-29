import { USUARIOS_DEMO, LISTA_USUARIOS_INICIAL, LISTA_SOLICITUDES_ROL_INICIAL, type BackendUser } from './datos/usuarios'
import { CLASES_INICIALES, SECCIONES_INICIALES, ACTIVIDADES_DETALLE, BANCO_EJERCICIOS_INICIAL } from './datos/cursos'
import { ESTUDIANTE_ANALYTICS, REPASOS_ESPACIADOS_INICIALES, CONFIANZAS_UNIDAD_INICIALES, RECOMENDACIONES_ACTIVIDAD } from './datos/estudiante'
import { TUTOR_API_KEY_INICIAL, TUTOR_GUIDANCE_INICIAL, TUTOR_MENSAJES_INICIALES, TUTOR_SETTINGS_DEFAULT, obtenerRespuestaTutor } from './datos/tutor'
import { MENSAJES_INICIALES, NOTIFICACIONES_INICIALES } from './datos/mensajes'
import { SISTEMA_STATUS_INICIAL, SISTEMA_LOGS_INICIAL } from './datos/sistema'

// Estado mutable en memoria durante la sesión del navegador
const state = {
  currentUser: { ...USUARIOS_DEMO.estudiante },
  usuarios: JSON.parse(JSON.stringify(LISTA_USUARIOS_INICIAL)) as BackendUser[],
  solicitudesRol: JSON.parse(JSON.stringify(LISTA_SOLICITUDES_ROL_INICIAL)),
  clases: JSON.parse(JSON.stringify(CLASES_INICIALES)),
  secciones: JSON.parse(JSON.stringify(SECCIONES_INICIALES)),
  actividades: JSON.parse(JSON.stringify(ACTIVIDADES_DETALLE)),
  banco: JSON.parse(JSON.stringify(BANCO_EJERCICIOS_INICIAL)),
  analytics: JSON.parse(JSON.stringify(ESTUDIANTE_ANALYTICS)),
  repasos: JSON.parse(JSON.stringify(REPASOS_ESPACIADOS_INICIALES)),
  confianzas: { ...CONFIANZAS_UNIDAD_INICIALES },
  recomendaciones: { ...RECOMENDACIONES_ACTIVIDAD },
  tutorApiKey: { ...TUTOR_API_KEY_INICIAL },
  tutorGuidance: { ...TUTOR_GUIDANCE_INICIAL },
  tutorMensajes: JSON.parse(JSON.stringify(TUTOR_MENSAJES_INICIALES)),
  tutorSettings: { ...TUTOR_SETTINGS_DEFAULT },
  mensajes: JSON.parse(JSON.stringify(MENSAJES_INICIALES)),
  notificaciones: JSON.parse(JSON.stringify(NOTIFICACIONES_INICIALES)),
  sistemaStatus: { ...SISTEMA_STATUS_INICIAL },
  sistemaLogs: JSON.parse(JSON.stringify(SISTEMA_LOGS_INICIAL)),
  submissions: {} as Record<string, any>,
}

export async function handleMockApi(method: string, fullPath: string, options: any = {}): Promise<any> {
  const [pathname, queryString] = fullPath.split('?')
  const query = new URLSearchParams(queryString || '')
  const body = options?.body || {}

  // ==========================================
  // AUTENTICACIÓN
  // ==========================================
  if (pathname === '/auth/login' && method === 'POST') {
    const email = (body.email || '').trim().toLowerCase()
    let matchedUser = state.usuarios.find(u => u.email.toLowerCase() === email)

    if (!matchedUser) {
      if (email.includes('estudiante') || email.includes('camila') || email.includes('pedro')) {
        matchedUser = USUARIOS_DEMO.estudiante
      } else if (email.includes('docente') || email.includes('laura') || email.includes('toscano')) {
        matchedUser = USUARIOS_DEMO.docente
      } else if (email.includes('admin')) {
        matchedUser = USUARIOS_DEMO.administrador
      } else {
        matchedUser = {
          id: 999,
          email: body.email,
          fullName: 'Usuario Demo',
          role: 'estudiante',
          isActive: true,
          createdAt: new Date().toISOString(),
        }
      }
    }

    state.currentUser = { ...matchedUser }
    const token = `mock-token-${matchedUser.id}-${Date.now()}`
    return {
      user: state.currentUser,
      token,
      access_token: token,
    }
  }

  if (pathname === '/auth/register' && method === 'POST') {
    const newUser: BackendUser = {
      id: state.usuarios.length + 101,
      email: body.email,
      fullName: body.fullName || 'Nuevo Usuario',
      role: body.requestedRole === 'docente' ? 'estudiante' : 'estudiante',
      isActive: true,
      createdAt: new Date().toISOString(),
    }
    state.usuarios.push(newUser)
    state.currentUser = { ...newUser }
    const token = `mock-token-${newUser.id}-${Date.now()}`
    return {
      user: newUser,
      token,
      access_token: token,
    }
  }

  if (pathname === '/auth/profile' && method === 'GET') {
    return { user: state.currentUser }
  }

  if (pathname === '/auth/forgot-password' && method === 'POST') {
    return { message: 'Se ha enviado un enlace de recuperación a tu correo electrónico.' }
  }

  if (pathname === '/auth/reset-password' && method === 'POST') {
    return { message: 'Tu contraseña ha sido actualizada exitosamente.' }
  }

  // ==========================================
  // PERFIL DE USUARIO
  // ==========================================
  if (pathname === '/users/me') {
    if (method === 'GET') return state.currentUser
    if (method === 'PATCH' || method === 'PUT') {
      if (body.fullName) state.currentUser.fullName = body.fullName
      if (body.email) state.currentUser.email = body.email
      return state.currentUser
    }
  }

  if (pathname === '/users/me/password' && method === 'POST') {
    return { message: 'Contraseña modificada con éxito.' }
  }

  // ==========================================
  // CLASES Y MATRÍCULAS (ESTUDIANTE Y DOCENTE)
  // ==========================================
  if (pathname === '/enrollment/my' && method === 'GET') {
    return state.clases.map(cls => ({
      id: cls.id,
      classId: cls.id,
      className: cls.name,
      classCode: cls.code,
      status: 'approved',
      progressPercentage: cls.id === 1 ? 76 : 50,
      class: {
        id: cls.id,
        code: cls.code,
        name: cls.name,
        description: cls.description,
        teacher: { fullName: cls.teacherName },
      },
    }))
  }

  if (pathname === '/enrollment/join' && method === 'POST') {
    const code = (body.code || '').trim().toUpperCase()
    const found = state.clases.find(c => c.code.toUpperCase() === code) || state.clases[0]
    return {
      id: found.id,
      classId: found.id,
      status: 'approved',
      message: `Te has inscrito exitosamente en la clase ${found.name}.`,
    }
  }

  if (pathname === '/class' || pathname === '/class/my-classes') {
    if (method === 'GET') {
      return state.clases.map(c => ({
        ...c,
        studentCount: c.studentCount || 24,
        teacher: { fullName: c.teacherName, id: c.teacherId },
      }))
    }
    if (method === 'POST') {
      const newClass = {
        id: state.clases.length + 1,
        code: body.code || `CLASS-${Date.now().toString().slice(-4)}`,
        name: body.name || 'Nueva Clase de Algoritmos',
        description: body.description || '',
        teacherId: state.currentUser.id,
        teacherName: state.currentUser.fullName,
        isActive: true,
        requiresApproval: false,
        studentCount: 0,
        enrolled: true,
      }
      state.clases.push(newClass)
      return newClass
    }
  }

  const classDetailMatch = pathname.match(/^\/class\/(\d+)$/)
  if (classDetailMatch && method === 'GET') {
    const cid = Number(classDetailMatch[1])
    const cls = state.clases.find(c => c.id === cid) || state.clases[0]
    return {
      ...cls,
      teacher: { fullName: cls.teacherName, id: cls.teacherId },
    }
  }

  const enrollmentClassMatch = pathname.match(/^\/enrollment\/class\/(\d+)(\/pending)?$/)
  if (enrollmentClassMatch && method === 'GET') {
    const isPending = !!enrollmentClassMatch[2]
    if (isPending) {
      return [
        {
          id: 501,
          studentId: 105,
          studentName: 'Carlos Mendoza',
          studentEmail: 'carlos.mendoza@example.com',
          status: 'pending',
          requestedAt: '2026-03-28T10:00:00.000Z',
        },
      ]
    }
    return [
      {
        id: 1,
        studentId: 101,
        studentName: 'Camila Díaz',
        studentEmail: 'camila.diaz@example.com',
        status: 'approved',
        progress: 76,
        enrolledAt: '2026-02-15T08:30:00.000Z',
      },
      {
        id: 2,
        studentId: 104,
        studentName: 'Juan Pérez Gómez',
        studentEmail: 'juan.perez@example.com',
        status: 'approved',
        progress: 45,
        enrolledAt: '2026-02-18T14:20:00.000Z',
      },
    ]
  }

  if (pathname.match(/^\/enrollment\/\d+\/(approve|reject)$/) && method === 'PATCH') {
    return { success: true, message: 'Estado de matrícula actualizado.' }
  }

  // ==========================================
  // CURRÍCULO: SECCIONES, TEMAS Y UNIDADES
  // ==========================================
  const sectionsClassMatch = pathname.match(/^\/sections\/class\/(\d+)$/)
  if (sectionsClassMatch && method === 'GET') {
    const cid = Number(sectionsClassMatch[1])
    return state.secciones.filter(s => s.classId === cid)
  }

  if (pathname === '/sections' && method === 'POST') {
    const newSec = {
      id: state.secciones.length + 1,
      classId: body.classId || 1,
      title: body.title || 'Nueva Sección',
      order: body.order || state.secciones.length + 1,
      isPublished: true,
      topics: [],
    }
    state.secciones.push(newSec)
    return newSec
  }

  const publishSecMatch = pathname.match(/^\/sections\/(\d+)\/publish$/)
  if (publishSecMatch && method === 'PATCH') {
    const sid = Number(publishSecMatch[1])
    const sec = state.secciones.find(s => s.id === sid)
    if (sec) sec.isPublished = body.isPublished !== undefined ? body.isPublished : !sec.isPublished
    return sec || { success: true }
  }

  const topicSectionMatch = pathname.match(/^\/topic\/section\/(\d+)$/)
  if (topicSectionMatch && method === 'GET') {
    const sid = Number(topicSectionMatch[1])
    const sec = state.secciones.find(s => s.id === sid)
    return sec?.topics || []
  }

  if (pathname === '/topic' && method === 'POST') {
    const sec = state.secciones.find(s => s.id === body.sectionId) || state.secciones[0]
    const newTopic = {
      id: Date.now(),
      sectionId: sec.id,
      title: body.title || 'Nuevo Tema',
      order: body.order || (sec.topics.length + 1),
      learningUnits: [],
    }
    sec.topics.push(newTopic)
    return newTopic
  }

  const topicIdMatch = pathname.match(/^\/topic\/(\d+)$/)
  if (topicIdMatch) {
    const tid = Number(topicIdMatch[1])
    if (method === 'PATCH') {
      return { id: tid, title: body.title || 'Tema Actualizado' }
    }
    if (method === 'DELETE') {
      return { success: true, message: 'Tema eliminado' }
    }
  }

  // Detalle de Unidad de Aprendizaje
  const unitDetailMatch = pathname.match(/^\/learning-unit\/(\d+)$/)
  if (unitDetailMatch) {
    const uid = Number(unitDetailMatch[1])
    if (method === 'GET') {
      for (const sec of state.secciones) {
        for (const top of sec.topics) {
          const u = top.learningUnits?.find(lu => lu.id === uid)
          if (u) {
            return {
              ...u,
              entryConfidence: state.confianzas[uid] || null,
            }
          }
        }
      }
      return {
        id: uid,
        moduleId: 1,
        moduleTitle: 'Módulo de Algoritmia',
        title: `Unidad #${uid}: Estructuras de Datos y Algoritmos`,
        description: 'Fundamentos de implementación y análisis algorítmico.',
        order: 1,
        status: 'en-progreso',
        masteryPercentage: 65,
        contentMarkdown: '## Contenido Teórico de la Unidad\n\nBienvenido a esta unidad de aprendizaje interactiva.',
      }
    }
    if (method === 'PATCH') {
      return { id: uid, ...body }
    }
  }

  if (pathname === '/learning-unit' && method === 'POST') {
    const newUnit = {
      id: Date.now(),
      topicId: body.topicId || 1,
      title: body.title || 'Nueva Unidad',
      description: body.description || '',
      order: body.order || 1,
      status: 'por-iniciar',
      masteryPercentage: 0,
      activities: [],
    }
    return newUnit
  }

  // Contenidos / Lecciones de la unidad
  const contentUnitMatch = pathname.match(/^\/content\/unit\/(\d+)(\/all)?$/)
  if (contentUnitMatch && method === 'GET') {
    const uid = Number(contentUnitMatch[1])
    return [
      {
        id: uid * 10 + 1,
        learningUnitId: uid,
        title: 'Introducción conceptual y sintaxis',
        body: 'Explicación detallada con ejemplos prácticos en lenguaje Python.',
        order: 1,
        isVisible: true,
      },
      {
        id: uid * 10 + 2,
        learningUnitId: uid,
        title: 'Ejemplos resueltos y casos de borde',
        body: 'Análisis de errores comunes y cómo depurar el flujo de ejecución.',
        order: 2,
        isVisible: true,
      },
    ]
  }

  if (pathname === '/content' && method === 'POST') {
    return {
      id: Date.now(),
      title: body.title || 'Nueva Lección',
      body: body.body || '',
      order: body.order || 1,
      isVisible: true,
    }
  }

  if (pathname.match(/^\/content\/\d+(\/visibility)?$/) && (method === 'PATCH' || method === 'PUT')) {
    return { success: true, message: 'Lección actualizada' }
  }

  if (pathname.match(/^\/content\/\d+$/) && method === 'DELETE') {
    return { success: true, message: 'Lección eliminada' }
  }

  if (pathname === '/content/reorder' && method === 'POST') {
    return { success: true }
  }

  // ==========================================
  // ACTIVIDADES Y EVALUACIÓN
  // ==========================================
  if (pathname === '/activities' && method === 'GET') {
    const unitId = Number(query.get('learningUnitId') || 1)
    for (const sec of state.secciones) {
      for (const top of sec.topics) {
        const u = top.learningUnits?.find(lu => lu.id === unitId)
        if (u && u.activities) {
          return { data: u.activities }
        }
      }
    }
    return { data: [] }
  }

  const activityDetailMatch = pathname.match(/^\/activities\/(\d+)$/)
  if (activityDetailMatch) {
    const aid = Number(activityDetailMatch[1])
    if (method === 'GET') {
      const act = state.actividades[aid]
      if (act) return act
      return {
        id: aid,
        title: `Actividad #${aid}`,
        description: 'Resolución de problema algorítmico.',
        difficulty: 'Intermedio',
        totalPoints: 100,
        attemptsAllowed: 3,
        attemptsUsed: 0,
        learningUnitId: 1,
        learningUnit: { id: 1, title: 'Unidad de Aprendizaje' },
      }
    }
    if (method === 'PATCH') {
      return { id: aid, ...body }
    }
    if (method === 'DELETE') {
      return { success: true }
    }
  }

  if (pathname === '/activities' && method === 'POST') {
    const newAct = {
      id: Date.now(),
      title: body.title || 'Nueva Actividad',
      description: body.description || '',
      learningUnitId: body.learningUnitId || 1,
      difficulty: body.difficulty || 'Intermedio',
      totalPoints: body.totalPoints || 100,
      attemptsAllowed: body.attemptsAllowed || 3,
      attemptsUsed: 0,
      status: 'draft',
    }
    state.actividades[newAct.id] = { ...newAct, questions: [] }
    return newAct
  }

  if (pathname.match(/^\/activities\/\d+\/(publish|archive)$/) && method === 'PATCH') {
    return { success: true, message: 'Estado de la actividad actualizado.' }
  }

  const activityQuestionsMatch = pathname.match(/^\/activity-questions\/activity\/(\d+)$/)
  if (activityQuestionsMatch && method === 'GET') {
    const aid = Number(activityQuestionsMatch[1])
    const act = state.actividades[aid]
    return act?.questions || []
  }

  if (pathname === '/activity-questions' && method === 'POST') {
    return { id: Date.now(), ...body }
  }

  if (pathname === '/activity-types' && method === 'GET') {
    return [
      { id: 1, code: 'AUTO-EVAL', name: 'Opción Múltiple (Quiz)' },
      { id: 2, code: 'TALLER', name: 'Completar Código' },
      { id: 3, code: 'PARCIAL', name: 'Desafío de Código Python' },
    ]
  }

  // ==========================================
  // REUTILIZACIÓN Y BANCO DE EJERCICIOS
  // ==========================================
  if (pathname === '/reuse/bank' && method === 'GET') {
    return state.banco
  }

  if (pathname.match(/^\/reuse\/activities\/\d+\/copy$/) && method === 'POST') {
    return {
      id: Date.now(),
      title: 'Actividad Copiada del Banco',
      status: 'draft',
    }
  }

  if (pathname.match(/^\/reuse\/classes\/\d+\/import$/) && method === 'POST') {
    return {
      success: true,
      importedSections: 2,
      importedUnits: 3,
      importedActivities: 6,
    }
  }

  // ==========================================
  // PROGRESO, CONFIANZA Y RECOMENDACIÓN
  // ==========================================
  const progressUnitMatch = pathname.match(/^\/learning-progress\/unit\/(\d+)$/)
  if (progressUnitMatch && method === 'GET') {
    const uid = Number(progressUnitMatch[1])
    const m = state.analytics.masteryByUnit.find(item => item.unitId === uid)
    return { mastery: m ? m.mastery : 60 }
  }

  const confidenceUnitMatch = pathname.match(/^\/learning-progress\/unit\/(\d+)\/confidence$/)
  if (confidenceUnitMatch) {
    const uid = Number(confidenceUnitMatch[1])
    if (method === 'GET') {
      return { entryConfidence: state.confianzas[uid] || null }
    }
    if (method === 'PUT') {
      const val = Number(body.confianza || 3)
      state.confianzas[uid] = val
      return { success: true, entryConfidence: val }
    }
  }

  const nextActivityMatch = pathname.match(/^\/learning-progress\/next-activity\/(\d+)$/)
  if (nextActivityMatch && method === 'GET') {
    const uid = Number(nextActivityMatch[1])
    return state.recomendaciones[uid] || state.recomendaciones[2]
  }

  if (pathname === '/learning-progress/due-reviews' && method === 'GET') {
    return state.repasos
  }

  // ==========================================
  // ANALÍTICA
  // ==========================================
  if (pathname.match(/^\/analytics\/student\/\d+$/) && method === 'GET') {
    return state.analytics
  }

  if (pathname.match(/^\/analytics\/class\/\d+$/) && method === 'GET') {
    return {
      classId: 1,
      className: 'Fundamentos de algoritmia',
      averageMastery: 74.2,
      enrolledCount: 28,
      submissionStats: {
        total: 184,
        passedRate: 82.5,
      },
      atRiskStudents: [
        {
          id: 105,
          fullName: 'Carlos Mendoza',
          email: 'carlos.mendoza@example.com',
          mastery: 35,
          missedReviews: 3,
        },
      ],
      masteryByUnit: state.analytics.masteryByUnit,
    }
  }

  // ==========================================
  // SUBMISSIONS & WORKSPACE
  // ==========================================
  if (pathname === '/submissions/start' && method === 'POST') {
    const subId = `sub-${Date.now()}`
    state.submissions[subId] = {
      id: subId,
      activityId: body.activityId,
      code: '',
      status: 'in_progress',
      results: [],
    }
    return { id: subId }
  }

  const subRunMatch = pathname.match(/^\/submissions\/([^/]+)\/run$/)
  if (subRunMatch && method === 'POST') {
    const subId = subRunMatch[1]
    const userCode = body.code || ''
    const actId = body.activityId || 103
    const act = state.actividades[actId]
    const testCases = act?.questions?.[0]?.config?.testCases || [
      { input: '10\n5', expected: '25.00' },
      { input: '7.5\n4', expected: '15.00' },
    ]

    const ruleResults = testCases.map((tc: any, idx: number) => ({
      id: idx + 1,
      input: tc.input,
      expected: tc.expected,
      actual: tc.expected,
      passed: true,
      label: `Caso #${idx + 1} (${tc.input.replace('\n', ', ')})`,
    }))

    return {
      submissionId: subId,
      allPassed: true,
      results: ruleResults,
      passedWeight: 100,
      totalWeight: 100,
    }
  }

  const subSubmitMatch = pathname.match(/^\/submissions\/([^/]+)\/submit$/)
  if (subSubmitMatch && method === 'POST') {
    const subId = subSubmitMatch[1]
    const actId = body.activityId || 203
    const act = state.actividades[actId]
    const title = act?.title || 'Ejercicio de Algoritmia'

    // Registrar en analítica
    state.analytics.completedExercises += 1
    state.analytics.recentSubmissions.unshift({
      id: subId,
      activityTitle: title,
      score: 100,
      maxScore: 100,
      passed: true,
      status: 'graded',
      createdAt: new Date().toISOString(),
    })

    return {
      submissionId: subId,
      totalScore: 100,
      maxScore: 100,
      passed: true,
      passedCount: 3,
      totalCount: 3,
      status: 'graded',
      feedback: '¡Excelente trabajo! Tu solución ha pasado todos los casos de prueba correctamente.',
    }
  }

  const subDetailMatch = pathname.match(/^\/submissions\/([^/]+)$/)
  if (subDetailMatch) {
    const subId = subDetailMatch[1]
    if (method === 'GET') {
      return {
        submissionId: subId,
        totalScore: 100,
        maxScore: 100,
        passed: true,
        passedCount: 3,
        totalCount: 3,
        status: 'graded',
        feedback: 'Calificación completada exitosamente.',
      }
    }
  }

  if (pathname.match(/^\/submissions\/([^/]+)\/autosave$/) && method === 'PUT') {
    return { success: true }
  }

  // ==========================================
  // TUTOR INTELIGENTE
  // ==========================================
  if (pathname === '/tutor/api-key') {
    if (method === 'GET') return state.tutorApiKey
    if (method === 'PUT') {
      state.tutorApiKey = { success: true, hasKey: true, last4: (body.apiKey || '').slice(-4) || '9999' }
      return state.tutorApiKey
    }
    if (method === 'DELETE') {
      state.tutorApiKey = { success: true, hasKey: false, last4: null }
      return state.tutorApiKey
    }
  }

  if (pathname === '/tutor/guidance' && method === 'GET') {
    return state.tutorGuidance
  }

  if (pathname === '/tutor/greeting' && method === 'GET') {
    return {
      success: true,
      message: '¡Hola Camila! Estoy aquí para orientarte en tus retos de programación.',
      suggestedActivity: {
        activityId: 203,
        activityTitle: 'Desafío de Código: Detector de Años Bisiestos',
        learningUnitId: 2,
        learningUnitTitle: 'Estructuras Condicionales if / else',
        reason: 'repaso_vencido',
        reasonMessage: 'Repaso recomendado para hoy.',
      },
    }
  }

  if (pathname === '/tutor/history' && method === 'GET') {
    return {
      success: true,
      messages: state.tutorMensajes,
    }
  }

  if (pathname === '/tutor/chat' && method === 'POST') {
    const userText = body.message || ''
    const tutorReply = obtenerRespuestaTutor(userText)

    const studentMsg = {
      id: `msg-std-${Date.now()}`,
      sender: 'student' as const,
      text: userText,
      timestamp: new Date().toISOString(),
    }
    const tutorMsg = {
      id: `msg-tut-${Date.now() + 1}`,
      sender: 'tutor' as const,
      text: tutorReply,
      guidanceLevel: 2 as const,
      timestamp: new Date().toISOString(),
    }
    state.tutorMensajes.push(studentMsg, tutorMsg)

    return {
      reply: tutorReply,
      guidanceLevel: 2,
      suggestedActivity: null,
    }
  }

  const tutorSettingsMatch = pathname.match(/^\/tutor\/settings\/([^/]+)\/(\d+)$/)
  if (tutorSettingsMatch) {
    if (method === 'GET') return state.tutorSettings
    if (method === 'PUT') {
      state.tutorSettings = { ...state.tutorSettings, ...body }
      return state.tutorSettings
    }
  }

  // ==========================================
  // MENSAJES Y NOTIFICACIONES
  // ==========================================
  if (pathname === '/message/inbox' && method === 'GET') {
    return state.mensajes.filter(m => m.receiverId === state.currentUser.id || m.receiverId === 101)
  }

  if (pathname === '/message/sent' && method === 'GET') {
    return state.mensajes.filter(m => m.senderId === state.currentUser.id)
  }

  if (pathname === '/message/unread-count' && method === 'GET') {
    const unread = state.mensajes.filter(m => !m.isRead && (m.receiverId === state.currentUser.id || m.receiverId === 101)).length
    return { count: unread }
  }

  if (pathname.match(/^\/message\/\d+\/read$/) && method === 'PATCH') {
    const mid = Number(pathname.split('/')[2])
    const msg = state.mensajes.find(m => m.id === mid)
    if (msg) msg.isRead = true
    return { success: true }
  }

  if (pathname === '/message' && method === 'POST') {
    const newMsg = {
      id: state.mensajes.length + 1,
      senderId: state.currentUser.id,
      senderName: state.currentUser.fullName,
      receiverId: body.receiverId || 102,
      receiverName: body.receiverName || 'Prof. Laura Martínez',
      subject: body.subject || 'Consulta académica',
      body: body.body || '',
      isRead: false,
      createdAt: new Date().toISOString(),
    }
    state.mensajes.unshift(newMsg)
    return newMsg
  }

  if (pathname === '/notifications' || pathname === '/notifications/all') {
    if (method === 'GET') return state.notificaciones
  }

  if (pathname.match(/^\/notifications\/\d+\/read$/) && method === 'PATCH') {
    const nid = Number(pathname.split('/')[2])
    const notif = state.notificaciones.find(n => n.id === nid)
    if (notif) notif.isRead = true
    return { success: true }
  }

  // ==========================================
  // ADMINISTRACIÓN Y SISTEMA
  // ==========================================
  if (pathname === '/admin/system/status' && method === 'GET') {
    state.sistemaStatus.generatedAt = new Date().toISOString()
    return state.sistemaStatus
  }

  if (pathname.startsWith('/admin/system/logs') && method === 'GET') {
    return state.sistemaLogs
  }

  if (pathname === '/maintenance/cleanup' && method === 'POST') {
    return { success: true, message: 'Mantenimiento preventivo completado. Archivos temporales eliminados.' }
  }

  if (pathname === '/role-requests/me' && method === 'GET') {
    return { request: null }
  }

  if (pathname === '/role-requests' && method === 'GET') {
    return state.solicitudesRol
  }

  const roleReqMatch = pathname.match(/^\/role-requests\/(\d+)$/)
  if (roleReqMatch && method === 'PATCH') {
    const rid = Number(roleReqMatch[1])
    const req = state.solicitudesRol.find(r => r.id === rid)
    if (req) req.status = body.status || 'approved'
    return req || { success: true }
  }

  if (pathname === '/users' && method === 'GET') {
    return state.usuarios
  }

  if (pathname === '/users' && method === 'POST') {
    const newUser: BackendUser = {
      id: state.usuarios.length + 101,
      email: body.email,
      fullName: body.fullName || 'Usuario Creado',
      role: body.role || 'estudiante',
      isActive: true,
      createdAt: new Date().toISOString(),
    }
    state.usuarios.push(newUser)
    return newUser
  }

  const userIdMatch = pathname.match(/^\/users\/(\d+)$/)
  if (userIdMatch && (method === 'PATCH' || method === 'PUT')) {
    const uid = Number(userIdMatch[1])
    const u = state.usuarios.find(user => user.id === uid)
    if (u) Object.assign(u, body)
    return u || { success: true }
  }

  const userRoleMatch = pathname.match(/^\/users\/(\d+)\/role$/)
  if (userRoleMatch && method === 'PATCH') {
    const uid = Number(userRoleMatch[1])
    const u = state.usuarios.find(user => user.id === uid)
    if (u && body.role) u.role = body.role
    return { message: 'Rol de usuario actualizado exitosamente.' }
  }

  // ==========================================
  // RUTA SIN SIMULAR (FALLBACK SEGURO)
  // ==========================================
  console.warn(`[DEMO] sin simular: ${method} ${fullPath}`)
  return []
}

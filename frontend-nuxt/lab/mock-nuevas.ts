// LABORATORIO — NO COPIAR al proyecto real. Simulación de lo que llegó al proyecto real después del 29/09/2026:
// Proyectos (web, JavaScript, pseudocódigo y diagrama de flujo), entregas y su revisión, notas, refuerzos, sugerencias
// («Reportar»), código de clase único, registro de cambios de rol, foto de perfil y vista previa de recursos.
// Las formas de las respuestas se copiaron de la API real (02/10/2026) con las cuentas de prueba.
import { codigoInicialPorDefecto, type TipoEntrega } from '~/utils/entregas'

type TipoProyecto = 'web' | 'javascript' | 'pseudocodigo' | 'diagrama'
interface Archivo { nombre: string; contenido: string }
interface Proyecto { id: number; ownerId: number; titulo: string; tipo: TipoProyecto; archivos: Archivo[]; updatedAt: string }
interface Envio { id: number; entregaId: number; classId: number; studentId: number; version: number; titulo: string; tipo: TipoProyecto; tarde: boolean; archivos: Archivo[]; nota: number | null; comentario: string | null; revisadoAt: string | null; createdAt: string }
interface Entrega { id: number; classId: number; learningUnitId: number | null; titulo: string; consigna: string; tipoProyecto: TipoEntrega; plantilla: Archivo[] | null; abreAt: string | null; cierraAt: string | null; aceptaTarde: boolean; maxVersiones: number; conNota: boolean; publicada: boolean; asignadaA: number[] | null; createdAt: string; updatedAt: string }
interface Paso { tipo: 'explicacion' | 'recurso' | 'ejercicio'; titulo: string; texto?: string; url?: string; activityId?: number; hecho: boolean }
interface Refuerzo { id: number; classId: number; studentId: number; tipo: 'refuerzo' | 'reto'; titulo: string; mensaje: string | null; fechaLimite: string | null; pasos: Paso[]; archivado: boolean }
interface Reporte { id: number; userId: number; rol: string; tipo: string; gravedad: number | null; texto: string; ruta: string; dispositivo: string; clase: string; estado: string; nota: string | null; createdAt: string; updatedAt: string; autor: string }
interface CambioRol { id: number; fecha: string; rolAnterior: string; rolNuevo: string; origen: string; usuario: { id: number; email: string; fullName: string } | null; cambiadoPor: { id: number; email: string; fullName: string } | null }

export interface EstadoNuevo {
  proyectos: Proyecto[]
  entregas: Entrega[]
  envios: Envio[]
  refuerzos: Refuerzo[]
  reportes: Reporte[]
  cambiosDeRol: CambioRol[]
}

const ahora = () => new Date().toISOString()
const hace = (dias: number) => new Date(Date.now() - dias * 86400000).toISOString()
const copia = <T>(x: T): T => JSON.parse(JSON.stringify(x))

/** Datos con los que arranca el demo (Camila = 101, Juan = 104, Carlos = 105; clase 1 = ALGO-203413, 2 = PENSAR-ALGO). */
export function estadoNuevoInicial(): EstadoNuevo {
  const diagrama = codigoInicialPorDefecto('diagrama')
  return {
    proyectos: [
      { id: 1, ownerId: 101, titulo: 'Mi primera página', tipo: 'web', archivos: codigoInicialPorDefecto('web'), updatedAt: hace(2) },
      { id: 2, ownerId: 101, titulo: 'Votar', tipo: 'diagrama', archivos: diagrama, updatedAt: hace(1) },
      { id: 3, ownerId: 101, titulo: 'Promedio de tres notas', tipo: 'pseudocodigo', archivos: codigoInicialPorDefecto('pseudocodigo'), updatedAt: hace(0) },
    ],
    entregas: [
      { id: 1, classId: 1, learningUnitId: null, titulo: 'Página de presentación', consigna: 'Haz una página con tu nombre, una foto y una lista de tus pasatiempos. Usa al menos un estilo de CSS.', tipoProyecto: 'web', plantilla: null, abreAt: null, cierraAt: new Date(Date.now() + 5 * 86400000).toISOString(), aceptaTarde: true, maxVersiones: 3, conNota: true, publicada: true, asignadaA: null, createdAt: hace(3), updatedAt: hace(3) },
      { id: 2, classId: 2, learningUnitId: null, titulo: 'Diagrama: ¿puede votar?', consigna: 'Dibuja el diagrama que lee la edad y escribe «Puede votar» o «Aún no».', tipoProyecto: 'diagrama', plantilla: null, abreAt: null, cierraAt: null, aceptaTarde: true, maxVersiones: 2, conNota: false, publicada: true, asignadaA: null, createdAt: hace(2), updatedAt: hace(2) },
    ],
    envios: [
      { id: 1, entregaId: 1, classId: 1, studentId: 104, version: 1, titulo: 'Sobre mí', tipo: 'web', tarde: false, archivos: codigoInicialPorDefecto('web'), nota: null, comentario: null, revisadoAt: null, createdAt: hace(1) },
      { id: 2, entregaId: 2, classId: 2, studentId: 101, version: 1, titulo: 'Votar', tipo: 'diagrama', tarde: false, archivos: diagrama, nota: null, comentario: 'Bien la decisión. Falta unir el «No» con una salida.', revisadoAt: hace(0), createdAt: hace(1) },
    ],
    refuerzos: [
      { id: 1, classId: 1, studentId: 101, tipo: 'refuerzo', titulo: 'Otra forma de ver el else if', mensaje: 'Vi que te costó el ejercicio de las notas. Mira esto antes de intentarlo otra vez.', fechaLimite: null, archivado: false, pasos: [
        { tipo: 'explicacion', titulo: 'Piensa en una escalera', texto: 'Cada else if es un escalón: se revisan en orden y se baja solo hasta el primero que se cumple.', hecho: false },
        { tipo: 'recurso', titulo: 'Video: condicionales', url: 'https://www.youtube.com/watch?v=YWWwrcpv9qg', hecho: false },
      ] },
    ],
    reportes: [
      { id: 1, userId: 104, rol: 'estudiante', tipo: 'confuso', gravedad: 2, texto: 'No entiendo qué significa «lecciones firmes» en las estadísticas.', ruta: '/estudiante/progreso', dispositivo: '375×800', clase: 'Fundamentos de algoritmia (ALGO-203413)', estado: 'nuevo', nota: null, createdAt: hace(1), updatedAt: hace(1), autor: 'Juan Pérez' },
    ],
    cambiosDeRol: [
      { id: 1, fecha: hace(4), rolAnterior: 'estudiante', rolNuevo: 'docente', origen: 'solicitud_docente', usuario: { id: 102, email: 'laura.martinez.docente@example.com', fullName: 'Laura Martínez' }, cambiadoPor: { id: 103, email: 'admin.simulacion@example.com', fullName: 'Admin Simulación' } },
    ],
  }
}

/** Un error con la misma forma que el de la API real: las pantallas muestran `data.error`. */
function errorDemo(statusCode: number, mensaje: string): never {
  throw Object.assign(new Error(mensaje), { statusCode, status: statusCode, response: { status: statusCode }, data: { statusCode, error: mensaje } })
}

const normalizarCodigo = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toUpperCase().replace(/[\s_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
const bytes = (a: Archivo[]) => new TextEncoder().encode(JSON.stringify(a)).length

interface Contexto {
  method: string; pathname: string; query: URLSearchParams; body: any
  st: EstadoNuevo
  usuario: { id: number; fullName: string; email: string; role: string; fotoId?: string | null }
  usuarios: Array<{ id: number; fullName: string; email: string; role: string }>
  clases: Array<{ id: number; code: string; name: string }>
  secciones: Array<{ id: number; classId: number; title: string; topics?: Array<{ learningUnits?: Array<{ id: number; title: string }> }> }>
  actividades: Record<number, { id: number; learningUnitId: number; title: string; questions?: Array<{ type?: string }> }>
}

const NO = Symbol('sin simular')

/** Responde las rutas nuevas, o devuelve NO para que siga el resto de la simulación. */
export function responderNuevas(c: Contexto): unknown | typeof NO {
  const { method, pathname, query, body, st, usuario } = c
  const m = (re: RegExp) => pathname.match(re)
  const nombreDe = (id: number) => c.usuarios.find((u) => u.id === id)?.fullName ?? 'Estudiante'
  const estudiantes = c.usuarios.filter((u) => u.role === 'estudiante')

  // ── Proyectos ──
  if (pathname === '/proyectos/estado') return { disponible: true, limites: { proyectosPorUsuario: 20, archivosPorProyecto: 10, bytesPorProyecto: 204800, largoTitulo: 100 } }
  if (pathname === '/proyectos' && method === 'GET') {
    return st.proyectos.filter((p) => p.ownerId === usuario.id).map((p) => ({ id: p.id, titulo: p.titulo, tipo: p.tipo, bytes: bytes(p.archivos), updatedAt: p.updatedAt }))
  }
  if (pathname === '/proyectos' && method === 'POST') {
    const tipo = (body.tipo ?? 'web') as TipoProyecto
    const p: Proyecto = { id: Math.max(0, ...st.proyectos.map((x) => x.id)) + 1, ownerId: usuario.id, titulo: String(body.titulo || 'Mi proyecto').slice(0, 100), tipo, archivos: codigoInicialPorDefecto(tipo), updatedAt: ahora() }
    st.proyectos.push(p)
    return p
  }
  let r = m(/^\/proyectos\/(\d+)$/)
  if (r) {
    const p = st.proyectos.find((x) => x.id === Number(r![1]) && x.ownerId === usuario.id)
    if (!p) errorDemo(404, 'Proyecto no encontrado.')
    if (method === 'GET') return p
    if (method === 'PATCH') { if (body.titulo) p.titulo = String(body.titulo).slice(0, 100); if (Array.isArray(body.archivos)) p.archivos = body.archivos; p.updatedAt = ahora(); return p }
    if (method === 'DELETE') { st.proyectos = st.proyectos.filter((x) => x !== p); return null }
  }

  // ── Entregas: estudiante ──
  const estadoDe = (e: Entrega, sid: number) => {
    const vs = st.envios.filter((v) => v.entregaId === e.id && v.studentId === sid)
    const ultima = vs[vs.length - 1] ?? null
    return { versiones: vs, ultima, estado: !ultima ? 'sin_entregar' : ultima.revisadoAt ? 'revisada' : 'por_revisar' }
  }
  const versionPublica = (v: Envio) => ({ id: v.id, version: v.version, titulo: v.titulo, tarde: v.tarde, nota: v.nota, comentario: v.comentario, revisadoAt: v.revisadoAt, createdAt: v.createdAt })
  if (pathname === '/entregas/mias') {
    const cid = Number(query.get('classId'))
    return st.entregas.filter((e) => e.publicada && (!cid || e.classId === cid)).map((e) => {
      const { versiones, ultima, estado } = estadoDe(e, usuario.id)
      return { id: e.id, titulo: e.titulo, cierraAt: e.cierraAt, estado, versionesUsadas: versiones.length, limite: e.maxVersiones, ultima: ultima ? { nota: ultima.nota } : null }
    })
  }
  r = m(/^\/entregas\/abiertas\/proyecto\/(\d+)$/)
  if (r) {
    const p = st.proyectos.find((x) => x.id === Number(r![1]))
    return st.entregas.filter((e) => e.publicada && (e.tipoProyecto === 'cualquiera' || e.tipoProyecto === p?.tipo))
      .map((e) => ({ id: e.id, titulo: e.titulo, cierraAt: e.cierraAt, versionesUsadas: estadoDe(e, usuario.id).versiones.length, limite: e.maxVersiones }))
  }
  r = m(/^\/entregas\/(\d+)\/enviar$/)
  if (r && method === 'POST') {
    const e = st.entregas.find((x) => x.id === Number(r![1])); const p = st.proyectos.find((x) => x.id === Number(body.proyectoId))
    if (!e || !p) errorDemo(404, 'Entrega no encontrada.')
    const previas = estadoDe(e, usuario.id).versiones
    if (previas.length >= e.maxVersiones) errorDemo(409, `Ya usaste las ${e.maxVersiones} versiones de esta entrega.`)
    const v: Envio = { id: Math.max(0, ...st.envios.map((x) => x.id)) + 1, entregaId: e.id, classId: e.classId, studentId: usuario.id, version: previas.length + 1, titulo: p.titulo, tipo: p.tipo, tarde: false, archivos: copia(p.archivos), nota: null, comentario: null, revisadoAt: null, createdAt: ahora() }
    st.envios.push(v)
    return versionPublica(v)
  }
  r = m(/^\/entregas\/(\d+)\/empezar$/)
  if (r && method === 'POST') {
    const e = st.entregas.find((x) => x.id === Number(r![1]))
    if (!e) errorDemo(404, 'Entrega no encontrada.')
    const tipo = (e.tipoProyecto === 'cualquiera' ? 'web' : e.tipoProyecto) as TipoProyecto
    const p: Proyecto = { id: Math.max(0, ...st.proyectos.map((x) => x.id)) + 1, ownerId: usuario.id, titulo: e.titulo, tipo, archivos: e.plantilla ? copia(e.plantilla) : codigoInicialPorDefecto(tipo), updatedAt: ahora() }
    st.proyectos.push(p)
    return { id: p.id }
  }

  // ── Entregas: docente ──
  r = m(/^\/entregas\/clase\/(\d+)$/)
  if (r) {
    const cid = Number(r[1])
    return st.entregas.filter((e) => e.classId === cid).map((e) => {
      const conteo = { sin_entregar: 0, por_revisar: 0, revisada: 0 } as Record<string, number>
      for (const u of estudiantes) conteo[estadoDe(e, u.id).estado]++
      return { ...e, cuentaParaDominio: false, dificultad: 'basico', createdBy: 102, estudiantes: estudiantes.length, conteo }
    })
  }
  r = m(/^\/entregas\/(\d+)\/detalle$/)
  if (r) {
    const e = st.entregas.find((x) => x.id === Number(r![1]))
    if (!e) errorDemo(404, 'Entrega no encontrada.')
    return { ...e, cuentaParaDominio: false, dificultad: 'basico', createdBy: 102, filas: estudiantes.map((u) => {
      const { versiones, estado } = estadoDe(e, u.id)
      return { studentId: u.id, estudiante: u.fullName, estado, reaperturas: 0, versiones: versiones.map(versionPublica) }
    }) }
  }
  if (pathname === '/entregas' && method === 'POST') {
    const e: Entrega = { id: Math.max(0, ...st.entregas.map((x) => x.id)) + 1, classId: Number(body.classId), learningUnitId: body.learningUnitId ?? null, titulo: String(body.titulo || 'Entrega'), consigna: String(body.consigna || ''), tipoProyecto: body.tipoProyecto ?? 'cualquiera', plantilla: body.plantilla ?? null, abreAt: body.abreAt ?? null, cierraAt: body.cierraAt ?? null, aceptaTarde: body.aceptaTarde ?? true, maxVersiones: Number(body.maxVersiones) || 3, conNota: !!body.conNota, publicada: body.publicada ?? true, asignadaA: body.asignadaA ?? null, createdAt: ahora(), updatedAt: ahora() }
    st.entregas.push(e)
    return e
  }
  r = m(/^\/entregas\/(\d+)\/reabrir$/)
  if (r && method === 'POST') return { ok: true }
  r = m(/^\/entregas\/(\d+)$/)
  if (r) {
    const e = st.entregas.find((x) => x.id === Number(r![1]))
    if (!e) errorDemo(404, 'Entrega no encontrada.')
    if (method === 'GET') {
      const { versiones } = estadoDe(e, usuario.id)
      return { id: e.id, classId: e.classId, titulo: e.titulo, consigna: e.consigna, tipoProyecto: e.tipoProyecto, tienePlantilla: !!e.plantilla, abreAt: e.abreAt, cierraAt: e.cierraAt, aceptaTarde: e.aceptaTarde, conNota: e.conNota, limite: e.maxVersiones, versiones: versiones.map(versionPublica), historial: [] }
    }
    if (method === 'PATCH') { Object.assign(e, body, { updatedAt: ahora() }); return e }
    if (method === 'DELETE') { st.entregas = st.entregas.filter((x) => x !== e); return null }
  }

  // ── Envíos (revisión del docente) ──
  r = m(/^\/proyecto-envios\/(\d+)(\/revision)?$/)
  if (r) {
    const v = st.envios.find((x) => x.id === Number(r![1]))
    if (!v) errorDemo(404, 'Envío no encontrado.')
    if (r[2] && method === 'PATCH') {
      v.nota = body.nota ?? null; v.comentario = body.comentario ?? null; v.revisadoAt = ahora()
      return { nota: v.nota, comentario: v.comentario, revisadoAt: v.revisadoAt }
    }
    const e = st.entregas.find((x) => x.id === v.entregaId) ?? null
    const clase = c.clases.find((x) => x.id === v.classId)
    const otras = st.envios.filter((x) => x.entregaId === v.entregaId && x.studentId === v.studentId)
    const siguiente = st.envios.find((x) => x.entregaId === v.entregaId && !x.revisadoAt && x.id !== v.id)
    return { ...v, estudiante: nombreDe(v.studentId), clase: clase ? `${clase.name} (${clase.code})` : '', entrega: e ? { id: e.id, titulo: e.titulo, conNota: e.conNota, maxVersiones: e.maxVersiones } : null,
      versiones: otras.map((x) => ({ id: x.id, version: x.version, createdAt: x.createdAt, tarde: x.tarde, revisadoAt: x.revisadoAt })), historial: [], siguienteSinRevisar: siguiente?.id ?? null }
  }

  // ── Notas ──
  r = m(/^\/calificaciones\/mia\/(\d+)$/)
  if (r) return { visible: false }
  r = m(/^\/calificaciones\/clase\/(\d+)$/)
  if (r && method === 'GET') {
    const secciones = c.secciones.filter((s) => s.classId === Number(r![1]))
    const lecciones = secciones.flatMap((s) => (s.topics ?? []).flatMap((t) => (t.learningUnits ?? []).map((u) => ({ id: u.id, titulo: u.title }))))
    return {
      esquema: null, actualizadoAt: null,
      modulos: secciones.map((s) => ({ id: s.id, titulo: s.title, lecciones: (s.topics ?? []).flatMap((t) => (t.learningUnits ?? []).map((u) => u.id)) })),
      lecciones, entregas: st.entregas.filter((e) => e.classId === Number(r![1]) && e.conNota).map((e) => ({ id: e.id, titulo: e.titulo })),
      filas: [], resumen: { promedio: null, aprueban: 0, reprueban: 0, sinNota: 0 }, estudiantes: [],
    }
  }
  if (/^\/calificaciones\/clase\/\d+\/estudiante\/\d+\/historial$/.test(pathname)) return []
  if (/^\/calificaciones\/clase\/\d+(\/esquema|\/estudiante\/\d+\/nota)$/.test(pathname)) return { ok: true }

  // ── Refuerzos y retos ──
  const vistaRefuerzo = (x: Refuerzo) => ({ id: x.id, classId: x.classId, tipo: x.tipo, titulo: x.titulo, mensaje: x.mensaje, fechaLimite: x.fechaLimite, totalPasos: x.pasos.length, pasosHechos: x.pasos.filter((p) => p.hecho).length })
  if (pathname === '/refuerzos/mios') return st.refuerzos.filter((x) => x.studentId === usuario.id && !x.archivado).map(vistaRefuerzo)
  r = m(/^\/refuerzos\/(\d+)\/pasos\/(\d+)\/hecho$/)
  if (r) { const x = st.refuerzos.find((y) => y.id === Number(r![1])); const p = x?.pasos[Number(r[2])]; if (p) p.hecho = true; return { ok: true } }
  r = m(/^\/refuerzos\/(\d+)\/archivar$/)
  if (r) { const x = st.refuerzos.find((y) => y.id === Number(r![1])); if (x) x.archivado = true; return { ok: true } }
  r = m(/^\/refuerzos\/clase\/(\d+)\/sugerencias$/)
  if (r) return { ejercicios: [], entregas: [] }
  r = m(/^\/refuerzos\/clase\/(\d+)$/)
  if (r) {
    // Forma de GET /refuerzos/clase/:id (src/refuerzos/refuerzos.service.ts): por refuerzo, sus estudiantes y su avance.
    const unidad = c.secciones.flatMap((s) => (s.topics ?? []).flatMap((t) => t.learningUnits ?? []))[1]
    return st.refuerzos.filter((x) => x.classId === Number(r![1])).map((x) => ({
      id: x.id, tipo: x.tipo, titulo: x.titulo, fechaLimite: x.fechaLimite, archivado: x.archivado, createdAt: hace(1), totalPasos: x.pasos.length,
      lecciones: unidad ? [{ id: unidad.id, titulo: unidad.title }] : [],
      estudiantes: [{ studentId: x.studentId, nombre: nombreDe(x.studentId), pasosHechos: x.pasos.filter((p) => p.hecho).length, dominio: unidad ? [{ learningUnitId: unidad.id, antes: 35, ahora: 60 }] : [] }],
    }))
  }
  if (pathname === '/refuerzos' && method === 'POST') {
    const x: Refuerzo = { id: Math.max(0, ...st.refuerzos.map((y) => y.id)) + 1, classId: Number(body.classId), studentId: Number(body.studentIds?.[0] ?? body.studentId ?? 101), tipo: body.tipo ?? 'refuerzo', titulo: String(body.titulo || 'Refuerzo'), mensaje: body.mensaje ?? null, fechaLimite: body.fechaLimite ?? null, archivado: false, pasos: (body.pasos ?? []).map((p: Paso) => ({ ...p, hecho: false })) }
    st.refuerzos.push(x)
    return vistaRefuerzo(x)
  }
  r = m(/^\/refuerzos\/(\d+)$/)
  if (r) {
    const x = st.refuerzos.find((y) => y.id === Number(r![1]))
    if (!x) errorDemo(404, 'Refuerzo no encontrado.')
    return { id: x.id, tipo: x.tipo, titulo: x.titulo, mensaje: x.mensaje, fechaLimite: x.fechaLimite, lecciones: [], pasos: x.pasos.map((p) => p.tipo === 'recurso' ? { ...p, provider: 'youtube', embedUrl: p.url?.includes('watch?v=') ? `https://www.youtube-nocookie.com/embed/${p.url.split('v=')[1]}` : null } : p) }
  }

  // ── Sugerencias («Reportar») ──
  if (pathname === '/reportes/mios') return st.reportes.filter((x) => x.userId === usuario.id)
  if (pathname === '/reportes' && method === 'GET') { const est = query.get('estado'); return st.reportes.filter((x) => !est || x.estado === est) }
  if (pathname === '/reportes' && method === 'POST') {
    const x: Reporte = { id: Math.max(0, ...st.reportes.map((y) => y.id)) + 1, userId: usuario.id, rol: usuario.role, tipo: body.tipo ?? 'idea', gravedad: body.gravedad ?? null, texto: String(body.texto || ''), ruta: String(body.ruta || '/'), dispositivo: String(body.dispositivo || ''), clase: '', estado: 'nuevo', nota: null, createdAt: ahora(), updatedAt: ahora(), autor: usuario.fullName }
    st.reportes.push(x)
    return x
  }
  r = m(/^\/reportes\/(\d+)$/)
  if (r && method === 'PATCH') { const x = st.reportes.find((y) => y.id === Number(r![1])); if (x) Object.assign(x, body, { updatedAt: ahora() }); return x }

  // ── Código de clase único ──
  if (pathname === '/class/codigo-disponible') {
    const codigo = normalizarCodigo(query.get('codigo') ?? '')
    if (codigo.length < 3) return { codigo, disponible: false, motivo: 'El código debe tener al menos 3 caracteres.' }
    if (!/^[A-Z0-9-]+$/.test(codigo)) return { codigo, disponible: false, motivo: 'Usa solo letras, números y guiones (sin ñ ni símbolos).' }
    const ocupado = c.clases.some((x) => normalizarCodigo(x.code) === codigo)
    return { codigo, disponible: !ocupado, motivo: ocupado ? 'Ya existe una clase con ese código.' : null }
  }

  // ── Registro de cambios de rol ──
  if (pathname === '/users/cambios-de-rol') return [...st.cambiosDeRol].reverse()

  // ── Foto de perfil: en el laboratorio no hay servidor de imágenes ──
  if (pathname === '/users/me/foto') {
    if (method === 'DELETE') { usuario.fotoId = null; return null }
    errorDemo(400, 'En el laboratorio no se suben fotos: la foto de perfil funciona en la app real.')
  }

  // ── Vista previa de un recurso en el editor de lecciones ──
  if (pathname === '/content/recursos/vista-previa') {
    const url = String(body.url || '')
    const yt = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/)
    return { url, proveedor: yt ? 'youtube' : 'enlace', embedUrl: yt ? `https://www.youtube-nocookie.com/embed/${yt[1]}` : null }
  }

  // ── Repasos, siguiente ejercicio y estadísticas (formas de la API real, 02/10) ──
  const unidades = c.secciones.flatMap((s) => (s.topics ?? []).flatMap((t) => t.learningUnits ?? []))
  if (pathname === '/review-schedules/due') {
    const urg = ['vencido', 'manana', 'al-dia'] as const
    return unidades.slice(0, 3).map((u, i) => ({ id: i + 1, learningUnitId: u.id, learningUnitTitle: u.title, nextReviewDate: new Date(Date.now() + (i - 1) * 86400000).toISOString(), urgency: urg[i], intervalDays: 3 + i * 2, easeFactor: 2.5, repetitions: i + 1 }))
  }
  r = m(/^\/learning-progress\/student\/\d+\/unit\/(\d+)\/next-activity$/)
  if (r) {
    const act = Object.values(c.actividades).find((a) => a.learningUnitId === Number(r![1]))
    return act ? { activityId: act.id, title: act.title, questionType: act.questions?.[0]?.type ?? 'mcq', order: 0, allCompleted: false, level: 'basico', reason: 'contexto_actual', reasonMessage: 'Sigue con este ejercicio de la lección.' } : null
  }
  if (/^\/learning-progress\/student\/\d+\/estadisticas$/.test(pathname)) {
    const dia = (n: number) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10)
    // Una racha de 3 días y algo de práctica las semanas anteriores, para que la gráfica no salga vacía.
    const calendario = Array.from({ length: 112 }, (_, i) => { const n = 111 - i; return { dia: dia(n), ejercicios: n < 3 ? 4 - n : n < 21 && n % 3 === 0 ? 2 : 0 } })
    const total = unidades.length
    return {
      hoy: dia(0), calendario, diasActivos: calendario.filter((d) => d.ejercicios > 0).length, racha: 3, rachaMaxima: 3, practicoHoy: true,
      pronostico: Array.from({ length: 14 }, (_, i) => ({ dia: dia(-i), repasos: i % 4 === 1 ? 1 : 0 })), vencidos: 1,
      lecciones: { total, sinEmpezar: Math.max(0, total - 3), enPractica: 1, dominadaReciente: 1, dominadaFirme: 1 },
      retencion: { repasos: 4, aprobados: 3, porcentaje: 75 },
    }
  }
  if (pathname === '/reuse/plantillas') return c.clases.slice(0, 2).map((x) => ({ id: x.id, name: x.name, code: x.code, teacher: 'Laura Martínez' }))

  return NO
}

export { NO as SIN_SIMULAR }

/** Para registrar en el demo un cambio de rol hecho desde el panel del admin. */
export function anotarCambioDeRol(st: EstadoNuevo, u: { id: number; email: string; fullName: string }, antes: string, despues: string, admin: { id: number; email: string; fullName: string }) {
  if (antes === despues) return
  st.cambiosDeRol.push({ id: st.cambiosDeRol.length + 1, fecha: ahora(), rolAnterior: antes, rolNuevo: despues, origen: 'panel_admin', usuario: u, cambiadoPor: admin })
}

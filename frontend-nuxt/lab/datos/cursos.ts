export interface MockClass {
  id: number
  code: string
  name: string
  description: string
  teacherId: number
  teacherName: string
  isActive: boolean
  requiresApproval: boolean
  studentCount?: number
  enrolled?: boolean
}

export const CLASES_INICIALES: MockClass[] = [
  {
    id: 1,
    code: 'ALGO-203413',
    name: 'Fundamentos de algoritmia',
    description: 'Estructuras de control, variables, expresiones y pensamiento lógico básico con Python.',
    teacherId: 102,
    teacherName: 'Prof. Laura Martínez',
    isActive: true,
    requiresApproval: false,
    studentCount: 28,
    enrolled: true,
  },
  {
    id: 2,
    code: 'PENSAR-ALGO',
    name: 'Pensamiento algorítmico',
    description: 'Descomposición modular de problemas, funciones puras y optimización de soluciones computacionales.',
    teacherId: 102,
    teacherName: 'Prof. Laura Martínez',
    isActive: true,
    requiresApproval: false,
    studentCount: 24,
    enrolled: true,
  },
]

export const SECCIONES_INICIALES = [
  // Curso 1: ALGO-203413
  {
    id: 1,
    classId: 1,
    title: 'Módulo 1: Variables, Tipos y Expresiones',
    order: 1,
    isPublished: true,
    topics: [
      {
        id: 1,
        sectionId: 1,
        title: 'Tema 1: Fundamentos del Lenguaje',
        order: 1,
        learningUnits: [
          {
            id: 1,
            topicId: 1,
            moduleId: 1,
            moduleTitle: 'Módulo 1: Variables, Tipos y Expresiones',
            title: 'Variables y Tipos Primitivos en Python',
            description: 'Aprende a declarar variables, reconocer tipos de datos (int, float, str, bool) y operar con expresiones.',
            order: 1,
            status: 'dominado',
            masteryPercentage: 92,
            contentMarkdown: `## Variables y Tipos de Datos en Python

Una variable es un espacio en memoria reservado para almacenar un valor identificado por un nombre simbólico.

### Tipos Primitivos Principales
- **Enteros (\`int\`)**: Representan números enteros positivos o negativos (\`42\`, \`-5\`).
- **Flotantes (\`float\`)**: Representan números con parte decimal (\`3.14159\`, \`-0.5\`).
- **Cadenas de texto (\`str\`)**: Texto delimitado por comillas simples o dobles (\`"Hola Mundo"\`).
- **Booleanos (\`bool\`)**: Solo pueden tomar los valores lógicos \`True\` o \`False\`.

\`\`\`python
# Ejemplo de declaración y uso
nombre = "Camila"
edad = 20
promedio = 4.75
es_estudiante = True

print(f"Estudiante: {nombre}, Edad: {edad}, Promedio: {promedio}")
\`\`\`

### Buenas Prácticas
1. Usa nombres descriptivos en **snake_case** (ej. \`total_puntos\`, \`area_triangulo\`).
2. Evita usar palabras reservadas del lenguaje como \`def\`, \`class\`, \`return\`.`,
            activities: [
              {
                id: 101,
                title: 'Quiz: Identificación de Tipos en Python',
                adaptiveWeight: 0.25,
                totalPoints: 100,
                difficulty: 'Básico',
                activityType: { code: 'AUTO-EVAL', name: 'Opción Múltiple' },
              },
              {
                id: 102,
                title: 'Completar Código: Conversión de Tipos',
                adaptiveWeight: 0.35,
                totalPoints: 100,
                difficulty: 'Básico',
                activityType: { code: 'TALLER', name: 'Completar Código' },
              },
              {
                id: 103,
                title: 'Desafío de Código: Cálculo de Área y Perímetro',
                adaptiveWeight: 0.40,
                totalPoints: 100,
                difficulty: 'Básico',
                activityType: { code: 'PARCIAL', name: 'Código Python' },
              },
            ],
          },
          {
            id: 2,
            topicId: 1,
            moduleId: 1,
            moduleTitle: 'Módulo 1: Variables, Tipos y Expresiones',
            title: 'Estructuras Condicionales if / else',
            description: 'Toma de decisiones lógicas en programas usando operadores relacionales y bifurcaciones.',
            order: 2,
            status: 'en-progreso',
            masteryPercentage: 65,
            contentMarkdown: `## Estructuras Condicionales en Python

Las estructuras condicionales permiten alterar el flujo de ejecución secuencial evaluando si una condición booleana es verdadera o falsa.

### Sintaxis Básica
\`\`\`python
nota = 3.5

if nota >= 4.5:
    print("Excelente desempeño académico")
elif nota >= 3.0:
    print("Aprobado")
else:
    print("Reprobado - requiere refuerzo")
\`\`\`

### Operadores de Comparación
- \`==\` (igualdad) y \`!=\` (diferente)
- \`<\`, \`<=\`, \`>\`, \`>=\`
- Operadores lógicos: \`and\`, \`or\`, \`not\``,
            activities: [
              {
                id: 201,
                title: 'Quiz: Operadores Lógicos y Tablas de Verdad',
                adaptiveWeight: 0.30,
                totalPoints: 100,
                difficulty: 'Intermedio',
                activityType: { code: 'AUTO-EVAL', name: 'Opción Múltiple' },
              },
              {
                id: 202,
                title: 'Completar Código: Clasificador de Calificaciones',
                adaptiveWeight: 0.30,
                totalPoints: 100,
                difficulty: 'Intermedio',
                activityType: { code: 'TALLER', name: 'Completar Código' },
              },
              {
                id: 203,
                title: 'Desafío de Código: Detector de Años Bisiestos',
                adaptiveWeight: 0.40,
                totalPoints: 100,
                difficulty: 'Intermedio',
                activityType: { code: 'PARCIAL', name: 'Código Python' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    classId: 1,
    title: 'Módulo 2: Estructuras de Repetición y Acumuladores',
    order: 2,
    isPublished: true,
    topics: [
      {
        id: 2,
        sectionId: 2,
        title: 'Tema 2: Ciclos Determinados e Indeterminados',
        order: 1,
        learningUnits: [
          {
            id: 3,
            topicId: 2,
            moduleId: 2,
            moduleTitle: 'Módulo 2: Estructuras de Repetición y Acumuladores',
            title: 'Ciclos for y while con Acumuladores',
            description: 'Iteraciones, rangos numéricos y patrones de acumulación para cálculo de sumatorias y contadores.',
            order: 1,
            status: 'por-iniciar',
            masteryPercentage: 20,
            contentMarkdown: `## Ciclos e Iteraciones

Los bucles permiten repetir un bloque de instrucciones múltiples veces.

### El ciclo \`for\` con \`range\`
\`\`\`python
total = 0
for i in range(1, 6):
    total += i
print("Suma total:", total) # 15
\`\`\`

### El ciclo \`while\`
\`\`\`python
contador = 0
while contador < 5:
    print(f"Iteración {contador}")
    contador += 1
\`\`\``,
            activities: [
              {
                id: 301,
                title: 'Quiz: Diferencias entre for y while',
                adaptiveWeight: 0.30,
                totalPoints: 100,
                difficulty: 'Intermedio',
                activityType: { code: 'AUTO-EVAL', name: 'Opción Múltiple' },
              },
              {
                id: 302,
                title: 'Desafío de Código: Sumatoria de Números Pares',
                adaptiveWeight: 0.70,
                totalPoints: 100,
                difficulty: 'Avanzado',
                activityType: { code: 'PARCIAL', name: 'Código Python' },
              },
            ],
          },
        ],
      },
    ],
  },

  // Curso 2: PENSAR-ALGO
  {
    id: 3,
    classId: 2,
    title: 'Módulo 1: Descomposición Modular y Funciones',
    order: 1,
    isPublished: true,
    topics: [
      {
        id: 3,
        sectionId: 3,
        title: 'Tema 1: Modularidad y Funciones Puras',
        order: 1,
        learningUnits: [
          {
            id: 4,
            topicId: 3,
            moduleId: 3,
            moduleTitle: 'Módulo 1: Descomposición Modular y Funciones',
            title: 'Definición de Funciones y Retorno de Valores',
            description: 'Diseño de subprogramas reutilizables, parámetros posicionales y cálculo de resultados puros.',
            order: 1,
            status: 'en-progreso',
            masteryPercentage: 55,
            contentMarkdown: `## Modularización con Funciones

Una función es un bloque de código con nombre que realiza una tarea específica y puede retornar un resultado.

\`\`\`python
def calcular_descuento(precio_base, porcentaje):
    \"\"\"Calcula el monto final con descuento aplicado.\"\"\"
    descuento = precio_base * (porcentaje / 100)
    return precio_base - descuento

total = calcular_descuento(150000, 15)
print("Total a pagar: " + str(total))
\`\`\``,
            activities: [
              {
                id: 401,
                title: 'Quiz: Parámetros y Valores de Retorno',
                adaptiveWeight: 0.30,
                totalPoints: 100,
                difficulty: 'Intermedio',
                activityType: { code: 'AUTO-EVAL', name: 'Opción Múltiple' },
              },
              {
                id: 402,
                title: 'Desafío de Código: Factorial Recursivo y Validación',
                adaptiveWeight: 0.70,
                totalPoints: 100,
                difficulty: 'Avanzado',
                activityType: { code: 'PARCIAL', name: 'Código Python' },
              },
            ],
          },
        ],
      },
    ],
  },
]

// Detalle de preguntas para el Workspace / Actividades
export const ACTIVIDADES_DETALLE: Record<number, any> = {
  // Actividad 101: MCQ Básico
  101: {
    id: 101,
    learningUnitId: 1,
    title: 'Quiz: Identificación de Tipos en Python',
    description: 'Identifica el tipo de dato primitivo que corresponde al literal dado.',
    difficulty: 'Básico',
    totalPoints: 100,
    attemptsAllowed: 3,
    attemptsUsed: 0,
    learningUnit: { id: 1, title: 'Variables y Tipos Primitivos en Python' },
    questions: [
      {
        id: 1001,
        type: 'mcq',
        question: '¿Qué tipo de dato produce la expresión `type(3.1416)` en Python 3?',
        config: {
          options: [
            { id: 'a', text: "<class 'int'>" },
            { id: 'b', text: "<class 'float'>" },
            { id: 'c', text: "<class 'str'>" },
            { id: 'd', text: "<class 'number'>" },
          ],
          correctOption: 'b',
          explanation: 'En Python, los números con parte decimal pertenecen a la clase float.',
        },
      },
    ],
  },

  // Actividad 102: FILL_CODE Básico
  102: {
    id: 102,
    learningUnitId: 1,
    title: 'Completar Código: Conversión de Tipos',
    description: 'Rellena el espacio en blanco con la función correcta para convertir texto a número entero.',
    difficulty: 'Básico',
    totalPoints: 100,
    attemptsAllowed: 3,
    attemptsUsed: 0,
    learningUnit: { id: 1, title: 'Variables y Tipos Primitivos en Python' },
    questions: [
      {
        id: 1002,
        type: 'fill_code',
        question: 'Completa la línea para convertir el texto `entrada` a un entero almacenable en `valor`:',
        config: {
          template: 'entrada = "125"\nvalor = ____(entrada)\nprint(valor + 5)',
          expectedAnswer: 'int',
          hint: 'Usa el constructor del tipo numérico sin decimales.',
        },
      },
    ],
  },

  // Actividad 103: CODING Básico
  103: {
    id: 103,
    learningUnitId: 1,
    title: 'Desafío de Código: Cálculo de Área y Perímetro',
    description: 'Escribe un programa que lea la base y la altura de un triángulo y calcule su área (base * altura / 2).',
    difficulty: 'Básico',
    totalPoints: 100,
    attemptsAllowed: 5,
    attemptsUsed: 1,
    learningUnit: { id: 1, title: 'Variables y Tipos Primitivos en Python' },
    questions: [
      {
        id: 1003,
        type: 'coding',
        question: 'Lee desde la entrada estándar dos líneas: la primera contiene la base (float) y la segunda la altura (float). Imprime el área con dos decimales.',
        config: {
          language: 'python',
          starterCode: `import sys

def main():
    # Leer líneas de entrada estándar
    lineas = sys.stdin.read().split()
    if not lineas:
        return
    base = float(lineas[0])
    altura = float(lineas[1])
    
    # Calcula el área e imprime el resultado:
    area = (base * altura) / 2
    print(f"{area:.2f}")

if __name__ == '__main__':
    main()
`,
          testCases: [
            { input: '10\n5', expected: '25.00' },
            { input: '7.5\n4', expected: '15.00' },
          ],
          hiddenTestCaseCount: 2,
          timeLimitMs: 2000,
        },
      },
    ],
  },

  // Actividad 201: MCQ Intermedio
  201: {
    id: 201,
    learningUnitId: 2,
    title: 'Quiz: Operadores Lógicos y Tablas de Verdad',
    description: 'Evalúa el resultado de expresiones booleanas compuestas.',
    difficulty: 'Intermedio',
    totalPoints: 100,
    attemptsAllowed: 3,
    attemptsUsed: 0,
    learningUnit: { id: 2, title: 'Estructuras Condicionales if / else' },
    questions: [
      {
        id: 2001,
        type: 'mcq',
        question: '¿Cuál es el valor resultante de la expresión `(5 > 3) and (2 > 10 or not False)`?',
        config: {
          options: [
            { id: 'a', text: 'False' },
            { id: 'b', text: 'True' },
            { id: 'c', text: 'None' },
            { id: 'd', text: 'Error de sintaxis' },
          ],
          correctOption: 'b',
          explanation: '(5 > 3) es True; not False es True; (2 > 10 or True) es True; True and True resulta en True.',
        },
      },
    ],
  },

  // Actividad 202: FILL_CODE Intermedio
  202: {
    id: 202,
    learningUnitId: 2,
    title: 'Completar Código: Clasificador de Calificaciones',
    description: 'Completa la palabra clave para la condición secundaria encadenada.',
    difficulty: 'Intermedio',
    totalPoints: 100,
    attemptsAllowed: 3,
    attemptsUsed: 0,
    learningUnit: { id: 2, title: 'Estructuras Condicionales if / else' },
    questions: [
      {
        id: 2002,
        type: 'fill_code',
        question: 'Completa la estructura condicional múltiple en Python:',
        config: {
          template: 'if calificacion >= 4.5:\n    estado = "Excelente"\n____ calificacion >= 3.0:\n    estado = "Aprobado"\nelse:\n    estado = "Reprobado"',
          expectedAnswer: 'elif',
          hint: 'Abreviatura de "else if" utilizada en Python.',
        },
      },
    ],
  },

  // Actividad 203: CODING Intermedio (Detector de Bisiestos)
  203: {
    id: 203,
    learningUnitId: 2,
    title: 'Desafío de Código: Detector de Años Bisiestos',
    description: 'Determina si un año dado es bisiesto siguiendo las reglas del calendario gregoriano.',
    difficulty: 'Intermedio',
    totalPoints: 100,
    attemptsAllowed: 5,
    attemptsUsed: 0,
    learningUnit: { id: 2, title: 'Estructuras Condicionales if / else' },
    questions: [
      {
        id: 2003,
        type: 'coding',
        question: 'Un año es bisiesto si es divisible por 4, excepto si es divisible por 100 pero no por 400. Lee un número entero de año y responde "BISIESTO" o "NO BISIESTO".',
        config: {
          language: 'python',
          starterCode: `import sys

def es_bisiesto(anio):
    # Escribe la lógica condicional aquí
    if (anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0):
        return "BISIESTO"
    return "NO BISIESTO"

def main():
    entrada = sys.stdin.read().strip()
    if not entrada:
        return
    anio = int(entrada)
    print(es_bisiesto(anio))

if __name__ == '__main__':
    main()
`,
          testCases: [
            { input: '2024', expected: 'BISIESTO' },
            { input: '1900', expected: 'NO BISIESTO' },
            { input: '2000', expected: 'BISIESTO' },
          ],
          hiddenTestCaseCount: 3,
          timeLimitMs: 2000,
        },
      },
    ],
  },

  // Actividad 302: CODING Avanzado (Sumatoria Pares)
  302: {
    id: 302,
    learningUnitId: 3,
    title: 'Desafío de Código: Sumatoria de Números Pares',
    description: 'Calcula la suma de todos los números pares en el rango de 1 hasta N inclusive.',
    difficulty: 'Avanzado',
    totalPoints: 100,
    attemptsAllowed: 5,
    attemptsUsed: 0,
    learningUnit: { id: 3, title: 'Ciclos for y while con Acumuladores' },
    questions: [
      {
        id: 3002,
        type: 'coding',
        question: 'Lee un entero N e imprime la suma de todos los números pares positivos menores o iguales a N.',
        config: {
          language: 'python',
          starterCode: `import sys

def main():
    entrada = sys.stdin.read().strip()
    if not entrada:
        return
    n = int(entrada)
    suma = sum(i for i in range(2, n + 1, 2))
    print(suma)

if __name__ == '__main__':
    main()
`,
          testCases: [
            { input: '10', expected: '30' },
            { input: '5', expected: '6' },
          ],
          hiddenTestCaseCount: 3,
          timeLimitMs: 2000,
        },
      },
    ],
  },
}

// Banco de ejercicios para reutilización por docentes
export const BANCO_EJERCICIOS_INICIAL = [
  {
    activityId: 103,
    title: 'Desafío de Código: Cálculo de Área y Perímetro',
    description: 'Cálculo de fórmulas geométricas básicas con entrada estándar.',
    learningUnitId: 1,
    unitTitle: 'Variables y Tipos Primitivos en Python',
    difficulty: 'Básico',
    type: 'coding',
    usageCount: 4,
  },
  {
    activityId: 203,
    title: 'Desafío de Código: Detector de Años Bisiestos',
    description: 'Condicionales compuestas y operadores aritméticos mod.',
    learningUnitId: 2,
    unitTitle: 'Estructuras Condicionales if / else',
    difficulty: 'Intermedio',
    type: 'coding',
    usageCount: 7,
  },
  {
    activityId: 302,
    title: 'Desafío de Código: Sumatoria de Números Pares',
    description: 'Iteración controlada y acumuladores con bucle for/while.',
    learningUnitId: 3,
    unitTitle: 'Ciclos for y while con Acumuladores',
    difficulty: 'Avanzado',
    type: 'coding',
    usageCount: 3,
  },
]

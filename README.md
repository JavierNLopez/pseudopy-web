# PseudoPy

**PseudoPy** es una aplicación web académica que traduce pseudocódigo en español a código Python. El proyecto integra conceptos fundamentales de compiladores, intérpretes y traductores, permitiendo visualizar el proceso de análisis léxico, sintáctico y semántico de un algoritmo escrito en pseudocódigo.

El sistema está diseñado como una herramienta educativa para apoyar el aprendizaje de programación, estructuras de control, análisis de lenguajes y generación de código.

---

## Descripción general

PseudoPy permite al usuario escribir pseudocódigo estructurado, analizarlo, traducirlo a Python y ejecutarlo directamente desde el navegador. Además, muestra diferentes componentes internos del proceso de traducción, como tokens, tabla de símbolos, traza de análisis, árbol AST visual, diagnóstico de errores y consola de ejecución.

El proyecto fue desarrollado como una aplicación web de una sola página usando **HTML, CSS y JavaScript**, integrando **Pyodide** para permitir la ejecución de código Python en el navegador sin necesidad de instalar Python localmente.

---

## Objetivo del proyecto

El objetivo principal de PseudoPy es demostrar, de forma visual e interactiva, cómo un programa escrito en pseudocódigo puede pasar por diferentes fases de análisis hasta convertirse en código Python ejecutable.

El proyecto busca representar las etapas básicas de un traductor:

1. Entrada de pseudocódigo.
2. Análisis léxico.
3. Generación de tokens.
4. Análisis sintáctico.
5. Análisis semántico.
6. Construcción de tabla de símbolos.
7. Generación de código Python.
8. Ejecución guiada.
9. Visualización de resultados.

---

## Objetivo académico

PseudoPy fue desarrollado con fines académicos para reforzar temas relacionados con:

- Traductores de lenguaje.
- Intérpretes.
- Compiladores.
- Análisis léxico.
- Análisis sintáctico.
- Análisis semántico.
- Tabla de símbolos.
- Generación de código.
- Árboles de análisis.
- Ejecución de programas.
- Validación de errores.

El sistema permite observar cómo una entrada escrita por el usuario se transforma progresivamente en un programa funcional en Python.

---

## Características principales

PseudoPy incluye las siguientes funcionalidades:

- Editor de pseudocódigo con diseño tipo entorno de desarrollo.
- Numeración de líneas.
- Traducción de pseudocódigo en español a Python.
- Análisis léxico.
- Generación de tabla de tokens.
- Clasificación de lexemas.
- Análisis sintáctico de estructuras.
- Detección de errores en bloques.
- Análisis semántico de variables y tipos.
- Tabla de símbolos.
- Árbol AST visual.
- Panel de inspección del proceso.
- Consola de ejecución integrada.
- Ejecución de código Python en navegador.
- Entrada de datos mediante ventanas modales.
- Validación de entradas numéricas.
- Ejemplos precargados.
- Copia del código Python generado.
- Descarga del código generado en archivo `.py`.
- Sección de palabras reservadas de Python.
- Interfaz responsiva para computadora y dispositivos móviles.

---

## Tecnologías utilizadas

El proyecto utiliza tecnologías web estándar, lo que facilita su ejecución en cualquier navegador moderno.

| Tecnología | Uso dentro del proyecto |
|---|---|
| HTML5 | Estructura principal de la aplicación |
| CSS3 | Diseño visual, responsividad y estilo tipo editor |
| JavaScript | Lógica del traductor, validaciones y ejecución |
| Pyodide | Ejecución de Python dentro del navegador |
| Python | Lenguaje de salida generado por el traductor |
| GitHub Pages | Publicación del sitio web |
| Git | Control de versiones |
| GitHub | Repositorio y despliegue del proyecto |

---

## Estructura del repositorio

La estructura básica del proyecto es la siguiente:

```text
pseudopy-web/
│
├── index.html
├── README.md
└── assets/

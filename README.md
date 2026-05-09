# PseudoPy

**PseudoPy** es una aplicación web académica desarrollada para traducir pseudocódigo en español a código Python. El proyecto integra análisis léxico, análisis sintáctico, análisis semántico, generación de código, visualización de tokens, árbol AST, consola de ejecución y una interfaz moderna inspirada en entornos de desarrollo como VS Code.

El objetivo principal del proyecto es apoyar el aprendizaje de los fundamentos de compiladores, intérpretes y traductores mediante una herramienta visual, interactiva y fácil de utilizar.

---

## Vista general del proyecto

PseudoPy permite escribir pseudocódigo estructurado y convertirlo automáticamente a Python. Además de generar el código, la aplicación muestra el proceso interno de traducción mediante diferentes módulos de análisis.

El sistema está diseñado para representar de forma clara las etapas principales de un traductor:

1. Lectura del pseudocódigo.
2. Análisis léxico.
3. Análisis sintáctico.
4. Análisis semántico.
5. Generación de código Python.
6. Ejecución guiada del programa.
7. Visualización de resultados.

---

## Características principales

- Editor de pseudocódigo con numeración de líneas.
- Traducción de pseudocódigo en español a Python.
- Validación de instrucciones y estructuras.
- Subrayado visual de errores en el editor.
- Tabla de tokens generados.
- Análisis léxico con clasificación de lexemas.
- Análisis sintáctico de bloques y estructuras.
- Análisis semántico de variables, tipos y lecturas.
- Tabla de símbolos.
- Árbol AST visual.
- Consola de ejecución integrada.
- Entrada de datos mediante ventanas modales.
- Ejemplos precargados de algoritmos.
- Botón para copiar el código Python generado.
- Descarga del código traducido en archivo `.py`.
- Sección de palabras reservadas de Python.
- Interfaz responsiva para computadora y dispositivos móviles.

---

## Tecnologías utilizadas

El proyecto fue desarrollado con tecnologías web básicas, sin necesidad de frameworks externos complejos.

- HTML5
- CSS3
- JavaScript
- Pyodide
- Python ejecutado en navegador
- GitHub Pages

---

## Estructura del proyecto

```text
pseudopy-web/
│
├── index.html
└── README.md

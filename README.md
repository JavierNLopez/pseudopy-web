# PseudoPy

PseudoPy es una aplicación web desarrollada en HTML, CSS y JavaScript que permite traducir pseudocódigo académico a código Python. El proyecto está orientado al análisis léxico, sintáctico y semántico básico, con una interfaz visual tipo editor de código y herramientas de apoyo para comprender el proceso de traducción.

## Descripción

El objetivo principal de PseudoPy es facilitar la conversión de instrucciones escritas en pseudocódigo estructurado hacia código Python funcional. Además de generar el código traducido, la aplicación muestra información relacionada con el análisis del programa, como tokens, traza de traducción, árbol AST visual, consola de ejecución y un panel de inspección del flujo tipo compilador.

Este proyecto fue desarrollado como parte de una práctica académica relacionada con traductores, intérpretes y conceptos básicos de compiladores.

## Características principales

- Traducción de pseudocódigo a Python.
- Editor visual con numeración de líneas.
- Interfaz oscura inspirada en editores modernos.
- Generación de código Python.
- Ejecución guiada del código generado.
- Consola de resultados integrada.
- Modal para captura de datos de entrada.
- Visualización de tokens.
- Visualización de traza del proceso.
- Árbol AST visual.
- Análisis léxico básico.
- Análisis sintáctico básico.
- Análisis semántico básico.
- Panel de inspección del flujo de traducción.
- Botones para cargar ejemplos.
- Descarga del código generado como archivo `.py`.
- Sección de palabras reservadas de Python.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Pyodide
- GitHub Pages

## Instrucciones soportadas

Actualmente el traductor reconoce instrucciones básicas de pseudocódigo como:

```text
INICIO
FIN
LEER
ESCRIBIR
SI
SINO
FIN_SI
MIENTRAS
FIN_MIENTRAS
PARA
FIN_PARA

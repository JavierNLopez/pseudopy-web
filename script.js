window.PseudoPyData = {
      ejemplos: {
        promedio: `INICIO

ESCRIBIR "SISTEMA DE PROMEDIO"
ESCRIBIR "¿Cuantas calificaciones?"
LEER cantidad COMO ENTERO

suma = 0

PARA i = 1 HASTA cantidad HACER
    ESCRIBIR "Ingresa calificación"
    LEER nota COMO ENTERO
    suma = suma + nota
FIN_PARA

promedio = suma / cantidad

SI promedio >= 70 ENTONCES
    ESCRIBIR "Aprobado"
SINO
    ESCRIBIR "Reprobado"
FIN_SI

FIN`,
        factorial: `INICIO

ESCRIBIR "FACTORIAL DE UN NUMERO"
LEER n COMO ENTERO

factorial = 1

PARA i = 1 HASTA n HACER
    factorial = factorial * i
FIN_PARA

ESCRIBIR "El factorial es:"
ESCRIBIR factorial

FIN`,
        validacion: `INICIO

ESCRIBIR "VALIDACIÓN DE EDAD"
LEER edad COMO ENTERO

SI edad >= 18 ENTONCES
    ESCRIBIR "Mayor de edad"
SINO
    ESCRIBIR "Menor de edad"
FIN_SI

FIN`,
        menu: `INICIO

ESCRIBIR "MENU PRINCIPAL"
ESCRIBIR "1. Sumar"
ESCRIBIR "2. Restar"
LEER opcion COMO ENTERO

SI opcion == 1 ENTONCES
    ESCRIBIR "Elegiste sumar"
SINO
    SI opcion == 2 ENTONCES
        ESCRIBIR "Elegiste restar"
    SINO
        ESCRIBIR "Opción no válida"
    FIN_SI
FIN_SI

FIN`,
        anidado: `INICIO

LEER filas COMO ENTERO
LEER columnas COMO ENTERO

PARA i = 1 HASTA filas HACER
    PARA j = 1 HASTA columnas HACER
        ESCRIBIR "Fila y columna"
    FIN_PARA
FIN_PARA

FIN`
      },
      palabrasReservadas: [
        {
          titulo: "Palabras clave de Python",
          items: [
            ["False","Valor booleano falso en Python."],["None","Representa la ausencia de valor o un valor nulo."],["True","Valor booleano verdadero en Python."],["and","Operador lógico que devuelve verdadero si ambas condiciones se cumplen."],["as","Permite asignar un alias en importaciones o capturar excepciones con un nombre."],["assert","Verifica que una condición sea verdadera y lanza un error si no lo es."],["async","Declara funciones o bloques asíncronos."],["await","Espera el resultado de una operación asíncrona dentro de una función async."],["break","Interrumpe inmediatamente un ciclo."],["class","Define una clase."],["continue","Salta a la siguiente iteración de un ciclo."],["def","Define una función."],["del","Elimina una referencia, variable, elemento o atributo."],["elif","Añade una condición adicional dentro de una estructura if."],["else","Define el bloque alternativo cuando una condición no se cumple."],["except","Captura errores dentro de un bloque try."],["finally","Bloque que se ejecuta siempre al finalizar un try."],["for","Crea un ciclo sobre una secuencia o iterable."],["from","Importa elementos específicos de un módulo."],["global","Indica que una variable dentro de una función pertenece al ámbito global."],["if","Evalúa una condición."],["import","Importa módulos o paquetes."],["in","Comprueba pertenencia en colecciones o se usa en ciclos for."],["is","Compara si dos referencias apuntan al mismo objeto."],["lambda","Crea una función anónima de una sola expresión."],["nonlocal","Indica que una variable pertenece a un ámbito externo no global."],["not","Operador lógico de negación."],["or","Operador lógico que devuelve verdadero si al menos una condición se cumple."],["pass","Instrucción vacía usada como marcador de posición."],["raise","Lanza una excepción manualmente."],["return","Devuelve un valor desde una función."],["try","Inicia un bloque para manejar excepciones."],["while","Crea un ciclo que se ejecuta mientras una condición sea verdadera."],["with","Gestiona recursos de forma segura, por ejemplo archivos o locks."],["yield","Devuelve un valor desde una función generadora sin terminarla por completo."]
          ]
        },
        {
          titulo: "Palabras clave suaves de Python",
          items: [
            ["match","Palabra clave suave usada en la sentencia match para comparación estructural de patrones."],["case","Palabra clave suave usada dentro de match para definir cada patrón."],["_","En un patrón case actúa como comodín y coincide con cualquier valor."],["type","Desde Python 3.12 también puede actuar como palabra clave suave en la sentencia type."]
          ]
        },
        {
          titulo: "Funciones integradas comunes",
          items: [
            ["print()","Muestra información en pantalla."],["input()","Lee datos ingresados por el usuario."],["len()","Devuelve la longitud de una secuencia o colección."],["type()","Devuelve el tipo de un objeto."],["range()","Genera secuencias de enteros, muy usada en ciclos for."],["int()","Convierte un valor a entero."],["float()","Convierte un valor a número decimal."],["str()","Convierte un valor a texto."],["bool()","Convierte un valor a booleano."],["list()","Convierte un iterable en lista."],["dict()","Crea o convierte datos a diccionario."],["set()","Crea un conjunto sin elementos repetidos."],["tuple()","Crea una tupla."],["sum()","Suma los elementos de un iterable."],["max()","Devuelve el valor máximo de una secuencia."],["min()","Devuelve el valor mínimo de una secuencia."],["abs()","Devuelve el valor absoluto de un número."],["round()","Redondea un número."],["sorted()","Devuelve una lista ordenada a partir de un iterable."],["enumerate()","Permite recorrer una secuencia junto con su índice."],["zip()","Combina varios iterables elemento a elemento."],["map()","Aplica una función a cada elemento de un iterable."],["filter()","Filtra elementos de un iterable según una condición."],["open()","Abre archivos para lectura o escritura."]
          ]
        },
        {
          titulo: "Tipos integrados comunes",
          items: [
            ["int","Tipo de dato entero."],["float","Tipo de dato decimal."],["str","Tipo de dato texto o cadena."],["bool","Tipo de dato lógico verdadero/falso."],["list","Tipo de dato lista mutable."],["tuple","Tipo de dato tupla inmutable."],["set","Tipo de dato conjunto sin repetidos."],["dict","Tipo de dato diccionario con pares clave-valor."],["complex","Tipo de dato para números complejos."],["bytes","Tipo de dato de secuencia de bytes inmutable."],["bytearray","Tipo de dato de secuencia de bytes mutable."],["frozenset","Versión inmutable de set."],["range","Tipo de dato que representa una secuencia de enteros."],["memoryview","Permite acceder a datos binarios sin copiarlos."]
          ]
        }
      ]
    };

    window.PseudoPyParser = (function () {
      function validarSimbolos(lineas) {
        const errores = [];
        const stack = [];
        lineas.forEach((linea, i) => {
          for (const c of linea) {
            if (c === "(" || c === "{") stack.push({ char: c, line: i + 1 });
            if (c === ")") {
              if (stack.length === 0 || stack[stack.length - 1].char !== "(") errores.push(`Error línea ${i + 1}: paréntesis ')' sin abrir.`);
              else stack.pop();
            }
            if (c === "}") {
              if (stack.length === 0 || stack[stack.length - 1].char !== "{") errores.push(`Error línea ${i + 1}: llave '}' sin abrir.`);
              else stack.pop();
            }
          }
        });
        stack.forEach(s => {
          if (s.char === "(") errores.push(`Error línea ${s.line}: falta cerrar ')'.`);
          if (s.char === "{") errores.push(`Error línea ${s.line}: falta cerrar '}'.`);
        });
        return errores;
      }

      function inferirTipoVariable(variable) {
        const v = variable.trim().toLowerCase();
        const enteros = ["cantidad","numero","número","edad","contador","indice","índice","i","j","k","dias","días","meses","anos","años","num","count","nota","n"];
        const decimales = ["promedio","precio","saldo","peso","altura","temperatura","distancia","monto","total","subtotal","decimal","porcentaje"];
        if (decimales.some(p => v.includes(p))) return "float";
        if (enteros.some(p => v === p || v.includes(p))) return "int";
        return "str";
      }

      function inferirTipoPorExpresion(expresion, variable, variables) {
        const e = expresion.trim();
        if (/\//.test(e)) return "float";
        if (/\d+\.\d+/.test(e)) return "float";
        if (/float\s*\(/i.test(e)) return "float";
        if (/int\s*\(/i.test(e)) return "int";
        if (/\b(promedio|precio|saldo|peso|altura|temperatura|distancia|monto|total|subtotal|decimal|porcentaje)\b/i.test(variable)) return "float";
        if (variables.has(variable)) return variables.get(variable);
        return inferirTipoVariable(variable);
      }

      function obtenerTipoLectura(textoLinea, variable) {
        const texto = textoLinea.toUpperCase();
        if (texto.includes("COMO ENTERO") || texto.includes(": ENTERO") || texto.includes(" COMO INT")) return "int";
        if (texto.includes("COMO DECIMAL") || texto.includes("COMO REAL") || texto.includes(": DECIMAL") || texto.includes(" COMO FLOAT")) return "float";
        if (texto.includes("COMO TEXTO") || texto.includes("COMO CADENA") || texto.includes(": TEXTO") || texto.includes(" COMO STR")) return "str";
        return inferirTipoVariable(variable);
      }

      function tokenizar(texto) {
        const tokens = [];
        const lineas = texto.split("\n");
        const reservadas = new Set(["INICIO","FIN","LEER","ESCRIBIR","SI","ENTONCES","SINO","FIN_SI","MIENTRAS","HACER","FIN_MIENTRAS","PARA","HASTA","FIN_PARA","COMO","ENTERO","DECIMAL","REAL","TEXTO","CADENA"]);
        lineas.forEach((linea, idx) => {
          const patron = /"[^"]*"|>=|<=|==|!=|=|\+|-|\*|\/|\(|\)|\{|\}|,|\b[A-Za-z_ÁÉÍÓÚáéíóúñÑ][\wÁÉÍÓÚáéíóúñÑ]*\b|\d+\.\d+|\d+/g;
          const encontrados = linea.match(patron) || [];
          encontrados.forEach(lexema => {
            let tipo = "Identificador";
            let observacion = "Variable o nombre simbólico.";
            if (reservadas.has(lexema.toUpperCase())) {
              tipo = "Palabra reservada";
              observacion = "Forma parte de la gramática del pseudocódigo.";
            } else if (/^".*"$/.test(lexema)) {
              tipo = "Cadena";
              observacion = "Literal de texto.";
            } else if (/^\d+\.\d+$/.test(lexema)) {
              tipo = "Número decimal";
              observacion = "Literal numérico decimal.";
            } else if (/^\d+$/.test(lexema)) {
              tipo = "Número entero";
              observacion = "Literal numérico entero.";
            } else if (/^(>=|<=|==|!=|=|\+|-|\*|\/)$/.test(lexema)) {
              tipo = "Operador";
              observacion = "Operador aritmético, relacional o de asignación.";
            }
            tokens.push({ linea: idx + 1, lexema, tipo, observacion });
          });
        });
        return tokens;
      }

      function registrarSimbolo(tabla, nombre, tipo, origen, linea) {
        if (!tabla.has(nombre)) tabla.set(nombre, { nombre, tipo, origen, linea });
      }

      function generarLectura(variable, tipo, baseIndent = 0) {
        const nivel = "    ".repeat(baseIndent);
        const interno = "    ".repeat(baseIndent + 1);
        if (tipo === "int") {
          return [
            `${nivel}while True:`,
            `${interno}try:`,
            `${interno}    ${variable} = int(input("Ingrese ${variable}: "))`,
            `${interno}    break`,
            `${interno}except ValueError:`,
            `${interno}    print("Entrada inválida. Debe ser un número entero.")`
          ].join("\n");
        }
        if (tipo === "float") {
          return [
            `${nivel}while True:`,
            `${interno}try:`,
            `${interno}    ${variable} = float(input("Ingrese ${variable}: "))`,
            `${interno}    break`,
            `${interno}except ValueError:`,
            `${interno}    print("Entrada inválida. Debe ser un número decimal.")`
          ].join("\n");
        }
        return `${nivel}${variable} = input("Ingrese ${variable}: ")`;
      }

      function sugerirCorreccion(linea) {
        const texto = linea.trim().toUpperCase();
        if (texto.startsWith("SI ") && !texto.includes("ENTONCES")) return "Sugerencia: agrega ENTONCES al final de la condición.";
        if (texto.startsWith("MIENTRAS ") && !texto.endsWith("HACER")) return "Sugerencia: agrega HACER al final del ciclo MIENTRAS.";
        if (texto.startsWith("PARA ") && !texto.endsWith("HACER")) return "Sugerencia: agrega HACER al final del ciclo PARA.";
        if (texto === "SINO") return "Sugerencia: verifica que exista un bloque SI abierto antes de SINO.";
        return "";
      }

      function analizarPseudocodigo(contenido) {
        const lineas = contenido.split("\n");
        const errores = [];
        const advertencias = [];
        const explicacion = [];
        const traza = [];
        const salida = [];
        const tokens = tokenizar(contenido);
        const erroresSimbolos = validarSimbolos(lineas);
        const variables = new Map();
        const tablaSimbolos = new Map();
        const lecturas = [];
        const pilaBloques = [];
        const palabrasIgnoradas = new Set(["and","or","not","True","False","None","int","float","str","range","print","input"]);
        let indent = 0;

        function tab() { return "    ".repeat(indent); }
        function marcarError(linea, mensaje) { errores.push(`Error línea ${linea}: ${mensaje}`); }

        erroresSimbolos.forEach(e => errores.push(e));

        lineas.forEach((linea, i) => {
          const numeroLinea = i + 1;
          const l = linea.trim();
          if (l === "") return;

          traza.push(`Línea ${numeroLinea}: ${l}`);

          if (l === "INICIO") { explicacion.push("El algoritmo inicia con INICIO."); return; }
          if (l === "FIN") { explicacion.push("El algoritmo finaliza con FIN."); return; }

          if (/^LEER\s+/i.test(l)) {
            const v = l.replace(/^LEER\s+/i, "").trim();
            const variable = v.split(/\s+COMO\s+/i)[0].split(/\s*:\s*/)[0].trim();
            const tipo = obtenerTipoLectura(v, variable);
            variables.set(variable, tipo);
            registrarSimbolo(tablaSimbolos, variable, tipo, "lectura", numeroLinea);
            lecturas.push({ variable, tipo, linea: numeroLinea });
            generarLectura(variable, tipo, indent).split("\n").forEach(r => salida.push(r));
            explicacion.push(`Se registra una lectura de datos para la variable ${variable} con tipo ${tipo}.`);
            return;
          }

          if (/^ESCRIBIR\s+/i.test(l)) {
            const v = l.replace(/^ESCRIBIR\s+/i, "").trim();
            salida.push(tab() + `print(${v})`);
            explicacion.push("Se genera una instrucción de salida en pantalla.");
            return;
          }

          if (/^SI\s+/i.test(l)) {
            if (!/\bENTONCES\b/i.test(l)) { marcarError(numeroLinea, "falta ENTONCES."); return; }
            const cond = l.replace(/^SI\s+/i, "").replace(/\s+ENTONCES$/i, "").trim();
            salida.push(tab() + `if ${cond}:`);
            pilaBloques.push({ tipo: "SI", linea: numeroLinea });
            indent++;
            explicacion.push("Se abre una estructura condicional if.");
            return;
          }

          if (l === "SINO") {
            if (!pilaBloques.length || pilaBloques[pilaBloques.length - 1].tipo !== "SI") { marcarError(numeroLinea, "SINO sin bloque SI previo."); return; }
            indent = Math.max(0, indent - 1);
            salida.push(tab() + "else:");
            indent++;
            return;
          }

          if (l === "FIN_SI") {
            if (!pilaBloques.length || pilaBloques[pilaBloques.length - 1].tipo !== "SI") { marcarError(numeroLinea, "FIN_SI sin bloque SI abierto."); return; }
            pilaBloques.pop(); indent = Math.max(0, indent - 1); return;
          }

          if (/^MIENTRAS\s+/i.test(l)) {
            if (!/\bHACER\b/i.test(l)) { marcarError(numeroLinea, "falta HACER al final del ciclo MIENTRAS."); return; }
            const cond = l.replace(/^MIENTRAS\s+/i, "").replace(/\s+HACER$/i, "").trim();
            salida.push(tab() + `while ${cond}:`);
            pilaBloques.push({ tipo: "MIENTRAS", linea: numeroLinea });
            indent++;
            explicacion.push("Se abre un ciclo while.");
            return;
          }

          if (l === "FIN_MIENTRAS") {
            if (!pilaBloques.length || pilaBloques[pilaBloques.length - 1].tipo !== "MIENTRAS") { marcarError(numeroLinea, "FIN_MIENTRAS sin ciclo abierto."); return; }
            pilaBloques.pop(); indent = Math.max(0, indent - 1); return;
          }

          if (/^PARA\s+/i.test(l)) {
            if (!/\bHACER\b/i.test(l)) { marcarError(numeroLinea, "falta HACER al final del ciclo PARA."); return; }
            const exp = l.replace(/^PARA\s+/i, "").replace(/\s+HACER$/i, "").trim();
            const partes = exp.split(/\bHASTA\b/i);
            if (partes.length < 2) { marcarError(numeroLinea, "sintaxis PARA incorrecta."); return; }
            const izquierda = partes[0].trim();
            const limite = partes[1].trim();
            if (!izquierda.includes("=")) { marcarError(numeroLinea, "falta '=' en la instrucción PARA."); return; }
            const variable = izquierda.split("=")[0].trim();
            const inicio = izquierda.split("=")[1].trim();
            variables.set(variable, "int");
            registrarSimbolo(tablaSimbolos, variable, "int", "control", numeroLinea);
            salida.push(tab() + `for ${variable} in range(int(${inicio}), int(${limite}) + 1):`);
            pilaBloques.push({ tipo: "PARA", linea: numeroLinea });
            indent++;
            explicacion.push("Se abre un ciclo for basado en range().");
            return;
          }

          if (l === "FIN_PARA") {
            if (!pilaBloques.length || pilaBloques[pilaBloques.length - 1].tipo !== "PARA") { marcarError(numeroLinea, "FIN_PARA sin ciclo PARA abierto."); return; }
            pilaBloques.pop(); indent = Math.max(0, indent - 1); return;
          }

          if (l.includes("=")) {
            const partesAsignacion = l.split("=");
            const variable = partesAsignacion[0].trim();
            const expresion = partesAsignacion.slice(1).join("=").trim();
            const identificadoresDerecha = expresion.match(/\b[A-Za-z_ÁÉÍÓÚáéíóúñÑ][\wÁÉÍÓÚáéíóúñÑ]*\b/g) || [];
            identificadoresDerecha.forEach(nombre => {
              if (!variables.has(nombre) && !palabrasIgnoradas.has(nombre)) {
                advertencias.push(`Advertencia línea ${numeroLinea}: la variable ${nombre} se usa antes de definirse.`);
              }
            });
            const tipoInferido = /\//.test(expresion) || /\d+\.\d+/.test(expresion) ? "float" : (variables.get(variable) || inferirTipoVariable(variable));
            variables.set(variable, tipoInferido);
            registrarSimbolo(tablaSimbolos, variable, tipoInferido, "asignación", numeroLinea);
            salida.push(tab() + l);
            explicacion.push(`Se genera una asignación para ${variable}.`);
            return;
          }

          const sugerencia = sugerirCorreccion(l);
          marcarError(numeroLinea, `instrucción no reconocida → ${l}${sugerencia ? " | " + sugerencia : ""}`);
        });

        if (pilaBloques.length > 0) pilaBloques.forEach(b => errores.push(`Error línea ${b.linea}: bloque ${b.tipo} sin cierre.`));

        return {
          python: salida.join("\n"),
          tablaSimbolos: Array.from(tablaSimbolos.values()),
          tokens,
          errores,
          advertencias,
          explicacion,
          traza,
          variables,
          lecturas,
          resumenLexico: tokens.length ? `Se identificaron ${tokens.length} tokens.` : "No se detectaron tokens.",
          resumenSintactico: errores.length === 0 ? "La estructura general es consistente." : "Se detectaron inconsistencias estructurales.",
          resumenSemantico: lecturas.length > 0 ? `Se infirieron ${lecturas.length} lecturas de datos.` : "No se detectaron lecturas de datos.",
          observaciones: advertencias.length > 0 ? advertencias.join(" ") : "No se encontraron observaciones semánticas relevantes."
        };
      }

      return { validarSimbolos, inferirTipoVariable, obtenerTipoLectura, tokenizar, analizarPseudocodigo };
    })();

    window.PseudoPyRenderer = (function () {
      function escaparHtml(str) {
        return String(str)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }

      function mostrarEstado(tipo, mensaje) {
        document.getElementById("estado").innerHTML = `<div class="alert ${tipo}">${mensaje}</div>`;
      }

      function limpiarEstado() { document.getElementById("estado").innerHTML = ""; }
      function renderPython(texto) { document.getElementById("python").textContent = texto || ""; }
      function renderExplicacion(lista) {
        document.getElementById("explicacion").innerHTML = lista.length ? "<b>Explicación de la traducción:</b><br>" + lista.map(e => escaparHtml(e)).join("<br>") : "No hubo explicación disponible.";
      }
      function renderTraza(lista) {
        if (!lista.length) {
          document.getElementById("traza").innerHTML = "No hay traza disponible.";
          return;
        }
        document.getElementById("traza").innerHTML = '<ul class="trace-list">' + lista.map((e, i) => `<li class="trace-item"><strong>Paso ${i + 1}</strong><span>${escaparHtml(e)}</span></li>`).join("") + '</ul>';
      }
      function claseToken(tipo) {
        const t = String(tipo).toLowerCase();
        if (t.includes("reservada")) return "token-reservada";
        if (t.includes("identificador")) return "token-identificador";
        if (t.includes("número") || t.includes("numero")) return "token-numero";
        if (t.includes("cadena")) return "token-cadena";
        if (t.includes("operador")) return "token-operador";
        return "token-otro";
      }

      function renderTablaTokens(tokens) {
        const body = document.getElementById("tablaTokensBody");
        if (!tokens.length) { body.innerHTML = '<tr><td colspan="5">No hay tokens para mostrar todavía.</td></tr>'; return; }
        body.innerHTML = tokens.map((t, idx) => `<tr><td>${idx + 1}</td><td>${t.linea}</td><td><code>${escaparHtml(t.lexema)}</code></td><td><span class="token-badge ${claseToken(t.tipo)}">${escaparHtml(t.tipo)}</span></td><td>${escaparHtml(t.observacion)}</td></tr>`).join("");
      }
      function renderTablaSimbolos(simbolos) {
        const body = document.getElementById("tablaSimbolosBody");
        if (!simbolos || !simbolos.length) { body.innerHTML = '<tr><td colspan="4">No hay símbolos para mostrar todavía.</td></tr>'; return; }
        body.innerHTML = simbolos.map(s => `<tr><td><code>${escaparHtml(s.nombre)}</code></td><td>${escaparHtml(s.tipo)}</td><td>${escaparHtml(s.origen)}</td><td>${s.linea}</td></tr>`).join("");
      }
      function resumenBloques(traza) {
        const bloques = ["SI", "SINO", "FIN_SI", "PARA", "FIN_PARA", "MIENTRAS", "FIN_MIENTRAS"];
        let total = 0;
        for (const linea of traza || []) {
          if (bloques.some(b => linea.includes(b))) total += 1;
        }
        return total || (traza ? traza.length : 0);
      }

      function renderAnalisis(res) {
        document.getElementById("analisisLexicoResumen").textContent = res.resumenLexico;
        document.getElementById("analisisSintacticoResumen").textContent = res.resumenSintactico;
        document.getElementById("analisisSemanticoResumen").textContent = res.resumenSemantico;
        document.getElementById("analisisObservaciones").textContent = res.observaciones;

        const sintactico = [];
        sintactico.push(`Estado general: ${res.errores.length ? "con errores" : "correcto"}.`);
        sintactico.push(`Bloques y estructuras revisados: ${res.traza.length}.`);
        if (res.errores.length) {
          sintactico.push(`Errores detectados: ${res.errores.slice(0, 3).join(" | ")}${res.errores.length > 3 ? "..." : ""}`);
        } else {
          sintactico.push("No se encontraron errores de estructura en los bloques.");
        }

        const semantico = [];
        semantico.push(`Variables: ${res.variables.size ? Array.from(res.variables.entries()).map(([v, t]) => `${v} (${t})`).join(", ") : "ninguna"}.`);
        semantico.push(`Lecturas: ${res.lecturas.length ? res.lecturas.map(l => `${l.variable} (línea ${l.linea})`).join(", ") : "ninguna"}.`);
        if (res.advertencias.length) {
          semantico.push(`Advertencias: ${res.advertencias.slice(0, 3).join(" | ")}${res.advertencias.length > 3 ? "..." : ""}`);
        } else {
          semantico.push("No se encontraron observaciones semánticas relevantes.");
        }

        document.getElementById("analisisSintacticoDetalle").innerHTML = `<ul>${sintactico.map(item => `<li>${escaparHtml(item)}</li>`).join("")}</ul>`;
        document.getElementById("analisisSemanticoDetalle").innerHTML = `<ul>${semantico.map(item => `<li>${escaparHtml(item)}</li>`).join("")}</ul>`;

        const sintacticoEstado = document.getElementById("sintacticoEstado");
        const semanticoEstado = document.getElementById("semanticoEstado");
        sintacticoEstado.textContent = res.errores.length ? "Con errores" : "Correcto";
        sintacticoEstado.className = `analysis-status-pill ${res.errores.length ? "err" : "ok"}`;
        semanticoEstado.textContent = res.advertencias.length ? "Con advertencias" : "Correcto";
        semanticoEstado.className = `analysis-status-pill ${res.advertencias.length ? "warn" : "ok"}`;

        const detalle = [];
        detalle.push(`<b>Variables detectadas:</b> ${res.variables.size ? Array.from(res.variables.entries()).map(([v, t]) => `${escaparHtml(v)} (${escaparHtml(t)})`).join(", ") : "Ninguna."}`);
        detalle.push(`<b>Lecturas detectadas:</b> ${res.lecturas.length ? res.lecturas.map(l => `${escaparHtml(l.variable)} en línea ${l.linea}`).join(", ") : "Ninguna."}`);
        if (res.advertencias.length) detalle.push(`<b>Advertencias:</b><br>${res.advertencias.map(a => escaparHtml(a)).join("<br>")}`);
        if (res.errores.length) detalle.push(`<b>Errores:</b><br>${res.errores.map(a => escaparHtml(a)).join("<br>")}`);
        document.getElementById("analisisDetalle").innerHTML = detalle.join("<br><br>");
      }
      function renderInspector(res) {
        const ast = document.getElementById("inspectorAst");
        const errores = document.getElementById("inspectorErrores");
        const semantica = document.getElementById("inspectorSemantica");
        const ejecucion = document.getElementById("inspectorEjecucion");
        const pipeline = document.getElementById("inspectorPipeline");
        if (!ast || !errores || !semantica || !ejecucion || !pipeline) return;
        const totalErrores = res.errores ? res.errores.length : 0;
        const totalAdvertencias = res.advertencias ? res.advertencias.length : 0;
        const bloques = resumenBloques(res.traza || []);
        ast.innerHTML = "Se generó un árbol con <code>" + bloques + "</code> bloque(s) principales y <code>" + res.traza.length + "</code> paso(s) de análisis.";
        errores.innerHTML = totalErrores ? "Se detectaron <code>" + totalErrores + "</code> error(es). Revisa las líneas subrayadas en el editor y la pestaña de tokens." : "No hay errores sintácticos marcados. El editor queda listo para ejecutar.";
        semantica.innerHTML = "Variables: <code>" + res.variables.size + "</code> · Lecturas: <code>" + res.lecturas.length + "</code> · Advertencias: <code>" + totalAdvertencias + "</code>.";
        ejecucion.innerHTML = "Python generado con <code>" + res.python.split("\n").filter(Boolean).length + "</code> línea(s). Usa Consola para ver entradas y resultados.";
        const pasos = [
          ["Léxico", res.tokens.length + " tokens detectados.", "OK"],
          ["Sintáctico", totalErrores ? totalErrores + " error(es) de estructura." : "Estructura correcta.", totalErrores ? "Revisar" : "OK"],
          ["Semántico", totalAdvertencias ? totalAdvertencias + " advertencia(s)." : "Tipos y lecturas inferidos.", totalAdvertencias ? "Aviso" : "OK"],
          ["Generación", res.python ? "Código Python disponible." : "Sin código generado.", res.python ? "OK" : "Pendiente"]
        ];
        pipeline.innerHTML = pasos.map((p, i) => "<div class=\"pipeline-step\"><div class=\"pipeline-icon\">" + (i + 1) + "</div><div><b>" + escaparHtml(p[0]) + "</b><span>" + escaparHtml(p[1]) + "</span></div><em class=\"pipeline-pill\">" + escaparHtml(p[2]) + "</em></div>").join("");
      }

      function renderResultados(res) {
        renderPython(res.python); renderExplicacion(res.explicacion); renderTraza(res.traza); renderTablaTokens(res.tokens); renderTablaSimbolos(res.tablaSimbolos); renderAnalisis(res); renderInspector(res);
      }
      function obtenerClaseCategoria(titulo) {
        if (titulo.toLowerCase().includes("suaves")) return "keyword-purple";
        if (titulo.toLowerCase().includes("funciones")) return "keyword-green";
        if (titulo.toLowerCase().includes("tipos")) return "keyword-yellow";
        return "keyword-blue";
      }
      function renderPalabras(palabrasReservadas, filtro = "") {
        const cont = document.getElementById("lista-palabras");
        const sinResultados = document.getElementById("sinResultadosPalabras");
        const texto = filtro.trim().toLowerCase();
        let html = "";
        let coincidencias = 0;
        if (texto) {
          palabrasReservadas.forEach(grupo => {
            grupo.items.forEach(([palabra, descripcion]) => {
              const coincide = palabra.toLowerCase().includes(texto) || descripcion.toLowerCase().includes(texto);
              if (!coincide) return;
              coincidencias += 1;
              html += `<div class="keyword-card ${obtenerClaseCategoria(grupo.titulo)}"><span>${palabra}</span><p>${descripcion}</p></div>`;
            });
          });
        } else {
          palabrasReservadas.forEach(grupo => {
            html += `<div class="section-title">${grupo.titulo}</div>`;
            grupo.items.forEach(([palabra, descripcion]) => {
              coincidencias += 1;
              html += `<div class="keyword-card ${obtenerClaseCategoria(grupo.titulo)}"><span>${palabra}</span><p>${descripcion}</p></div>`;
            });
          });
        }
        cont.innerHTML = html || "";
        if (sinResultados) sinResultados.style.display = coincidencias === 0 ? "block" : "none";
      }
      function activarTab(id) {
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.target === id));
        document.querySelectorAll(".output-section").forEach(sec => sec.classList.toggle("active", sec.id === id));
      }
      return { escaparHtml, mostrarEstado, limpiarEstado, renderResultados, renderPalabras, activarTab, renderInspector };
    })();

    window.PseudoPyRuntime = (function () {
      let pyodide = null;
      function normalizeConsoleChunk(msg) {
        return String(msg).replace(/\r\n/g, "\n");
      }
      async function cargarPyodideSiHaceFalta(mostrarEstado) {
        if (pyodide) return pyodide;
        mostrarEstado("info", "Cargando motor de Python...");
        if (!window.loadPyodide) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js";
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        }
        pyodide = await window.loadPyodide();
        mostrarEstado("success", "Motor de Python cargado correctamente.");
        return pyodide;
      }

      async function ejecutarCodigoPython(codigo, entradas, ponerConsola, appendConsola, mostrarEstado) {
        const py = await cargarPyodideSiHaceFalta(mostrarEstado);
        const entradaLiteral = JSON.stringify(entradas.map(v => String(v)));
        const runtime = [
          `__entradas = iter(${entradaLiteral})`,
          "",
          'def input(prompt=""):',
          "    try:",
          "        valor = next(__entradas)",
          "        if prompt:",
          '            print(f"{prompt}{valor}")',
          "        else:",
          "            print(valor)",
          "        return valor",
          "    except StopIteration:",
          '        raise RuntimeError("No hay suficientes entradas para ejecutar el programa")',
          ""
        ].join("\n");
        py.setStdout({ batched: (msg) => appendConsola(msg) });
        py.setStderr({ batched: (msg) => appendConsola("ERROR: " + msg) });
        ponerConsola("Ejecutando código Python...\n");
        await py.runPythonAsync(runtime + "\n" + codigo);
      }
      return { ejecutarCodigoPython };
    })();

    document.addEventListener("DOMContentLoaded", () => {
      const { ejemplos, palabrasReservadas } = window.PseudoPyData;
      const P = window.PseudoPyParser;
      const R = window.PseudoPyRenderer;
      const RT = window.PseudoPyRuntime;

      const pseudo = document.getElementById("pseudo");
      const consoleBox = document.getElementById("console");
      const consoleState = document.getElementById("consoleState");
      const btnEjecutar = document.getElementById("btnEjecutar");
      let traduccionLista = false;
      let ultimoResultado = null;
      let modalResolve = null;

      function mostrarPantalla(id) {
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        document.getElementById(id).classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.mostrarPantalla = mostrarPantalla;

      function activarTab(id) { R.activarTab(id); }

      function setExecutionReady(ready) {
        traduccionLista = ready;
        btnEjecutar.disabled = !ready;
        btnEjecutar.title = ready ? "Ejecutar el código traducido" : "Primero presiona Traducir";
      }

      function actualizarMetricas() {
        const contenido = pseudo.value;
        const lineas = contenido.trim() ? contenido.split("\n").length : 0;
        const tokens = P.tokenizar(contenido).length;
        const bloques = (contenido.match(/\b(SI|MIENTRAS|PARA)\b/g) || []).length;
        document.getElementById("metricLineas").textContent = lineas;
        document.getElementById("metricTokens").textContent = tokens;
        document.getElementById("metricBloques").textContent = bloques;
        document.getElementById("metricErrores").textContent = ultimoResultado?.errores?.length || 0;
      }

      function extraerLineasConError(errores = []) {
        const set = new Set();
        errores.forEach(error => {
          const m = String(error).match(/l[ií]nea\s+(\d+)/i);
          if (m) set.add(Number(m[1]));
        });
        return set;
      }

      function escaparEditor(texto) {
        return String(texto).replace(/[&<>]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[c]));
      }

      function pintarLineaEditor(linea) {
        let html = escaparEditor(linea);
        html = html.replace(/("[^"]*"|'[^']*')/g, '<span class="str">$1</span>');
        html = html.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="num">$1</span>');
        html = html.replace(/\b(INICIO|FIN|LEER|ESCRIBIR|SI|SINO|ENTONCES|MIENTRAS|HACER|FIN_SI|FIN_MIENTRAS|PARA|HASTA|FIN_PARA|COMO|ENTERO|DECIMAL|TEXTO)\b/g, '<span class="kw">$1</span>');
        return html || " ";
      }

      function actualizarEditorVisual(errores = []) {
        const lineNumbers = document.getElementById("lineNumbers");
        const highlight = document.getElementById("editorHighlight");
        const errorList = document.getElementById("editorErrorList");
        const lineas = pseudo.value.split("\n");
        const errorLines = extraerLineasConError(errores);
        lineNumbers.innerHTML = lineas.map((_, i) => {
          const n = i + 1;
          return `<div class="line-number ${errorLines.has(n) ? "has-error" : ""}">${n}</div>`;
        }).join("");
        highlight.innerHTML = lineas.map((linea, i) => {
          const n = i + 1;
          const cls = errorLines.has(n) ? "err-line" : "ok-line";
          return `<span class="${cls}">${pintarLineaEditor(linea)}</span>`;
        }).join("");
        if (errores.length) {
          errorList.classList.add("show");
          errorList.innerHTML = errores.map(e => `• ${R.escaparHtml(e)}`).join("<br>");
        } else {
          errorList.classList.remove("show");
          errorList.innerHTML = "";
        }
      }

      function sincronizarScrollEditor() {
        document.getElementById("editorHighlight").scrollTop = pseudo.scrollTop;
        document.getElementById("lineNumbers").scrollTop = pseudo.scrollTop;
      }

      function construirASTVisual(contenido) {
        const root = { tipo: "Programa", valor: "PseudoPy", linea: 0, hijos: [] };
        const pila = [root];
        const lineas = contenido.split("\n");
        lineas.forEach((linea, index) => {
          const l = linea.trim();
          if (!l) return;
          const n = index + 1;
          const actual = pila[pila.length - 1];
          let nodo = null;
          if (l === "INICIO") nodo = { tipo: "Inicio", valor: "entrada", linea: n, hijos: [] };
          else if (l === "FIN") nodo = { tipo: "Fin", valor: "salida", linea: n, hijos: [] };
          else if (/^LEER\s+/i.test(l)) nodo = { tipo: "Lectura", valor: l.replace(/^LEER\s+/i, ""), linea: n, hijos: [] };
          else if (/^ESCRIBIR\s+/i.test(l)) nodo = { tipo: "Escritura", valor: l.replace(/^ESCRIBIR\s+/i, ""), linea: n, hijos: [] };
          else if (/^SI\s+/i.test(l)) {
            nodo = { tipo: "Condicional", valor: l.replace(/^SI\s+/i, "").replace(/\s+ENTONCES$/i, ""), linea: n, hijos: [] };
            actual.hijos.push(nodo); pila.push(nodo); return;
          } else if (l === "SINO") {
            if (pila.length > 1) pila.pop();
            nodo = { tipo: "Alternativa", valor: "else", linea: n, hijos: [] };
            pila[pila.length - 1].hijos.push(nodo); pila.push(nodo); return;
          } else if (l === "FIN_SI") { if (pila.length > 1) pila.pop(); return; }
          else if (/^MIENTRAS\s+/i.test(l)) {
            nodo = { tipo: "CicloMientras", valor: l.replace(/^MIENTRAS\s+/i, "").replace(/\s+HACER$/i, ""), linea: n, hijos: [] };
            actual.hijos.push(nodo); pila.push(nodo); return;
          } else if (l === "FIN_MIENTRAS") { if (pila.length > 1) pila.pop(); return; }
          else if (/^PARA\s+/i.test(l)) {
            nodo = { tipo: "CicloPara", valor: l.replace(/^PARA\s+/i, "").replace(/\s+HACER$/i, ""), linea: n, hijos: [] };
            actual.hijos.push(nodo); pila.push(nodo); return;
          } else if (l === "FIN_PARA") { if (pila.length > 1) pila.pop(); return; }
          else if (l.includes("=")) nodo = { tipo: "Asignación", valor: l, linea: n, hijos: [] };
          else nodo = { tipo: "NodoNoReconocido", valor: l, linea: n, hijos: [] };
          actual.hijos.push(nodo);
        });
        renderAST(root);
      }

      function renderAST(nodo) {
        const astView = document.getElementById("astView");
        if (!nodo || !nodo.hijos || nodo.hijos.length === 0) {
          astView.innerHTML = '<div class="ast-empty">No hay nodos para visualizar.</div>';
          return;
        }
        function nodoHTML(n) {
          const linea = n.linea ? `<span class="line">L${n.linea}</span>` : "";
          const valor = n.valor ? `<span class="value">${R.escaparHtml(n.valor)}</span>` : "";
          const hijos = n.hijos?.length ? `<ul>${n.hijos.map(nodoHTML).join("")}</ul>` : "";
          return `<li><div class="ast-node"><span class="type">${R.escaparHtml(n.tipo)}</span>${linea}${valor}</div>${hijos}</li>`;
        }
        astView.innerHTML = `<ul>${nodoHTML(nodo)}</ul>`;
      }


      function renderVacio() {
        R.renderResultados({
          python: "",
          explicacion: [],
          traza: [],
          tokens: [],
          tablaSimbolos: [],
          advertencias: [],
          errores: [],
          variables: new Map(),
          lecturas: [],
          resumenLexico: "Aún no se ha generado el análisis.",
          resumenSintactico: "Aún no se ha generado el análisis.",
          resumenSemantico: "No hay lecturas detectadas.",
          observaciones: "No hay observaciones todavía."
        });
        document.getElementById("astView").innerHTML = '<div class="ast-empty">Traduce el pseudocódigo para visualizar el árbol AST.</div>';
        actualizarEditorVisual([]);
        setExecutionReady(false);
      }

      function traducir() {
        const contenido = pseudo.value.trim();
        activarTab("salida-python");
        if (!contenido) {
          ultimoResultado = null;
          renderVacio();
          R.mostrarEstado("error", "Escribe pseudocódigo antes de traducir.");
          actualizarEditorVisual([]);
          actualizarMetricas();
          return;
        }
        const res = P.analizarPseudocodigo(contenido);
        ultimoResultado = res;
        R.renderResultados(res);
        actualizarEditorVisual(res.errores);
        construirASTVisual(contenido);

        if (res.errores.length > 0) {
          setExecutionReady(false);
          const resumen = res.errores.slice(0, 3).map(R.escaparHtml).join("<br>");
          const extra = res.errores.length > 3 ? `<br><small>Y ${res.errores.length - 3} error(es) más...</small>` : "";
          R.mostrarEstado("error", `Corrige los errores antes de ejecutar.<br>${resumen}${extra}`);
        } else if (res.advertencias.length > 0) {
          setExecutionReady(true);
          R.mostrarEstado("warning", `Traducción realizada con advertencias.<br>${res.advertencias.map(a => R.escaparHtml(a)).join("<br>")}`);
        } else {
          setExecutionReady(true);
          R.mostrarEstado("success", "Traducción correcta y análisis completado sin errores.");
        }
        actualizarMetricas();
      }

      async function copiarPython() {
        const codigo = document.getElementById("python").textContent.trim();
        if (!codigo) { R.mostrarEstado("error", "Primero traduce el pseudocódigo."); return; }
        try { await navigator.clipboard.writeText(codigo); R.mostrarEstado("success", "Código Python copiado al portapapeles."); }
        catch { R.mostrarEstado("error", "No se pudo copiar automáticamente."); }
      }

      function descargarPython() {
        const codigo = document.getElementById("python").textContent.trim();
        if (!codigo) { R.mostrarEstado("error", "Primero traduce el pseudocódigo."); return; }
        const blob = new Blob([codigo], { type: "text/x-python;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const enlace = document.createElement("a");
        enlace.href = url;
        enlace.download = "traducido.py";
        document.body.appendChild(enlace);
        enlace.click();
        enlace.remove();
        URL.revokeObjectURL(url);
        R.mostrarEstado("success", "Archivo Python descargado correctamente.");
      }

      function limpiarTodo() {
        pseudo.value = "";
        document.getElementById("python").textContent = "";
        document.getElementById("explicacion").innerHTML = "Aquí aparecerá la explicación de la traducción.";
        document.getElementById("traza").innerHTML = "Aquí aparecerá la traza estructurada del algoritmo.";
        document.getElementById("analisisSintacticoDetalle").textContent = "Aún no se ha generado el análisis sintáctico.";
        document.getElementById("analisisSemanticoDetalle").textContent = "Aún no se ha generado el análisis semántico.";
        document.getElementById("analisisDetalle").innerHTML = "Traduce un pseudocódigo para ver aquí el resumen técnico del proceso de análisis.";
        document.getElementById("analisisLexicoResumen").textContent = "Aún no se ha generado el análisis.";
        document.getElementById("analisisSintacticoResumen").textContent = "Aún no se ha generado el análisis.";
        document.getElementById("analisisSemanticoResumen").textContent = "Aún no se ha generado el análisis.";
        document.getElementById("analisisObservaciones").textContent = "No hay observaciones todavía.";
        document.getElementById("sintacticoEstado").textContent = "Pendiente";
        document.getElementById("sintacticoEstado").className = "analysis-status-pill";
        document.getElementById("semanticoEstado").textContent = "Pendiente";
        document.getElementById("semanticoEstado").className = "analysis-status-pill";
        document.querySelectorAll(".analysis-card-detail").forEach(detalle => detalle.classList.remove("open"));
        document.querySelectorAll(".analysis-more-btn").forEach(btn => btn.textContent = "Expandir detalle");
        document.getElementById("tablaTokensBody").innerHTML = '<tr><td colspan="5">No hay tokens para mostrar todavía.</td></tr>';
        document.getElementById("tablaSimbolosBody").innerHTML = '<tr><td colspan="4">No hay símbolos para mostrar todavía.</td></tr>';
        document.getElementById("astView").innerHTML = '<div class="ast-empty">Traduce el pseudocódigo para visualizar el árbol AST.</div>';
        consoleBox.textContent = "Consola lista.\n";
        consoleState.textContent = "Lista";
        actualizarEditorVisual([]);
        R.limpiarEstado();
        ultimoResultado = null;
        setExecutionReady(false);
        actualizarMetricas();
      }

      function cargarEjemplo(nombre) {
        limpiarTodo();
        pseudo.value = ejemplos[nombre] || ejemplos.promedio;
        setExecutionReady(false);
        R.mostrarEstado("info", "Ejemplo cargado. Presiona Traducir antes de ejecutar.");
        actualizarEditorVisual([]);
        actualizarMetricas();
      }

      function openModal(title, label, tipo = "str") {
        return new Promise((resolve) => {
          const backdrop = document.getElementById("modalBackdrop");
          const modalTitle = document.getElementById("modalTitle");
          const modalLabel = document.getElementById("modalLabel");
          const modalExample = document.getElementById("modalExample");
          const modalInput = document.getElementById("modalInput");
          const modalError = document.getElementById("modalError");
          const acceptBtn = document.getElementById("acceptModalBtn");
          const cancelBtn = document.getElementById("cancelModalBtn");

          modalTitle.textContent = title;
          modalLabel.textContent = `${label} ${tipo === "int" ? "(entero)" : tipo === "float" ? "(decimal)" : "(texto)"}`;
          modalExample.textContent = tipo === "int" ? "Ejemplo: 18" : tipo === "float" ? "Ejemplo: 4.5" : "Ejemplo: Hola mundo";
          modalInput.value = "";
          modalError.textContent = "";
          backdrop.classList.add("show");

          function cleanup() {
            backdrop.classList.remove("show");
            acceptBtn.removeEventListener("click", onAccept);
            cancelBtn.removeEventListener("click", onCancel);
            modalInput.removeEventListener("keydown", onKeyDown);
            modalResolve = null;
          }

          function onAccept() {
            const value = modalInput.value.trim();
            if (!value) {
              modalError.textContent = "No puedes dejar este campo vacío.";
              return;
            }
            if (tipo === "int" && !/^-?\d+$/.test(value)) {
              modalError.textContent = "Debes escribir un número entero válido.";
              return;
            }
            if (tipo === "float" && Number.isNaN(Number(value))) {
              modalError.textContent = "Debes escribir un número decimal válido.";
              return;
            }
            cleanup();
            resolve(value);
          }

          function onCancel() {
            cleanup();
            resolve(null);
          }

          function onKeyDown(e) {
            if (e.key === "Enter") onAccept();
            if (e.key === "Escape") onCancel();
          }

          acceptBtn.addEventListener("click", onAccept);
          cancelBtn.addEventListener("click", onCancel);
          modalInput.addEventListener("keydown", onKeyDown);
          setTimeout(() => modalInput.focus(), 50);
        });
      }

      async function pedirEntradasPseudocodigo() {
        const lineas = pseudo.value.split("\n").map(l => l.trim()).filter(Boolean);
        const valores = {};
        const entradas = [];

        for (let i = 0; i < lineas.length; i++) {
          const l = lineas[i];

          if (/^LEER\s+/i.test(l)) {
            const v = l.replace(/^LEER\s+/i, "").trim();
            const variable = v.split(/\s+COMO\s+/i)[0].split(/\s*:\s*/)[0].trim();
            const tipo = P.obtenerTipoLectura(v, variable);
            const etiqueta = /^(cantidad|n|total)$/i.test(variable) ? "Ingrese cantidad de notas" : `Ingrese ${variable}`;
            const valor = await openModal("Ingreso de datos", etiqueta, tipo);
            if (valor === null) throw new Error("Ejecución cancelada por el usuario.");
            valores[variable] = valor;
            entradas.push(valor);
            continue;
          }

          if (/^PARA\s+/i.test(l)) {
            const exp = l.replace(/^PARA\s+/i, "").replace(/\s+HACER$/i, "").trim();
            const partes = exp.split(/\bHASTA\b/i);
            if (partes.length < 2) continue;
            const limiteTexto = partes[1].trim();
            const innerReads = [];

            let j = i + 1;
            while (j < lineas.length && lineas[j] !== "FIN_PARA") {
              const inner = lineas[j].trim();
              if (/^LEER\s+/i.test(inner)) {
                const v2 = inner.replace(/^LEER\s+/i, "").trim();
                const variable2 = v2.split(/\s+COMO\s+/i)[0].split(/\s*:\s*/)[0].trim();
                const tipo2 = P.obtenerTipoLectura(v2, variable2);
                innerReads.push({ variable: variable2, tipo: tipo2 });
              }
              j++;
            }

            let repeticiones = 0;
            if (/^-?\d+$/.test(limiteTexto)) repeticiones = parseInt(limiteTexto, 10);
            else if (valores[limiteTexto] !== undefined) repeticiones = parseInt(valores[limiteTexto], 10);

            if (repeticiones > 0 && innerReads.length > 0) {
              for (let vuelta = 1; vuelta <= repeticiones; vuelta++) {
                for (const lectura of innerReads) {
                  const etiquetaLectura = /nota|calificacion|calificación/i.test(lectura.variable) ? `Ingrese ${lectura.variable} ${vuelta} de ${repeticiones}` : `Ingrese ${lectura.variable} ${vuelta}`;
                  const valor = await openModal("Ingreso de datos", etiquetaLectura, lectura.tipo);
                  if (valor === null) throw new Error("Ejecución cancelada por el usuario.");
                  entradas.push(valor);
                }
              }
            }
            i = j;
          }
        }

        return entradas;
      }

      async function ejecutarPython() {
        if (!traduccionLista) {
          R.mostrarEstado("error", "Primero presiona Traducir para habilitar la ejecución.");
          consoleState.textContent = "Bloqueada";
          return;
        }

        let codigo = document.getElementById("python").textContent.trim();
        if (!codigo) {
          R.mostrarEstado("error", "No hay código Python para ejecutar.");
          consoleBox.textContent = "No hay código Python para ejecutar.";
          return;
        }

        try {
          const entradas = await pedirEntradasPseudocodigo();
          activarTab("salida-consola");
          consoleBox.textContent = ">>> Preparando ejecución...\n\n";
          consoleState.textContent = "Ejecutando";
          await RT.ejecutarCodigoPython(
            codigo,
            entradas,
            (txt) => { consoleBox.textContent = txt; },
            (txt) => {
              const chunk = String(txt).replace(/\r\n/g, "\n");
              if (!consoleBox.textContent.endsWith("\n")) consoleBox.textContent += "\n";
              consoleBox.textContent += chunk;
              if (!consoleBox.textContent.endsWith("\n")) consoleBox.textContent += "\n";
            },
            (tipo, msg) => R.mostrarEstado(tipo, msg)
          );
          consoleState.textContent = "Finalizada";
          R.mostrarEstado("success", "Código Python ejecutado correctamente.");
          const ejecucionInfo = document.getElementById("inspectorEjecucion");
          if (ejecucionInfo) ejecucionInfo.innerHTML = "Ejecución finalizada. Revisa la consola derecha para entradas, salidas y resultado final.";
        } catch (error) {
          if (String(error.message || error).includes("cancelada")) {
            R.mostrarEstado("info", "La ejecución fue cancelada.");
            consoleState.textContent = "Cancelada";
            consoleBox.textContent = ">>> Ejecución cancelada por el usuario.\n";
            return;
          }
          R.mostrarEstado("error", "Ocurrió un error al ejecutar Python.");
          consoleState.textContent = "Error";
          consoleBox.textContent = ">>> Error de ejecución:\n" + error;
        }
      }

      document.getElementById("btnTraducir").addEventListener("click", traducir);
      document.getElementById("btnCopiar").addEventListener("click", copiarPython);
      document.getElementById("btnLimpiar").addEventListener("click", limpiarTodo);
      document.getElementById("btnEjecutar").addEventListener("click", ejecutarPython);
      document.getElementById("btnDescargar").addEventListener("click", descargarPython);

      document.getElementById("btnPalabras").addEventListener("click", () => mostrarPantalla("pantalla-palabras"));
      document.getElementById("btnVolverPalabras").addEventListener("click", () => mostrarPantalla("pantalla-principal"));

      document.querySelectorAll("[data-ejemplo]").forEach(btn => {
        btn.addEventListener("click", () => cargarEjemplo(btn.dataset.ejemplo));
      });

      document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => activarTab(btn.dataset.target));
      });

      document.querySelectorAll(".analysis-more-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const detail = document.getElementById(btn.dataset.detail);
          const open = detail.classList.toggle("open");
          btn.textContent = open ? "Ocultar detalle" : "Expandir detalle";
        });
      });

      document.getElementById("buscadorPalabras").addEventListener("input", (e) => {
        R.renderPalabras(palabrasReservadas, e.target.value);
      });

      pseudo.addEventListener("input", () => {
        setExecutionReady(false);
        actualizarEditorVisual();
        actualizarMetricas();
      });

      pseudo.addEventListener("scroll", () => {
        if (editorHighlight) editorHighlight.scrollTop = pseudo.scrollTop;
        if (lineNumbers) lineNumbers.scrollTop = pseudo.scrollTop;
      });

      R.renderPalabras(palabrasReservadas);
      setExecutionReady(false);
      cargarEjemplo("promedio");
      mostrarPantalla("pantalla-principal");
    });

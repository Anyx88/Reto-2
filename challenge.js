const entrada_nombre = "  mARÍA fERNANDA  ";
const entrada_correo = "  MaFe.96@OTRODOMINIO.COM  ";
const entrada_edad = "30";
const entrada_codigo_promo = "DESC-2026-VIP";

const nombre_limpio = entrada_nombre.trim().toLowerCase(); 

// separar los dos nombres usando el espacio en blanco
const posicion_espacio = nombre_limpio.indexOf(" "); 

// Convertimos la primera letra a mayúscula y le pegamos el resto del primer nombre
const primer_nombre = nombre_limpio.charAt(0).toUpperCase() + nombre_limpio.slice(1, posicion_espacio);

// Convertimos la primera letra del segundo nombre a mayúscula y le pegamos el resto
const segundo_nombre = nombre_limpio.charAt(posicion_espacio + 1).toUpperCase() + nombre_limpio.slice(posicion_espacio + 2);

// Los unimos con un espacio en medio
const nombre_formateado = primer_nombre + " " + segundo_nombre;

// 2. Correo electrónico 
const correo_validador = entrada_correo.trim().toLowerCase();

// 3. Código promocional (Validación de prefijo y extracción de año de texto)
const codigo_inicia_desc = entrada_codigo_promo.trim().startsWith("DESC-");

// Extraemos el año cortando el texto directamente con posiciones fijas (.slice)
// En "DESC-2026-VIP", el año empieza en la posición 5 y termina antes de la 9
const ano_extraido_str = entrada_codigo_promo.trim().slice(5, 9);


// B. Tipos de Datos y Conversión (Data Types & Casting)

const edad_entera = parseInt(entrada_edad.trim(), 10);
const ano_cupon_entero = parseInt(ano_extraido_str, 10);

// Validación de correo 

const correo_valido = correo_validador.includes("@") && correo_validador.endsWith(".com");

// C. Operadores (Aritméticos, Relacionales y Lógicos)

const es_mayor_edad = edad_entera >= 18;

const ano_nacimiento = 2026 - edad_entera;

const codigo_valido = codigo_inicia_desc && (ano_cupon_entero > 0);

let puntos_asignados = 0.0;
if (es_mayor_edad && ano_cupon_entero === 2026) {
    puntos_asignados = 10.5;
} else {
    puntos_asignados = 0.0;
}

// 4. Salida Utilizando Template literals 

console.log(`==================================================
           FICHA DE USUARIO PROCESADA             
==================================================
Nombre Formateado   : ${nombre_formateado}
Correo Validado     : ${correo_validador}
¿Correo Válido?     : ${correo_valido ? "True" : "False"}
Edad Registrada     : ${edad_entera} (Tipo: ${typeof edad_entera})
¿Mayor de Edad?     : ${es_mayor_edad ? "True" : "False"}
Año Estimado Nto.   : ${ano_nacimiento}
Código Cupón Válido : ${codigo_valido ? "True" : "False"}
Puntos Asignados    : ${puntos_asignados.toFixed(1)}
==================================================`);


var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre.
 * - `apellido`: string, con el apellido.
 * - `edad`: numero entero, con la edad de la persona.
 * - `documento`: numero entero, con el documento de la persona.
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento){
return{
      nombre: "juan",
      apellido : "perez",
      edad : 20,
      documento : 123456
    };
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));


/**
 * 02 - agregarApodo
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * - `apodo`: string, con el apodo que agregarle a la persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un nuevo campo 'apodo'.
 */
function agregarApodo(persona, apodo) {
    return{
        persona:persona,
        apodo: apodo
    };
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));


/**
 * 03 - sinDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
function sinDocumento(persona) {
 return{
    nombre: persona.nombre,
    apellido: persona.apellido,
    edad: persona.edad
 };
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));


/**
 * 04 - tieneDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si la propiedad 'documento' existe en el objeto recibido.
 */
function tieneDocumento(persona) {
    return{
        persona: persona.documento !== undefined && persona.documento !== null
    }  
}
console.log("resultado tieneDocumento: ", tieneDocumento(personaEjemplo));


/**
 * 05 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
  return{
    persona: personaEjemplo.apellido + " " + personaEjemplo.nombre
  } 
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));


/**
 * 06 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona){
    return{
      persona: personaEjemplo.edad + 1 
    }
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));


/**
 * 07 - sonLaMismaPersona
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si persona1 y persona2 son la misma persona.
 */
function sonLaMismaPersona(persona1, persona2) {
 return {
    persona1: personaEjemplo.persona1 === personaEjemplo.persona2,
    persona2: personaEjemplo.persona2 === personaEjemplo.persona1
 }
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));


/**
 * 08 - personaMasGrande
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - el objeto de la persona con mayor edad. Si ambas tienen la misma edad, retorna cualquiera de las dos.
 */
function personaMasGrande(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else {
        return persona2;
     }
}

console.log("resultado personaMasGrande: ", personaMasGrande(
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 }
));

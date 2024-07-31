const marcasAutos = ["Toyota", "Hyundai", "bmw", "Mercedes"];
const marcasCamiones = ["Volvo", "Scania", "Mercedes", "Hyundai", "Toyota"];

// encontrar un elemento y reemplazarlo
const indexAEleminar = marcasAutos.indexOf("bmw"); // 2
marcasAutos.splice(indexAEleminar, 1, "VolksWagen"); // ["Toyota", "Hyundai", "VolksWagen", "Mercedes"]

console.log(marcasAutos);

//contatenacion de arreglos

const marcasCamionesSinMarcasAutos = marcasCamiones.filter((marcaCamion) => {
  return !marcasAutos.includes(marcaCamion);

  // Hints:
  // el método includes devuelve true o false
  // filter va a agregar al nuevo arreglo cuando el valor retornado sea true

  /* funcionamiento */

  // MarcaCamion = Volvo => marcasAutos incluye la marca Volvo? includes devuelve false
  // el codigo queda así => return !false, esto está negado
  // entonces el valor retornado es true, por lo tanto,
  // filter va a agregar el elemento Volvo al nuevo arreglo

  // ----- DEMÁS ITERACIONES Scania, Mercedes

  // MarcaCamion = Hyundai => marcasAutos incluye la marca Hyundai? includes devuelve true
  // el codigo queda así => return !true, esto está negado
  // entonces el valor retornado es false, por lo tanto,
  // filter no agregará el elemento Hyundai al nuevo arreglo

  // --- ITERACION TOYOTA
});

const union = marcasAutos.concat(marcasCamionesSinMarcasAutos);

console.log(union);

// intersección
const interseccion = marcasCamiones.filter((marcaCamion) => {
  return marcasAutos.includes(marcaCamion);
});

console.log(interseccion);

// diferencia
// ["Volvo", "Scania", "Mercedes", "Hyundai", "Toyota", "Toyota", "Hyundai", "bmw", "Mercedes"];
const diferencia = marcasCamiones.concat(marcasAutos).filter((marca) => {
  return !marcasAutos.includes(marca) || !marcasCamiones.includes(marca);
});
// [Volvo, Scania, bmw]

console.log(diferencia);

// Arreglo de un auto
const toyotaTercel = [
  "Toyota",
  "Tercel",
  1998,
  "Rojo",
  2000,
  "Gasolina",
  "Automático",
];

// camelCase para nombres de variables y funciones
// snake_case para nombres de constantes NOMBRE_AQUI
// PascalCase para nombres de clases y funciones contructoras

// //Intersección
// ["Hyndai", "Toyota"]
// //Diferencia
// ["bmw", "Volvo", "Scania", "Mercedes"]
// //Union
// ["Toyota", "Hyndai", "bmw", "Volvo", "Scania", "Mercedes"];

console.log(toyotaTercel[7]); // undefined

// toyotaTercel.pop() // elimina el ultimo elemento del arreglo
// toyotaTercel.push() // agrega un elemento al final del arreglo
// toyotaTercel.shift() // Elimina el primer elemento del arreglo
// toyotaTercel.unshift("Usado") // agrega un elemento al principio del arreglo
// toyotaTercel.indexOf("Gasolina") // devuelve la posición del elemento "Gasolina"

const personas = [
  { edad: 45, nombre: "Juanito" },
  { edad: 52, nombre: "Gustavo" },
  { edad: 21, nombre: "Felipe" },
  { edad: 14, nombre: "Javiera" },
  { edad: 10, nombre: "Blanca" },
  { edad: 9, nombre: "Claudio" },
];

// metodo para filtrar arreglos
const mayoresdeEdad = personas.filter((persona) => persona.edad > 18);

// antes de la existencia del metodo filter
const mayoresdeEdad2 = [];

for (let index = 0; index < personas.length; index++) {
  if (personas[index].edad > 18) {
    mayoresdeEdad.push(personas[index]);
  }
}

const nombre = "Blanca";
const edad = 6;

// actualmente podemos buscar un elemento en un arreglo con el metodo some
const existe1 = personas.some(
  (persona) => persona.nombre === nombre && persona.edad > edad
);

console.log(existe1);

// antes del método some
let existe = false;
for (let index = 0; index < personas.length; index++) {
  if (personas[index].edad > edad && personas[index].nombre === nombre) {
    existe = true;
  }
}

console.log(existe);

// console.log(mayoresdeEdad);

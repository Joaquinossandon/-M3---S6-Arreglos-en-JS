const marcasAutos = ["Toyota", "Hyndai", "bmw"];
const marcasCamiones = ["Volvo", "Scania", "Mercedes", "Hyundai", "Toyota"];

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

toyotaTercel.unshift("Usado")
console.log(toyotaTercel)

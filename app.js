

let saludar = () => "Hola Mundo";



let deadpool  = { 
    nombre: 'Wade',
    apellido : "Wilson",
    poder : 'Regeneracion',
    getNombre(){
        return `nombre: ${this.nombre} ${this.apellido} poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre())

console.log(saludar())
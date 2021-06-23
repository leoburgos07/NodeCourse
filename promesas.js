const empleados = [
    {
        nombre: 'Leonardo',
        id : 1
    },
    {
        nombre: 'Daniel',
        id : 2
    },
    {
        nombre: 'Kewin',
        id : 3
    },
] 


const salarios = [
    {
        id : 1,
        salario : 2000
    },
    {
        id : 2,
        salario : 700
    },
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) =>{
        let empleadoDB = empleados.find(empleado => empleado.id === id)
   
        if(!empleadoDB){
            reject('No se encontro empleado')
        }else{
             resolve(empleadoDB)
        }
    });
}

let getSalario = (trabajador) => {

    return new Promise((resolve,reject) =>{
        let salario = salarios.find(salario => salario.id === trabajador.id)
        if(!salario){
                reject(`no se encontro salario para el empleado ${trabajador.nombre}`);
            }else{
                resolve({
                    nombre : trabajador.nombre,
                    salario : salario.salario
                })
                }
    })
 }



getEmpleado(5).then(empleado => {
    return getSalario(empleado);
})
.then(salario => {
    console.log(salario);
})
.catch(err =>{
    console.log(err);
})

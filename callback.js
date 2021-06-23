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
let getEmpleado = (id,callback) =>{
    let empleadoDB = empleados.find(empleado => empleado.id === id)
   
    if(!empleadoDB){
        callback('No se encontro')
    }else{
         callback(null,empleadoDB)
    }
}



 let getSalario = (trabajadores,callback) => {
    let salario = salarios.find(salario => salario.id === trabajadores.id)

    
    if(!salario){
        callback(`no se encontro salario para el empleado ${trabajadores.nombre}`);
    }else{
        callback(null,{
            nombre : trabajadores.nombre,
            salario : salario.salario
        })
        }
 }
 getEmpleado(2,(err,empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(empleado,(err,res) =>{
        if(err){
            return console.log(err);
        }else{
            console.log(res);
        }
    })
})

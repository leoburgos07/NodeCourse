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

let getEmpleado = async (id) => {
   
        let empleadoDB = empleados.find(empleado => empleado.id === id)
   
        if(!empleadoDB){
            throw new Error('No se encontro empleado')
        }else{
             return empleadoDB;
        }

}

let getSalario = (trabajador) => {

  
        let salario = salarios.find(salario => salario.id === trabajador.id)
        if(!salario){
                throw new Error(`no se encontro salario para el empleado ${trabajador.nombre}`);
            }else{
                return{
                    nombre : trabajador.nombre,
                    salario : salario.salario
                }
                }
    
 }

 let getInfo = async (id) =>{
     const empleado = await getEmpleado(id);
     const salario = await getSalario(empleado);
     console.log(salario);
 }

 getInfo(1)
 .then()
 .catch( e =>console.log(e));
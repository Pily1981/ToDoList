let TareasID =4; //Se parte en ID 4 para el guardado de Nuevas tareas (las tres primeras ya estan predefinidas)

const tareas = [ 
    {
        id: 1,
        descripcion: 'Limpiar el Living',
        completado: false
    },
    {
        id:2,
        descripcion: 'Sacar la basura',
        completado: false
    },
    {
        id:3,
        descripcion: 'Ordenar habitaciones',
        completado: false
    }
]

 //Agregar Nueva Tarea
const BotonAgregar = function() {
    const nuevaTarea = document.querySelector('#nuevaTarea').value;
    const objetoTarea = {
        id:TareasID,
        descripcion:nuevaTarea,
        completado:false
    };
        tareas.push(objetoTarea); 
        TareasID++; 
        document.querySelector('#nuevaTarea').value=''; 
        renderizarTareas(); 
}

//Funcion para eliminar tarea por Id
const BorrarPorID= function (id){ 
    const posicion = tareas.findIndex((obj) =>{
        if (id===obj.id){
            return true;
        }
        return false;
    });
    tareas.splice(posicion,1);
    renderizarTareas(); 
}

//Funcion para guardar la tarea completada
const checkLista = function(id){ 
    const posicion = tareas.findIndex((obj) =>{
        if (id===obj.id){
            return true;
        }
        return false;
    });
    tareas[posicion].completado = !tareas[posicion].completado;
    renderizarTareas();
}

//Funcion para monstrar datos en pantalla
const renderizarTareas = function(){ 
    const listado = document.querySelector('#Lista_Tareas');
    const totalTareas = document.querySelector('#TotalTareas');
    const totalFinalizadas = document.querySelector('#TotalRealizadas');
    let html = '';
    let cantidadRealizadas = 0;
    
    for (const tarea of tareas) {
       
        if (tarea.completado){
            check = 'checked';
            cantidadRealizadas++;            
        } else{
            check = '';
        }

        html+= `
            <div class="listado_tareas">
                <div class="ID">
                    ${tarea.completado ? "<del>" + tarea.id + ""
                        : "" + tarea.id + ""}
                </div>
                <div class="Detalle">
                    ${tarea.completado ? "<del>" + tarea.descripcion + ""
                        : "" + tarea.descripcion + ""}
                </div>
                <div class="Check">
                    <input onclick = "checkLista(${tarea.id})" type = "checkbox" ${check}>
                </div>
                <div class="Eliminar">
                    <button onclick="BorrarPorID(${tarea.id})" class = "boton_Eliminar">X</button>
                </div>
            </div>
        `;
    }

    listado.innerHTML = html;
    total = tareas.length;   
    totalTareas.innerHTML = `Total Tareas: ${total}`;   
    totalFinalizadas.innerHTML =`Total Tareas Realizadas: ${cantidadRealizadas}`;   
}

renderizarTareas();
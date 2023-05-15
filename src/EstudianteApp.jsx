import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiantes } from "./peticiones/postEstudiante";
import { deleteEstudiante } from "./peticiones/deleteEstudiante";
import { getFacultadEstudiantes } from "./peticiones/getFacultadEstudiantes";



//<ListaEstudiantes lista={estudiantes}/>

export const EstudiantesApp = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [facultadBuscar, setFacultadBuscar] = useState("");

    const cargueEstudiantes = async () => {
        const datos = await getEstudiantes();
        setEstudiantes(datos);
    }
    useEffect(() => {
        if(facultadBuscar.length > 1){
            console.log("facultadBuscar")
        }else{
            cargueEstudiantes();
            console.log("hola")
        }
    });

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante]);
        postEstudiantes(estudiante);
    }

    const borrarEstudiante = (id) => {
        let opcion = window.confirm("¿Realmente desea borrar al estudiante?")

        if(opcion){
            deleteEstudiante(id);
        }
        
    }

    const buscarEstudianteFacultad = async (event) => {
        event.preventDefault();
        if(facultadBuscar.length > 1){
            const datos = await getFacultadEstudiantes(facultadBuscar);
            setEstudiantes(datos);
            console.log(datos);
        }else{
            cargueEstudiantes();
        }
    }

    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <form onSubmit={buscarEstudianteFacultad}>
                <div>
                    <label htmlFor="search" className="label">Buscar:</label>
                    <select name="facultadBuscar" id="facultadBuscar" value={facultadBuscar} className="form-select" aria-label="Default select example" onChange={(event) =>  {setFacultadBuscar(event.target.value)}}>
                        <option value=""></option>
                        <option value="Comunicacion">Comunicacion</option>
                        <option value="Derecho">Derecho</option>
                        <option value="Educacion">Educacion</option>
                        <option value="Ingenieria">Ingenieria</option>
                        <option value="Medicina">Medicina</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </div>
                <br></br>
            </form>
            <TablaEstudiante listaEstudiantes={estudiantes} borrarEstudiante={borrarEstudiante} />
        </>
    )
}

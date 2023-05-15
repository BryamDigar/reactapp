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
    const [focuEstudiante, setforcuEstudiante] = useState(null);

    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("");
    const [programa , setPrograma] = useState("");


    const estudianteStatus = (estudent) => {
        console.log(estudent);
        setforcuEstudiante(estudent);
        deleteEstudiante(estudent.id);
    }

    if (focuEstudiante != null){
        setNombre(focuEstudiante.name);
        setSemestre(focuEstudiante.semestre);
        setFacultad(focuEstudiante.facultad);
        setPrograma(focuEstudiante.programa);
        setforcuEstudiante(null);
    }

    const cargueEstudiantes = async () => {
        const datos = await getEstudiantes();
        setEstudiantes(datos);
    }
    useEffect(() => {
        if(facultadBuscar.length > 1){
            console.log("facultadBuscar")
        }else{
            cargueEstudiantes();
        }
    });

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante]);
        postEstudiantes(estudiante);                
        setforcuEstudiante(null);

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
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu)}} nombre={nombre} semestre={semestre} facultad={facultad} programa={programa} setNombre={(event)=>setNombre(event)} setSemestre={(event)=>setSemestre(event)} setFacultad={(event)=>setFacultad(event)} setPrograma={(event)=>setPrograma(event)}/>
            <form onSubmit={buscarEstudianteFacultad}>
                <div>
                    <label htmlFor="search">Buscar:</label>
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
            </form>
            <TablaEstudiante listaEstudiantes={estudiantes} borrarEstudiante={borrarEstudiante} EstudianteStatus={estudianteStatus} />
        </>
    )
}

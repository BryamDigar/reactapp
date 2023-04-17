import { useState } from "react"

export const FormularioEstudiante = ({ agregar , buscarName }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("")
    

    const guardarEstudiante = (event) => {
        event.preventDefault();

        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre,
            facultad: facultad
        }
        agregar(estudiante)
        setId("");
        setNombre("");
        setSemestre("");
        setFacultad("");
    }


    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="semestre">Escoge tu semestre:</label>
                    <select name="semestre" id="semestre" value={semestre} onChange={(event) =>  {setSemestre(event.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3" >3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="facultad">Escoge tu Facultad:</label>
                    <select name="facultad" id="facultad" value={facultad} onChange={(event) =>  {setFacultad(event.target.value)}}>
                        <option value="Comunicacion">Comunicacion</option>
                        <option value="Derecho">Derecho</option>
                        <option value="Educacion">Educacion</option>
                        <option value="Ingenieria">Ingenieria</option>
                        <option value="Medicina">Medicina</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            
        </>
    )
}
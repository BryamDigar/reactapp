import { useState } from "react"
import "./Formulario.css"

export const FormularioEstudiante = ({ agregar , buscarName }) => {
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad , setFacultad] = useState("")
    const [programa , setPrograma] = useState("")
    

    const guardarEstudiante = (event) => {
        event.preventDefault();

        let estudiante = {
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
            programa: programa
        }
        agregar(estudiante)
    }


    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="form-group">
                    <label htmlFor="nombre" className="label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="semestre" className="labelform">Escoge tu semestre:</label>
                    <select name="semestre" id="semestre" value={semestre} className="form-select" aria-label="Default select example" form-select-border-width="10px"  onChange={(event) =>  {setSemestre(event.target.value)}} style={{ width: "500px" }}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
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
                    <label htmlFor="facultad" className="labelform">Escoge tu Facultad:</label>
                    <select name="facultad" id="facultad" value={facultad} className="form-select" aria-label="Default select example" onChange={(event) =>  {setFacultad(event.target.value)}} style={{ width: "500px" }}>
                        <option value=""></option>
                        <option value="Comunicacion">Comunicacion</option>
                        <option value="Derecho">Derecho</option>
                        <option value="Educacion">Educacion</option>
                        <option value="Ingenieria">Ingenieria</option>
                        <option value="Medicina">Medicina</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="programa" className="label">Programa:</label>
                    <input type="text" className="form-control" id="programa" placeholder="programa" value={programa} onChange={(event) => setPrograma(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            
        </>
    )
}
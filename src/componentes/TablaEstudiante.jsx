
export const TablaEstudiante =  ({listaEstudiantes, borrarEstudiante, EstudianteStatus }) => {
      

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Facultad</th>
                        <th scope="col">Programa</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaEstudiantes.map((estudiante) => <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td>{estudiante.facultad}</td>
                            <td>{estudiante.programa}</td>
                            <td> 
                            <button className="btn btn-info" onClick={()=>EstudianteStatus(estudiante)}>Editar</button> 
                            <button className="btn btn-danger" onClick={()=>borrarEstudiante(estudiante.id)}>Eliminar</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}
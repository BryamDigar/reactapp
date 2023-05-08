
export const getEstudiantes = async() => {
    const url = "http://localhost:8080/estudiantes/todos"
    const resp = await fetch(url);
    const data = await resp.json();

    const   estudiantesList =   data.map( estudiante => ({
        id: estudiante.id,
        nombre: estudiante.nombre,
        semestre: estudiante.semestre,
        facultad: estudiante.facultad
    }))
    return estudiantesList;
}
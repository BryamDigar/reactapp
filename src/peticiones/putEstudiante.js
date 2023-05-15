export const putEstudiante = async(Estudiante) => {
    const url = `http://localhost:8080/estudiantes/actualizar/${Estudiante.id}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: {
            nombre: Estudiante.nombre,
            facultad: Estudiante.facultad,
            semestre: Estudiante.semestre,
            programa: Estudiante.programa
        }
    });
    const data = await resp.json();
}
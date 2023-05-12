export const deleteEstudiante = async(id) => {
    const url = "http://localhost:8080/estudiantes/eliminar/"+ id;
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const data = await resp.json();
}
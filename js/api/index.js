const apiUrl = import.meta.env.VITE_API_URL
const anonKey = import.meta.env.VITE_ANON_KEY

export async function obtenerDatos(){
    const respuesta = await fetch(`${apiUrl}?apikey=${anonKey}`)
    const datos = await respuesta.json()

    return datos
}

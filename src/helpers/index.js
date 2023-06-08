export function dateFormatter(date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dateFormated = date.toLocaleDateString('es-ES', options)
    return dateFormated
}
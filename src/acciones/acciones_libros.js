export const AGREGAR_LIBRO = "AGREGAR_LIBRO";
export const EDITAR_LIBRO = "EDITAR_LIBRO";
export const ELIMINAR_LIBRO = "ELIMINAR_LIBRO";
export const ACTIVAR_LIBRO = "ACTIVAR_LIBRO";
export const REPETIR_LIBRO = "REPETIR_LIBRO";

export function agregar_libro(nombre) {
    return {type: AGREGAR_LIBRO, nombre: nombre}
}

export function editar_libro(id, nombre) {
    return {type: EDITAR_LIBRO, id: id, nombre: nombre}
}

export function eliminar_libro(id) {
    return {type: ELIMINAR_LIBRO, id: id }
}

export function activar_libro(libro) {
    return {type: ACTIVAR_LIBRO, libro: libro}
}

export function repetir_libro(id) {
    return {type: REPETIR_LIBRO, id: id }
}
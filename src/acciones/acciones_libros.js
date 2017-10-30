export const AGREGAR_LIBRO = "AGREGAR_LIBRO";
export const EDITAR_LIBRO = "EDITAR_LIBRO";
export const ELIMINAR_LIBRO = "ELIMINAR_LIBRO";
export const ESTABLECER_LIBRO_EN_EDICION = "ESTABLECER_LIBRO_EN_EDICION";
export const SELECCIONAR_LIBRO = "SELECCIONAR_LIBRO";
export const REPETIR_LIBRO = "REPETIR_LIBRO";
export const SORTEAR_LISTA = "SORTEAR_LISTA";

export function agregar_libro(nombre) {
    return {type: AGREGAR_LIBRO, nombre: nombre}
}

export function editar_libro(id, nombre) {
    return {type: EDITAR_LIBRO, id: id, nombre: nombre}
}

export function eliminar_libro(id) {
    return {type: ELIMINAR_LIBRO, id: id}
}

export function establecer_libro_en_edicion(libro) {
    return {type: ESTABLECER_LIBRO_EN_EDICION, libro: libro}
}

export function seleccionar_libro(libro) {
    return {type: SELECCIONAR_LIBRO, libro: libro}
}

export function repetir_libro(id) {
    return {type: REPETIR_LIBRO, id: id}
}

export function sortear_lista(indices) {
    return {type: SORTEAR_LISTA, indices: indices}
}
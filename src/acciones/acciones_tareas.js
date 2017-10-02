export const AGREGAR_TAREA = "AGREGAR_TAREA";
export const EDITAR_TAREA = "EDITAR_TAREA";
export const ELIMINAR_TAREA = "ELIMINAR_TAREA";
export const ACTIVAR_TAREA = "ACTIVAR_TAREA";
export const ESTABLECER_TAREA_EN_EDICION = "ESTABLECER_TAREA_EN_EDICION";
export const RESETEAR_TAREA = "RESETEAR_TAREA";

export function agregar_tarea(id_libro, descripcion, tiempo) {
    return {type: AGREGAR_TAREA, id_libro: id_libro, descripcion: descripcion, tiempo: tiempo}
}

export function editar_tarea(id_libro, id, descripcion, tiempo) {
    return {type: EDITAR_TAREA, id_libro: id_libro, id: id, descripcion: descripcion, tiempo: tiempo}
}

export function eliminar_tarea(id_libro, id) {
    return {type: ELIMINAR_TAREA, id_libro: id_libro, id: id }
}

export function activar_tarea(id_libro, id) {
    return {type: ACTIVAR_TAREA, id_libro: id_libro, id: id }
}

export function establecer_tarea_en_edicion(id_libro, id, descripcion, tiempo){
    return {type: ESTABLECER_TAREA_EN_EDICION, id_libro: id_libro, id: id, descripcion: descripcion, tiempo: tiempo}
}

export function resetear_tarea(id_libro, id) {
    return {type: RESETEAR_TAREA, id_libro: id_libro, id: id }
}
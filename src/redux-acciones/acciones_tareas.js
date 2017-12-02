export const AGREGAR_TAREA = "AGREGAR_TAREA";
export const EDITAR_TAREA = "EDITAR_TAREA";
export const ELIMINAR_TAREA = "ELIMINAR_TAREA";
export const ACTIVAR_TAREA = "ACTIVAR_TAREA";
export const ESTABLECER_TAREA_EN_EDICION = "ESTABLECER_TAREA_EN_EDICION";
export const RESETEAR_TAREA = "RESETEAR_TAREA";
export const SORTEAR_TAREAS = "SORTEAR_TAREAS";
export const RESETEAR_TODAS_LAS_TAREAS = "RESETEAR_TODAS_LAS_TAREA";

export function agregar_tarea(id_libro, descripcion, tiempo) {
    return {type: AGREGAR_TAREA, id_libro: id_libro, descripcion: descripcion, tiempo: tiempo}
}

export function editar_tarea(id_libro, id, descripcion, tiempo, tiempo_transcurrido) {
    return {type: EDITAR_TAREA, id_libro: id_libro, id: id, descripcion: descripcion, tiempo: tiempo, tiempo_transcurrido: tiempo_transcurrido}
}

export function eliminar_tarea(id_libro, id) {
    return {type: ELIMINAR_TAREA, id_libro: id_libro, id: id }
}

export function establecer_tarea_activa(id) {
    return {type: ACTIVAR_TAREA, id: id }
}

export function establecer_tarea_en_edicion(tarea){
    return {type: ESTABLECER_TAREA_EN_EDICION, tarea: tarea}
}

export function resetear_tarea(id_libro, id) {
    return {type: RESETEAR_TAREA, id_libro: id_libro, id: id }
}

export function sortear_tareas(id_libro, indices) {
    return {type: SORTEAR_TAREAS, id_libro: id_libro, indices: indices}
}

export function resetear_todas_las_tareas(id_libro) {
    return {type: RESETEAR_TODAS_LAS_TAREAS, id_libro: id_libro}
}
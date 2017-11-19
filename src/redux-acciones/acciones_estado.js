export const CAMBIAR_ESTADO_TAREAS = "CAMBIAR_ESTADO_TAREAS";

export function cambiar_estado_tareas(estado) {
    return {type: CAMBIAR_ESTADO_TAREAS, estado: estado};
}

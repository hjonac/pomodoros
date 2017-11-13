import { AGREGAR_TAREA, EDITAR_TAREA, ELIMINAR_TAREA, ACTIVAR_TAREA, ESTABLECER_TAREA_EN_EDICION, RESETEAR_TAREA, SORTEAR_TAREAS} from "../redux-acciones/acciones_tareas";
import uuid from 'uuid';
import {arrayMove} from "react-sortable-hoc";

function tareas(state = {}, action) {
    switch (action.type)
    {
        case AGREGAR_TAREA:
            let store_exists = state[action.id_libro];

            if(typeof store_exists === 'undefined') {
                return {
                    ...state,
                    [action.id_libro]: [{
                        id: uuid.v4(),
                        id_libro: action.id_libro,
                        descripcion: action.descripcion,
                        tiempo: action.tiempo,
                        tiempo_transcurrido: ''
                    }]
                };
            } else {
                return {
                    ...state,
                    [action.id_libro]: [...state[action.id_libro], {
                        id: uuid.v4(),
                        id_libro: action.id_libro,
                        descripcion: action.descripcion,
                        tiempo: action.tiempo,
                        tiempo_transcurrido: ''
                    }]
                }
            }
        case EDITAR_TAREA:
            return {...state,
                [action.id_libro]: state[action.id_libro].map(tarea => {
                    return tarea.id === action.id ? {...tarea, descripcion: action.descripcion, tiempo: action.tiempo, tiempo_transcurrido: 0} : tarea;
                })
            };
        case ELIMINAR_TAREA:
            return {...state,
                [action.id_libro]: state[action.id_libro].filter(tarea => {
                   return tarea.id === action.id;
                })
            };
        case RESETEAR_TAREA:
            return {...state,
                [action.id_libro]: [action.id_libro].map(tarea => {
                    return tarea.id === action.id ? {...tarea, tiempo_transcurrido: 0} : tarea;
                })
            };
        case SORTEAR_TAREAS:
            return {...state,
                [action.id_libro]: arrayMove(state[action.id_libro], action.indices.oldIndex, action.indices.newIndex)
            };
        default:
            return state;
    }
}

function tarea_activa(state = {id_libro:'', id:'', descripcion:'', tiempo:'', tiempo_transcurrido:'' }, action)
{
    switch (action.type)
    {
        case ACTIVAR_TAREA:
            return {
                ...state,
                id: action.id,
                id_libro: action.id_libro,
                descripcion: action.descripcion,
                tiempo: action.tiempo,
                tiempo_transcurrido: action.tiempo_transcurrido
            };
        default:
            return state
    }
}

function tarea_en_edicion(state={id_libro:'', id:'', descripcion:'', tiempo:'', tiempo_transcurrido:'' }, action)
{
    switch (action.type)
    {
        case ESTABLECER_TAREA_EN_EDICION:
            return {
                ...state,
                id: action.tarea.id,
                id_libro: action.tarea.id_libro,
                descripcion: action.tarea.descripcion,
                tiempo: action.tarea.tiempo,
                tiempo_transcurrido: action.tarea.tiempo_transcurrido
            };
        default:
            return state
    }
}

const reductor_tareas = {
    tareas,
    tarea_activa,
    tarea_en_edicion
};

export default reductor_tareas;
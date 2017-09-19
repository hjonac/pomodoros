import {AGREGAR_LIBRO, EDITAR_LIBRO, ELIMINAR_LIBRO, ACTIVAR_LIBRO, REPETIR_LIBRO} from '../acciones/acciones_libros';
import uuid from 'uuid';

function libros(state = [], action) {
    switch (action.type)
    {
        case AGREGAR_LIBRO:
            return [...state, {
                id: uuid.v4(),
                nombre: action.nombre
            }];
        break;
        case EDITAR_LIBRO:
            return state.map(libro => {
                return libro.id === action.id ? {...libro, nombre: action.nombre} : libro;
            });
        break;
        case ELIMINAR_LIBRO:
            return state.filter(libro => {
                return libro.id !== action.id;
            });
        break;
        default:
            return state;
        break;
    }
}

function libro_activo (state = {id: '', nombre: ''}, action) {
    switch (action.type)
    {
        case ACTIVAR_LIBRO:
            return {...state, id: action.id, nombre: action.nombre};
        break;
        default:
            return state;
        break;
    }
}

const reductores_libros = {
    libros,
    libro_activo
};

export default reductores_libros;

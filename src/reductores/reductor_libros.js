import {
    AGREGAR_LIBRO, EDITAR_LIBRO, ELIMINAR_LIBRO, ESTABLECER_LIBRO_EN_EDICION, SELECCIONAR_LIBRO, REPETIR_LIBRO
} from '../acciones/acciones_libros';
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
    }
}

function libro_en_edicion (state = {id: '', nombre: ''}, action) {
    switch (action.type)
    {
        case ESTABLECER_LIBRO_EN_EDICION:
            return { ...state, id: action.libro.id, nombre: action.libro.nombre};
        break;
        default:
            return state;
    }
}

function libro_seleccionado (state = {id: '', nombre: ''}, action) {
    switch (action.type)
    {
        case SELECCIONAR_LIBRO:
            return { ...state, id: action.libro.id, nombre: action.libro.nombre};
            break;
        default:
            return state;
    }
}

const reductores_libros = {
    libros,
    libro_en_edicion,
    libro_seleccionado
};

export default reductores_libros;

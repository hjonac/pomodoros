import { AGREGAR_LIBRO, EDITAR_LIBRO, ELIMINAR_LIBRO, ESTABLECER_LIBRO_EN_EDICION, SELECCIONAR_LIBRO, SORTEAR_LISTA, REPETIR_LIBRO } from '../redux-acciones/acciones_libros';
import { arrayMove } from 'react-sortable-hoc';
import uuid from 'uuid';

function libros(state = [], action) {
    switch (action.type)
    {
        case AGREGAR_LIBRO:
            return [...state, {
                id: uuid.v4(),
                nombre: action.nombre,
                repetir: false
            }];
        case EDITAR_LIBRO:
            return state.map(libro => {
                return libro.id === action.id ? {...libro, nombre: action.nombre} : libro;
            });
        case REPETIR_LIBRO:
            return state.map(libro => {
                return libro.id === action.id ? {...libro, repetir: action.repetir} : libro;
            });
        case ELIMINAR_LIBRO:
            return state.filter(libro => {
                return libro.id !== action.id;
            });
        case SORTEAR_LISTA:
            return arrayMove(state, action.indices.oldIndex, action.indices.newIndex);
        default:
            return state;
    }
}

function libro_en_edicion (state = {id: '', nombre: '', repetir: false}, action) {
    switch (action.type)
    {
        case ESTABLECER_LIBRO_EN_EDICION:
            return { ...state, id: action.libro.id, nombre: action.libro.nombre, repetir: action.libro.repetir};
        default:
            return state;
    }
}

function libro_seleccionado (state = {id: '', nombre: '', repetir: false}, action) {
    switch (action.type)
    {
        case SELECCIONAR_LIBRO:
            return { ...state, id: action.libro.id, nombre: action.libro.nombre, repetir: action.libro.repetir};
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

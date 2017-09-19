import reductores_libros from '../reductores/reductor_libros';
import { agregar_libro, editar_libro, eliminar_libro, activar_libro, repetir_libro } from '../acciones/acciones_libros';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers(reductor_libros);
const store = createStore(reducer);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(agregar_libro("Dia laboral"));
store.dispatch(agregar_libro("Dia test"));

unsubscribe();
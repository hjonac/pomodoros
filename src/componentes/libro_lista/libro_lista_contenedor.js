import LibroList from './libro_lista';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import { establecer_libro_en_edicion, seleccionar_libro, sortear_lista } from '../../redux-acciones/acciones_libros';

let libro_por_defecto = {
    id: '',
    nombre: ''
};

function onEdit(libro) {
    return (dispatch) => {
        dispatch(seleccionar_libro(libro));
        dispatch(establecer_libro_en_edicion(libro));
    }
}

function onSelect(libro) {
    return (dispatch) => {
        dispatch(seleccionar_libro(libro));
        dispatch(establecer_libro_en_edicion(libro_por_defecto));
        dispatch(routerActions.push('/tareas'));
    }
}

const mapStateToProps = (state) => {
    return {
        libros: state.libros,
        libro_en_edicion: state.libro_en_edicion,
        libro_seleccionado: state.libro_seleccionado
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: (libro) => { dispatch(onEdit(libro)) },
        onSelect: (libro) => { dispatch(onSelect(libro)) },
        onSortEnd: (indices) => { dispatch(sortear_lista(indices)) }
    }
};

const ContenedorLibroList = connect(
    mapStateToProps,
    mapDispatchToProps
)(LibroList);

export default ContenedorLibroList;
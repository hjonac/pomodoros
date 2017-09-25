import LibroList from './libro_lista';
import { connect } from 'react-redux';
import {activar_libro, eliminar_libro} from '../../acciones/acciones_libros';

const mapStateToProps = (state) => {
    return {
        libros: state.libros,
        libro_activo: state.libro_activo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (libro) => { dispatch(activar_libro(libro)) },
        onDelete: (id) => { dispatch(eliminar_libro(id)) }
    }
};

const ContenedorLibroList = connect(
    mapStateToProps,
    mapDispatchToProps
)(LibroList);

export default ContenedorLibroList;
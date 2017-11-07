import Titulo from './titulo';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import {establecer_libro_en_edicion, seleccionar_libro} from "../../redux-acciones/acciones_libros";

let libro_por_defecto = {
    id: '',
    nombre: ''
};

function onBack() {
    return (dispatch) => {
        dispatch(seleccionar_libro(libro_por_defecto));
        dispatch(establecer_libro_en_edicion(libro_por_defecto));
        dispatch(routerActions.push('/'));
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        libro_seleccionado: state.libro_seleccionado,
        show_options: ownProps.show_options
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBack: () => dispatch(onBack())
    }
};

const ContenedorTitulo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Titulo);

export default ContenedorTitulo;
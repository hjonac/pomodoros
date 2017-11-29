import LibroForm from './libro_formulario';
import { Form } from 'antd';
import { connect } from 'react-redux';

import {agregar_libro, editar_libro, establecer_libro_en_edicion, seleccionar_libro, eliminar_libro} from '../../redux-acciones/acciones_libros';

let libro_por_defecto = {
    id: '',
    nombre: '',
    repetir: false
};

function onDelete(id) {
    return (dispatch) => {
        dispatch(eliminar_libro(id))
        dispatch(establecer_libro_en_edicion(libro_por_defecto));
        dispatch(seleccionar_libro(libro_por_defecto));
    };
}

function onReset() {
    return (dispatch) => {
        dispatch(seleccionar_libro(libro_por_defecto));
        dispatch(establecer_libro_en_edicion(libro_por_defecto));
    };
}

const mapStateToProps = (state) => {
    return {
        libro_en_edicion: state.libro_en_edicion
    }
};

const mapStateToFields = (state) => {
    return {
        id: state.libro_en_edicion,
        nombre: state.libro_en_edicion,
        repetir: state.repetir
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, nombre, repetir) => { id === '' ? dispatch(agregar_libro(nombre, repetir)) : dispatch(editar_libro(id, nombre, repetir)) },
        onReset: () => { dispatch(onReset()) },
        onDelete: (id) => { dispatch(onDelete(id)) }
    }
};

const AntLibroForm = Form.create({mapPropsToFields: mapStateToFields})(LibroForm);

const ContenedorLibroForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntLibroForm);

export default ContenedorLibroForm;
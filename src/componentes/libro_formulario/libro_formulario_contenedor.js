import LibroForm from './libro_formulario';
import { Form } from 'antd';
import { connect } from 'react-redux';

import {agregar_libro, editar_libro, establecer_libro_en_edicion} from '../../acciones/acciones_libros';

let libro_por_defecto = {
    id: '',
    nombre: ''
};

const mapStateToProps = (state) => {
    return {
        libro_en_edicion: state.libro_en_edicion
    }
};

const mapStateToFields = (state) => {
    return {
        nombre: state.libro_en_edicion
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, nombre) => { id === '' ? dispatch(agregar_libro(nombre)) : dispatch(editar_libro(id, nombre)) },
        onReset: () => { dispatch(establecer_libro_en_edicion(libro_por_defecto)) }
    }
};

const AntLibroForm = Form.create({mapPropsToFields: mapStateToFields})(LibroForm);

const ContenedorLibroForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntLibroForm);

export default ContenedorLibroForm;
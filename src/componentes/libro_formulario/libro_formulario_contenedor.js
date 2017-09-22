import LibroForm from './libro_formulario';
import { Form } from 'antd';
import { connect } from 'react-redux';

import {agregar_libro, editar_libro, activar_libro} from '../../acciones/acciones_libros';

let libro_por_defecto = {
    id: '',
    nombre: ''
};

const mapStateToProps = (state) => {
    return {
        libro_activo: state.libro_activo
    }
};

const mapStateToFields = (state) => {
    return {
        nombre: state.libro_activo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, nombre) => { id === '' ? dispatch(agregar_libro(nombre)) : dispatch(editar_libro(id, nombre)) },
        onReset: () => { dispatch(activar_libro(libro_por_defecto)) }
    }
};

const AntLibroForm = Form.create({mapPropsToFields: mapStateToFields})(LibroForm);

const ContenedorLibroForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntLibroForm);

export default ContenedorLibroForm;
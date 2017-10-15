import TareaForm from './tarea_formulario';
import { Form } from 'antd';
import { connect } from 'react-redux';

import {agregar_tarea, editar_tarea, establecer_tarea_en_edicion} from "../../acciones/acciones_tareas";

const tarea_por_defecto = {
    id_libro:'',
    id:'',
    descripcion:'',
    tiempo:'',
    tiempo_transcurrido:''
};

const mapStateToProps = (state) => {
    return {
        tarea_en_edicion: state.tarea_en_edicion
    }
};

const mapStateToFields = (state) => {
    return {
        descripcion: state.tarea_en_edicion,
        tiempo: state.tarea_en_edicion
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id_libro, id, descripcion, tiempo) => { id === '' ? dispatch(agregar_tarea(id_libro, descripcion, tiempo)) : dispatch(editar_tarea(id_libro, id, descripcion, tiempo)) },
        onReset: () => { dispatch(establecer_tarea_en_edicion(tarea_por_defecto)) }
    }
};

const AntTareaForm = Form.create({mapPropsToFields: mapStateToFields})(TareaForm);

const ContenedorTareaForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntTareaForm);

export default ContenedorTareaForm;
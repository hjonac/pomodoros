import TareaForm from './tarea_formulario';
import { Form } from 'antd';
import { connect } from 'react-redux';

import {agregar_tarea, editar_tarea, establecer_tarea_en_edicion, eliminar_tarea} from "../../redux-acciones/acciones_tareas";

const tarea_por_defecto = {
    id_libro:'',
    id:'',
    descripcion:'',
    tiempo:'',
    tiempo_transcurrido:''
};

function onDelete(id_libro, id) {
    return (dispatch) => {
        dispatch(eliminar_tarea(id_libro, id))
        dispatch(establecer_tarea_en_edicion(tarea_por_defecto));
    };
}

const mapStateToProps = (state) => {
    return {
        libro_seleccionado: state.libro_seleccionado,
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
        onSubmit: (id_libro, id, descripcion, tiempo, tiempo_transcurrido) => { id === '' ? dispatch(agregar_tarea(id_libro, descripcion, tiempo, tiempo_transcurrido)) : dispatch(editar_tarea(id_libro, id, descripcion, tiempo, tiempo_transcurrido)) },
        onReset: (id_libro) => { dispatch(establecer_tarea_en_edicion(tarea_por_defecto)) },
        onDelete: (id_libro, id) => { dispatch(onDelete(id_libro, id)) }
    }
};

const AntTareaForm = Form.create({mapPropsToFields: mapStateToFields})(TareaForm);

const ContenedorTareaForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AntTareaForm);

export default ContenedorTareaForm;
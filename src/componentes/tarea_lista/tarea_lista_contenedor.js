import TareaList from './tarea_lista';
import { connect } from 'react-redux';
import { sortear_tareas, establecer_tarea_en_edicion, establecer_tarea_activa, editar_tarea } from "../../redux-acciones/acciones_tareas";
import { cambiar_estado_tareas } from "../../redux-acciones/acciones_estado";
import {FINALIZADO} from "../../constantes/estados";

function onChangeState(estado){
    return (dispatch) => {
        if (estado === FINALIZADO) {
            dispatch(establecer_tarea_activa(''));
        }

        dispatch(cambiar_estado_tareas(estado));
    };
}

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        estado: state.estado,
        tarea_en_edicion: state.tarea_en_edicion,
        tarea_activa: state.tarea_activa,
        libro_seleccionado: state.libro_seleccionado
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortEnd: (id_libro, indices) => { dispatch(sortear_tareas(id_libro, indices)) },
        onEdit: (tarea) => { dispatch(establecer_tarea_en_edicion(tarea)) },
        establecerActiva: (id) => { dispatch(establecer_tarea_activa(id)) },
        cambiarEstado: (estado) => { dispatch(onChangeState(estado)) },
        modificarTarea: (id_libro, id, descripcion, tiempo, tiempo_transcurrido) => { dispatch(editar_tarea(id_libro, id, descripcion, tiempo, tiempo_transcurrido)) },
    }
};

const ContenedorTareaList = connect(mapStateToProps, mapDispatchToProps)(TareaList);

export default ContenedorTareaList;
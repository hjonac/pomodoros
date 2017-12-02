import TareaList from './tarea_lista';
import { connect } from 'react-redux';
import {
    sortear_tareas, establecer_tarea_en_edicion, establecer_tarea_activa, editar_tarea, resetear_tarea,
    resetear_todas_las_tareas
} from "../../redux-acciones/acciones_tareas";
import { cambiar_estado_tareas } from "../../redux-acciones/acciones_estado";
import {ACTIVO, ACTIVO_FINALIZADO, RESETEADO_FINALIZADO} from "../../constantes/estados";

function onChangeState(estado, libro){
    return (dispatch) => {
        if (estado === ACTIVO_FINALIZADO) {
            if (libro.repetir) {
                dispatch(resetear_todas_las_tareas(libro.id));
                dispatch(cambiar_estado_tareas(ACTIVO_FINALIZADO));
                setTimeout(() => dispatch(cambiar_estado_tareas(ACTIVO)), 1)
            } else {
                dispatch(cambiar_estado_tareas(estado));
            }
            dispatch(establecer_tarea_activa(''));
        } else if (estado === RESETEADO_FINALIZADO) {
            dispatch(cambiar_estado_tareas(estado));
            dispatch(establecer_tarea_activa(''));
        } else {
            dispatch(cambiar_estado_tareas(estado));
        }
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
        cambiarEstado: (estado, libro) => { dispatch(onChangeState(estado, libro)) },
        resetearTarea: (id_libro, id) => { dispatch(resetear_tarea(id_libro, id)) },
        modificarTarea: (id_libro, id, descripcion, tiempo, tiempo_transcurrido) => { dispatch(editar_tarea(id_libro, id, descripcion, tiempo, tiempo_transcurrido)) },
    }
};

const ContenedorTareaList = connect(mapStateToProps, mapDispatchToProps)(TareaList);

export default ContenedorTareaList;
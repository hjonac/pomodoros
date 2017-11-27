import TareaControls from './tarea_controles';
import { connect } from 'react-redux';

import { cambiar_estado_tareas } from "../../redux-acciones/acciones_estado";
import { establecer_tarea_activa } from "../../redux-acciones/acciones_tareas";
import {FINALIZADO, RESETEADO} from "../../constantes/estados";

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        estado: state.estado,
        libro_seleccionado: state.libro_seleccionado
    }
};

function onChangeState(estado){
    return (dispatch) => {
        if (estado === RESETEADO) {
            dispatch(establecer_tarea_activa(''));
        }

        dispatch(cambiar_estado_tareas(estado));
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeState: (estado) => { dispatch(onChangeState(estado)) }
    }
};

const ContenedorTareaControls = connect(mapStateToProps, mapDispatchToProps)(TareaControls);

export default ContenedorTareaControls;
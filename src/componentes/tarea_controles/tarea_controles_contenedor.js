import TareaControls from './tarea_controles';
import { connect } from 'react-redux';

import { cambiar_estado_tareas } from "../../redux-acciones/acciones_estado";
import { RESETEADO } from "../../constantes/estados";
import { establecer_tarea_activa } from "../../redux-acciones/acciones_tareas";
import { repetir_libro, seleccionar_libro } from "../../redux-acciones/acciones_libros";

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        estado: state.estado,
        libro_seleccionado: state.libro_seleccionado
    }
};

function onChangeState(estado){
    return (dispatch) => {
        if (estado === RESETEADO)
        {
            dispatch(establecer_tarea_activa(''));
        }

        dispatch(cambiar_estado_tareas(estado));
    };
}

function onChangeRepeat(libro, repetir) {
    return (dispatch) => {
        dispatch(repetir_libro(libro.id, repetir));
        dispatch(seleccionar_libro({id: libro.id, nombre: libro.nombre, repetir: repetir}));
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeState: (estado) => { dispatch(onChangeState(estado)) },
        onChangeRepeat: (libro, repetir) => { dispatch(onChangeRepeat(libro, repetir)) }
    }
};

const ContenedorTareaControls = connect(mapStateToProps, mapDispatchToProps)(TareaControls);

export default ContenedorTareaControls;
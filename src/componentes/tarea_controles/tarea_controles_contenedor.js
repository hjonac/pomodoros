import TareaControls from './tarea_controles';
import { connect } from 'react-redux';

import { cambiar_estado_tareas } from "../../redux-acciones/acciones_estado";

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        estado: state.estado,
        libro_seleccionado: state.libro_seleccionado
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeState: (estado) => { dispatch(cambiar_estado_tareas(estado)) }
    }
};

const ContenedorTareaControls = connect(mapStateToProps, mapDispatchToProps)(TareaControls);

export default ContenedorTareaControls;
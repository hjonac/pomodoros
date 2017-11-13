import TareaList from './tarea_lista';
import { connect } from 'react-redux';
import { sortear_tareas, establecer_tarea_en_edicion } from "../../redux-acciones/acciones_tareas";

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        tarea_en_edicion: state.tarea_en_edicion,
        tarea_activa: state.tarea_activa,
        libro_seleccionado: state.libro_seleccionado
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortEnd: (id_libro, indices) => { dispatch(sortear_tareas(id_libro, indices)) },
        onEdit: (tarea) => { dispatch(establecer_tarea_en_edicion(tarea)) }
    }
};

const ContenedorTareaList = connect(mapStateToProps, mapDispatchToProps)(TareaList);

export default ContenedorTareaList;
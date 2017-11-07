import TareaList from './tarea_lista';
import { connect } from 'react-redux';
import { sortear_tareas } from "../../redux-acciones/acciones_tareas";

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        libro_seleccionado: state.libro_seleccionado
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortEnd: (id_libro, indices) => { dispatch(sortear_tareas(id_libro, indices)) }
    }
};

const ContenedorTareaList = connect(mapStateToProps, mapDispatchToProps)(TareaList);

export default ContenedorTareaList;
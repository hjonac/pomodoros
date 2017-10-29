import TareaList from './tarea_lista';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tareas: state.tareas,
        libro_seleccionado: state.libro_seleccionado
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const ContenedorTareaList = connect(mapStateToProps, mapDispatchToProps)(TareaList);

export default ContenedorTareaList;
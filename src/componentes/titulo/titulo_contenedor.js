import Titulo from './titulo';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import { establecer_libro_en_edicion, seleccionar_libro } from "../../redux-acciones/acciones_libros";
import { establecer_tarea_activa, establecer_tarea_en_edicion } from "../../redux-acciones/acciones_tareas";
import { cambiar_estado_tareas } from "../../redux-acciones/acciones_estado";
import { PAUSADO } from "../../constantes/estados";

const libro_por_defecto = {
    id: '',
    nombre: ''
};


const tarea_por_defecto = {
    id_libro:'',
    id:'',
    descripcion:'',
    tiempo:'',
    tiempo_transcurrido:''
};

function onBack() {
    return (dispatch) => {
        dispatch(seleccionar_libro(libro_por_defecto));
        dispatch(establecer_libro_en_edicion(libro_por_defecto));
        dispatch(establecer_tarea_en_edicion(tarea_por_defecto));
        dispatch(establecer_tarea_activa(''));
        dispatch(cambiar_estado_tareas(PAUSADO));
        dispatch(routerActions.push('/'));
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        libro_seleccionado: state.libro_seleccionado,
        show_options: ownProps.show_options
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBack: () => dispatch(onBack())
    }
};

const ContenedorTitulo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Titulo);

export default ContenedorTitulo;
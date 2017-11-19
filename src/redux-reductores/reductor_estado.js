import { CAMBIAR_ESTADO_TAREAS } from "../redux-acciones/acciones_estado";

function estado(state = 'pausado', action) {
    switch (action.type)
    {
        case CAMBIAR_ESTADO_TAREAS:
            return action.estado;
        default:
                return 'pausado';
    }
}

const reductor_estado = {
    estado
};

export default reductor_estado;

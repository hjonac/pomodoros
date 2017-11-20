import { CAMBIAR_ESTADO_TAREAS } from "../redux-acciones/acciones_estado";
import { PAUSADO } from "../constantes/estados";

function estado(state = 'pausado', action) {
    switch (action.type)
    {
        case CAMBIAR_ESTADO_TAREAS:
            return action.estado;
        default:
                return PAUSADO;
    }
}

const reductor_estado = {
    estado
};

export default reductor_estado;

import React, { Component } from 'react';

class TareaItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.tarea.descripcion}
                <br/>
                <small>{this.props.tarea.tiempo}</small>
            </li>
        )
    }
}

TareaItem.defaultProps = {
    tarea: {
        id_libro: '',
        id: '',
        descripcion: '',
        tiempo: '',
        tiempo_transcurrido: ''
    },
    activa: false,
    en_edicion: false,
    onEdit: () => {},
    onActive: () => {},
    onDelete: () => {}
};

export default TareaItem;
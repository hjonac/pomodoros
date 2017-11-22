import React, { Component } from 'react';
import { Button } from 'antd';
import classNames from "classnames";

class TareaItem extends Component {

    constructor(props){
        super(props);
        this.establecerLibroEnEdicion = this.establecerLibroEnEdicion.bind(this);
    }

    render() {
        let tarea = this.props.tarea;

        return (
            <li className={ classNames({activo: this.props.en_edicion, en_curso: this.props.activa }) }>
                {tarea.descripcion}
                <br/>
                <small>{tarea.tiempo} - {tarea.tiempo_transcurrido}</small>
                <div className={ classNames('opciones') }>
                    <Button shape="circle" icon="edit" size="small" onClick={ this.establecerLibroEnEdicion }/>
                </div>
            </li>
        )
    }

    establecerLibroEnEdicion(e) {
        this.props.onEdit(this.props.tarea);
        e.stopPropagation();
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
    onActive: () => {}
};

export default TareaItem;
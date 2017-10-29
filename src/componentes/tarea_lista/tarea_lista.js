import React, { Component } from 'react';
import TareaItem from './tarea_item';
import classNames from "classnames";
import './tarea_lista.css';

class TareaList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const tareas = this.props.tareas[this.props.libro_seleccionado.id] || [];
        let tarea_activa = this.props.tarea_activa;
        let tarea_en_edicion = this.props.tarea_en_edicion;
        let lista = null;

        if (tareas.length > 0)
        {
            lista = tareas.map((item) => {
                return <TareaItem key={item.id} tarea={item} activa={item.id === tarea_activa.id} en_edicion={item.id === tarea_en_edicion.id} onEdit={this.props.onEdit} onActive={this.props.onActive} onDelete={this.props.onDelete}/>
            });
        } else {
            lista = <li>No hay tareas creadas empieza por crear una tarea</li>
        }

        return (
            <ul className={classNames('lista-tareas')}>
                {lista}
            </ul>
        );
    }
}

TareaList.defaultProps = {
    tareas: {},
    libro_seleccionado: {
        id: '',
        nombre: ''
    },
    tarea_activa: {
        id_libro: '',
        id: '',
        descripcion: '',
        tiempo: '',
        tiempo_transcurrido: ''
    },
    tarea_en_edicion: {
        id_libro: '',
        id: '',
        descripcion: '',
        tiempo: '',
        tiempo_transcurrido: ''
    },
    onEdit: () => {},
    onActive: () => {},
    onDelete: () => {}
};

export default TareaList;
import React, { Component } from 'react';
import TareaItem from './tarea_item';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import classNames from "classnames";
import './tarea_lista.css';

const SortableItem = SortableElement(({ tarea, tarea_activa, tarea_en_edicion, onEdit, onActive, onDelete }) =>
    <TareaItem key={tarea.id} tarea={tarea} activa={tarea.id === tarea_activa.id} en_edicion={tarea.id === tarea_en_edicion.id} onEdit={onEdit} onActive={onActive} onDelete={onDelete}/>
);

const SortableList = SortableContainer(({ items, tarea_activa, tarea_en_edicion, onEdit, onActive, onDelete }) => {
    return (
        <ul className={classNames('lista-tareas')}>
            {items.map((tarea, index) => (
                <SortableItem key={`item-${tarea.id}`} index={index} tarea={tarea} tarea_activa={tarea_activa} tarea_en_edicion={tarea_en_edicion} onEdit={onEdit} onActive={onActive} onDelete={onDelete} />
            ))}
        </ul>
    );
});

class TareaList extends Component {

    constructor(props) {
        super(props);

        this.onSortEnd = this.onSortEnd.bind(this);
    }

    render() {
        const tareas = this.props.tareas[this.props.libro_seleccionado.id] || [];
        let tarea_activa = this.props.tarea_activa;
        let tarea_en_edicion = this.props.tarea_en_edicion;

        return <SortableList items={tareas} pressDelay={300} lockAxis={"y"} helperClass={"ghost"} tarea_activa={tarea_activa} tarea_en_edicion={tarea_en_edicion} onEdit={this.props.onEdit} onActive={this.props.onActive} onDelete={this.props.onDelete} onSortEnd={this.onSortEnd} />;
    }

    onSortEnd(indices, e) {

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
    onDelete: () => {},
    onSortEnd: () => {}
};

export default TareaList;
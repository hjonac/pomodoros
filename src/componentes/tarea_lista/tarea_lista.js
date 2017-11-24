import React, { Component } from 'react';
import TareaItem from './tarea_item';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import {PAUSADO, ACTIVO, RESETEADO, FINALIZADO} from "../../constantes/estados";
import moment from 'moment';
import classNames from "classnames";
import './tarea_lista.css';

const SortableItem = SortableElement(({ tarea, tarea_activa, tarea_en_edicion, onEdit, onActive }) =>
    <TareaItem key={tarea.id} tarea={tarea} activa={tarea.id === tarea_activa.id} en_edicion={tarea.id === tarea_en_edicion.id} onEdit={onEdit} onActive={onActive} />
);

const SortableList = SortableContainer(({ items, tarea_activa, tarea_en_edicion, onEdit, onActive, onDelete }) => {
    return (
        <ul className={classNames('lista-tareas')}>
            {items.map((tarea, index) => (
                <SortableItem key={`item-${tarea.id}`} index={index} tarea={tarea} tarea_activa={tarea_activa} tarea_en_edicion={tarea_en_edicion} onEdit={onEdit} onActive={onActive} />
            ))}
        </ul>
    );
});

class TareaList extends Component {

    constructor(props) {
        super(props);

        this.onSortEnd = this.onSortEnd.bind(this);
        this.format = 'HH:mm:ss';
    }

    render() {
        const tareas = this.props.tareas[this.props.libro_seleccionado.id] || [];
        const tarea_activa = this.props.tarea_activa;
        const tarea_en_edicion = this.props.tarea_en_edicion;

        return <SortableList items={tareas} pressDelay={300} lockAxis={"y"} helperClass={"ghost"} tarea_activa={tarea_activa} tarea_en_edicion={tarea_en_edicion} onEdit={this.props.onEdit} onActive={this.props.onActive} onDelete={this.props.onDelete} onSortEnd={this.onSortEnd} />;
    }

    onSortEnd(indices, e) {
        this.props.onSortEnd(this.props.libro_seleccionado.id, indices)
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const tareas = nextProps.tareas[nextProps.libro_seleccionado.id] || [];
        const id_activa = nextProps.tarea_activa;
        let index = 0;

        if(tareas.length > 0) {

            if (nextProps.estado === ACTIVO) {
                if (id_activa === '') {
                    this.props.establecerActiva(tareas[index].id);
                } else {
                    index = tareas.findIndex(tarea => tarea.id === id_activa);
                    let tarea_activa = tareas[index];

                    if (tarea_activa.tiempo_transcurrido === tarea_activa.tiempo) {
                        index++;

                        if(index === tareas.length) {
                            this.props.cambiarEstado(FINALIZADO);
                        } else {
                            this.props.establecerActiva(tareas[index].id);
                        }
                    } else {
                        let tiempo_actual = moment(tarea_activa.tiempo_transcurrido, this.format);

                        setTimeout(() => {
                            this.props.modificarTarea(tarea_activa.id_libro, tarea_activa.id, tarea_activa.descripcion, tarea_activa.tiempo, tiempo_actual.add(1, 'second').format(this.format));
                        }, 1000);
                    }
                }
            }

            if (nextProps.estado === RESETEADO) {
                console.log(id_activa);
                if (id_activa === '') {
                    this.props.establecerActiva(tareas[index].id);
                } else {
                    index = tareas.findIndex(tarea => tarea.id === id_activa);
                    let tarea_activa = tareas[index];

                    if (tarea_activa.tiempo_transcurrido === '00:00:00') {
                        index++;

                        if(index === tareas.length) {
                            this.props.cambiarEstado(FINALIZADO);
                        } else {
                            this.props.establecerActiva(tareas[index].id);
                        }
                    } else {
                        let tiempo_actual = moment('00:00:00', this.format);
                        this.props.modificarTarea(tarea_activa.id_libro, tarea_activa.id, tarea_activa.descripcion, tarea_activa.tiempo, tiempo_actual.format(this.format));
                    }
                }
            }

            if (nextProps.estado === PAUSADO) {
                this.props.establecerActiva('');
            }
        }
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
    onSortEnd: (id_libro, indices) => {},
    onEdit: (tarea) => {},
    establecerActiva: (id) => {},
    cambiarEstado: (estado) => {},
    modificarTarea: (id_libro, id, descripcion, tiempo, tiempo_transcurrido) => {}
};

export default TareaList;
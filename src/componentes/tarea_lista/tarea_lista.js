import React, { Component } from 'react';
import TareaItem from './tarea_item';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import {PAUSADO, ACTIVO, RESETEADO, ACTIVO_FINALIZADO, RESETEADO_FINALIZADO} from "../../constantes/estados";
import moment from 'moment';
import classNames from "classnames";
import './tarea_lista.css';

const SortableItem = SortableElement(({ tarea, tarea_activa, tarea_en_edicion, estado, onEdit, onActive }) =>
    <TareaItem key={tarea.id} tarea={tarea} activa={tarea.id === tarea_activa} en_edicion={tarea.id === tarea_en_edicion.id} estado={estado} onEdit={onEdit} onActive={onActive} />
);

const SortableList = SortableContainer(({ items, tarea_activa, tarea_en_edicion, estado, onEdit, onActive }) => {
    return (
        <ul className={classNames('lista-tareas')}>
            {items.map((tarea, index) => (
                <SortableItem key={`item-${tarea.id}`} index={index} tarea={tarea} tarea_activa={tarea_activa} tarea_en_edicion={tarea_en_edicion} estado={estado} onEdit={onEdit} onActive={onActive} />
            ))}
        </ul>
    );
});

class TareaList extends Component {

    constructor(props) {
        super(props);

        this.onSortEnd = this.onSortEnd.bind(this);
        this.format = 'HH:mm:ss';
        this.timer = null;
    }

    render() {
        const tareas = this.props.tareas[this.props.libro_seleccionado.id] || [];
        const tarea_activa = this.props.tarea_activa;
        const tarea_en_edicion = this.props.tarea_en_edicion;

        return <SortableList items={tareas} pressDelay={300} lockAxis={"y"} helperClass={"ghost"} tarea_activa={tarea_activa} tarea_en_edicion={tarea_en_edicion} estado={this.props.estado} onEdit={this.props.onEdit} onActive={this.props.onActive} onSortEnd={this.onSortEnd} />;
    }

    onSortEnd(indices, e) {
        this.props.onSortEnd(this.props.libro_seleccionado.id, indices)
    }

    componentDidMount() {
        this.props.establecerActiva('');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const tareas = nextProps.tareas[nextProps.libro_seleccionado.id] || [];
        const id_activa = nextProps.tarea_activa;
        let diferentes = this.props.tarea_activa !== nextProps.tarea_activa;

        let index = 0;
        if(tareas.length > 0) {

            if (nextProps.estado === ACTIVO) {
                this.temporizador(diferentes ? 1 : 1000).then(() => {
                    if (id_activa === '') {
                        this.props.establecerActiva(tareas[index].id);
                    } else {
                        index = tareas.findIndex(tarea => tarea.id === id_activa);
                        let tarea_activa = tareas[index];

                        if (tarea_activa.tiempo_transcurrido === tarea_activa.tiempo) {
                            index++;
                            if(index === tareas.length) {
                                this.props.cambiarEstado(ACTIVO_FINALIZADO, nextProps.libro_seleccionado);
                            } else {
                                this.props.establecerActiva(tareas[index].id);
                            }
                        } else {
                            let tiempo_actual = moment(tarea_activa.tiempo_transcurrido, this.format);

                            this.props.modificarTarea(tarea_activa.id_libro, tarea_activa.id, tarea_activa.descripcion, tarea_activa.tiempo, tiempo_actual.add(1, 'second').format(this.format));
                        }
                    }
                });
            }

            if (nextProps.estado === RESETEADO) {
                if (id_activa === '') {
                    this.props.establecerActiva(tareas[index].id);
                } else {
                    index = tareas.findIndex(tarea => tarea.id === id_activa);
                    let tarea_activa = tareas[index];

                    if (tarea_activa.tiempo_transcurrido === '00:00:00') {
                        index++;

                        if(index === tareas.length) {
                            this.props.cambiarEstado(RESETEADO_FINALIZADO, nextProps.libro_seleccionado);
                        } else {
                            this.props.establecerActiva(tareas[index].id);
                        }
                    } else {
                        this.props.resetearTarea(tarea_activa.id_libro, tarea_activa.id);
                    }
                }
            }

            if (nextProps.estado === PAUSADO) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }

            if (nextProps.estado === RESETEADO) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }
        }
    }

    temporizador(milis) {
        let temporizador = new Promise((resolve, reject) => {
           this.timer = setTimeout(() => {
               resolve();
           }, milis);
        });

        return temporizador;
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
    cambiarEstado: (estado, libro) => {},
    resetearTarea: (id_libro, id) => {},
    modificarTarea: (id_libro, id, descripcion, tiempo, tiempo_transcurrido) => {}
};

export default TareaList;
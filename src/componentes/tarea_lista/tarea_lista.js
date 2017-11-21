import React, { Component } from 'react';
import TareaItem from './tarea_item';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { PAUSADO, ACTIVO, RESETEADO } from "../../constantes/estados";
import moment from 'moment';
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
        console.log("el componente fue montado");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("recibiendo nuevas props");
        const tareas = nextProps.tareas[nextProps.libro_seleccionado.id] || [];
        const tarea_activa = nextProps.tarea_activa;
        console.log(nextProps);

        if(tareas.length > 0) {
            if (nextProps.estado === ACTIVO) {
                for(let i = 0; i < tareas.length; i++)
                {
                    let tarea = tareas[i];
                    let activa = tarea.id === tarea_activa.id;
                    console.log('activa', tarea, tarea_activa);
                    if (activa)
                    {
                        console.log('activada', tarea);
                    } else {
                        this.props.onActive(tarea);
                        console.log('activando', tarea);
                        break;
                    }
                }
            }
        }
        /*
        if(tareas.length > 0)
        {
            if (nextProps.estado === ACTIVO)
            {
                tareas.map((tarea, index) => {
                    let activa = tarea.id === tarea_activa.id;
                    if (activa)
                    {
                        console.log('tarea en curso', tarea);
                        if (tarea.tiempo_transcurrido !== tarea.tiempo)
                        {
                            let tiempo_actual = moment(tarea.tiempo_transcurrido, this.format);
                            setInterval(() => {
                                this.props.onSubmit(tarea.id_libro, tarea.id, tarea.tiempo, tiempo_actual.add(1, 'second').format(this.format));
                            }, 1000);

                        }
                    } else {
                        console.log('estableciendo activa', tarea);
                        this.props.onActive(tarea);
                    }
                });
            }
        }
        */
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
    onSortEnd: (id_libro, indices) => {}
};

export default TareaList;
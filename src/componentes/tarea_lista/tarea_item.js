import React, { Component } from 'react';
import { Button } from 'antd';
import classNames from "classnames";
import moment from 'moment';
import {ACTIVO, ACTIVO_FINALIZADO, PAUSADO, RESETEADO_FINALIZADO} from "../../constantes/estados";

class TareaItem extends Component {

    constructor(props){
        super(props);
        this.establecerLibroEnEdicion = this.establecerLibroEnEdicion.bind(this);
        this.format = 'HH:mm:ss';
    }

    render() {
        let tarea = this.props.tarea;
        let actual = moment(tarea.tiempo, this.format);
        let total_actual = (actual.hours() * 3600) + (actual.minutes() * 60) + actual.seconds();
        let transcurrida = moment(tarea.tiempo_transcurrido, this.format);
        let total_transcurrida = (transcurrida.hours() * 3600) + (transcurrida.minutes() * 60) + transcurrida.seconds();
        let porcentaje = (+total_transcurrida * 100) / +total_actual;

        let animate = this.props.estado !== ACTIVO_FINALIZADO && this.props.estado !== RESETEADO_FINALIZADO;
        let pausado = this.props.estado === PAUSADO;
        let activo = this.props.estado === ACTIVO || this.props.estado === ACTIVO_FINALIZADO;
        let styles = {
            height: porcentaje+'%'
        };

        return (
            <li className={ classNames({activo: this.props.en_edicion, en_curso: this.props.activa }) }>
                {tarea.descripcion}
                <div className={ classNames({progress: true, animate: animate, activo: activo, pausado: pausado}) }  style={styles}>&nbsp;</div>
                <br/>
                <small>{tarea.tiempo}</small>
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
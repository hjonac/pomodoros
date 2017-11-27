import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import {PAUSADO, ACTIVO, RESETEADO, FINALIZADO} from "../../constantes/estados";

class TareaControls extends Component {

    constructor(props) {
        super(props);
        this.activar = this.activar.bind(this);
        this.pausar = this.pausar.bind(this);
        this.resetear = this.resetear.bind(this);
    }

    render() {
        const estado = this.props.estado;
        const tareas = this.props.tareas[this.props.libro_seleccionado.id] || []

        let icon = '';
        switch (estado)
        {
            case PAUSADO:
            case RESETEADO:
                icon = 'play-circle-o';
                break;
            case ACTIVO:
                icon = 'pause-circle-o';
                break;
            default:
                icon = 'play-circle-o';
        }

        let controls = null;
        let boton_resetear = null;
        let boton_control = null;

        if(tareas.length > 0)
        {
            if (estado === PAUSADO || estado === FINALIZADO) {
                boton_resetear = <Button type="default" htmlType="button" icon="reload" onClick={ this.resetear }/>;
            }

            if (estado === ACTIVO || estado === PAUSADO) {

            }

            controls = (
                <Col span={24}>
                    <Button type="primary" htmlType="button" icon={icon} onClick={ estado === ACTIVO ? this.pausar : this.activar }/>&nbsp;{ boton_resetear }
                </Col>
            );
        } else {
            controls = '';
        }

        return (
            <Row gutter={16} type="flex">
                { controls }
            </Row>
        )
    }

    activar(e) {
        this.props.onChangeState(ACTIVO);
    }

    pausar(e) {
        this.props.onChangeState(PAUSADO);
    }

    resetear(e) {
        this.props.onChangeState(RESETEADO);
    }
}

TareaControls.defaultProps = {
    estado: PAUSADO,
    tareas: [],
    onChangeState: () => {},
};

export default TareaControls;
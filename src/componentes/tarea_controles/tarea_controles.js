import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { PAUSADO, ACTIVO, RESETEADO, ACTIVO_FINALIZADO, RESETEADO_FINALIZADO } from "../../constantes/estados";

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

        let play_estado_habilitado = false;
        let play_estado_deshabiltiado = false;
        let reset_estado_deshabilitado = false;

        switch (estado)
        {
            case PAUSADO:
                play_estado_habilitado = true;
                reset_estado_deshabilitado = false;
                break;
            case RESETEADO:
                play_estado_habilitado = true;
                reset_estado_deshabilitado = true;
                break;
            case ACTIVO:
                play_estado_habilitado = false;
                reset_estado_deshabilitado = false;
                break;
            case ACTIVO_FINALIZADO:
                play_estado_habilitado = false;
                play_estado_deshabiltiado = true;
                reset_estado_deshabilitado = false;
                break;
            case RESETEADO_FINALIZADO:
                play_estado_habilitado = true;
                reset_estado_deshabilitado = true;
                break;
            default:
        }

        let controls = null;

        if(tareas.length > 0)
        {
            controls = (
                <Col span={24}>
                    <Button type={play_estado_habilitado ? 'primary' : 'danger'} htmlType="button" icon={ play_estado_habilitado ? 'play-circle-o' : 'pause-circle-o'} onClick={ play_estado_habilitado ? this.activar : this.pausar } disabled={play_estado_deshabiltiado}/> &nbsp;
                    <Button type="default" htmlType="button" icon={'retweet'} onClick={ this.resetear } disabled={ reset_estado_deshabilitado } /> &nbsp;
                </Col>
            );
            /*&nbsp;<Button type="default" htmlType="button" icon="reload" onClick={ this.resetear }/>*/
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
    onChangeState: (estado) => {},
};

export default TareaControls;
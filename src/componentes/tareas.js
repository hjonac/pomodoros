import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';
import ContenedorTareaForm from './tarea_formulario/tarea_formulario_contenedor';
import ContenedorTareaList from './tarea_lista/tarea_lista_contenedor';
import ContenedorTareaControls from './tarea_controles/tarea_controles_contenedor';

class Tareas extends Component {

    render() {
        return(
            <Row type="flex" justify="center" >
                <Col span={24}>
                    <ContenedorTitulo show_options={true}/>
                </Col>
                <Col span={24}>
                    <ContenedorTareaForm/>
                </Col>
                <Col span={24}>
                    <ContenedorTareaList/>
                </Col>
                <Col span={24}>
                    <br/>
                </Col>
                <Col span={24}>
                    <ContenedorTareaControls/>
                </Col>
            </Row>
        );
    }
}

export default Tareas;

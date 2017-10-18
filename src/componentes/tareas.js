import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';
import ContenedorTareaForm from './tarea_formulario/tarea_formulario_contenedor';

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
            </Row>
        );
    }
}

export default Tareas;

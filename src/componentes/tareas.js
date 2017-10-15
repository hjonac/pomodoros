import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';
import TareaForm from './tarea_formulario/tarea_formulario';

class Tareas extends Component {

    render() {
        const Tareaormulario = Form.create()(TareaForm);

        return(
            <Row type="flex" justify="center" >
                <Col span={24}>
                    <ContenedorTitulo show_options={true}/>
                    <Tareaormulario/>
                </Col>
            </Row>
        );
    }
}

export default Tareas;

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';

class Tareas extends Component {

    render() {
        return(
            <Row type="flex" justify="center" >
                <Col span={24}>
                    <ContenedorTitulo show_options={true}/>
                </Col>
            </Row>
        );
    }
}

export default Tareas;

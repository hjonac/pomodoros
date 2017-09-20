import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';
import ContenedorTituloForm from './titulo_formulario/titulo_formulario_contenedor';

class Libros extends Component {

    render() {

        return (
            <Row>
                <Col span={24}>
                    <ContenedorTitulo />
                </Col>
                <Col span={24}>
                    <ContenedorTituloForm />
                </Col>
            </Row>
        )
    }
}

export default Libros;
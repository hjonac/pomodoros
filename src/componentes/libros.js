import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';
import ContenedorTituloForm from './titulo_formulario/titulo_formulario_contenedor';
import ContenedorTituloList from './titulo_lista/titulo_lista_contenedor';

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
                <Col span={24}>
                    <ContenedorTituloList />
                </Col>
            </Row>
        )
    }
}

export default Libros;
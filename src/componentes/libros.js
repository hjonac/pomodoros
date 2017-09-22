import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContenedorTitulo from './titulo/titulo_contenedor';
import ContenedorLibroForm from './libro_formulario/libro_formulario_contenedor';
import ContenedorLibroList from './libro_lista/libro_lista_contenedor';

class Libros extends Component {

    render() {

        return (
            <Row type="flex" justify="center" >
                <Col span={24}>
                    <ContenedorTitulo />
                </Col>
                <Col span={24}>
                    <ContenedorLibroForm />
                </Col>
                <Col span={24}>
                    <ContenedorLibroList />
                </Col>
            </Row>
        )
    }
}

export default Libros;
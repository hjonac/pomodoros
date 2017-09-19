import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import Titulo from './titulo/titulo';
import TituloForm from './titulo_formulario/titulo_formulario';

class Libros extends Component {

    render() {

        return (
            <Row>
                <Col span={24}>
                    <Titulo />
                </Col>
                <Col span={24}>
                    <TituloForm />
                </Col>
            </Row>
        )
    }
}

export default Libros;
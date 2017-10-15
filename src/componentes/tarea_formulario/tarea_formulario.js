import React, { Component } from 'react';
import { Form, Input, TimePicker, Button, Row, Col } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

class TareaForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const format = 'HH:mm';
        let boton_cancelar = null;

        if (this.props.tarea_en_edicion.id !== '')
            boton_cancelar = <Button type="danger" htmlType="button" icon="close" onClick={this.onReset}>Cancelar</Button>;

        return(
            <Form onSubmit={this.onSubmit} layout="vertical">
                <Row gutter={16} type="flex">
                    <Col xs={24} sm={20} span={20}>
                        <FormItem label="Descripción">
                            {getFieldDecorator('descripcion', {
                                rules: [{ required: true, message: 'Este campo es requerido' }],
                                initialValue: this.props.tarea_en_edicion.nombre || ''
                            })(
                                <Input ref={(descripcion) => { this.tarea_descripcion = descripcion }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={4} span={4}>
                        <FormItem label="Duración">
                            {getFieldDecorator('tiempo', {
                                rules: [{ required: true, message: 'Este campo es requerido' }],
                                initialValue: this.props.tarea_en_edicion.tiempo ? moment(this.props.tarea_en_edicion.tiempo, format) : moment('00:00', format)
                            })(
                                <TimePicker ref={(tiempo) => {this.tarea_tiempo = tiempo}} defaultOpenValue={moment('00:00', format)} format={format} placeholder="Duración"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={24}>
                        <FormItem>
                            <input type="hidden" name="id" ref={(id) => { this.libro_id = id }} value={this.props.tarea_en_edicion.id}/>
                            <Button type="primary" htmlType="submit" icon="save">{this.props.tarea_en_edicion.id === '' ? 'Crear' : 'Editar'}</Button> &nbsp; { boton_cancelar }
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }

    onSubmit() {

    }

    onReset() {

    }
}

TareaForm.defaultProps = {
    tarea_en_edicion: {
        id_libro:'',
        id:'',
        descripcion:'',
        tiempo:'',
        tiempo_transcurrido:''
    },
    onSubmit: () => {},
    onReset: () => {}
};

export default TareaForm;
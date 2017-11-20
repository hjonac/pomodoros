import React, { Component } from 'react';
import { Form, Input, TimePicker, Button, Row, Col, Popconfirm } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

class TareaForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.eliminarTarea = this.eliminarTarea.bind(this);
        this.format = 'HH:mm:ss';
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let boton_cancelar = null;
        let boton_eliminar = null;

        if (this.props.tarea_en_edicion.id !== '')
        {
            boton_cancelar = <Button type="danger" htmlType="button" icon="close" onClick={this.onReset} />;
            boton_eliminar = (<Popconfirm title="¿Realmente desea eliminar esta tarea?" placement="right" onConfirm={ this.eliminarTarea } onCancel={()=>{}} okText="Si" cancelText="No">
                <Button type="danger" size="large" icon="delete" />
            </Popconfirm>);
        }

        return(
            <Form onSubmit={this.onSubmit} layout="vertical">
                <Row gutter={16} type="flex">
                    <Col xs={24} sm={20} span={20}>
                        <FormItem label="Descripción">
                            {getFieldDecorator('descripcion', {
                                rules: [{ required: true, message: 'Requerido' }],
                                initialValue: this.props.tarea_en_edicion.descripcion || ''
                            })(
                                <Input ref={(descripcion) => { this.tarea_descripcion = descripcion }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={4} span={4}>
                        <FormItem label="Duración">
                            {getFieldDecorator('tiempo', {
                                rules: [{ required: true, message: 'Requerido' }],
                                initialValue: this.props.tarea_en_edicion.tiempo ? moment(this.props.tarea_en_edicion.tiempo, this.format) : moment('00:00:00', this.format)
                            })(
                                <TimePicker ref={(tiempo) => {this.tarea_tiempo = tiempo}} defaultOpenValue={moment('00:00:00', this.format)} format={this.format} placeholder="Duración"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={24}>
                        <FormItem>
                            <input type="hidden" name="id" ref={(id) => { this.tarea_id = id }} value={this.props.tarea_en_edicion.id}/>
                            <input type="hidden" name="id_libro" ref={(libro_id) => { this.tarea_libro_id = libro_id }} value={this.props.libro_seleccionado.id}/>
                            <Button type="primary" htmlType="submit" icon="save" /> &nbsp; { boton_eliminar } &nbsp; { boton_cancelar }
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }

    onSubmit(e) {
        e.preventDefault();

        let tarea = {
            id_libro: this.tarea_libro_id.value,
            id: this.tarea_id.value,
            descripcion: this.tarea_descripcion.props.value,
            tiempo: this.tarea_tiempo.props.value ? this.tarea_tiempo.props.value.format(this.format) : '00:00:00'
        };

        this.props.form.validateFields((err, values) => {
            if (!err)
            {
                this.props.onSubmit(tarea.id_libro, tarea.id, tarea.descripcion, tarea.tiempo);

                this.onReset(e);
            }
        });
    }

    onReset(e) {
        this.props.onReset();
    }

    eliminarTarea(e) {
        this.props.onDelete(this.props.tarea_en_edicion.id_libro, this.props.tarea_en_edicion.id);
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
    libro_seleccionado: {
        id:'',
        nombre:''
    },
    onSubmit: () => {},
    onReset: () => {},
    onDelete: () => {}
};

export default TareaForm;
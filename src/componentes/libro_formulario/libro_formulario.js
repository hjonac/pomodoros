import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class LibroForm extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let boton_cancelar = null;

        if (this.props.libro_activo.id !== '')
            boton_cancelar = <Button type="danger" htmlType="button" icon="close" onClick={this.onReset}>Cancelar</Button>;

        return (
            <Form onSubmit={this.onSubmit} layout="vertical">
                <FormItem label="Nombre">
                    {getFieldDecorator('nombre', {
                        rules: [{ required: true, message: 'Este campo es requerido' }],
                        initialValue: this.props.libro_activo.nombre || ''
                    })(
                        <Input ref={(nombre) => { this.libro_nombre = nombre }}/>
                    )}
                </FormItem>
                <FormItem>
                    <input type="hidden" name="id" ref={(id) => { this.libro_id = id }} value={this.props.libro_activo.id}/>
                    <Button type="primary" htmlType="submit" icon="save">{this.props.libro_activo.id === '' ? 'Crear' : 'Editar'}</Button> &nbsp; { boton_cancelar }
                </FormItem>
            </Form>
        );
    }

    onSubmit(e) {
        e.preventDefault();

        let titulo = {
            id: this.libro_id.value,
            nombre: this.libro_nombre.props.value,
        };

        this.props.form.validateFields((err, values) => {
            if (!err)
            {
                this.props.onSubmit(titulo.id, titulo.nombre);

                this.onReset(e);
            }
        });
    }

    onReset(e) {
        this.props.onReset();
    }
}

LibroForm.defaultProps = {
    libro_activo: {
        id: '',
        nombre: ''
    },
    onSubmit: () => {},
    onReset: () => {}
};

export default LibroForm;
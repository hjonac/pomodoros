import React, { Component } from 'react';
import { Button } from 'antd';
import './titulo.css';

class Titulo extends Component {

    render() {
        const back_button = this.props.show_options ? <Button onClick={this.props.onBack} shape="circle" icon="left" size="small"/> : null;
        return (

            <h4 id="titulo">
                { this.props.libro_seleccionado.nombre === '' ? 'Pomodoros' : this.props.libro_seleccionado.nombre }
                { back_button }
            </h4>
        );
    }
}

Titulo.defaultProps = {
    libro_seleccionado: {
        id: '',
        nombre: ''
    },
    show_options: false,
    onBack: () => {}
};

export default Titulo;
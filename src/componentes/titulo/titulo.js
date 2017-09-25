import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './titulo.css';

const ButtonGroup = Button.Group;

class Titulo extends Component {

    render() {
        const back_button = this.props.show_options ? <Link to="/"><Button shape="circle" icon="left" size="small"/></Link> : null;
        return (

            <h4 id="titulo">
                { this.props.libro_activo.nombre === '' ? 'Pomodoros' : this.props.libro_activo.nombre }
                { back_button }
            </h4>
        );
    }
}

Titulo.defaultProps = {
    libro_activo: {
        id: '',
        nombre: ''
    },
    show_options: false
};

export default Titulo;
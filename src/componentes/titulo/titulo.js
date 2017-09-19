import React, { Component } from 'react';

class Titulo extends Component {

    render() {
        return (
            <h4 id="titulo">
                { this.props.libro_activo.nombre === '' ? 'Pomodoros' : this.props.libro_activo.nombre}
            </h4>
        );
    }
}

Titulo.defaultProps = {
    libro_activo: {
        id: '',
        nombre: ''
    }
};

export default Titulo;
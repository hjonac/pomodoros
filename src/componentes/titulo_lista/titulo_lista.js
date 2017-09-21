import React, { Component } from 'react';

class TituloList extends Component {

    render() {
        console.log(this.props.libros);
        const libros = this.props.libros;
        let lista = null;

        if(this.props.libros.length > 0)
        {
            lista = libros.map(libro =>
                <li key={ libro.id }>{ libro.nombre } <br/><a href="">editar</a> <a href="">eliminar</a></li>
            );
        } else {
            lista = <li>Crea un libro para empezar</li>
        }

        return (
            <ul>
                {lista}
            </ul>
        );
    }
}

TituloList.defaultProps = {
    libros: []
};

export default TituloList;
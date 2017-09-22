import React, { Component } from 'react';
import classNames from 'classnames';
import LibroItem from './libro_item';
import './libro_lista.css';

class LibroList extends Component {

    render() {
        const libros = this.props.libros.sort((libro_a, libro_b) => {return libro_a.nombre > libro_b.nombre});
        const libro_activo = this.props.libro_activo;
        let lista = null;

        if(this.props.libros.length > 0)
        {
            lista = libros.map(libro =>
                <LibroItem key={libro.id} libro={libro} activo={libro.id === libro_activo.id} onClick={this.props.onClick} onDelete={this.props.onDelete}/>
            );
        } else {
            lista = <li>Crea un libro para empezar</li>
        }

        return (
            <ul className={classNames('lista-libros')}>
                {lista}
            </ul>
        );
    }
}

LibroList.defaultProps = {
    libros: [],
    libro_activo: {
        id: '',
        nombre: ''
    },
    onClick: () => {},
    onDelete: () => {}
};

export default LibroList;
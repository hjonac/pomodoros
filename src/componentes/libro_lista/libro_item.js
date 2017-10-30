import React, { Component } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';

class LibroItem extends Component {
    constructor(props){
        super(props);
        this.establecerLibroEnEdicion = this.establecerLibroEnEdicion.bind(this);
        this.seleccionarLibro = this.seleccionarLibro.bind(this);
    }

    render() {
        const libro = this.props.libro;
        return (
            <li onClick={ this.seleccionarLibro } className={ classNames({activo: this.props.seleccionado}) }>{ libro.nombre }
                <div className={ classNames('opciones') }>
                    <Button shape="circle" icon="edit" size="small" onClick={ this.establecerLibroEnEdicion }/>
                </div>
            </li>
        );
    }

    establecerLibroEnEdicion(e) {
        this.props.onEdit(this.props.libro);
        e.stopPropagation();
    }

    seleccionarLibro(e) {
        this.props.onSelect(this.props.libro);
    }
}

LibroItem.defaultProps = {
    libro: {
        id: '',
        nombre: ''
    },
    seleccionado: false,
    en_edicion:false,
    onEdit: () => {},
    onSelect: () => {}
}

export default LibroItem;

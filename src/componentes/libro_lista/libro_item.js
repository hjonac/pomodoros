import React, { Component } from 'react';
import { Button, Popconfirm } from 'antd';
import classNames from 'classnames';

class LibroItem extends Component {
    constructor(props){
        super(props);
        this.establecerLibroEnEdicion = this.establecerLibroEnEdicion.bind(this);
        this.seleccionarLibro = this.seleccionarLibro.bind(this);
        this.eliminarLibro = this.eliminarLibro.bind(this);
    }

    render() {
        const libro = this.props.libro;
        return (
            <li onClick={ this.seleccionarLibro } className={ classNames({activo: this.props.seleccionado}) }>{ libro.nombre }
                <div className={ classNames('opciones') }>
                    <Button shape="circle" icon="edit" size="small" onClick={ this.establecerLibroEnEdicion }/>
                    <Popconfirm title="¿Relamente desea eliminar este libro?" placement="bottom" onClick={ this.establecerLibroEnEdicion } onConfirm={ this.eliminarLibro } onCancel={()=>{}} okText="Si" cancelText="No">
                        <Button type="danger" shape="circle" size="small" icon="delete"/>
                    </Popconfirm>
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

    eliminarLibro(e) {
        this.props.onDelete(this.props.libro.id);
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
    onSelect: () => {},
    onDelete: () => {}
}

export default LibroItem;

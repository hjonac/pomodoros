import React, { Component } from 'react';
import { Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class LibroItem extends Component {
    constructor(props){
        super(props);
        this.activarLibro = this.activarLibro.bind(this);
        this.eliminarLibro = this.eliminarLibro.bind(this);
    }

    render() {
        const libro = this.props.libro;
        return (
            <li className={ classNames({activo: this.props.activo}) } onClick={ this.activarLibro }>{ libro.nombre }
                <div className={ classNames('opciones', {hide:!this.props.activo}) }>
                    <Link to="/tareas"><Button shape="circle" icon="enter" size="small"/></Link>
                    <Popconfirm title="¿Relamente desea eliminar este libro?" placement="right" onConfirm={ this.eliminarLibro } onCancel={()=>{}} okText="Si" cancelText="No">
                        <Button type="danger" shape="circle" size="small" icon="delete"/>
                    </Popconfirm>
                </div>
            </li>
        );
    }

    activarLibro(e) {
        this.props.onClick(this.props.libro);
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
    activo: false,
    onClick: () => {},
    onDelete: () => {}
}

export default LibroItem;

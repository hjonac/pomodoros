import React, { Component } from 'react';
import classNames from 'classnames';
import LibroItem from './libro_item';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './libro_lista.css';

const SortableItem = SortableElement(({ libro, libro_en_edicion, libro_seleccionado, onEdit, onSelect }) =>
    <LibroItem key={libro.id} libro={libro} en_edicion={libro.id === libro_en_edicion.id} seleccionado={libro.id === libro_seleccionado.id} onEdit={onEdit} onSelect={onSelect} />
);

const SortableList = SortableContainer(({ items, libro_en_edicion, libro_seleccionado, onEdit, onSelect }) => {
    return (
        <ul className={classNames('lista-libros')}>
            {items.map((libro, index) => (
                <SortableItem key={`item-${libro.id}`} index={index} libro={libro} libro_en_edicion={libro_en_edicion} libro_seleccionado={libro_seleccionado} onEdit={onEdit} onSelect={onSelect} />
            ))}
        </ul>
    );
});

class LibroList extends Component {

    constructor(props) {
        super(props);

        this.onSortEnd = this.onSortEnd.bind(this);
    }

    render() {
        const libros = this.props.libros;
        const libro_en_edicion = this.props.libro_en_edicion;
        const libro_seleccionado = this.props.libro_seleccionado;

        return <SortableList items={libros} pressDelay={300} lockAxis={"y"} helperClass={"ghost"} libro_en_edicion={libro_en_edicion} libro_seleccionado={libro_seleccionado} onEdit={this.props.onEdit} onSelect={this.props.onSelect} onSortEnd={this.onSortEnd} />;
    }

    onSortEnd(indices, e) {
        this.props.onSortEnd(indices);
    }
}

LibroList.defaultProps = {
    libros: [],
    libro_activo: {
        id: '',
        nombre: ''
    },
    onEdit: (libro) => {},
    onSelect: (libro) => {},
    onSortEnd: (indices) => {}
};

export default LibroList;
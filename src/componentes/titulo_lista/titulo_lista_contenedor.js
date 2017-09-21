import TituloList from './titulo_lista';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        libros: state.libros,
        libro_activo: state.libro_activo
    }
};

const ContenedorTituloList = connect(
    mapStateToProps
)(TituloList);

export default ContenedorTituloList;
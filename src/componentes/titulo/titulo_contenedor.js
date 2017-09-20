import Titulo from './titulo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        libro_activo: state.libro_activo
    }
};

const ContenedorTitulo = connect(
    mapStateToProps
)(Titulo);

export default ContenedorTitulo;
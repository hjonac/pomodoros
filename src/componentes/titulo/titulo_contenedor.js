import Titulo from './titulo';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        libro_activo: state.libro_activo,
        show_options: ownProps.show_options
    }
};

const ContenedorTitulo = connect(
    mapStateToProps
)(Titulo);

export default ContenedorTitulo;
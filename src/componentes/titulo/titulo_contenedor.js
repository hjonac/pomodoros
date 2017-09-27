import Titulo from './titulo';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        libro_seleccionado: state.libro_seleccionado,
        show_options: ownProps.show_options
    }
};

const ContenedorTitulo = connect(
    mapStateToProps
)(Titulo);

export default ContenedorTitulo;
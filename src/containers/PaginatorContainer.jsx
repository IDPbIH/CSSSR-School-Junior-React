import { connect } from 'react-redux';
import Paginator from '../components/Paginator/Paginator';

const mapStateToProps = (state) => {
    return {
    };
};

const PaginatorContainer = connect(mapStateToProps, null)(Paginator);

export default PaginatorContainer;
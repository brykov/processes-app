import {connect} from 'react-redux'
// import { toggleTodo } from '../actions'
import List from '../components/List'
// import { VisibilityFilters } from '../actions'

// const getVisibleItems = (items, filter) => {
//     return items
// };


const mapStateToProps = state => ({
    items: state.processes
});

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

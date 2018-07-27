import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from "react-redux";

const Process = ({match}) => (
  <div>
    <Route path={`${match.path}/:processId`} render={(match) => (
      <div>{JSON.stringify(match.match.params.processId)}</div>
    )}/>
  </div>
);


const mapStateToProps = state => ({
  items: state.processes
});

const mapDispatchToProps = dispatch => ({
  // toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Process)

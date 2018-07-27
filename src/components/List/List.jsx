import React from 'react'
import s from './List.css'
import {connect} from "react-redux";
import {
  NavLink
} from 'react-router-dom'

const List = ({items}) => (
  <div className={s.List}>
    {items.map(item =>
      <NavLink to={`/process/${item.id}`} className={s.Item} key={item.id}>
        {item.title}
      </NavLink>
    )}
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
)(List)

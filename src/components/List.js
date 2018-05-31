import React from 'react'
import Item from './Item'
import s from './List.css'

const List = ({items}) => (
    <ul className={s.List}>
        {items.map(item =>
            <Item key={item.id}
                {...item}
            />
        )}
    </ul>
);


export default List

import React from 'react'
import Item from './Item'
import s from './List.css'

const List = ({items}) => (
    <div className={s.List}>
        {items.map(item =>
            <Item key={item.id}
                {...item}
            />
        )}
    </div>
);


export default List

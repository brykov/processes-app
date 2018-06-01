import React from 'react'
import s from './Item.css'

const Item = ({ title }) => (
    <div className={s.Item} >
        {title}
    </div>
);

export default Item

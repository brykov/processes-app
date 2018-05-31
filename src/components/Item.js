import React from 'react'
import s from './Item.css'

const Item = ({ title }) => (
    <li className={s.Item} >
        {title}
    </li>
);

export default Item

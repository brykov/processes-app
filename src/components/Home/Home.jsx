import React from 'react';
import s from './Home.css';
import List from '../List/List'

const Home = () => (
    <div className={s.App}>
      <h1 className={s.HomeTitle}>Your processes</h1>
          <List/>
    </div>
);

export default Home;

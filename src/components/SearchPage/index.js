import React from 'react';
import styles from './index.css';
import SearchBar from '../SearchBar';
import SearchList from '../SearchList';

export default ()=>(
  <div className={styles['search-page']}>
    <SearchBar/>
    <SearchList/>
  </div>
)

import React from 'react';
import styles from './index.css';

export default ()=>(
  <div className={styles['search-bar']}>
    <form className={styles['search-bar-form']}>
      <input className={styles['search-bar-form-input']} placeholder={"搜索"}/>
    </form>
  </div>
)

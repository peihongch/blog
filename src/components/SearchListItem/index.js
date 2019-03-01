import React from 'react';
import styles from './index.css';

export default ({item})=>(
  <div className={styles['search-list-item']}>
    <div className={styles['search-list-item-title']}>
      <a href={`/article/${item.id}`}>
        {item.title}
      </a>
    </div>
    <div className={styles['search-list-item-excerpt']}>
      {item.excerpt}
    </div>
  </div>
)

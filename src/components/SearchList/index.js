import React from 'react';
import styles from './index.css';
import SearchListItem from '../SearchListItem';

export default ({results}) => (
  <div className={styles['search-list']}>
    <ul>
      {results.map((result) =>
        <li key={result.id}>
          <SearchListItem item={result}/>
        </li>,
      )}
    </ul>
  </div>
)

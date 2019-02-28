import React from 'react';
import ArticleList from '../components/ArticleList';
import { Pagination } from 'antd';
import styles from './index.css';

document.title = '至繁归于至简@steve的博客';

export default () => (
    <div>
      <ArticleList/>
      <div className={styles['pagination-wrapper']}>
        <Pagination defaultCurrent={1} total={50} className={styles.pagination}/>
      </div>
    </div>
)

import ArticleList from '../ArticleList';
import styles from './index.css';
import { Pagination } from 'antd';
import React from 'react';

class RecentPosts extends React.Component{
  render() {
    const {articles,tags} = this.props;

    return (
      <div>
        <ArticleList articles={articles} tags={tags}/>
        <div className={styles['pagination-wrapper']}>
          <Pagination defaultCurrent={1} total={50} className={styles.pagination}/>
        </div>
      </div>
    );
  }
}

export default RecentPosts;

import React from 'react';
import ArticleList from '../components/ArticleList';
import { Pagination } from 'antd';
import styles from './index.css';
import rootReducer from '../reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

document.title = '至繁归于至简@steve的博客';

const store =createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <div>
      <ArticleList/>
      <div className={styles['pagination-wrapper']}>
        <Pagination defaultCurrent={1} total={50} className={styles.pagination}/>
      </div>
    </div>
  </Provider>

)

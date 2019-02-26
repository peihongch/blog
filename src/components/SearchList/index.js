import React from 'react';
import styles from './index.css';
import SearchListItem from '../SearchListItem';

const results = [
  {
    'id': 0,
    'title': '2018年度python榜单',
    'excerpt': '8年马上就要结束了，让我们一起见证全世界python的这一年。 今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别： 1. 由于去...',
  },
  {
    'id': 1,
    'title': '2018年度python榜单',
    'excerpt': '8年马上就要结束了，让我们一起见证全世界python的这一年。 今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别： 1. 由于去...',
  },
  {
    'id': 2,
    'title': '2018年度python榜单',
    'excerpt': '8年马上就要结束了，让我们一起见证全世界python的这一年。 今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别： 1. 由于去...',
  },
  {
    'id': 3,
    'title': '2018年度python榜单',
    'excerpt': '8年马上就要结束了，让我们一起见证全世界python的这一年。 今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别： 1. 由于去...',
  },
  {
    'id': 4,
    'title': '2018年度python榜单',
    'excerpt': '8年马上就要结束了，让我们一起见证全世界python的这一年。 今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别： 1. 由于去...',
  },
  {
    'id': 5,
    'title': '2018年度python榜单',
    'excerpt': '8年马上就要结束了，让我们一起见证全世界python的这一年。 今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别： 1. 由于去...',
  },

];

export default () => (
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

import React from 'react';
import {message} from 'antd';
import styles from './index.css';

export default ()=>{
  message.error("你没有权限查看当前页面！");

  return(
    <div className={styles.admin}>
      <h2>当前页面可不访问...</h2>
    </div>
  )

}


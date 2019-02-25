import React from "react";
import styles from './index.css';

export default ({article})=>(
  <div className={styles.article}>
    <div className={styles["article-title"]}>
      {article.title}
    </div>
    <div className={styles["article-meta"]}>
      <div className={styles["article-meta-time"]}>{article.time}</div>
      {"/"}
      <div className={styles["article-meta-tag"]}>{article.tag}</div>
    </div>
    <div className={styles["article-excerpt"]}>
      {article.excerpt}
    </div>
    <div className={styles["article-more"]}>
      阅读全文>
    </div>
  </div>
)

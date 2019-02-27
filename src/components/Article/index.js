import React from "react";
import styles from './index.css';
import { Link } from 'umi';

export default ({article})=>(
  <div className={styles.article}>
    <h2 className={styles["article-title"]}>
      {/*<a href={"#"}>*/}
        {/*{article.title}*/}
      {/*</a>*/}
      <Link to={"/article/0"}>
        {article.title}
      </Link>
    </h2>
    <div className={styles["article-meta"]}>
      <div className={styles["article-meta-time"]}>{article.time}</div>
      <span className={styles["article-meta-slash"]}>{"/"}</span>
      <div className={styles["article-meta-tag"]}>
        <a href={"#"}>
          {article.tag}
        </a>
      </div>
    </div>
    <div className={styles["article-excerpt"]}>
      {article.excerpt}
    </div>
    <div className={styles["article-more"]}>
      <a href={"#"}>阅读全文 〉</a>
    </div>
  </div>
)

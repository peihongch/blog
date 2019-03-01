import React from "react";
import styles from './index.css';

export default ({tag})=>(
  <div className={styles["tag-item"]}>
    <a href={`/tags/${tag.id}`}>
      {tag.tag_name}
    </a>
    <span>
      {tag.num}
    </span>
  </div>
)

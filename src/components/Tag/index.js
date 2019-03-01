import React from "react";
import styles from './index.css';

export default ({tag})=>(
  <div className={styles["tag-item"]}>
    <a href={`/tag/${tag.id}`}>
      {tag.tag_name}
    </a>
    <span>
      {tag.num}
    </span>
  </div>
)

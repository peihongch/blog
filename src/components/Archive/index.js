import React from "react";
import styles from './index.css';

export default ({archive}) => (
  <div className={styles["archive-item"]}>
    <a href={"#"}>
      <span className={styles["archive-item-time"]}>
        {archive.time}
      </span>
      <div>{" / "}</div>
      <span className={styles["archive-item-title"]}>
        {archive.title}
      </span>
    </a>
  </div>
)

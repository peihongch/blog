import React from "react";
import styles from './index.css';
import { Link } from 'umi';

export default ({archive}) => (
  <div className={styles["archive-item"]}>
    {/*<a href={"#"}>*/}
    <Link to={`/article/${archive.id}`}>
      <span className={styles["archive-item-time"]}>
        {archive.time}
      </span>
      <div>{" / "}</div>
      <span className={styles["archive-item-title"]}>
        {archive.title}
      </span>
    </Link>
    {/*</a>*/}
  </div>
)

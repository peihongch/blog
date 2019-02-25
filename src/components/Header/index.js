import React from "react";
import Menu from "../Menu";
import styles from './index.css'
import {Link} from "umi";

export default () => (
  <div className={styles.header}>
    <div className={styles.title}>
      <Link to={"/"}><span className={styles["title-name"]}>至繁归于至简@steve</span></Link>
    </div>
    <Menu/>
  </div>
)

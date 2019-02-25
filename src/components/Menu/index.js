import React from "react";
import {Link, withRouter} from "umi";
import styles from './index.css';

@withRouter
class Menu extends React.Component {
  render() {
    const active_url = this.props.location.pathname;

    const active_style = (url) => {
      if (url === active_url)
        return {"color": "#2196F3"}
    };

    return (
      <ul className={styles.menu}>
        <li className={styles["menu-item"]}><Link to={"/"} style={active_style("/")}>首页</Link></li>
        <li className={styles["menu-item"]}><Link to={"/archives"} style={active_style("/archives")}>归档</Link></li>
        <li className={styles["menu-item"]}><Link to={"/tags"} style={active_style("/tags")}>标签</Link></li>
        <li className={styles["menu-item"]}><Link to={"/search"} style={active_style("/search")}>搜索</Link></li>
        <li className={styles["menu-item"]}><Link to={"/lab"} style={active_style("/lab")}>实验室</Link></li>
      </ul>
    );
  }
}

export default Menu;

import React from 'react';
import styles from './index.css';
import {Link} from "umi";
import {Avatar, Popover} from "antd";
import repo from '../../assets/repo.png';
import github from '../../assets/github.png';

const popRepo = (
  <Avatar shape="square" size={192} icon="user" src={repo} alt={"repo"}/>
);

const popGithub=(
  <Avatar shape="square" size={192} icon="user" src={github} alt={"steve_chph"}/>
)

export default () => (
  <div className={styles["footer"]}>
    <div className={styles["footer-inner"]}>
      <Link to={"/"} className={styles["footer-home"]}><a href={"/"}>首页</a></Link>
      {" | "}
      <div className={styles["footer-github"]}>
        <Popover content={popRepo}>
          <a href={"https://github.com/QQ876684433/blog"} target={"_blank"}>Github Repo</a>
        </Popover>
      </div>
      {" | "}
      <div className={styles["footer-copyright"]}>
        {"Created by "}
        <Popover content={popGithub}>
          <a href={"https://github.com/QQ876684433"} target={"_blank"}>steve_chph</a>
        </Popover>
        {", and inspired by "}
        <a href={"http://http://www.dongwm.com/"} target={"_blank"}>dongwm</a>
      </div>
    </div>
  </div>
)

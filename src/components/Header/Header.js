import React from "react";
import {Link} from "umi";

export default () => (
  <div>
    <p>Header</p>
    <ul>
      <li><Link to={"/"}>首页</Link></li>
      <li><Link to={"/archives"}>归档</Link></li>
      <li><Link to={"/tags"}>标签</Link></li>
      <li><Link to={"/search"}>搜索</Link></li>
    </ul>
  </div>
)

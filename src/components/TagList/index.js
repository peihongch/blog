import React from "react";
import Tag from "../Tag";
import styles from './index.css';

const tags = [
  {
    "id": 0,
    "tag_name": "python",
    "num": 1
  },
  {
    "id": 1,
    "tag_name": "java",
    "num": 5
  },
  {
    "id": 2,
    "tag_name": "c++",
    "num": 6
  },
  {
    "id": 3,
    "tag_name": "javascript",
    "num": 2
  },
  {
    "id": 4,
    "tag_name": "nodejs",
    "num": 10
  },
  {
    "id": 5,
    "tag_name": "umijs",
    "num": 1
  },
  {
    "id": 6,
    "tag_name": "dvajs",
    "num": 3
  },

];

export default () => (
  <div className={styles["tag-list"]}>
    {tags.map((tag) => <Tag tag={tag} key={tag.id}/>)}
  </div>
)

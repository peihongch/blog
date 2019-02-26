import React from "react";
import styles from './index.css';
import YearlyArchive from '../YearlyArchive';

const years=[
  {
    "id":0,
    "year":"2019"
  },
  {
    "id":1,
    "year":"2018"
  },
  {
    "id":2,
    "year":"2017"
  },
  {
    "id":3,
    "year":"2016"
  },

];

export default () => (
  <div className={styles["archives-list"]}>
    {years.map((year) => <YearlyArchive year={year.year} key={year.id}/>)}
  </div>
)

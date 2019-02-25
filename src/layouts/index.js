import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './index.css'

export default ({children}) => (
  <div>
    <div className={styles["header-container"]}>
      <Header/>
    </div>
    <div className={styles["content-container"]}>
      {children}
    </div>
    <Footer/>
  </div>
)

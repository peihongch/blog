import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './index.css'
import rootReducer from '@/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store =createStore(rootReducer);

export default ({children}) => (
  <Provider store={store}>
    <div>
      <div className={styles["header-container"]}>
        <Header/>
      </div>
      <div className={styles["content-container"]}>
        {children}
      </div>
      <Footer/>
    </div>
  </Provider>
)

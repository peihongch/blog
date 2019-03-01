import React from 'react';
import TagList from '../../components/TagList';
import styles from './index.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  tags: state.tags,
});

export default () => (
  <div className={styles['tag-list-container']}>
    {connect(mapStateToProps)(TagList)}
  </div>
)

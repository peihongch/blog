import React from 'react';
import TagList from '../../components/TagList';
import styles from './index.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  tags: state.tags,
});

export default connect(mapStateToProps)((props) => (
  <div className={styles['tag-list-container']}>
    <TagList {...props}/>
  </div>
));

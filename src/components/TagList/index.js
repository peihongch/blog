import React from 'react';
import Tag from '../Tag';
import styles from './index.css';

class TagList extends React.Component {
  render() {
    const {tags} = this.props;

    return (
      <div className={styles['tag-list']}>
        {tags.map((tag) => <Tag tag={tag} key={tag.id}/>)}
      </div>
    );
  }
}

export default Tag;

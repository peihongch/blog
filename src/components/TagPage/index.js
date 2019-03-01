import React from 'react';
import styles from './index.css';

const getArticlesByTag = (tag)=>{

};

class TagPage extends React.Component{
  render() {
    const {tagId,tags} = this.props;

    return (
      <div className={styles['tag-page']}>
        {/*{tags[tagId].tag_name}*/}
        <div className={styles['tag-page-name']}>
          {tags[tagId].tag_name}
        </div>
        <div>
          {}
        </div>
      </div>
    );
  }
}

export default TagPage;

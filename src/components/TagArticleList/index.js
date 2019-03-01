import React from 'react';

class TagArticleList extends React.Component{
  render() {
    const {tagId,tags} = this.props;

    return (
      <div>
        {tags[tagId].tag_name}
      </div>
    );
  }
}

export default TagArticleList;

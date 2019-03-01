import React from 'react';
import Article from '../Article';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, tags } = this.props;

    return (
      <div>
        {articles.map((article) => <Article key={article.id} article={article} tag={tags[article.tagId]}/>)}
      </div>
    );
  }
}

export default ArticleList;

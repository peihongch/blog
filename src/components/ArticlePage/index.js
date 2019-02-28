import React from 'react';
import styles from './index.css';
import ArticleCategory from '../ArticleCategory';
import Prism from 'prismjs';
import '../../assets/css/prism.css';
import { withRouter } from 'umi';

const getArticleById = (articles, articleId) => {
  return articles[articleId];
};

@withRouter
class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html_content: '',
    };
  }

  componentDidMount() {
    Prism.highlightAll();
    window.scrollTo(0, 0);
  }

  render() {
    const html = require('../../assets/html/复习要点.html');
    fetch(html).then(response => response.text()).then(content => this.setState({ html_content: content }));

    const { id } = this.props.match.params;
    const { articles } = this.props;
    const article = articles[id];

    return (
      <div className={styles['article-page']}>
        <ArticleCategory className={styles['article-page-category']}/>

        <div className={styles['article-page-container']}>
          <div className={styles['article-page-header']}>
            <div className={styles['article-page-title']}>
              {article.title}
            </div>
            <div className={styles['article-page-meta']}>
              <div className={styles['article-page-meta-time']}>
                {article.time}
              </div>
              {' / '}
              <div className={styles['article-page-meta-tag']}>
                <a href={'#'}>
                  {article.tag}
                </a>
              </div>
            </div>
          </div>

          <div className={styles['article-page-content']}>
            <section>
              {/*<article dangerouslySetInnerHTML={{ __html: this.state.html_content }}/>*/}
              <article dangerouslySetInnerHTML={{ __html: article.content }}/>
            </section>
          </div>
        </div>

      </div>
    );
  }
}

export default ArticlePage;

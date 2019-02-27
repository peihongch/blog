import React from 'react';
import styles from './index.css';
import ArticleCategory from '../ArticleCategory';
import Prism from 'prismjs';
import "../../assets/css/prism.css";

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      html_content: '',
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    // const html = require('../../assets/html/数据结构复习要点.html');
    const html = require('../../assets/html/复习要点.html');
    fetch(html).then(response => response.text()).then(content => this.setState({ html_content: content }));

    // const {article} = this.props;
    const article = {
      'id': 1,
      'title': '2018年度Python榜单',
      'time': '2018-12-31',
      'tag': 'python',
    };

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
              <article dangerouslySetInnerHTML={{ __html: this.state.html_content }}/>
            </section>
          </div>
        </div>

      </div>
    );
  }
}

export default ArticlePage;

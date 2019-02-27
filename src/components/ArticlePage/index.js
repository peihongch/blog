import React from 'react';
import styles from './index.css';
import marked from 'marked';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      // highlight: (code) =>  hljs.highlightAuto(code).value // 这段代码
    });
  }

  componentWillMount() {
    const mdPath = require('../../assets/markdown/数据结构复习要点.md');

    fetch(mdPath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: marked(text),
        });
      });
  }

  render() {
    const {markdown} = this.state;

    return (
      <div>
        <section>
          <article dangerouslySetInnerHTML={{ __html: markdown }}/>
        </section>
      </div>
    );
  }
}

export default ArticlePage;

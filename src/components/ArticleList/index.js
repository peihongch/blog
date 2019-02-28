import React from 'react';
import Article from '../Article';
import { connect } from 'react-redux';

// const articles = [
//   {
//     "id":1,
//     "title":"Java编程思想",
//     "time":"2018-10-10",
//     "tag":"Java",
//     "excerpt":"2018年马上就要结束了，让我们一起见证全世界Python的这一年。今年的榜单功能和去年相差不大，如果你看过去年榜单能够体会几个小改动，太忙了，也许明年能改版一下。榜单内容和去年有了一些区别：由...\n"
//   },
//   {
//     "id":2,
//     "title":"Thinking in Java",
//     "time":"2018.10.10",
//     "tag":"Java",
//     "excerpt":"The book named Thinking in Java is popular in China."
//   },
//   {
//     "id":3,
//     "title":"Thinking in Python",
//     "time":"2018.10.10",
//     "tag":"Python",
//     "excerpt":"The book named Thinking in Python is popular in China."
//   },
//   {
//     "id":4,
//     "title":"Thinking in Kotlin",
//     "time":"2018.10.10",
//     "tag":"Kotlin",
//     "excerpt":"The book named Thinking in Kotlin is popular in China."
//   },
//   {
//     "id":5,
//     "title":"Thinking in C++",
//     "time":"2018.10.10",
//     "tag":"C++",
//     "excerpt":"The book named Thinking in C++ is popular in China."
//   },
//
// ];
//
// export default ()=>(
//   <div>
//     {articles.map((article)=><Article key={article.id} article={article}/>)}
//   </div>
// )

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    const {articles} = this.props;

    return (
      <div>
        {articles.map((article) => <Article key={article.id} article={article}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {articles:state.articles};
};

export default connect(mapStateToProps)(ArticleList);

import React from "react";
import Article from '../components/Article'

const articles = [
  {
    "id":1,
    "title":"Thinking in Java",
    "time":"2018.10.10",
    "tag":"Java",
    "excerpt":"The book named Thinking in Java is popular in China."
  },
  {
    "id":2,
    "title":"Thinking in Java",
    "time":"2018.10.10",
    "tag":"Java",
    "excerpt":"The book named Thinking in Java is popular in China."
  },
  {
    "id":3,
    "title":"Thinking in Python",
    "time":"2018.10.10",
    "tag":"Python",
    "excerpt":"The book named Thinking in Python is popular in China."
  },
  {
    "id":4,
    "title":"Thinking in Kotlin",
    "time":"2018.10.10",
    "tag":"Kotlin",
    "excerpt":"The book named Thinking in Kotlin is popular in China."
  },
  {
    "id":5,
    "title":"Thinking in C++",
    "time":"2018.10.10",
    "tag":"C++",
    "excerpt":"The book named Thinking in C++ is popular in China."
  },

];

export default () => (
  <div>
    {articles.map((article)=><Article key={article.id} article={article}/>)}
  </div>
)

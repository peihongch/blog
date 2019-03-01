import React from 'react';
import ArticlePage from '../../components/ArticlePage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  articles: state.articles,
  tags:state.tags
});

export default connect(mapStateToProps)(ArticlePage);


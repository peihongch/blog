import React from 'react';
import RecentPosts from '../components/RecentPosts';
import { connect } from 'react-redux';

document.title = '至繁归于至简@steve的博客';

const mapStateToProps = state => {
  return {
    articles:state.articles,
    tags:state.tags
  };
};

export default connect(mapStateToProps)(RecentPosts);


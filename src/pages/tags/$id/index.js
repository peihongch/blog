import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TagArticleList from '../../../components/TagArticleList';

@withRouter
class App extends React.Component {
  render() {
    const tagId = this.props.match.params.id;
    const { tags } = this.props;

    return (
      <div>
        <TagArticleList tagId={tagId} tags={tags}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags,
});

export default connect(mapStateToProps)(App);

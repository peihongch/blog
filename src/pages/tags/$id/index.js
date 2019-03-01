import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TagPage from '../../../components/TagPage';

@withRouter
class App extends React.Component {
  render() {
    const tagId = this.props.match.params.id;
    const { tags } = this.props;

    return (
      <div>
        <TagPage tagId={tagId} tags={tags}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags,
});

export default connect(mapStateToProps)(App);

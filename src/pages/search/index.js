import React from 'react';
import SearchPage from '../../components/SearchPage';
import { connect } from 'react-redux';

const mapStateToProps=state=>({
  results:state.searchResults
});

export default connect(mapStateToProps)((props) => (
  <div>
    <SearchPage {...props}/>
  </div>
))

import React from 'react';
import styles from './index.css';
import SearchBar from '../SearchBar';
import SearchList from '../SearchList';

class SearchPage extends React.Component{
  render() {
    const {results} = this.props;

    return (
      <div className={styles['search-page']}>
        <SearchBar/>
        <SearchList results={results}/>
      </div>
    );
  }
}

export default SearchPage;

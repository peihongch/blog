import React from 'react';
import Archive from '../Archive';
import styles from './index.css';
import { Link, withRouter } from 'umi';

const archives = [
  {
    'id': 0,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 1,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 2,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 3,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 4,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 5,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 6,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },
  {
    'id': 7,
    'time': '02-26',
    'title': '2018年度Python榜单',
  },

];

@withRouter
class YearlyArchive extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { year } = this.props;

    return (
      <div className={styles['yearly-archive']}>
        <div className={styles['yearly-archive-year']}>
          <Link to={`/archives/${year}`}>
            {year}
          </Link>
        </div>
        <div className={styles['yearly-archive-list']}>
          {archives.map((archive) => <Archive archive={archive} key={archive.id}/>)}
        </div>
      </div>
    );
  }
}

export default YearlyArchive;

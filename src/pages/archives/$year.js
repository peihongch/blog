import React from 'react';
import YearlyArchive from '../../components/YearlyArchive';

export default ({match})=>(
  <div>
    <YearlyArchive year={match.params.year}/>
  </div>
)

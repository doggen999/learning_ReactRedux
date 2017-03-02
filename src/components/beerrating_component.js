import React, {PropTypes} from 'react';

const beerRating = ({brewery, name, ratingDate, score}) => (
  <li>
    <strong>{brewery}</strong> - {name} <em>{score}</em> ({ratingDate})
  </li>
);

export default beerRating;

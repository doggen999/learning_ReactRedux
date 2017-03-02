import React, {Component} from 'react';
import {connect} from 'react-redux';

import BeerRating from '../components/beerrating_component';

class BeerRatingList extends Component {
  render() {
    const {beerRatings} = this.props;
    return (
      <ul>
        {beerRatings.map(rating =>
          <BeerRating
            key={rating.id}
            {...rating}
          />
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {beerRatings: state.beerRatings}
}

export default connect(mapStateToProps)(BeerRatingList);

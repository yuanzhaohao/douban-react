import * as React from 'react';
import './rating-stars.scss';

type Props = {
  rating: {
    average: number;
    min: number;
    max: number;
  }
};

class RatingStars extends React.PureComponent<Props> {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating-stars">
        <div className="rating-gray">
          <i className="gray-star"></i>
          <i className="gray-star"></i>
          <i className="gray-star"></i>
          <i className="gray-star"></i>
          <i className="gray-star"></i>
        </div>
        <div className="rating-yellow" style={{width: `${(rating.average) / rating.max * 100}%`}}>
          <i className="yellow-star"></i>
          <i className="yellow-star"></i>
          <i className="yellow-star"></i>
          <i className="yellow-star"></i>
          <i className="yellow-star"></i>
        </div>
      </div>
    );
  }
}

export default RatingStars;
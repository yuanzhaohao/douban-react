import * as React from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../redux/list/actions';
import ListTitle from './list-title';
import RatingStars from '../common/rating-stars';

type Props = {
  type: 'showing' | 'free' | 'latest';
};

const TITLE_MAP = {
  showing: '影院热映',
  free: '免费在线观影',
  latest: '新片速递',
};

class ListModule extends React.PureComponent<Props> {
  componentDidMount() {
    const { type } = this.props;
    this.props.fetchListData({
      type,
    });
  }

  render() {
    const {
      type,
      list: {
        showingData,
      }
    } = this.props;
    console.log(showingData);
    return (
      <div className="list-module">
        <ListTitle title={TITLE_MAP[type]} />
        <div className="list-module-list">
          {showingData && showingData.length
            ? showingData.slice(0, 9).map((itemData: any) =>
              <div className="list-module-item" key={itemData.id}>
                <div className="list-module-item-img" style={{ backgroundImage: `url(${itemData.images.large}}`}}></div>
                <div className="list-module-item-title">{itemData.title}</div>
                {itemData.rating && itemData.rating.average
                  ? <div className="list-module-item-rating">
                    <RatingStars rating={itemData.rating} />
                    <div className="list-module-rating-text">{itemData.rating.average.toFixed(1)}</div>
                  </div>
                  : <div className="list-module-rating-none">暂无评分</div>
                }
              </div>
            )
            : null
          }
        </div>
      </div >
    );
  }
};

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

export default connect(mapStateToProps, listActions)(ListModule);
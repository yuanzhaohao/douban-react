import * as React from 'react';
import { connect } from 'react-redux';
import * as detailActions from '../../redux/detail/actions';
import RatingStars from '../common/rating-stars';

import './style.scss';

class Detail extends React.Component {
  componentDidMount() {
    const {
      match: {
        params,
      }
    } = this.props;
    this.props.fetchDetailData({
      id: params.id,
    });
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props.match;
    const { params: prevParams } = prevProps.match;
    // only update chart if the data has changed
    if (params.id !== prevParams.id) {
      this.props.fetchDetailData({
        id: params.id,
      });
    }
  }
  render() {
    const { detailData } = this.props.detail;
    if (detailData) {
      return (
        <div className="detail-container">
          <div className="detail-title">{detailData.title}</div>

          <div className="detail-info">
            <div className="detail-info-left">
              <div className="detail-info-rating">
                <RatingStars rating={detailData.rating} />
                <span>{detailData.rating.average}</span>
                <span>{detailData.ratings_count}</span>
              </div>
              <p>
                <span>{detailData.year}</span>
                {detailData.genres && detailData.genres.length
                  ? detailData.genres.map((genre: any) =>
                    <span key={genre}> / {genre}</span>
                  )
                  : null
                }
              </p>
              <p>原名：{detailData.original_title}</p>
            </div>
            <div className="detail-info-right" style={{ backgroundImage: `url(${detailData.images.medium})` }}></div>
          </div>

          <div className="detail-btn-wrapper">
            <div className="detail-btn">想看</div>
            <div className="detail-btn">看过</div>
          </div>

          <div className="detail-module-title">剧情简介</div>
          <div className="detail-summary">{ detailData.summary }</div>

          {detailData.casts && detailData.casts.length
            ? <>
              <div className="detail-module-title">影人</div>
                <div className="detail-person">
                {detailData.casts.map((itemData: any) =>
                    <div className="detail-person-item">
                      <div className="detail-person-pic lib-lazyload" style={{ backgroundImage: `url(${itemData.avatars.medium})` }}></div>
                      <div className="detail-person-title">{itemData.name}</div>
                    </div>
                  )}
                </div>
              </>
            : null
          }
        </div>
      );
    }
    return null;
    return (
      <div className="detail-container">
        {detailData
          ? <div className="detail-title">{detailData.title}</div>
          : null
        }
      </div>
    );
  }
};

function mapStateToProps({ detail }) {
  return {
    detail,
  };
}

export default connect(mapStateToProps, detailActions)(Detail);
import * as React from 'react';
import ListTitle from './list-title';

class ListType extends React.PureComponent {
  render() {
    return (
      <>
        <ListTitle title="分类浏览" />
        <div className="list-type-list">
          <div className="list-type-item">经典</div>
          <div className="list-type-item">冷门佳片</div>
          <div className="list-type-item">豆瓣高分</div>
          <div className="list-type-item">动作</div>
          <div className="list-type-item">喜剧</div>
          <div className="list-type-item">爱情</div>
          <div className="list-type-item">悬疑</div>
          <div className="list-type-item">恐怖</div>
          <div className="list-type-item">科幻</div>
          <div className="list-type-item">治愈</div>
          <div className="list-type-item">文艺</div>
          <div className="list-type-item">成长</div>
          <div className="list-type-item">动画</div>
          <div className="list-type-item">华语</div>
          <div className="list-type-item">欧美</div>
          <div className="list-type-item">韩国</div>
          <div className="list-type-item">日本</div>
        </div>
      </>
    );
  }
};

export default ListType;
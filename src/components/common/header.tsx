import * as React from 'react';

import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-header-inner">
          <h1>豆瓣</h1>
          <nav>
            <div className="app-header-item">电影</div>
            <div className="app-header-item">图书</div>
            <div className="app-header-item">广播</div>
            <div className="app-header-item">小组</div>
            <div className="app-header-search"></div>
          </nav>
        </div>
      </div>
    );
  }
};

export default Header;
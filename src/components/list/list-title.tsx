import * as React from 'react';

type Props = {
  title: string;
  url?: string;
};

class ListTitle extends React.PureComponent<Props> {
  render() {
    const { title, url } = this.props;
    return (
      <div className="list-title">
        <p className="list-title-text">{title}</p>
        {url
          ? <div className="list-title-btn" onClick={this.onBtnClick.bind(this, url)}>更多</div>
          : null
        }
      </div >
    );
  }

  onBtnClick = (url: string) => {
    location.href = url;
  }
};

export default ListTitle;
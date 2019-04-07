import * as React from 'react';
import ListType from './list-type';
import ListModule from './list-module';

import './style.scss';

class List extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="list-container">
        <ListModule type="showing" />
        <ListType />
      </div>
    );
  }
};



export default List;
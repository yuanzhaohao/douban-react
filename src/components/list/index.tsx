import * as React from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../redux/list/actions';

class List extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchListData('//:');
  }

  render() {
    return (
      <div>List</div>
    );
  }
};

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

export default connect(mapStateToProps, listActions)(List);
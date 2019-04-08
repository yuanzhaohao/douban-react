import * as React from 'react';
import LoadingCircle from '../components/common/loading-circle';

export default function dynamic(importComponent) {
  return class DynamicComponent extends React.Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      return (
        this.state.component
          ? <this.state.component {...this.props} />
          : <div className="loading-page">
            <LoadingCircle type="light" />
          </div>
      );
    }
  }
}
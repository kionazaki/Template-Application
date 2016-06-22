import React from "react";

function connect(state$) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      componentWillMount() {
        this.subscription = state$.subscribe(r=>{this.setState(r)});
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    };
  }
}

export default connect;

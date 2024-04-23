import React from "react";

const WithLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
export default WithLogger;

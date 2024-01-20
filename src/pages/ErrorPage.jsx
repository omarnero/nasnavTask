import React from "react";

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="error">Error : 404 Notfound</div>;
  }
}

export default ErrorPage;

import React, { Component } from "react";

import SearchAppBar from "./component/AppBar";

const appStyle = {
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <SearchAppBar />
      </div>
    );
  }
}

export default App;

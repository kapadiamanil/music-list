import React, { Component } from "react";
import { Button } from "antd";
import { MUSIC_LIST_ROUTE } from "../../helper/constants";

class Home extends Component {
  onClick = () => {
    // To redirect to Music List page on clicking button
    window.location.href = MUSIC_LIST_ROUTE;
  };

  render() {
    return (
      <div className="container">
        <h1>Music List</h1>
        <h3>Assessment Test</h3>
        <Button type="primary" size="large" onClick={this.onClick}>
          Get Music List
        </Button>
      </div>
    );
  }
}

export default Home;

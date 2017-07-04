import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <div>
        <center>
        {this.props.children}
        </center>
      </div>
    );
  }
}

export default Body;
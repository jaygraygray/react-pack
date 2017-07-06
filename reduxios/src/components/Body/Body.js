import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
class Body extends Component {
  render() {
    return (
      <div className={css(style.body)}>
        <center>
        {this.props.children}
        </center>
      </div>
    );
  }
}
const style = StyleSheet.create({
  body: {
    background: '#000',
    color: "#fff",
    height: '100vh',
  }
})
export default Body;

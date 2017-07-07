import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
class Body extends Component {
  render() {
    return (
      <div className={css(style.body)}>

        {this.props.children}

      </div>
    );
  }
}
const style = StyleSheet.create({
  body: {
    background: '#000',
    color: "#fff",
    margin: '0',
    paddingBottom: '48px'
  }
})
export default Body;

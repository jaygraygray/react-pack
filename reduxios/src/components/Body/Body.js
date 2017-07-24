import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
class Body extends Component {
  render() {
    return (
      <div className={css(style.body)}>
        <div className="row">
          <div className="col-sm-2"></div>
        
          <div className="col-sm-8">
        {this.props.children}
          </div>
          
          <div className="col-sm-2"></div>
        </div>
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

import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
class Footer extends Component {
  render() {
    return (
      <div>
        <div className={`${css(style.footer)} row`}>
          <div className="col-sm-12">
            <h2>This is a footer.</h2> 
            <p>{this.props.data}</p>
          </div>
        </div>
      </div>
    );
  }
}
const style = StyleSheet.create({
  footer: {
    textAlign: 'center',
   background: "#000",
   color: "#fff",
   margin: '0',
   padding: '0',
  }
})
export default Footer;
import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { StyleSheet, css } from 'aphrodite'

class Header extends Component {
  render() {
    return (
      <div>
        <div className={`${css(style.header)} row`}>
          <div className="col-sm-1"></div>
          
          <div className="col-sm-5">
            <center>
              <h1>I am Logo Land</h1>
            </center>
          </div>
          
          <div className="col-sm-5">
            <center>
              <ul className={css(style.ul)}>
                <li className={css(style.li)}><Link to="/">View One</Link></li>
                <li className={css(style.li)}><Link to="/two">View Two</Link></li>
                <li className={css(style.li)}><Link to="/three">View Three</Link></li>
              </ul>
            </center>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}
const style = StyleSheet.create({
  header : {
    background: '#000',
    color: "#fff",
    height: '85px',
    margin: '0',
  },
  ul: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    listStyle: 'none',
    height: '85px',
    margin: '0',
    padding: '0',
  },
  li: {
    margin: '0',
    padding: '0',
  }

})
export default Header;
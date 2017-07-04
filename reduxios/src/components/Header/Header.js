import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-1"></div>
          
          <div className="col-sm-5">
            <center>
              <h1>I am Logo Land</h1>
            </center>
          </div>
          
          <div className="col-sm-5">
            <center>
              <ul>
                <li><Link to="/">View One</Link></li>
                <li><Link to="/two">View Two</Link></li>
                <li><Link to="/three">View Three</Link></li>
              </ul>
            </center>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default Header;
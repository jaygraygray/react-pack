import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-1"></div>
          
          <div className="col-sm-5">
            <h1>I am Logo Land</h1>
          </div>
          
          <div className="col-sm-5">
            <h3>This Is Where Nav Goes</h3>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default Header;
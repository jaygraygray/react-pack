import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

class ViewThree extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body> 
         <em>THIS IS THE THIRD VIEW</em>
        </Body>
        <Footer />
      </div>
    );
  }
}


export default ViewThree;
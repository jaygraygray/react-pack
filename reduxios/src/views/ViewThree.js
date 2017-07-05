import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

import { connect } from 'react-redux'

class ViewThree extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body> 
         <em>THIS IS THE THIRD VIEW</em>
         <p> {this.props.viewData.data} </p>
        </Body>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewData: state.viewThree
  }
}

export default connect(mapStateToProps)(ViewThree);
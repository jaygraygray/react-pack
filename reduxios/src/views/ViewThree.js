import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

import axios from 'axios'

import { connect } from 'react-redux'

import { getAPIViewThree } from '../ducks/actions'

class ViewThree extends Component {

    componentDidMount() {
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=2a71fc11ed3e7be089142b2de53f9cd5').then((r) => {
        this.props.dispatch(getAPIViewThree(r.data))
      })
  }
  render() {
    const {
      viewData
    } = this.props
    return (
      <div>
        <Header />
        <Body> 
         <em>THIS IS THE THIRD VIEW</em>
         <p> {viewData && viewData.name} </p>
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
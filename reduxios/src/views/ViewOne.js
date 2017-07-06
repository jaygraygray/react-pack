import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

import { connect } from 'react-redux'

import axios from 'axios'

import { getAPIViewOne } from '../ducks/actions'


class ViewOne extends Component {

  componentDidMount() {
    
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=2a71fc11ed3e7be089142b2de53f9cd5').then((r) => {
      this.props.dispatch(getAPIViewOne(r.data))
    })
  }



  render() {
    console.log(this.props.apiData)
    console.log(this.props.apiData.name)
    return (
      <div>
        <Header />
        <Body> 
  
      The value of This SHIT IS: <b>{this.props.apiData.name}</b> 
          This is the content. I don't think I can render bootstrap components as children, though. That's not good!
          <br/> I could also just pass down an API result as a prop here! And all the data will be accessible.
         
        </Body>
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    apiData: state.api
  }
}
export default connect(mapStateToProps)(ViewOne);

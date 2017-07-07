import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import axios from 'axios'

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

import { getAPIViewOne } from '../ducks/actions'

import { PageHeader, Panel, Well } from 'react-bootstrap'

class ViewOne extends Component {

  // componentDidMount() {
  //   axios.get('http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=2a71fc11ed3e7be089142b2de53f9cd5').then((r) => {
  //     this.props.dispatch(getAPIViewOne(r.data))
  //   })
  // }

  render() {
    return (
      <div>
        <Header />
        <Body> 
          <div className="row">
            <div className="col-sm-2"></div>
          
            <div className="col-sm-8">
            {/*The value of: {this.props.apiData && this.props.apiData.name }*/}
            <h1>View One</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis finibus nisi vitae dapibus. Nam sit amet mauris dictum, consequat ante id, porta tortor. Phasellus laoreet lorem eu ex iaculis, ac pellentesque purus accumsan. Phasellus semper ipsum neque, fringilla tempor urna rhoncus eget. Cras eleifend non magna vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae euismod augue. Donec eu sem urna. Donec velit dolor, tempor at risus a, tristique scelerisque lacus. Vivamus nunc lacus, consectetur non velit non, posuere ultrices sapien.</p>

            <p>Morbi non commodo justo, malesuada dignissim turpis. Aenean mattis justo non lobortis interdum. Ut euismod ex arcu, ac scelerisque metus auctor non. Pellentesque metus justo, rhoncus sed scelerisque eget, dapibus quis elit. Nam luctus bibendum ipsum, ut vehicula massa interdum accumsan. Nullam interdum nunc non urna sollicitudin, eu ultricies diam gravida. Maecenas in mauris quis enim porttitor dignissim. Maecenas vulputate, orci at ullamcorper bibendum, leo ipsum scelerisque augue, malesuada finibus turpis neque sed arcu. Morbi laoreet felis nec sem viverra, vitae tempor eros condimentum. Cras aliquam interdum tellus ut bibendum. Nullam luctus ornare sodales. Integer porttitor, leo id fermentum laoreet, felis dolor facilisis dolor, eget laoreet nisi ante non erat. Donec tristique lacinia lectus luctus malesuada.</p>

            <p>Phasellus eleifend ante odio, sit amet molestie nulla tempus quis. Nullam non odio faucibus, venenatis justo in, viverra mauris. Ut imperdiet tincidunt pretium. Nulla dapibus elit quis tortor ultricies, a consectetur arcu pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed massa arcu, hendrerit ut nisi at, lacinia faucibus nisi. Mauris tincidunt in turpis maximus scelerisque. Nulla id magna orci. Donec efficitur odio ut nunc volutpat, in rhoncus elit egestas. Vivamus feugiat efficitur vulputate.</p>
            </div>
          <div className="col-sm-2"></div>
          </div>
        </Body>
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    apiData: state.viewOne
  }
}
export default connect(mapStateToProps)(ViewOne);

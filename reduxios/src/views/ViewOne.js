import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

class ViewOne extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body> 
          This is the content. I don't think I can render bootstrap components as children, though. That's not good!
          <br/> I could also just pass down an API result as a prop here! And all the data will be accessible
        </Body>
        <Footer />
      </div>
    );
  }
}

ViewOne.propTypes = {

};

export default ViewOne;
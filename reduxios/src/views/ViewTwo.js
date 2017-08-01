import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

import { connect } from 'react-redux'
import axios from 'axios'

import { getAPIViewTwo } from '../ducks/actions'

class ViewTwo extends Component {

  componentDidMount() {    
    const p = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=2a71fc11ed3e7be089142b2de53f9cd5')
    this.props.getAPIViewTwo(p)
  }

  
  render() {
    const {
      viewData
    } = this.props
    
    return (
      <div>
        <Header />
        <Body> 
          <div className="row">
            <div className="col-sm-2"></div>
          
            <div className="col-sm-8">
            {/*The value of: {this.props.apiData && this.props.apiData.name }*/}
            <h1>View Two</h1>
            <p>Suspendisse potenti. Ut vel ligula eu lacus elementum rutrum. Maecenas eu erat justo. Sed placerat diam non mauris euismod aliquam. Donec ac dapibus urna. Quisque iaculis pellentesque orci, ac fermentum nibh sagittis sed. Nulla varius dui id dolor eleifend tempor. Mauris vitae aliquet enim. Donec ac metus ut erat pharetra sodales ac at ipsum. Ut mi libero, varius in nibh ut, auctor accumsan nibh. Curabitur eget orci et erat rutrum mattis quis ac lectus. Morbi a arcu risus. Suspendisse ac dolor nec est mattis convallis. Cras in pulvinar nulla. Nulla ultricies purus vel semper suscipit.</p>
            <p>In non volutpat turpis. Morbi blandit magna sem, vel posuere ante malesuada vel. Suspendisse lobortis massa a commodo dapibus. Nullam finibus lacus et quam finibus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus accumsan, lacus sed cursus venenatis, nulla est fermentum diam, quis auctor elit tortor eget justo. In fermentum lacus nisl, a congue purus venenatis nec. Duis id dolor non quam fermentum volutpat. Fusce a orci id orci ultricies pretium. Mauris maximus sem tincidunt neque bibendum, ac euismod dolor tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent neque lacus, lacinia id convallis quis, consectetur sed lacus.</p>
            <p>Aenean non justo a velit luctus auctor. Praesent tincidunt, nibh eget tincidunt fermentum, velit dui varius velit, quis aliquet mi velit sit amet est. Quisque eros turpis, eleifend dictum pretium quis, dictum malesuada enim. Suspendisse viverra diam nec nibh euismod, vel posuere nibh aliquet. Ut ultricies pulvinar sem, a feugiat nibh fringilla id. Nam nec commodo felis. Praesent finibus eleifend massa nec mollis. Nulla ultricies lectus ut ante lacinia, vel luctus sapien bibendum. Sed luctus, nibh eget sodales hendrerit, ante massa scelerisque tortor, laoreet rhoncus tortor metus id ante. Sed nec mauris enim. Integer porttitor ex blandit dui aliquam, sed molestie libero aliquam. Phasellus ac cursus urna, nec pretium sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ut lacus pellentesque, convallis diam et, bibendum mi. Nam blandit, mi eu cursus feugiat, nisi libero efficitur elit, in facilisis leo eros ultricies purus. Praesent ligula purus, dignissim sed hendrerit at, malesuada at velit.</p>
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
    viewData: state.viewTwo
  }
}
export default connect(mapStateToProps)(ViewTwo);
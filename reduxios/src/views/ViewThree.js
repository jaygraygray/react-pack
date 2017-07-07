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
          <div className="row">
            <div className="col-sm-2"></div>
          
            <div className="col-sm-8">
            {/*The value of: {this.props.apiData && this.props.apiData.name }*/}
            <h1>View Three</h1>
            <p>Nullam dictum commodo eros, ut suscipit mi suscipit nec. Vivamus viverra metus vel ligula molestie, nec consectetur leo ornare. Morbi ornare, augue et vehicula viverra, sem urna sodales ligula, ac consequat lectus risus quis nibh. Aenean sem risus, viverra eget volutpat interdum, tincidunt nec ipsum. Pellentesque felis magna, malesuada non scelerisque vel, sollicitudin dictum urna. Duis a vestibulum dolor. Duis vulputate ex sit amet leo mollis venenatis. Aliquam erat volutpat. Ut at porttitor dui. Ut mattis urna lorem, vel rhoncus leo posuere eget. Phasellus aliquet, sem eu dignissim ullamcorper, odio ipsum rhoncus leo, non dignissim turpis eros eget elit. Maecenas euismod metus eget felis porttitor, et elementum mauris ultricies.</p>

            <p>Vivamus ornare et felis vitae cursus. Donec eleifend erat eu congue semper. Nulla eget accumsan enim, quis commodo leo. Donec facilisis ante aliquet, eleifend tortor id, porta erat. Morbi ac sodales est. Curabitur consequat augue ex, vel scelerisque lectus volutpat cursus. Suspendisse tincidunt dolor vulputate volutpat viverra. Sed elit sapien, tempus eu congue non, pulvinar in dui. Morbi malesuada quis est ac laoreet. Nulla magna sem, ullamcorper non dignissim faucibus, feugiat non orci. Suspendisse porttitor venenatis accumsan. Etiam at diam et tellus lacinia dignissim et a massa. Praesent venenatis, massa sit amet viverra pharetra, magna nunc euismod augue, vel hendrerit felis magna aliquet justo.</p>

            <p>Vestibulum cursus libero at posuere rutrum. Pellentesque vel arcu vulputate, mattis enim sed, tempus ipsum. Nulla congue facilisis nisl, et tincidunt quam viverra eget. Donec non ipsum tincidunt, placerat massa ut, elementum metus. Morbi sagittis ut odio in sodales. Vestibulum quis tellus mauris. Phasellus ultricies, justo in mollis iaculis, lorem nibh mattis erat, sed tristique eros massa suscipit odio. Proin sollicitudin lacus nec porttitor tincidunt. Fusce bibendum sed odio at auctor. Cras bibendum, leo at consectetur eleifend, augue tellus vestibulum ligula, eget ullamcorper risus nisi quis libero.</p>
            </div>
          <div className="col-sm-2"></div>
          </div>
        </Body>
        <Footer data={this.props.footerData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewData: state.viewThree,
    footerData: state.footerData
  }
}

export default connect(mapStateToProps)(ViewThree);
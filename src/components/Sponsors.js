import React from 'react';
import agent from '../agent';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import company2 from './company2.png';
import company1 from './company1.png';
import company3 from './company3.png';
import company4 from './company4.png';
import words from './words.png';

import {
  SPONSORS_PAGE_LOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({
    appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: SPONSORS_PAGE_LOADED, payload })
});

export class Sponsors extends React.Component {
  constructor() {
    super();
    //const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);
  }

  render() {
    return (


      <div className="home-page">
        <Banner token={this.props.token} appName={this.props.appName} declaration="Meet our sponsors!"/>

 
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <img width = {300} src={company2} alt="Manoloria" className="centerGraphic"/><br />
              <img width = {500} src={company1} alt="Manoloria" className="centerGraphic"/><br />
              <img width = {300} src={company3} alt="Manoloria" className="centerGraphic"/><br />
              <img width = {300} src={company4} alt="Manoloria" className="centerGraphic"/><br />
              <img width = {300} src={words} alt="Manoloria" className="centerGraphic"/><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
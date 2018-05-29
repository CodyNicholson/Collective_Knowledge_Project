//This file was begun using code from Editor.js ~Carissa Ward
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import infoGraphic from './ckDiagram.png';
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

              <ListErrors errors={this.props.errors}></ListErrors>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);

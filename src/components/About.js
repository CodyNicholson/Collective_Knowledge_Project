//This file was begun using code from Editor.js ~Carissa Ward
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import infoGraphic from './ckDiagram.png';
import {
  ABOUT_PAGE_LOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({
    appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: ABOUT_PAGE_LOADED, payload })
});

export class About extends React.Component {
  constructor() {
    super();
    //const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);
  }

  render() {
    return (


      <div className="home-page">
        <Banner token={this.props.token} appName={this.props.appName} declaration="What we're all about"/>

 
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">

              <ListErrors errors={this.props.errors}></ListErrors>

              <h2>Overview</h2>
                <fieldset className="topBottomBorder">

                  <p>Collective Knowledge is a website which allows users to collaborate with peers and publish their research information.</p>
                  <img src={infoGraphic} alt="infoGraphic" className="centerGraphic"/>
                </fieldset>
              <h2>FAQs</h2>
                <fieldset className="topBottomBorder">

                  <div className="qanda">Q. If I delete my profile, is any of my data kept?<br/>A. No.</div>
                  <div className="qanda">Q. How do I change my profile picture?<br/>A. Select "Copy image address" when you right click on your desired image online, then paste it into the the profile picture URL field in your settings.</div>
                  <div className="qanda">Q. How do I collaborate on an article?<br/>A. As of now, you may simply leave a comment once in the article detail view.</div>
                  <div className="qanda">Q. How do I edit an article?<br/>A. Once you have created an article, in the article detail view, click the button "Edit Article".</div>

                </fieldset>
              <h2>Contact us</h2>
              <form>
                <fieldset className="topBottomBorder">

                  <p>Email us here if you have any questions or suggestions:</p>
                  <p>CKContactUs@gmail.com</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);

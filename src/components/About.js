import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import {
  EDITOR_PAGE_LOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({
    appName: state.common.appName,
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: EDITOR_PAGE_LOADED, payload })
});

class About extends React.Component {
  constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeBody = updateFieldEvent('body');
    this.changeTagInput = updateFieldEvent('tagInput');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.slug) {
      return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
    }
    this.props.onLoad(null);
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
                <fieldset>

                  <p>Collective Knowledge is a website which allows users to collaborate with peers and publish their research information.</p>
                  <img alt="infoGraphic"/>
                </fieldset>
              <h2>FAQs</h2>
                <fieldset>

                  <div className="qanda">Q. If I delete my profile, is any of my data kept?<br/>A. No.</div>

                  <div className="qanda">Q. How do I change my profile picture?<br/>A. Select "Copy image address" when you right click on your desired image online, then paste it into the the profile picture URL field in your settings.</div>
                </fieldset>
              <h2>Contact us</h2>
              <form>
                <fieldset>

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

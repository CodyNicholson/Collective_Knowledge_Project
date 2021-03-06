import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client'
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

const ENDPOINT = "http://75.102.199.90:4001"    // Server address
const socket = socketIOClient(ENDPOINT);        // Socket obj

export class Editor extends React.Component {
  constructor() {
    super();
    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);

    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeBody = updateFieldEvent('body') 
    this.changeTagInput = updateFieldEvent('tagInput');

    this.watchForEnter = ev => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        this.props.onAddTag();
        socket.emit('enter tag', {article: this.props.articleSlug});
      }
    };

    this.removeTagHandler = tag => () => {
      this.props.onRemoveTag(tag);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const article = {
        title: this.props.title,
        description: this.props.description,
        body: this.props.body,
        tagList: this.props.tagList
      };

      const slug = { slug: this.props.articleSlug };
      const promise = this.props.articleSlug ?
        agent.Articles.update(Object.assign(article, slug)) :
        agent.Articles.create(article);

      this.props.onSubmit(promise);
    };

    socket.on('change body', (payload) => this.updateBodyText(payload));
    socket.on('change description', (payload) => this.updateDescriptionText(payload));
    socket.on('change title', (payload) => this.updateTitleText(payload));
    socket.on('change tags', (payload) => this.updateTagText(payload));
    socket.on('add tag', (payload) => this.addTagsSock(payload));

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
      //const socket = socketIOClient(this.state.endpoint);
      console.log("emitting edit");
      socket.emit('edit', {article: this.props.match.params.slug});
      return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    if (this.props.match.params.slug) {
      //const socket = socketIOClient(this.state.endpoint)
      socket.emit('leave edit', {article: this.props.articleSlug});
    }
    this.props.onUnload();
  }

  sendBody = (e) => {
    this.changeBody(e);
    socket.emit('edit body', {article: this.props.articleSlug, text: e.target.value});
  }

  sendDescription = (e) => {
    this.changeDescription(e);
    socket.emit('edit description', {article: this.props.articleSlug, text: e.target.value});
  }

  sendTitle = (e) => {
    this.changeTitle(e);
    socket.emit('edit title', {article: this.props.articleSlug, text: e.target.value});
  }

  sendTags = (e) => {
    this.changeTagInput(e);
    socket.emit('edit tags', {article: this.props.articleSlug, text: e.target.value});
  }

  updateBodyText(payload) {
    this.props.onUpdateField("body", payload)
  }
  updateDescriptionText(payload) {
    this.props.onUpdateField("description", payload)
  }
  updateTitleText(payload) {
    this.props.onUpdateField("title", payload)
  }
  updateTagText(payload) {
    this.props.onUpdateField("tagInput", payload)
  }
  addTagsSock(payload) {
    //this.props.onUpdateField("tagInput", payload)
    this.props.onAddTag();
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">

              <ListErrors errors={this.props.errors}></ListErrors>

              <form>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Article Title"
                      value={this.props.title}
                      onChange={(event) => { this.sendTitle(event);}} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What's this article about?"
                      value={this.props.description}
                      onChange={(event) => { this.sendDescription(event);}} />
                  </fieldset>

                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      value={this.props.body}
                      onChange={(event) => { this.sendBody(event);}}>
                    </textarea>
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter tags"
                      value={this.props.tagInput}
                      onChange={(event) => { this.sendTags(event);}} //this.changeTagInput
                      onKeyUp={this.watchForEnter} />

                    <div className="tag-list">
                      {
                        (this.props.tagList || []).map(tag => {
                          return (
                            <span className="tag-default tag-pill" key={tag}>
                              <i  className="ion-close-round"
                                  onClick={this.removeTagHandler(tag)}>
                              </i>
                              {tag}
                            </span>
                          );
                        })
                      }
                    </div>
                  </fieldset>

                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}>
                    Publish Article
                  </button>

                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
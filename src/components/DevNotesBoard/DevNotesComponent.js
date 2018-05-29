import React, { Component } from 'react';
import fire from '../../fire';


class DevNotesComponent extends Component {
    constructor(props) {
        super(props);
        this.editEvent = this.editEvent.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.renderEvent = this.renderEvent.bind(this);
        this.renderEditEvent = this.renderEditEvent.bind(this);
        this.state = {editing: false};
    }
    editEvent() {
        this.setState({editing: true});
    }
    saveEvent() {
        fire.database().ref('devnotes/'+this.props.eventId).set(this.refs.newText.value)
            .then(() => console.log("Save Successful"))
            .catch((error) => console.log("Save failed: " + error.message));
        window.location.reload();
    }
    removeEvent() {
        fire.database().ref('devnotes/'+this.props.eventId).remove()
            .then(() => console.log("Remove Successful"))
            .catch((error) => console.log("Remove failed: " + error.message));
        window.location.reload();
    }
    renderEvent() {
        return (
            <div className='commentContainer'>
                <div className="projFlexList">
                    <img className="entryImg" alt="Example" src={ this.props.children.split(';')[3] } />
                    <div className="textContent">
                        <h2 className="title">{ this.props.children.split(';')[0] }</h2>
                        <div className="description">{ this.props.children.split(';')[1] }</div>
                        <button onClick={this.editEvent} className="button-primary">Edit</button>
                        <button onClick={this.removeEvent} className="button-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }
    renderEditEvent() {
        return (
            <div className="editCommentContainer">
                <textarea ref="newText" className="editProject" defaultValue={this.props.children}></textarea>
                <button onClick={this.saveEvent} className="button-success">Save</button>
            </div>
        );
    }
    render() {
        if(!this.state.editing)
        {
            return this.renderEvent();
        }
        else
        {
            return this.renderEditEvent();
        }
    }
}
export default DevNotesComponent;
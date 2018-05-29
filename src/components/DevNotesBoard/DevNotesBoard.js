import React, { Component } from 'react';
import fire from '../../fire';
import DevNotesComponent from "./DevNotesComponent";


class DevNotesBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.addEvent = this.addEvent.bind(this);
    }
    addEvent(text) {
        fire.database().ref('devnotes').push( text );
    }
    render() {
        return (
            <div>
                <div className="board">
                    {this.props.eventsList.map(devnotes =>
                        <DevNotesComponent key={devnotes.id} eventId={devnotes.id} >
                            {devnotes.text}
                       </DevNotesComponent>
                    )}
                    <button onClick={this.addEvent.bind(null, "Default Event Title;\nDefault Event Description;")} className="button-create">Add New DevNote</button>
                </div>
            </div>
        );
    }
}

export default DevNotesBoardComponent;

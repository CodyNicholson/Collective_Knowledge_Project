import React, { Component } from 'react';
import fire from '../../fire';
import SponsorComponent from "./SponsorComponent";

class SponsorsBoard extends Component {
    constructor(props) {
        super(props);
        this.addEvent = this.addEvent.bind(this);
    }
    addEvent(text) {
        fire.database().ref('sponsors').push( text );
    }
    render() {
        return (
            <div>
                <div className="board">
                    {this.props.eventsList.map(devnotes =>
                        <SponsorComponent key={devnotes.id} eventId={devnotes.id} >
                            {devnotes.text}
                       </SponsorComponent>
                    )}
                    <button onClick={this.addEvent.bind(null, "Default Sponsor Title;\nDefault Sponsor Description;")} className="button-create">Add New Sponsor</button>
                </div>
            </div>
        );
    }
}

export default SponsorsBoard;

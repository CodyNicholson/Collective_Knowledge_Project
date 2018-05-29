import React, { Component } from 'react';
import fire from '../../fire';
import SponsorComponent from "./SponsorComponent";
import SponsorsBoard from "./SponsorsBoard";

class Appp extends Component {
    constructor(props) {
        super(props);
        this.state = {events: [] };
    }

    componentWillMount() {
        let eventsRef = fire.database().ref('/sponsors').orderByKey().limitToLast(100);
        eventsRef.on('child_added', node => {
            let event = { text: node.val(), id: node.key };
            this.setState({ events: [event].concat(this.state.events) });
        });
        
    }
    
    render() {
        return (
            <div className="pageBodyContainer">
                <div className="scrollDiv">
                    <SponsorsBoard eventsList={this.state.events} />
                </div>
            </div>
        );
    }
}

export default Appp;

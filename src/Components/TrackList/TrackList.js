import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
			<p>*You will add a map method that renders a set of Track components</p>
    		<Track />
			</div>
		);
	}
}

export default TrackList;
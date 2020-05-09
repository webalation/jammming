import React from 'react';

class Track extends React.Component {
	renderAction() {
		
	}

	render() {
		return (
			<div className="Track">
  				<div className="Track-information">
    				<h3>*Track name will go here</h3>
    				<p>*Track artist will go here | *Track album will go here</p>
  				</div>
  				<button className="Track-action">+ or - will go here</button>
			</div>
		);
	}
}

export default Track;
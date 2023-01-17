import React, { Component } from 'react';
import './index.css';
// the idea is to have a viewable counter to the left of "applied to" that goes up everytime I click the button. The whole div can be a large button
// every time I apply for a job, I click the button and update the counter

class AppliedTo extends Component {
	render() {
		return (
			<div class='appliedTo'>
				<h1>applied to?</h1>
			</div>
		);
	}
}

export default AppliedTo;

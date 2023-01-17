import React, { Component } from 'react';
import './index.css';
// the idea is to have a viewable counter to the left of "applied to" that goes up everytime I click the button. The whole div can be a large button
// every time I apply for a job, I click the button and update the counter

class AppliedTo extends Component {
	render() {
		return (
			<div class='flex-container'>
				<div class='appliedTo'>
					<h1>applied to?</h1>
				</div>
				<div class='receivedOffer'>
					<h1>received offer from?</h1>
				</div>
				<div class='interviewScheduled'>
					<h1>gotten an interview with?</h1>
				</div>
				<div class='beenDenied'>
					<h1>been denied?</h1>
				</div>
			</div>
		);
	}
}

export default AppliedTo;

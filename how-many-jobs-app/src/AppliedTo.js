import React, { Component } from 'react';
import './index.css';
import InterviewScheduled from './InterviewScheduled';
import ReceivedOffer from './ReceivedOffer';
import BeenDenied from './BeenDenied';
// the idea is to have a viewable counter to the left of "applied to" that goes up everytime I click the button. The whole div can be a large button
// every time I apply for a job, I click the button and update the counter


class AppliedTo extends Component {
	constructor(props) {
		super();
		this.state = {
			counter: 0,
		};
	}
	handleClick = (e) => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};
	render() {
		return (
			<div class='flex-container'>
				<div class='appliedTo'>
					<button class='tabButtons' onClick={this.handleClick}>applied to?</button>
					{/* <div>you've applied to {this.state.counter} jobs</div> */}
				<div><BeenDenied /> </div>
				<div><InterviewScheduled /></div>
				<div><ReceivedOffer /></div>
				</div>
			</div>
		);
	}
}



export default AppliedTo;


// class AppliedTo extends Component {
// 	render() {
// 		return (
// 			<div class='flex-container'></div>

//             				<ReceivedOffer />
// 				<InterviewScheduled />
// 				<BeenDenied />
// 			</div>
// 		);
// 	}
// }
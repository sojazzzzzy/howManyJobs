import React, { Component } from 'react';
import './index.css';

class InterviewScheduled extends Component {
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
				<div class='interviewScheduled'>
					<button class='tabButtons' onClick={this.handleClick}>
						gotten an interview with?
					</button>
					<div>you've had {this.state.counter} interviews</div>
				</div>
			</div>
		);
	}
}

export default InterviewScheduled;

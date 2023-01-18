import React, { Component } from 'react';
import './index.css';

class BeenDenied extends Component {
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
			// <div class='flex-container'>
				<div class='beenDenied'>
					<button class='tabButtons' onClick={this.handleClick}>
						been denied?
					</button>
					{/* <div>you've been denied {this.state.counter} jobs</div> */}
				</div>
			// </div>
		);
	}
}

export default BeenDenied;

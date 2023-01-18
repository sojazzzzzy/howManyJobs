import React, {Component} from "react";
import './index.css'


class ReceivedOffer extends Component {
    constructor (props) {
        super()
        this.state ={
            counter: 0
        }
    }
    handleClick = (e) =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render (){
        return (
					<div class='flex-container'>
							<button class='tabButtons' onClick={this.handleClick}>
								received offer from?
							</button>
							<div class='receivedOffer'>you've had {this.state.counter} job offers!</div>
						 </div>
					
				);
    }
}




export default ReceivedOffer
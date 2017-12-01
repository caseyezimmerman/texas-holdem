import React, { Component} from 'react'

class GameButtons extends Component{
	render(){
		return(
			<div className = "col-sm-12 buttons">
				<div className="col-sm-4">
					<button onClick={this.props.dealFunction} className='btn btn-muted'>Deal</button>
				</div>
				<div className="col-sm-4">
					<button onClick={
							()=>{this.props.betFunction(10)} 
						}
						className='btn btn-warning'>Bet 10</button>
				</div>
			</div>
		)
	}
	
}

export default GameButtons;
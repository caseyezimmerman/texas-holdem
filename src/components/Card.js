import React from 'react'

function Card(props){
	const theCard = `/card/${props.card}.png`;
	return(
		<div className = "col-sm-2">
			<img className ="card" src={theCard} />
		</div>
	)

}

export default Card;
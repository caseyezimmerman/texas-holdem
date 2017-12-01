import React from 'react'
import Card from './Card'

//this is just a presentational componnet
//its just to show cards

function PokerHand(props){
	var hand = []
	props.cards.map((card,index)=>{
		hand.push(<Card key={index} card={card} />)
	})
	return(
		<div className = "col-sm-12">
			{hand}
		</div>
	)
}

export default PokerHand
import React, { Component} from 'react'
import Deck from '../utilityClasses/deck';
import PokerHand from './PokerHand'

var cards = new Deck();
// console.log(cards.deck);
// cards.createDeck();
// console.log(cards.deck);
// cards.shuffleDeck();
// console.log(cards.deck)

class PokerTable extends Component{
	constructor(props){
		super(props);
		this.state = {
			dealersHand: [],
			playersHand: [],
			communityCards: []
		}
		this.prepDeck = this.prepDeck.bind(this)
	}

	// this stuff is specific to our game of holdem
	// deck is outsourced and can be used for any game that needs a shuffled deck of cards

	componentDidMount(){
		this.prepDeck();
	}

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck()
		// the cards.deck is now ready for a new hand
		// set up the players hand and the dealers hand
		var card1 = cards.deck.shift() //pull top element off the array
		var card2 = cards.deck.shift()
		var card3 = cards.deck.shift()
		var card4 = cards.deck.shift()
		// cards.deck is now 4 cards short (48) because we just mutated it 4 times wth shift
		var playersHand = [card1, card3];
		var dealersHand = [card2, card4];

		this.setState({
			playersHand: playersHand,
			dealersHand: dealersHand
		})
	}

	render(){
		console.log(this.state.playersHand)
		return(
			<div className = "col-sm-12 the-table">
				<PokerHand cards={this.state.dealersHand} />
				<PokerHand cards={this.state.communityCards} />
				<PokerHand cards={this.state.playersHand} />


			</div>
		)
	}
}

export default PokerTable;
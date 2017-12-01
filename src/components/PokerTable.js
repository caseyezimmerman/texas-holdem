import React, { Component} from 'react'
import Deck from '../utilityClasses/deck';
import PokerHand from './PokerHand'
import GameButtons from './GameButtons'
import ThePot from './ThePot'

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
			dealersHand: ['deck2','deck2'],
			playersHand: ['deck2','deck2'],
			communityCards: ['deck2','deck2','deck2','deck2','deck2'],
			wager: 0,
			bankRoll: 1000
		}
		this.prepDeck = this.prepDeck.bind(this)
		this.draw = this.draw.bind(this)
		this.playerBet = this.playerBet.bind(this)
	}

	// this stuff is specific to our game of holdem
	// deck is outsourced and can be used for any game that needs a shuffled deck of cards

	componentDidMount(){
		// this.prepDeck();
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

	// this method will be sent to game GameButtons
	// and is used to update the players betting
	// we will call draw after they have bet
	playerBet(amount){
		var newWager = this.state.wager + amount;
		this.setState({
			wager: newWager
		})
		this.draw()
	}


	// this method is called qhenever a new community card must be drawn
	// it is always called after a betting round if sinished(except for the last)

	draw(){
		var communityNewHand = this.state.communityCards;
		if (communityNewHand[0] === 'deck2'){
			// start over and push 3 cards off the top of the deck onto the array
			communityNewHand = [cards.deck.shift(),cards.deck.shift(),cards.deck.shift()]		
		}else{
			// push
			communityNewHand.push(cards.deck.shift());
		}
		this.setState({
			communityCards: communityNewHand
		})
	}

	render(){
		console.log(this.state.playersHand)
		return(
			<div className = "col-sm-12 the-table">
				<ThePot wager={this.state.wager} />
				<PokerHand cards={this.state.dealersHand} />
				<PokerHand cards={this.state.communityCards} />
				<PokerHand cards={this.state.playersHand} />
				<GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet} />

			</div>
		)
	}
}

export default PokerTable;
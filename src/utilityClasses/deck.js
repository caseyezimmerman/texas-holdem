// we could write a normal function but lets do OOP

class Deck{
	constructor(){
		// no need for super because this is a not a subclass
		this.deck = []
	}
	createDeck(){
		// reset the deck
		this.deck = [];
		// two loops, one for the suit and one for card value
		var suits = ['h', 's', 'd', 'c'];
		for(let s = 0; s < suits.length; s++){
			// inner loop for value
			for(let c = 1; c <=13; c++){
				// push combo of c and s onto this.deck
				this.deck.push(c+suits[s]);
			}
		}
	}

	shuffleDeck(){
		// swap 2 random indicies in the array many many times
		for(let i = 0; i < 10000; i++){
			var rand1 = Math.floor(Math.random()* 52);
			var rand2 = Math.floor(Math.random()* 52);
			// store in temp the value of random 1
			var temp = this.deck[rand1];
			// overwrite whats in rand1 with whats is rand2
			this.deck[rand1] = this.deck[rand2]
			// now overwrite whats in rand 2 with whats in temp(whatever was in rand1)
			this.deck[rand2] = temp
		}
	}
}

export default Deck;
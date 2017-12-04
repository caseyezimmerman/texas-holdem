
import fs from 'fs';

class ReadPokerFile{
	console(){
		var file = fs.readFileSync('/poker.txt')
		console.log(file)
	}
}

export default ReadPokerFile;
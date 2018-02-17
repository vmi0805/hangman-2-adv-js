const letters7c = function(first, second, third, fourth, fifth, sixth, seventh){
	const arrayRight = ['_', '_', '_', '_', '_', '_', '_'];
	const arrayWrong = [];
	this.first = first;
	this.second = second;
	this.third = third;
	this.fourth = fourth;
	this.fifth = fifth;
	this.sixth = sixth;
	this.seventh = seventh;
	this.numCorrect = 0;
	this.numWrong = 0;
	this.guess = function(pass){
		console.log(pass);
			switch (pass){
				case this.first:
					console.log('first');
					arrayRight.splice(0,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				case this.second:
					console.log('second');
					arrayRight.splice(1,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				case this.third:
					console.log('third');
					arrayRight.splice(2,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				case this.fourth:
					console.log('fourth');
					arrayRight.splice(3,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				case this.fifth:
					console.log('fifth');
					arrayRight.splice(4,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				case this.sixth:
					console.log('sixth');
					arrayRight.splice(5,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				case this.seventh:
					console.log('seventh');
					arrayRight.splice(6,1, pass);
					console.log(arrayRight);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numCorrect++;
				break;
				default:
					console.log('No match, guess another letter');
					arrayWrong.push(pass);
					console.log('Wrong letters guessed: ' + arrayWrong);
					this.numWrong++;
			}
		}
};

let numCorrect = 0;
let numWrong = 0;

module.exports = {letters7c, numCorrect, numWrong}

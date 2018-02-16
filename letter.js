const letters7c = function(first, second, third, fourth, fifth, sixth, seventh){
	this.arrayRight = [];
	this.arrayWrong = [];
	this.first = first;
	this.second = second;
	this.third = third;
	this.fourth = fourth;
	this.fifth = fifth;
	this.sixth = sixth;
	this.seventh = seventh;
	this.guess = function(pass){
		console.log(pass);
			switch (pass){
				case pass = this.first:
					console.log('first')
				break;
				case pass = this.second:
					console.log('second')
				break;
			}

//Need to finish the switch statment and then figure out how to get the this.arrayRight array to display underscores to start and then replace based on the index position.



			// if (pass == this.first){
			// 	console.log('first letter, yes');
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }

			// if (pass == this.second){
			// 	console.log('second letter, yes')
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }

			// if (pass == this.third){
			// 	console.log('third letter, yes')
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }

			// if (pass == this.fourth){
			// 	console.log('fourth letter, yes')
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }

			// if (pass == this.fifth){
			// 	console.log('fifth letter, yes')
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }

			// if (pass == this.sixth){
			// 	console.log('sixth letter, yes')
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }

			// if (pass == this.seventh){
			// 	console.log('seventh letter, yes')
			// 	this.arrayRight.push(pass);
			// 	console.log(this.arrayRight);				
			// } else {
			// 	this.arrayWrong.push(pass);
			// 	console.log(this.arrayWrong);
			// }
		}
};

module.exports = letters7c;

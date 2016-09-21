function unit5(){var user = prompt("What is your name?").toLowerCase();
	switch(user){
		case 'emily':
			console.log("lovely name");
			var smart= prompt("are you smart?");
			if (smart === 'yes'){
				console.log("AWESOME!");
			}
			else{
				console.log("Unlucky");
			}
			break;
		case 'fred':
			console.log("Hey Fred");
			break;
		case 'sophia':
			var cool = true;
			var happy = false;
			if(cool ||happy === true){
				console.log("YAY");
			}
			else{
				console.log("oh no");
			}
			 break;
		case 'tony':
			console.log("Is that your full name?");
			var lame = true;
			var funny =false;
			if(lame &&funny === true){
				console.log("cool combo");
			}
			else{
				console.log("that sucks");
			}
			break;
		default:
			console.log("cool name! Have a nice day");
			break;
	}
};
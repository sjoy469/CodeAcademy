function unit3(){var text = "sophia sophia sophia";
	var myName = "sophia"
	var hits=[]
	for (var i = 0; i < text.length; i ++){
		if (text[i] === myName[0]){
			for(var j = i; j < (myName.length + i); j++) {
				hits.push("hello")}
			}
	}
	if(hits.length === 0){
		console.log("Your name wasn't found!");
	}
	else {
		console.log(hits);
	}
};
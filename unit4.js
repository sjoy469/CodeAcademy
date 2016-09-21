
function unit4(){var slaying = true;
	var hit = Math.floor(Math.random() * 2);
	var damage =Math.floor(Math.random() * 5 + 1);
	var totalDamage = 0;

	while(slaying){
		totalDamage += (totalDamage + damage);
		if( hit === true){
			console.log('Congrats');
			if(totalDamage >= 4){
				slaying = false;
				console.log('slayn');
			}
			else{
				hit = Math.floor(Math.random() * 2);
			}
				
		}
		else{
			console.log('defeat');
			slaying = false;
		}
	}
};
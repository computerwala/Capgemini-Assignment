console.log("Next Armstrong Number:");

function getNextArmstrong(num){
		for(let i=num+1;;i++){
		let	nlength = i.toString().length;
		let sum = 0;
		let temp = i;

		while(temp>0){
			let rem = temp%10;
			sum += rem**nlength;
			temp = parseInt(temp/10);
		}  
		if(sum == i){
			return i;
		}
	}
}

console.log(getNextArmstrong(9));
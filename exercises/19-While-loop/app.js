
//fix this function:
function startCounting()
{
	var counter = 0;
	while(true)
	{
		console.log(counter);
		counter = counter + 1
			if(counter>100){
				break;
			}
	}
	
	return counter;
}

startCounting();
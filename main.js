
function updateText(precision, index){
	var topTextElement = document.getElementsByClassName('topTime')[index];
	var bottomTextElement = document.getElementsByClassName('bottomTime')[index];
	let endingDate = new Date();
	if(precision)
		endingDate.setHours(18, 0, 0, 0);
	else
		endingDate.setHours(18, 0, 0);
	let msLeft = endingDate.getTime()-Date.now();
	let outputText = simplify_frac(msLeft, 7200000);
	topTextElement.innerText = outputText[0];
	bottomTextElement.innerText = outputText[1];
}
function simplify_frac(n, d){
    i = 2
    while(i < Math.min(n, d) + 1){
        if((n % i == 0)&&(d % i == 0)){
            n = n / i
			Math.round(n);
            d = d / i
			Math.round(d);
		}
        else {
            i += 1
		}
	}
    return([n, d]);
}
setInterval(updateText, 10, true, 0);
setInterval(updateText, 600, true, 1);
setInterval(updateText, 1000, false, 2);
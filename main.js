function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

const duration = parseInt(getUrlParam('duration', '7200000'));
const hours = parseInt(getUrlParam('hours', '18'));
const minutes = parseInt(getUrlParam('minutes', '0'));
const seconds = parseInt(getUrlParam('seconds', '0'));

const titleString = getUrlParam('title', 'TOK');
document.getElementsByClassName('mainTitle')[0].innerText = titleString + ' time countdown';
document.getElementsByClassName('mainTitle')[1].innerText =  'Time Left in ' + titleString + ':';

function updateText(precision, index){
	var topTextElement = document.getElementsByClassName('topTime')[index];
	var bottomTextElement = document.getElementsByClassName('bottomTime')[index];
	let endingDate = new Date();
	if(precision)
		endingDate.setHours(hours, minutes, seconds, 0);
	else
		endingDate.setHours(hours, minutes, seconds);
	let msLeft = endingDate.getTime()-Date.now();
	let outputText = simplify_frac(msLeft, duration);
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
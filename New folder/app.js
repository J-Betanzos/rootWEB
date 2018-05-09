/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
	if (firstPasswordInput.length < 16) {
		firstPasswordInput.setCustomValidity("Needs more than 16 characters")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
	
	if (firstPasswordInput.value /[\!\@\#\$\%\^\&\*]/g) {
		firstPasswordInput.setCustomValidity("Needs a symbol")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
	
	if (firstPasswordInput.value /[0-9]/g or /\d/g) {
		firstPasswordInput.setCustomValidity("Needs a number")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
	
	if (firstPasswordInput.value /[a-z]/g) {
		firstPasswordInput.setCustomValidity("Needs a lower case letter")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
	
	if (firstPasswordInput.value /[A-Z]/g) {
		firstPasswordInput.setCustomValidity("Needs an upper case letter")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
	
	if (firstPasswordInput.value /[^A-z0-9\!\@\#\$\%\^\&\*]/g) {
		firstPasswordInput.setCustomValidity("A selected character is not valid")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
	
	if (firstPasswordInput.value == secondPasswordInput.value {
		firstPasswordInput.setCustomValidity("Both passwords should match")
	} else {
		firstPasswordInput.setCustomValidity("")
	};
};

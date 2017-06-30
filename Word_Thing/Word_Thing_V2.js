$(document).ready(function(){
	
	function myFunction(){//The function is right fucking here why does it say not defined
		var input = document.inputs.inputBox.value;
		var split = input.split(" "); 
		var array = [split]; 
		
		array.sort();

$('.results').html('Hello World!');

}});
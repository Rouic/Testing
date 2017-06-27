$(document).ready(function(){
	
	function check(){
		var input = document.inputs.inputBox.value; //need to start using jQuery for selecting...
		var split = input.split(" "); //so split is now an array of your words from your input! Good shit! Your array looks like: ['hello', 'nick', 'you', 'penis']
		var array = [input]; //why are you putting your raw input into an array?
		
		var a = [], b = [], prev; //not sure what the fuck these are doing here... whatever I'll leave them.
		
		array.sort(); //um, so your calling the sort function with no params on an empty array (or an array with 1 string in it as it was before????)
		
		for ( var i = 0; i < split.length; i++ ) {    //This is your core logic here, and it's quite a mess. I'm not actully sure what it does and I don't think you know either
			if (array[i] !== prev) { 				   
				a.push(arr[i]);
				b.push(1);
			} else {
				b[b.length-1]++;
			}
			prev = array[i];
		}
		
		console.log(a);  //Looking at stuff in the console is always a great tip, i use it for debugging every day! So goooood!
		console.log(b);



	}


	//document.getElementById('thewords').InnerHTML = input; //Again, no JQ and I dont even know what this does. You're making a DOM element into an input?? I even had to comment this line as it broke everything else... thats how fucked this line is...


	//SO... LETS START AGAIN...

	//1. So we have an input with the ID "textbox" (L4), and using the jQuery val() function we get the inputted value as a string, hooray.
	//2. Using the split() function with the paremeter " " (space) we turn our string into an array. eg. ["this", "used", "to", "be", "one", "sentence"]
	//3. For each of those words in the string we need to store how many we see, maybe using an object. If we havent seen a word yet then lets just make that 1.
	//4. We now have an object with words and their count - this is pretty much the core logic done and anything else is just for doing a better job at displaying the results.
	//5. The very last step is to run all of the above if we detect a change in our input. Simples.
	
	
	function count(){
		var input = $('#textbox').val(); //So the first part before the dot selects an element by ID, then the val() function gets it's value as a string (if it's an input which it is)
		var array = input.split(" "); //We then split our string into an array of words by giving the split() function a parameter of " " (space)
		var counting = {}; //Lets then define our short term storage which we'll use an object for. 
		
		for(var i = 0; i < array.length; i++){ //right, so for each word in our array lets do something
			if(counting[array[i]]){ //now heres where things might look a bit confusing. We ask, IF counting (an object has an element named (our current word in our for loop) then...
				counting[array[i]]++; //add 1 to it
			} else { //otherwise if our object does not have the word stored;
				counting[array[i]] = 1; //make the word equal one. 
			} //if you still don't really get objects and arrays we'll make that something to have a long discusssion about.
		}
		$('#thewords').html(JSON.stringify(counting)); //Finally make the inner HTML of the DOM object with the ID "thewords" equal a stringified version of our object (not pretty btw)
		
	}
	$('#textbox').on("input", count); //And the last step! When we detect a change in our input - do a thing!
	
});
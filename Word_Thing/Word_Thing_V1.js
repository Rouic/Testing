$(document).ready(function(){
function check(){

	var input = document.inputs.inputBox.value;
	var split = input.split(" ");
	var array = [input]

var a = [], b = [], prev;

    array.sort();
    for ( var i = 0; i < array.length; i++ ) {
        if ( array[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = array[i];
    }

    console.log(a);
    console.log(b);
}


	document.getElementById('thewords').InnerHTML = input;
}
})
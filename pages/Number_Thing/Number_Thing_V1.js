function check(){
	var number = parseInt(document.table.inputBox.value);
	var range = parseInt(document.table.length.value);
	var array = [number];
    var multiplier = 1
	grow();


	function grow(){
array.push(number * multiplier);
var twat = parseInt(array.last)

if (twat < range){
	console.log('range was smaller')
	multiplier++;
	grow();
}
else {console.log('range was bigger')}


console.log(array);

}
document.getElementById("after_submit");
document.getElementById("answer").innerHTML = array;
}


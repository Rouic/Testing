function check(){
	$(function(){
	var number = parseInt(document.table.inputBox.value);
	var range = parseInt(document.table.length.value);
	var array = [number];
    var multiplier = 1

if ( range > 500 ) {
	alert('Whoa calm down bro')
}
if ( range ){}
	else var range = 15

	grow();


	function grow(){

		//var twat = $(array).last()
		//if (range < twat) {
			//console.log('range was smaller');
			//array.push(number * multiplier);
        // grow()
		//}
		
array.push(number * multiplier);
var twat = (array.length);

if (twat < range){
	console.log('range was smaller');
	multiplier++;
	grow();
}
else {console.log('range was bigger')}

}
console.log(array.shift);
document.getElementById("answer").innerHTML = array;
})};


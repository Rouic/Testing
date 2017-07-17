function check(){
var hinty = []
	var question1 = document.quizz.question1.value;
	var question2 = document.quizz.question2.value;
	var question3 = document.quizz.question3.value;
	var question4 = document.quizz.question4.value;
	var question5 = document.quizz.question5.value;
	var correct = 0;


			if (question1 == "no") {
				correct = correct +1;}
			else {console.log("try question 1 again")}

			if (question2 == "yes") {
				correct = correct +1;}
			else {console.log("try question 2 again")}

			if (question3 == "420") {
				correct = correct +1;}
			else {console.log("try question 3 again")}

			if (question4 == "ans4.3") {
				correct = correct +1;}
			else {console.log("try question 4 again")}

			if (question5 == "ans5.2") {
				correct = correct +1;}
			else {console.log("try question 5 again")}

			if (question5 == "ans5.3") {
				correct = correct +0.5;}	
var pictures = ("shia.gif");

document.getElementById("after_submit");
document.getElementById("number_correct").innerHTML = "You got " + correct + "/5 correct.";
if (correct >= 5) {document.getElementById ("picture").src = pictures};
}

function hint (){ 
	hinty = []
	var question1 = document.quizz.question1.value;
	var question2 = document.quizz.question2.value;
	var question3 = document.quizz.question3.value;
	var question4 = document.quizz.question4.value;
	var question5 = document.quizz.question5.value;

			if (question1 == "no"){}
			else {hinty.push(' 1');}

			if (question2 == "yes"){}
			else {hinty.push(' 2');}

			if (question3 == "420"){}
			else {hinty.push(' 3');}

			if (question4 == "ans4.3"){}
			else {hinty.push(' 4');}

			if (question5 == "ans5.2"){}
			else {hinty.push(' 5');}

			if (question5 == "ans5.3"){}
byehint()
document.getElementById("after_hint");
document.getElementById("theHint").innerHTML = "Try questions " + hinty + " again.";
}

function phone(){
	alert ("RING RING");
	alert ("You don't have friends");
	alert ("Carry on");
	phone2()
}

function dank() {
	var question3 = document.quizz.question3.value;
	if (question3 == "420") {
		alert('Im sorry')}
    else {alert('no')}
}


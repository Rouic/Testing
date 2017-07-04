function check(){

	var question1 = document.quizz.question1.value;
	var question2 = document.quizz.question2.value;
	var question3 = document.quizz.question3.value;
	var correct = 0;


			if (question1 == "no") {
				correct++;
			}
			if (question2 == "yes") {
				correct++;
			}
			if (question3 == "ans2") {
				correct++;
			}
			if (question3 == "ans3") {
				correct++, correct ++;
			}




document.getElementById("after submit");

document.getElementById("number correct") = "You got " + correct + " correct.";
}
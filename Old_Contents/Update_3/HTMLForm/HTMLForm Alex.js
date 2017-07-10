$('#button').click(function(){
  
  var q1 = $('#question1').val();
  var q2 = $('#question2').val();
  var q3 = $('input[name=question3]:checked').val();
    
  var correct = 0;
  if (q1 == "no"){
    correct++;
  }
  if(q2 == "yes"){
   correct++;
  }
  if(q3 == "ans3"){
   correct++;
  }

  var score = 0;
  if(correct < 3){ 
    var score = 1;
  } else if(correct >= 3){
    var score = 0;
  }
  
  var messages = ["All correct!", "Nope try again"];

//document.getElementById("after submit");
//document.getElementById("message").innerHTML = messages[score];
  $('#whathappened').html(messages[score]+" AND MY DISK IS THIS LONG: "+correct+"mm");
});
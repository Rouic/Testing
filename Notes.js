Spitting out list items
for (var i=0; i < list.length; i++) {
	alert('you have '+list[i]+' in your list');
}

JS Events:
.addEventListener
click, focus, mouseenter, mouseleave, blur, input
mouseup, mousedown, keyup, keydown, mousemove

< Less than
> Greater than
<= Less than or equal to
>= Greater than or equal to
== equal to
!= not equal to
&& both conditions need to be true

<img src="">

<input type="text">	Defines a one-line text input field
<input type="radio">	Defines a radio button (for selecting one of many choices)
<input type="submit">	Defines a submit button (for submitting the form)

$( document ).ready(function() {
});
$(function(){
});

JQuery:
$('*') selects everything
$('p') selects all paragraphs
$('#thing') you can select an id. Used to then edit that thing
$(selector).action()
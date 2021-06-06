
var correctAnswer = 'yes';
var correctAnswer2 = 'Yes'

var wrongAnswer = 'no'
var wrrongAnswer2 = 'No'

var numberOfStars=5



function wlecoming(){
alert('Welcome to my fav. cars page')
}

wlecoming();

var question = prompt('Do you like cars')
var attempt = 2;

for (var i = 1; i < attempt; i++) {
  if (question == correctAnswer2 || question == correctAnswer) {
    alert('you may enter :p')
    
     break;
  }
else if (question == wrrongAnswer2 || question == wrongAnswer) {
    var question = prompt('Do you like cars')
    if(i<=2)
  {
    alert("get out :p")
  }
  }
}

var question2 = prompt('how many stars would you give this page (1-5)')

function printStars(){
while(question2 <=5)
{
  document.write('<div>' +' users rating for this page'+'</div>' +'<br>' )
  for(var i = 0; i < question2; i++)
  document.write('<div>'+ '<img src="goldenStar.jpg" width="50" height="50">'+ "</div>")
  break;
}
}
printStars();
=======
var question = prompt('Do you like cars')
var attempt = 2;

for (var i = 1; i < attempt; i++) {
  if (question == correctAnswer2 || question == correctAnswer) {
    alert('you may enter :p')
    
     break;
  }
else if (question == wrrongAnswer2 || question == wrongAnswer) {
    var question = prompt('Do you like cars')
    if(i<=2)
  {
    alert("get out :p")
  }
  }
}

var question2 = prompt('how many stars would you give this page (1-5)')

while(question2 <=5)
{
  document.write('<div>' +' users rating for this page'+'</div>' +'<br>' )
  for(var i = 0; i < question2; i++)
  document.write('<div>'+ '<img src="goldenStar.jpg" width="50" height="50">'+ "</div>")
  break;
}

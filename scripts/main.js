var myImage = document.querySelector('img');

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to the Halls of Hobratschk, ' + myName + "!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the Halls of Hobratschk, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}

//image changer function
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/profilepic2.png') {
    myImage.setAttribute ('src', 'images/profilepic.jpg');
  } else {
    myImage.setAttribute ('src', 'images/profilepic2.png')
  }
}

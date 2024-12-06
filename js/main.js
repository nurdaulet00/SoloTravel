  // sign in modal

  var modal = document.getElementById('myModal');
  var btn = document.getElementById('myBtn');
  var resetPassword = document.getElementById('resetPassword');
  var forgotBtn = document.getElementById('forgotPassword');
var close1 = document.querySelectorAll(".close1");
var close2 = document.querySelectorAll(".close2");
  forgotBtn.onclick = function () {
    resetPassword.style.display = 'flex';
  };

  

window.onload = function () {
    modal.style.display = 'flex';
  };
  close1[0].onclick=function(){
    modal.style.display = 'none';
  }
  close2[0].onclick=function(){
    modal.style.display = 'none';
    resetPassword.style.display = 'none';
  }
  close1[1].onclick=function(){
    modal.style.display = 'none';
    resetPassword.style.display = 'none';
  }
  close2[1].onclick=function(){
    modal.style.display = 'none';
    resetPassword.style.display = 'none';
  }

  
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  const container2 = document.getElementById('container2');
  const PassForg = document.getElementById('PassForg');

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  PassForg.addEventListener('click', () => {
    container2.classList.add('right-panel-active');
  });

//   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
// document.getElementById("myAcc").innerHTML=currentUser.name;
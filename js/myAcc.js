document.addEventListener('DOMContentLoaded', function () {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var myAcc = document.getElementsByClassName('myAcc');
  // Find the elements
  for (let i = 0; i < myAcc.length; i++) {
    myAcc[i].innerHTML = currentUser.name;
  }
  const profilePhoto = JSON.parse(localStorage.getItem('currentUser')).img;

  if(profilePhoto){
    let photo =document.getElementsByClassName("profilePhoto");
    // Find the elements
    for(let i = 0; i < photo.length; i++){
      photo[i].setAttribute("src", profilePhoto);
  }
}
});

const users = JSON.parse(localStorage.getItem('tourists'));
const current = JSON.parse(localStorage.getItem('currentUser'));
function currentIndex(email) {
  if (localStorage.getItem('tourists') === null) {
    return false;
  } else {
    let users = JSON.parse(localStorage.getItem('tourists'));
    for (let i = 0; i < users.length; i++) {
      if (email == users[i].email) {
        return i;
      }
    }
  }
}



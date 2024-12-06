document.addEventListener('DOMContentLoaded', function () {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var myAcc = document.getElementsByClassName('myAcc');
  // Find the elements
  for (let i = 0; i < myAcc.length; i++) {
    myAcc[i].innerHTML = currentUser.name;
  }

  document.getElementById("userName").innerHTML=currentUser.name;
  document.getElementById("userEmail").innerHTML=currentUser.email;;
  document.getElementById("userPhone").innerHTML=currentUser.phone;

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

document
  .querySelector('#PhotoUpload')
  .addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      users[currentIndex(current.email)].img = reader.result;
      current.img = reader.result;

      localStorage.setItem('tourists', JSON.stringify(users));

      localStorage.setItem('currentUser', JSON.stringify(current));
    });
    reader.readAsDataURL(this.files[0]);
  });

document.addEventListener('DOMContentLoaded', function () {
  const currentUsersBookings = [];
  const allBookings = JSON.parse(localStorage.getItem('bookList'));
  for (let i = 0; i < allBookings.length; i++) {
    if (current.name == allBookings[i].userName) {
      currentUsersBookings.push(allBookings[i]);
    }
  }
  var table = document
    .getElementById('bookingList')
    .getElementsByTagName('tbody')[0];
  for (let j = 0; j < allBookings.length; j++) {
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    cell1.innerHTML = currentUsersBookings[j].country;
    cell2.innerHTML = currentUsersBookings[j].date;
    cell3.innerHTML = currentUsersBookings[j].time;
    cell4.innerHTML = currentUsersBookings[j].adultNumber;
    cell5.innerHTML = currentUsersBookings[j].childNumber;
    cell6.innerHTML = currentUsersBookings[j].status;
  }

  console.log(currentUsersBookings);
});




  // ___________ Registration functions____________
  /*
Admin login: Admin
Abmin password : Admin2021

*/

const MyUsers = [];
function onFormSubmit(e) {
  var formData = {};
  if (
    isValidName() &&
    isValidEmail() &&
    isValidPhone() &&
    isValidPassword()
  ) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const password = document.getElementById('password').value;
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.password = password;
    formData.isBanned = false;
    MyUsers.push(formData);
    try {
      if (localStorage.getItem('tourists') === null) {
        localStorage.setItem('tourists', JSON.stringify(MyUsers));
      } else {
        let storage = JSON.parse(localStorage.getItem('tourists'));
        storage.push(formData);
        localStorage.setItem('tourists', JSON.stringify(storage));
        console.log(storage);
      }
    } catch (err) {
      console.error(err);
    }
    alert('You have successfully registered!');

    container.classList.remove('right-panel-active');
    resetForm();
  }

  let noBorder = document.querySelectorAll('.input');
  for (i = 0; i < noBorder.length; i++) {
    noBorder[i].classList.add('noBorder');
  }
  // resetForm();
}

// Validate form
function isExisted(email) {
  if (localStorage.getItem('tourists') === null) {
    return false;
  } else {
    let users = JSON.parse(localStorage.getItem('tourists'));
    for (let i = 0; i < users.length; i++) {
      if (email == users[i].email) {
        return true;
      }
    }
  }
}

function isExistedIndex(email) {
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

// name validation

function isValidName() {
  const nameBox = document.querySelector('#name');
  const name = nameBox.value;
  const errorName = document.getElementById('errorName');

  if (name == '') {
    nameBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorName.classList.add('error');
    errorName.innerHTML = 'Username is required!';
    return;
  } else {
    nameBox.style.backgroundColor = 'rgba(0, 255, 0, 0.192)';
    errorName.style.display = 'none';
    return true;
  }
}

// Email validation
function isValidEmail() {
  const emailBox = document.querySelector('#email');
  const email = emailBox.value;
  const errorEmail = document.getElementById('errorEmail');
  if (email === '') {
    emailBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorEmail.classList.add('error');
    errorEmail.innerHTML = 'Email is required!';
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorEmail.classList.add('error');
    errorEmail.innerHTML = 'Provide a valid email address!';
    return false;
  } else if (isExisted(email)) {
    alert('This email has already existed!');
    return false;
  } else {
    emailBox.style.backgroundColor = 'rgba(0, 255, 0, 0.192)';
    errorEmail.style.display = 'none';
    return true;
  }
}

// phone validation
function isValidPhone() {
  const telBox = document.querySelector('#tel');
  const tel = telBox.value;
  const errorTel = document.getElementById('errorTel');
  if (tel === '') {
    telBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorTel.classList.add('error');
    errorTel.innerHTML = 'Phone Number is required!';
    return false;
  } else if (
    !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(tel)
  ) {
    telBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorTel.classList.add('error');
    errorTel.innerHTML = 'Provide a valid phone number!';
    return false;
  } else {
    telBox.style.backgroundColor = 'rgba(0, 255, 0, 0.192)';
    errorTel.style.display = 'none';
    return true;
  }
}

// Password validation
function isValidPassword() {
  const passwordBox = document.querySelector('#password');
  const password = passwordBox.value;
  const errorPassword = document.getElementById('errorPassword');
  if (password === '') {
    passwordBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorPassword.classList.add('error');
    errorPassword.innerHTML = 'Password is required!';
    return false;
  } else if (!/\d/.test(password)) {
    passwordBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorPassword.classList.add('error');
    errorPassword.innerHTML =
      'Provide a valid password! Password should has at least one number!';
    return false;
  } else if (password.length < 8) {
    passwordBox.style.backgroundColor = 'rgba(255, 0, 0, 0.178)';
    errorPassword.classList.add('error');
    errorPassword.innerHTML =
      'Provide a valid password! Password length should be more than 8!';
    return false;
  } else {
    passwordBox.style.backgroundColor = 'rgba(0, 255, 0, 0.192)';
    errorPassword.style.display = 'none';
    return true;
  }
}
//Edit the data

//Reset the data
function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('tel').value = '';
  document.getElementById('password').value = '';
}

// _____________Login Functions (Autorization)__________________

let login = document.getElementById('login');
login.onsubmit = function () {
  let logEmail = document.getElementById('logEmail').value;
  let logPassword = document.getElementById('logPassword').value;
  let errlogEmail = document.getElementById('errlogEmail');
  let errLogPassword = document.getElementById('errLogPassword');

  let correctEmail = false;
  let correctPassword = false;

  if (logEmail === 'Admin@mail.ru' && logPassword === 'Admin2021') {
    window.location.replace('../admin-panel/admin.html');
  } else {
    if (isExisted(logEmail)) {
      correctEmail = true;
    } else if (logEmail === '') {
      errlogEmail.classList.add('error');
      errlogEmail.innerHTML = 'Cannot be blank';
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errlogEmail.classList.add('error');
      errlogEmail.innerHTML = 'Provide a valid email address!';
      return false;
    } else {
      errLogPassword.classList.add('error');
      errLogPassword.innerHTML =
        'The email address or password you entered was incorrect.';
      return false;
    }
    let users = JSON.parse(localStorage.getItem('tourists'));
    let index = isExistedIndex(logEmail);
    let rightPass = users[index].password;
    let isBanned = users[index].isBanned;

    if (logPassword == '') {
      errLogPassword.classList.add('error');
      errLogPassword.innerHTML = 'Cannot be blank';
      return false;
    } else if (logPassword != rightPass) {
      errLogPassword.classList.add('error');
      errLogPassword.innerHTML =
        'The email address or password you entered was incorrect.';
      return false;
    } else {
      correctPassword = true;
    }

    if (!correctEmail && !correctPassword) {
      alert('The email address or password you entered was incorrect.');
    } else if (isBanned == true) {
      alert('You are banned!');
    } else {
      window.location.replace('index.html');
      localStorage.setItem('currentUser', JSON.stringify(users[index]));
    }
  }
};

// _____________Forgot Password (reset password)______________

let changePasswordEmail = document.getElementById('ChangePasswordEmail');
changePasswordEmail.onsubmit = function () {
  let fEmail = document.getElementById('fEmail').value;
  const container2 = document.getElementById('container2');

  if (!isExisted(fEmail)) {
    alert('An account with that email doesnt exists!, register!');
  } else {
    container2.classList.add('right-panel-active');
  }
};

document.getElementById('NewPassword').onsubmit = function () {
  let fEmail = document.getElementById('fEmail').value;
  let index = isExistedIndex(fEmail);
  let passwordFinal = '';
  let fPassword = document.getElementById('fPassword').value;
  let fPassword2 = document.getElementById('fPassword2').value;
  let users = JSON.parse(localStorage.getItem('tourists'));
  var resetPassword = document.getElementById('resetPassword');
  if (fPassword == '' || fPassword2 == '') {
    alert('Password is required!');
  } else if (fPassword.length < 8) {
    alert('Provide a valid password! Password length should be more than 8!');
  } else if (fPassword != fPassword2) {
    alert("password doesn't match!");
  } else {
    passwordFinal = fPassword;
    users[index].password = passwordFinal;
    localStorage.setItem('tourists', JSON.stringify(users));
    alert('Password has changed!');

    resetPassword.style.display = 'none';
  }
};


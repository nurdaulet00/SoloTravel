function insertNewRecord() {
  var data = JSON.parse(localStorage.getItem('tourists'));
  var table = document
    .getElementById('userList')
    .getElementsByTagName('tbody')[0];
  for (let i = 0; i < data.length; i++) {
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = data[i].name;
    cell2.innerHTML = data[i].email;
    cell3.innerHTML = data[i].phone;
    cell4.innerHTML = data[i].password;
    cell5.innerHTML = data[i].isBanned;
    cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <br><button onClick='onDelete(this)'>Delete</button><br><button onClick='onBan(this)'>Ban</button>`;
  }
}

function getElIndex(el) {
  for (var i = 0; (el = el.previousElementSibling); i++);
  return i;
}

function onEdit(td) {
  let editForm = document.querySelector('#editForm');
  editForm.style.display = 'flex';

  selectedRow = td.parentElement.parentElement;

  document.getElementById('name').value = selectedRow.cells[0].innerHTML;
  document.getElementById('email').value = selectedRow.cells[1].innerHTML;
  document.getElementById('tel').value = selectedRow.cells[2].innerHTML;
  document.getElementById('password').value = selectedRow.cells[3].innerHTML;

  document.getElementById('edit').onclick = function () {
    selectedRow = td.parentElement.parentElement;
    var users = JSON.parse(localStorage.getItem('tourists'));
    let index = getElIndex(selectedRow);
    users[index].name = false;
    localStorage.setItem('tourists', JSON.stringify(users));

    users[index].name = document.getElementById('name').value;
    users[index].email = document.getElementById('email').value;
    users[index].phone = document.getElementById('tel').value;
    users[index].password = document.getElementById('password').value;

    selectedRow.cells[0].innerHTML = users[index].name;
    selectedRow.cells[1].innerHTML = users[index].email;
    selectedRow.cells[2].innerHTML = users[index].phone;
    selectedRow.cells[3].innerHTML = users[index].password;

    localStorage.setItem('tourists', JSON.stringify(users));
    alert('Edited!');
    let editForm = document.querySelector('#editForm');

    editForm.style.display = 'none';
  };
}

function onBan(td) {
  if (confirm('Do you want to Ban the user?')) {
    selectedRow = td.parentElement.parentElement;
    var users = JSON.parse(localStorage.getItem('tourists'));
    let ind = getElIndex(selectedRow);
    users[ind].isBanned = true;
    selectedRow.cells[4].innerHTML = true;
    localStorage.setItem('tourists', JSON.stringify(users));
    selectedRow.cells[5].innerHTML = `<button onClick='onEdit(this)'>Edit</button> <br><button onClick='onDelete(this)'>Delete</button><br><button onClick='onUnBan(this)'>UnBan</button>`;
  }
}

function onUnBan(td) {
  if (confirm('Do you want to unban the user?')) {
    selectedRow = td.parentElement.parentElement;
    var users = JSON.parse(localStorage.getItem('tourists'));
    let ind = getElIndex(selectedRow);
    users[ind].isBanned = false;
    selectedRow.cells[4].innerHTML = false;
    localStorage.setItem('tourists', JSON.stringify(users));
    selectedRow.cells[5].innerHTML = `<button onClick='onEdit(this)'>Edit</button> <br><button onClick='onDelete(this)'>Delete</button><br><button onClick='onBan(this)'>Ban</button>`;
  }
}

function onDelete(td) {
  if (confirm('Do you want to delete this record?')) {
    selectedRow = td.parentElement.parentElement;
    var users = JSON.parse(localStorage.getItem('tourists'));
    selectedRow = td.parentElement.parentElement;
    let index = getElIndex(selectedRow);
    users[index].isBanned = false;
    users.splice(index, 1);
    document.querySelector('#userList tbody').deleteRow(index);
    localStorage.setItem('tourists', JSON.stringify(users));
  }
}




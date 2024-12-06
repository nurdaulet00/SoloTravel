  // on Book
  const AllBookings = [];
  const bookings = {};
  let bookForm = document.getElementById('bookForm');
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  bookForm.addEventListener('submit', function (event) {
    bookings.userName = currentUser.name;
    bookings.userEmail = currentUser.email;
    bookings.country = document.getElementById('country').value;

    let bookdate = document.getElementById('date').value;
    if (bookdate == '') {
      alert('Please select a date.');
      return false;
    } else {
      bookings.date = bookdate;
    }

    let booktime = document.getElementById('time').value;
    if (booktime == '') {
      alert('Please select a time.');
      return false;
    } else {
      bookings.time = booktime;
    }

    bookings.adultNumber = document.getElementById('adult-number').value;
    bookings.childNumber = document.getElementById('child-number').value;
    bookings.status = "processing";
    
    
    AllBookings.push(bookings);
    try {
      if (localStorage.getItem('bookList') === null) {
        localStorage.setItem('bookList', JSON.stringify(AllBookings));
      } else {
        let storage = JSON.parse(localStorage.getItem('bookList'));
        storage.push(bookings);
        localStorage.setItem('bookList', JSON.stringify(storage));
        console.log(storage);
      }
    } catch (err) {
      console.error(err);
    }
    alert('Check your bookings!');
  });

  //   Save reviews
  document.addEventListener('DOMContentLoaded', () => {
    const allReviews = [];
    const userComment = {};
    let reviewForm = document.getElementById('reviewForm');

    reviewForm.addEventListener('submit', function (event) {
      let review = document.getElementById('review').value;
      userComment.name = currentUser.name;
      userComment.review = review;
      allReviews.push(userComment);
      try {
        if (localStorage.getItem('reviewList') === null) {
          localStorage.setItem('reviewList', JSON.stringify(allReviews));
        } else {
          let storage = JSON.parse(localStorage.getItem('reviewList'));
          storage.push(userComment);
          localStorage.setItem('reviewList', JSON.stringify(storage));
          console.log(storage);
        }
      } catch (err) {
        console.error(err);
      }
      alert('review sended!');
    });
  });

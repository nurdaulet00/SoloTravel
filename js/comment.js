var comments = [];
if (localStorage.getItem('comments')){ comments = JSON.parse(localStorage.getItem('comments'))
    let lastReviews = document.getElementById('last-reviews');
    let out="";
    comments.forEach(function(item){
         out += `<div><p class="time"><em>${currentTime(item.time)}</em></p>`;
        out += `<p class="commentName" role="alert">${item.name}</p>`;
        out+=`<p class="commentText" role="alert">${item.body}</p></div>`;
    });
    lastReviews.innerHTML = out;
}

document.getElementById('submitReview').onclick = function(){
    let userName =current.name;
    let commentText = document.getElementById('review');

    let comment = {
        name : userName,
        body : commentText.value,
        time : Math.floor(Date.now() / 1000)
    }
    userName = '';
    commentText.value = '';

    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    let lastReviews = document.getElementById('last-reviews');
    let out="";
    comments.forEach(function(item){
        out += `<div><p class="time"><em>${currentTime(item.time)}</em></p>`;
        out += `<p class="commentName" role="alert">${item.name}</p>`;
        out+=`<p class="commentText" role="alert">${item.body}</p></div>`;
    });
    lastReviews.innerHTML = out;
}


function currentTime(time){
    var a = new Date(time * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
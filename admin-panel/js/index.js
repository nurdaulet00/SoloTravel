let mapMld

function initMapMld() {
    mapMld = new google.maps.Map(document.getElementById("map-maldives"), {
        center: {
            lat: 4.1744543997880506,
            lng: 73.51005925321167
        },
        zoom: 15.5,
    });
}

let mapGrg

function initMapGrg() {
    mapGrg = new google.maps.Map(document.getElementById("map-georgia"), {
        center: {
            lat: 41.743590656587976,
            lng: 44.81066072714247
        },
        zoom: 13,
    });
}
let map;

function initMap() {
  const contentData = [];
  var infowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var marker, i;
  const iconMarker = {
    url: './images-video/iconMarker.png',
  };
  const iconNew = {
    url: './images-video/iconNew.png',
  };
  var worldOffices = [
    [
      'Maldives',
      1.924992,
      73.399658,
      iconMarker,
      'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/146502.jpg',
      './maldives.html',
    ],
    [
      'Dubai',
      25.276987,
      55.296249,
      iconMarker,
      'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-al-arab/fallback-image/burj-al-arab-dtcm-03.jpg?rev=6f23fe2f54564a72b4c860cbcbfa66b4&cx=0.5&cy=0.5&cw=397&ch=397',
      'https://about-france.com/paris.htm',
    ],
    [
      'Paris',
      48.873327,
      2.297117,
      iconMarker,
      'https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Montenegro',
      42.099998,
      19.1,
      iconMarker,
      'https://a.cdn-hotels.com/gdcs/production30/d151/91a7ccd6-7415-412a-be74-0c8e308d6606.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Antalya',
      36.884804,
      30.704044,
      iconMarker,
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/3c/antalya.jpg?w=700&h=500&s=1',
      'https://about-france.com/paris.htm',
    ],
    [
      'Istanbul',
      41.015137,
      28.97953,
      iconMarker,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXO08SUHMRJ4dlV906tDa3Ld-NubXKKgwLCkNlunciOhkvu2yoBGKbEouKKX_giVv5JUM&usqp=CAU',
      'https://about-france.com/paris.htm',
    ],
    [
      'Egypt',
      31.233334,
      30.033333,
      iconMarker,
      'https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Thailand',
      13.736717,
      100.523186,
      iconMarker,
      'https://static.euronews.com/articles/stories/06/17/69/68/1440x810_cmsv2_df1727ee-fe0e-543b-adb6-63a1585d8178-6176968.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Bali',
      -8.409518,
      115.188919,
      iconMarker,
      './images-video/bali.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Georgia',
      41.716667,
      44.783333,
      iconMarker,
      './images-video/georgia.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Hong Kong',
      22.308046,
      113.91848,
      iconMarker,
      './images-video/hongkong.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'Singapore',
      1.359167,
      103.989441,
      iconMarker,
      './images-video/sing.jpg',
      'https://about-france.com/paris.htm',
    ],
    [
      'TravelSolo',
      43.23520509420816,
      76.90975251296322,
      iconNew,
      './images-video/logo.PNG',
      'https://about-france.com/paris.htm',
    ],
  ];
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: { lat: 30, lng: 20 },
  });

  for (i = 0; i < worldOffices.length; i++) {
    marker = new google.maps.Marker({
      position: { lat: worldOffices[i][1], lng: worldOffices[i][2] },
      map: map,
      icon: worldOffices[i][3],
      title: worldOffices[i][0],
    });
    bounds.extend(marker.position);
    contentData.push(
      '<a href=' +
        worldOffices[i][5] +
        ' style="text-decoration:none">' +
        worldOffices[i][0] +
        '</a><br><br><img src="' +
        worldOffices[i][4] +
        '" height="100px", width="100px">'
    );
    google.maps.event.addListener(
      marker,
      'mouseover',
      (function (marker, i) {
        return function () {
          infowindow.setContent(contentData[i]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }

}

const progressBar = document.getElementById("progress-bar");
const section = document.querySelector("#all-content");

const animateProgressBar = () => {
    
  let scrollDistance = -section.getBoundingClientRect().top;

  let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
  let value = Math.floor(progressWidth)  

  progressBar.style.width = value + "%"

  if(value < 0){
      progressBar.style.width = '0%'
  }
};
window.addEventListener("scroll", animateProgressBar);


          const scrollElements = document.querySelectorAll(".js-animation");


var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

	throttleTimer = true;
	setTimeout(() => {
    callback();
		throttleTimer = false;
	}, time);
}

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
var timer=0;
var count=0;
var scroll = 0;

window.addEventListener("scroll", () => { 
 scroll++;
  throttle(() => {
    handleScrollAnimation();
     count++;
  }, 250);
});


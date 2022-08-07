//loader

window.addEventListener('load', function() {
  setTimeout(() => {
    document.querySelector('.loader').classList.add('remove');
    setTimeout(() => {
      document.querySelector('.loader').remove();
    }, 500);
  }, 1000);
})

var timespan = document.querySelectorAll('.time');

timespan.forEach(Element => {
  let hour = Math.floor(Math.random() * 24);
  let minute = Math.floor(Math.random() * 60);
  let second = Math.floor(Math.random() * 60);

  let countDownDate = (hour * 60 * 60 * 1000) + (minute * 60 * 1000) + (second * 1000);

  var x = setInterval(function () {

    countDownDate -= 1000;
    var distance = countDownDate;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;


    Element.innerHTML = `${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
      clearInterval(x);
      Element.innerHTML = "EXPIRED";
    }
  }, 1000);
})

var burgerbtn = document.querySelector('.burger');
var burgermenu = document.querySelector('.burgermenu');

burgerbtn.addEventListener('click', function () {
  burgermenu.classList.add('active');
})

var closebtn = document.querySelector('.closebtn');
var burgerlinks = document.querySelectorAll('.burgerlink');

closebtn.addEventListener('click', function () {
  closeburger();
})

burgerlinks.forEach(Element => {
  Element.addEventListener('click', function () {
    closeburger();
  })
})

function closeburger() {
  burgermenu.classList.remove('active');
}



const showmoreButton = document.querySelector('.showmore')
const discoveritem = document.querySelectorAll('.discoveritem')
var current = 8;

for (let i = 0; i < current; i++) {
    discoveritem[i].classList.add('show')
}

showmoreButton.onclick = () => {
    event.preventDefault()
    let item = [...document.querySelectorAll('.discoveritem')]

    try {
        for (var i = current; i < current + 4; i++) {
            item[i].classList.add('show')
        }
    } catch (error) {}

    current += 4
    console.log(current)


    if (current >= item.length) {
        showmoreButton.style.display = 'none'
    }
}
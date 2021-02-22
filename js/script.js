const hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  dhours = document.querySelector('.hours'),
  dminutes = document.querySelector('.minutes');

function clock() {

  //new Date(); берет время с компа
  //time.getSeconds() берет секунды у time
  //getMinutes() берет минуты у time
  //time.getHours() брет часы
  //они все методы

  let time = new Date(),
    second = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;


  // console.log(time.getSeconds());
  // console.log(time.getMinutes());
  // console.log(time.getHours());

  hour.style = `transform: rotate(${hours}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  sec.style = `transform:rotate(${second}deg)`;

  dhours.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  dminutes.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  // то есть если число меньше 10 тогда перед этим числом будет стоять ноль, а если больше тогда просто

  setTimeout(() => clock(), 1000);
  //положение стрелок будет обновлятся каждую секунду

}
clock();
// узнаем время
// рекурсия Реку́рсия — определение, описание, изображение какого-либо объекта или процесса внутри самого этого объекта или процесса, то есть ситуация, когда объект является частью самого себя. Термин «рекурсия» используется в различных специальных областях знаний — от лингвистики до логики, 
// но наиболее широкое применение находит в математике и информатике.


const links = document.querySelectorAll('.tabsItem'),
  tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {

  links[i].addEventListener('click', function () {

    for (let ix = 0; ix < links.length; ix++) {
      links[ix].classList.remove('active');
      tabs[ix].classList.remove('active');
    }
    console.log(this);
    tab(this, tabs[i])
  })
}

function tab(el, arr) {
  el.classList.add('active');
  arr.classList.add('active');
}

var btnStopwatch = document.querySelector('.stopwatch__btn'),
  hoursStopwatch = document.querySelector('.stopwatch__hours'),
  minutesStopwatch = document.querySelector('.stopwatch__minutes'),
  secondsStopwatch = document.querySelector('.stopwatch__seconds');



btnStopwatch.addEventListener('click', function () {

  if (btnStopwatch.innerHTML == 'start') {
    btnStopwatch.innerHTML = 'stop';
    var s = 0,
        m = 0,
        h = 0;

      function timer(){
      s = +s +1;
      s = s < 10 ? s = '0' + s : s;
      if( s == 60 ) {
        s = '00';
        m = +m + 1;
        m = m < 10 ? m = '0' + m : m;
        if( m == 60 ) {
          m = '00';
          m = +h + 1;
          h = h < 10 ? h = '0' + h : h;
        }
      }
      secondsStopwatch.innerHTML = s;
      minutesStopwatch.innerHTML = m;
      hoursStopwatch.innerHTML = h;
    };

    var intervalID = setInterval(timer, 1000);

  } else {
    btnStopwatch.innerHTML = 'start';
    clearInterval(intervalID);
    secondsStopwatch.innerHTML = 0;
    minutesStopwatch.innerHTML = 0;
    hoursStopwatch.innerHTML = 0;
  }
});
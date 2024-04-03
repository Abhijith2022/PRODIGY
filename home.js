

//   

// Get the element to animate
const element = document.querySelector('.commonStylesforthesection2');

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      element.classList.add('show');
      console.log("AAAAAAAA")
    }
    else {
      element.classList.remove('show');
      console.log("AA22222A")

    }
  });
}, options);

$(document).ready(function(){

    $(window).scroll(function() {
        $('#commonStylesforthesection2').each(function(){
           var $elementPos = $(this).offset().top;
           var $scrollPos = $(window).scrollTop();
           var $sectionH = $(this).height();
           var $h = $(window).height();
           var $sectionVert = (($h/2)-($sectionH/4));
    
           if (($elementPos - $sectionVert) <= $scrollPos) {
              $("#commonStylesforthesection2").addClass('animation');
              console.log(1)
           } 
        else {
              $("#commonStylesforthesection2").removeClass('animation');
              console.log(2)

           }
        });
     });




// const the_animation = document.querySelectorAll('.commonStylesforthesection2')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-animation')
         
//         }
//             else {
//                 entry.target.classList.remove('scroll-animation')
//             }
        
//     })
// },
//    { threshold: 0.5
//    });
// //
//   for (let i = 0; i < the_animation.length; i++) {
//    const elements = the_animation[i];

//     observer.observe(elements);
//   } 















// ////////////////////////////




// stopwatch div
var time_ele = document.getElementsByClassName("time")[0];
var start_btn = document.getElementById("start");
var lap_btn = document.getElementById("lap");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");
var l1 = document.getElementById("lap1");
var l2 = document.getElementById("lap2");
var l3 = document.getElementById("lap3");
var l4 = document.getElementById("lap4");
var l5 = document.getElementById("lap5");

let seconds = 0;
let interval = null;
let ctr=0;

start_btn.addEventListener("click", start);
lap_btn.addEventListener("click", lap);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


function timer() {
    seconds++;


    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10)
        sec = '0' + sec;

    if(mins < 10)
        mins = '0' + mins;

    if(hrs < 10)
        hrs = '0' + hrs;

    time_ele.innerHTML = `${hrs}:${mins}:${sec}`;
}

function start() {
    if(interval)
    {
        return;
    }

    interval = setInterval(timer, 1000);
}

function lap() {
    ctr++;
    if(ctr%5==1)
        l1.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==2)
        l2.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==3)
        l3.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==4)
        l4.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    if (ctr%5==0)
        l5.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;

}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    ctr=0;
    time_ele.innerHTML = "00:00:00";
}


// sp end




})


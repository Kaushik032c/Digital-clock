// display date and time 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let date = time.toLocaleDateString(undefined, options);
let t = document.getElementById('time');
let d = document.getElementById('date');

t.innerHTML = h + ' : ' + m +" : "+ s;
d.innerHTML = date;
}, 1000);

// display warning 
let under_alert = document.getElementById('under_alert');
function getWeather(){
    if(under_alert.style.display === "none"){
        under_alert.style.display = "block"
    }
    else{
        under_alert.style.display = "none"
    }
}

// Dyanminc Year Update 

document.addEventListener("DOMContentLoaded", function(){
    const yeDom = document.getElementById('yeDom');
    const year = new Date().getFullYear();
    yeDom.innerHTML = year;
});
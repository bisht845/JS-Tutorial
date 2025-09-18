const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
// document.querySelector('#clock') We can use both



setInterval(function(){
let date = new Date() 
// console.log(date.toLocaleTimeString());
timeEl.innerHTML = date.toLocaleTimeString();

dateEl.innerHTML = date.toLocaleDateString();
}, 1000)
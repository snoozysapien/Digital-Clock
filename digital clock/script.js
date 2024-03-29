const clock = document.getElementById('clock')
//or
//const clock = document.querySelector('clock')

let date = new Date();
console.log(date.toLocaleDateString()); 
//it print the time when the page refresh


setInterval(function(){
    let date = new Date();
    console.log(date.toLocaleDateString()); 
    //it print the time when the page refresh
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
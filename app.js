let targetDate = new Date();
targetDate.setDate(targetDate.getDate()+30);
let day = document.querySelectorAll('#day');
let month = document.querySelectorAll('#month');
let year = document.querySelectorAll('#year');


document.addEventListener('load', newDate());


function newDate(){
    for(let i= 0; i < day.length; i++){
    day[i].innerHTML = targetDate.getDate();
    month[i].innerHTML = targetDate.toLocaleString('default', {month: 'short'});
    year[i].innerHTML = targetDate.getFullYear();
    }
}




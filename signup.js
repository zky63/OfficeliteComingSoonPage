let targetDate = new Date();
targetDate.setDate(targetDate.getDate()+30);
targetDate.setHours(0);
targetDate.setMinutes(0);
targetDate.setSeconds(0);
let day = document.querySelectorAll('#day');
let month = document.querySelectorAll('#month');
let year = document.querySelectorAll('#year');
let days = document.querySelectorAll('#days');
let hours = document.querySelectorAll('#hours');
let minutes = document.querySelectorAll('#minutes');
let seconds = document.querySelectorAll('#seconds');
const button = document.querySelector('#button')
const userName = document.getElementById('name');
const email = document.getElementById('emailAddress');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError')
const emailBorder = document.getElementById('emailBorder')


button.addEventListener('click', nameValidation);
button.addEventListener('click', emailValidation);
document.addEventListener('load', newDateJS());
document.addEventListener('load', countDown());



function newDateJS(){
    for(let i= 0; i < day.length; i++){
    day[i].innerHTML = targetDate.getDate();
    month[i].innerHTML = targetDate.toLocaleString('default', {month: 'short'});
    year[i].innerHTML = targetDate.getFullYear();
    }
    
}

function countDown (){
    const total = Date.parse(targetDate) - Date.parse(new Date());
    for(let i= 0; i < day.length; i++){
        seconds[i].innerHTML = Math.floor( (total/1000) % 60 );
        minutes[i].innerHTML = Math.floor( (total/1000/60) % 60 );
        hours[i].innerHTML = Math.floor( (total/(1000*60*60)) % 24 );
        days[i].innerHTML = Math.floor( total/(1000*60*60*24) );
    }
}

setInterval(countDown, 1000);

function nameValidation(){
   if(!(userName.value)){
    nameError.style.display = 'inline';
    userName.style.color = 'red';
   }
   else{
    nameError.style.display = 'none';
    userName.style.color = 'black';
   }
   console.log(userName.value);
 }

 function emailValidation(){
     if(!(email.value) || !(email.value.includes('@'))){
        emailError.style.display = 'inline';
        email.style.color = 'red';
        emailBorder.style.borderBottomColor = 'red';
     }
     else{
        emailError.style.display = 'none';
        email.style.color = 'black';
        emailBorder.style.borderBottomColor = 'gray';
     }
 }


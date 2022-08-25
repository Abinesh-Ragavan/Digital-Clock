const hourEl =document.getElementById("hour");
const minEL =document.getElementById("minutes");
const  secondEl =document.getElementById("seconds");
const ampmEl =document.getElementById("ampm");

function updateclock(){

    let  h =new Date().getHours();
    let m = new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm = "AM"

  if(h>12){     
    h = h -12;
    ampm ="PM"



  }

  h= h>=10 ? h: "0"+h;
  m=m>=10 ? m:"0"+m;
  s =s>=10 ? s:"0"+s;

  hourEl.innerText =h;
  minEL.innerText =m;
  secondEl.innerText =s;
  ampmEl.innerText =ampm;

  setTimeout(() =>{
    updateclock();

  },1000)
  
 


}

updateclock();

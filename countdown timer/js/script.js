const Days=document.querySelector("#Days");
const Hours=document.querySelector("#Hours");
const Minutes=document.querySelector("#Minutes");
const Seconds=document.querySelector("#Seconds");
function updatetime(){
const currentyear= new Date().getFullYear();
const newyear= new Date(`January 1 ${currentyear+1} 00:00:00`);
const currentDate=new Date();
const diff=newyear-currentDate;
const  d=Math.floor(diff/1000/60/60/24);
const  h=Math.floor((diff/1000/60/60)%24);
const  m=Math.floor((diff/1000/60)%60);
const  s=Math.floor((diff/1000%60));
console.log(d+" "+h+" "+m+" "+s);
Days.innerHTML=d<10?"0"+d:d;
Hours.innerHTML=h<10?"0"+h:h;
Minutes.innerHTML=m<10?"0"+m:m;
Seconds.innerHTML=s<10?"0"+s:s;

}
updatetime();
setInterval(updatetime,1000);
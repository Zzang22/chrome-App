const toogle = document.querySelector(".navbar__toogleBtn"),
  navbar_menu = document.querySelector(".navbar__menu"),
  navbar_icon = document.querySelector(".navbar__icon");
const weather_container = document.querySelector(".container");
 
let cnt = 2;  


function handleToogle(){

 
  cnt++;
  if(cnt % 2 !== 0){
    navbar_menu.style.display = 'flex';
    navbar_icon.style.display = 'flex';

  }else{
    navbar_menu.style.display = 'none';
    navbar_icon.style.display = 'none';
  }
  
}

toogle.addEventListener("click", handleToogle);
//weather.addEventListener("click", handleWeather);
/* 엘리쌤 풀이, 근데 이게 더 낫다
    toogle.addEventListener("click", ()=>(){
    navbar_menu.classList.toggle('active');
    navbar_icon.classList.toggle('active');
});
*/
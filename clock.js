const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

// 현재 시간을 구하는 함수
function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours <10? `0${hours}`: hours } : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;

}
/**우리는 계속 새로운 값이 업데이트 되길 원한다.
 * 그러기 위해서 setInterval 
 * setInterval(실행할 함수(fn), 실행하고 싶은 시간)
 
 */


 function init(){
  getTime();
  setInterval(getTime, 1000);
}
init();
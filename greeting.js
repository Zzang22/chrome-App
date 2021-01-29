const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

  // 클래스 추가 
const USER_LS = "currentUser",
  SHOWING_CN = "showing";  

  // 받아온 value 저장하는 function
  function saveName(text){
    localStorage.setItem(USER_LS, text);
  }

function handleSubmit(event){
  // root에서 일어나고 form에서 일어나 다른 모든 것에 event가 일어난다. document까지 
  // 기본 동작을 막고 싶다. event 금지 
  event.preventDefault();
  const currentValue = input.value;
  painGreeting(currentValue); // 아직 저장한거는 아님! 글씨 나타냄
  saveName(currentValue); //받아온 value 저장

}  


function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function painGreeting(text){
  // css는 케스케이드 방식이라 hidden으로 설정되어 있어도 뒤에 block속성이 오면 
  // block으로 설정된다. 그래서 text인자는 local에서 받아와 html에 문구 띄어주기 
  // 위해 remove해준다
  form.classList.remove(SHOWING_CN); //텍스트를 칠하려면 form을 숨겨야 한다. 
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`
}

function loadName(){
  // 로컬 스토리지에서 값을 가져온다
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    // she is not
    askForName();
  }else{
   // she is
    painGreeting(currentUser);
  }
}


function init(){
  loadName();
}
init();
// 개발자 도구에서 Application에 들어가면 저장되어져 있는걸 볼 수 있다. 
const weather = document.querySelector(".js-weather");

const API_KEY = '9bfe3fbfac837fd2630d7141d0feed72';
const COORDS = 'coords';

// 새로고침 없이 메일이 오는 이유 
// JavaScript는 웹사이트로 request를 보내고 응답을 받는다. 
// 가져온 데이터를 refresh없이 웹사이트에 적용시킬 수 있다. 
// 보이지 않는 곳에서 JavaScript가 계속 데이터를 가져오고 있다. 

function getWeather(lat, lng){
  // fetch: 데이터를 얻는 방법
  // fetch(https://url) 따옴표가 아닌 backtick(`)을 사용할 것 
  console.log(API_KEY);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json(); // response에 body 안에 있는 json정보를 가져오고 싶다. 콘솔에 찍어보면 가져오는 데이터를 처리중이다. 끝나길 기다리는 방법은 then을 다시 쓰는 것 
  }).then(function(json){ // json 데이터가 준비되면 object를 가져온다. 
    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}℃ in ${place}`;
  });
  //data가 완전히 들어온다음 함수 호출
}
// https://api.openweathermap.org/data/2.5/weather?lat=37.463229999999996&lon=127.0078127&appid=9bfe3fbfac837fd2630d7141d0feed72
function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude,
    longitude = position.coords.longitude,
    coordsObj = {
      latitude,
      longitude
    };
    // 객체의 변수이름과 객체의 key를 같은 이름이면 위에 코드같이 생략해도 된다. 

    // 좌표 저장
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoErro(){
  console.log('Can\'t access geo location');
}

//좌표 
function askForCoords(){
  // 웹사이트가 사용자의 위치정보를 읽는 방식이다. 
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro)  // geolocation은 object이다. 메소드를 가지고 있다
}


function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    // 좌표
    askForCoords();
  }else{
    // getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    // localStorage에 아무것도 없다면 askForCoords가 실행되고 handleGeoSucces를 통해 
    // 지역을 가져와 getWeather가 결국 실행된다. 
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){ 
  loadCoords();

}

init();
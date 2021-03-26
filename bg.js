const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const IMG_NUMBER = 9;

let prevScroll = window.pageYOffset;
window.onscroll = handleScroll;
function handleScroll(e){
  let currScroll = window.pageYOffset;
  if(prevScroll < currScroll){
    navBar.classList.add('opa');
  }else{
    navBar.classList.remove('opa');
  }
}

function handleImgLoad(){

}

function paintImage(imgNumber){

  const image = new Image();
  image.src = `images/white${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
  const number =  Math.floor(Math.random() * IMG_NUMBER);
  return number;
  /**
   * 만약 1~5 사이의 수 중에 랜덤한 수를 뽑으려면
   * Math.random() * 5
   * Math.ceil(올림), Math.floor(내림)
   */
}

function init(){
  // 숫자 생성
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
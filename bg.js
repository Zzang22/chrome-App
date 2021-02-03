const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad(){

}

function paintImage(imgNumber){

  const image = new Image();
  image.src = `images/warm${imgNumber + 1}.jpg`;
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
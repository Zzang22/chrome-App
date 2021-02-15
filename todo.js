const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
//해야할 일이 생길때 마다 toDos 배열에 넣기. 그러기 위해서 toDoObj가 필요<!DOCTYPE html>


// filter는 array의 모든 아이템을 통해 함수를 실행하고, true인 아이템들만 가지고 새로운 배열을 만든다.



function deleteToDo(event){  //event.target은 버튼이 계속 뜨게 하는
// 버튼의 부모를 찾아야 한다. 
const btn = event.target;
const li = btn.parentNode;
toDoList.removeChild(li);
const cleanToDos = toDos.filter(function(toDo){
  return toDo.id !== parseInt(li.id);
});
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // key, value 이고, 
  //value는 object -> json string으로 변환해줘야 한다. 그래야 저장
}

  function paintToDo(text){
      // 글씨 써주고 안에 innerText 
      // li와 x 버튼을 여기서 만든다. createElement
      const li = document.createElement("li");
      const delBtn = document.createElement("button");
      const span = document.createElement("span");
      const newId = toDos.length + 1;
      delBtn.innerText = "❌";
      delBtn.addEventListener("click", deleteToDo);
      span.innerHTML = text;
      // 부모 element 안에 뭔가를 넣는다 .appendChild
      li.appendChild(span);
      li.appendChild(delBtn);
      
      li.id = newId;
      //비어있는 li를 만들었고, 그 안에 버튼, span만들고 나서 
      toDoList.appendChild(li);
      const toDoObj = {
        text: text,
        id: newId
      };
      toDos.push(toDoObj);
      // toDos.push 한다음에 저장해줘야 한다. toDos는 비어있으니까, 저장할게 없다. 
      // localStorage에는 자바스크립트의data를 저장할 수 없다. string만 저장 가능 
      saveToDos(); 
    }    

  function handleSubmit(event){
    event.preventDefault(); // 이벤트 전파 방지
      const currentValue = toDoInput.value;
      paintToDo(currentValue);
      toDoInput.value = "";   // submit과 같다 . input의 text를 지워준다. 
  }

  function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
      // toDos가 null이면 아무것도 안한다. form은 항상 showing 이기 때문에 할게 없다. 
      // string을 object로 변환
      const parsedToDos = JSON.parse(loadedToDos);
      // forEach는 기본적으로 함수 실행. 배열에 담겨있는 것들 각각에 한번씩 함수를  실행 
      parsedToDos.forEach(function(toDo){
      //  console.log(toDo.text); parsedToDos에 있는 할일들을 보여준다
        paintToDo(toDo.text);
      });
    }
  }
  
  function init(){
    // loadToDo
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
  }
  init();
  // localstroage에서 지우고, 저장해야되고, html에서도 지워야 한다.(li)
  // filter, forEach는 list에 있는 모든 item을 위한 함수를 실행시킨다. 
import {createStore} from "redux"

const add = document.getElementById("add");
const minus = document.getElementById("minus"); 
const number = document.querySelector("span");


const reducer = () => {}
const stroe = createStore(reducer)

let count = 0;

// span 초기값 설정
number.innerText = count;

const undateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  undateText();
} 

const handleMinus = () => {
  count = count - 1;
  undateText();
}


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
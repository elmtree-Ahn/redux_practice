import {createStore} from "redux"

// TodoList 예제
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = todo => {
  const li = document.createElement("li");
  li.innerText = todo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  createToDo(todo)
};

form.addEventListener("submit", onSubmit);

// 카운터 리듀서 예제
// const add = document.getElementById("add");
// const minus = document.getElementById("minus"); 
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS ="MINUST"

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//       case ADD:
//         return count + 1;
//       case MINUS:
//         return count - 1;
//       default:
//         return count;

//   }

// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
// };

// countStore.subscribe(onChange);

// const handelAdd = () => {
//   countStore.dispatch({type: ADD});
// }

// const handelMinus = () => {
//   countStore.dispatch({type: MINUS});
// }


// add.addEventListener("click", handelAdd);
// minus.addEventListener("click", handelMinus); 